"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import logo from "../assets/disaster-management.png"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string(),
  email : z.string().email(),
  mobile: z.string().regex(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
  orgname : z.string().optional(),
  password: z.string(),
});

function Signup() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    try {
      if (values.orgname) {
        values = { ...values, role: 'org'};
      }
      else {
        values = { ...values, role: 'user'};
      }
      const response = await axios.post('https://codefuryhackathonproject.onrender.com/api/v1/signup', values, { withCredentials: true });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  return (
    <div className="h-full my-20 flex gap-40 justify-center items-center">
      <img className="w-[20rem]" src={logo}></img>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-[25rem] h-fit"
        >
          <div className="text-lg font-semibold mb-5">Sign up as a volunteer</div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Aditya" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@org.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orgname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organisation Name (if you are part of an org)</FormLabel>
                <FormControl>
                  <Input placeholder="Orgnisation name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password"  type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-5 items-center">
            <Button type="submit">Sign Up</Button>
            <Link to='/login'><Button variant='ghost' className="cursor-pointer hover:underline transition">Already have an account? Login</Button></Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Signup;
