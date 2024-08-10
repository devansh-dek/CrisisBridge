import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";  
import { useRecoilValue } from "recoil";
import userState from "@/recoil/atoms/userState";
import { useToast } from "./ui/use-toast";
import axios from "axios";
 
const formSchema = z.object({
    orgname: z.string(),
    orgdesc: z.string().max(180),
    name: z.string(),
    phone: z.string().regex(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
    email: z.string().email(),
    orgtype: z.enum(['Property_Cleanup', 'Property_Rebuilding', 'Volunteers', 'Survivor_Services', 'Medical_Services'])
});

function Register(){
    const user = useRecoilValue(userState);
    const { toast } = useToast();

    const form = useForm({
        resolver: zodResolver(formSchema)
    });

    async function onSubmit(values) {
        if (user.userId == 0) {
            toast({
                'title': 'Please first login as an individual to register orgs'
            });
            return;
        }
        try {
            const res = await axios.post('http://localhost:3000/api/v1/organization', values);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className=" my-10 flex justify-center">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[50rem] h-fit">
                <div className="flex flex-col gap-2">
                    <div className="text-lg font-semibold">Organization Info</div>
                    <div className="mb-5">Please use your local team name. E.g. "American Red Cross, TX Chapter" NOT "American Red Cross."</div>
                    <div className="mb-5">Do not fill if you are a volunteer.</div>
                    <FormField
                    control={form.control}
                    name="orgname"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="Organization Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="orgdesc"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="Organization Description (Max 180 characters)" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-lg font-semibold mb-5">Primary Contact</div>
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex justify-between">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} className="w-[24rem]" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Phone No." {...field} className="w-[24rem]" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-lg font-semibold">What Roles does Your Organization Fill?</div>
                    <div className="mb-5">Indicate activities your organization does for survivors, the community, or other organizations after disasters (not just for your own members).</div>
                    <FormField
                    control={form.control}
                    name="orgtype"
                    render={({ field }) => (
                        <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role for your organization" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Property_Cleanup">Property_Cleanup</SelectItem>
                                <SelectItem value="Property_Rebuilding">Property_Rebuilding</SelectItem>
                                <SelectItem value="Volunteers">Volunteers</SelectItem>
                                <SelectItem value="Survivor_Services">Survivor_Services</SelectItem>
                                <SelectItem value="Medical_Services">Medical_Services</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
            </Form>
        </div>
      )
}

export default Register;