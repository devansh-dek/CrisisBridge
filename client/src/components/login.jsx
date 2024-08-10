"use client";
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
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
import logo from "../assets/disaster-management.png";
import userState from '../recoil/atoms/userState';

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string(),
});

function Login() {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate(); // Move this here

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values) {
    console.log(JSON.stringify(values))
    try {
      const response = await axios.post('http://localhost:3000/api/v1/login', values, { withCredentials: true });
      if (response.data.exist === false) {
        console.log("User doesn't exist");
        return;
      }
      if (response.data.success === true) {
        console.log("Came HERE");
        const userLogged = {
          userId: response.data.response.id,
          username: response.data.response.username,
          email: response.data.response.email,
          role: response.data.response.role,
          isAuthenticated: true
        }
        console.log("User logged are ", userLogged);
        setUser(userLogged);
        navigate('/');

        // Handle redirection or other actions on successful login
      }

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="h-full mt-40 flex gap-40 justify-center items-center">
      <img className="w-[20rem]" src={logo} alt="Disaster Management Logo" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-[25rem] h-fit"
        >
          <div className="text-lg font-semibold">Login</div>
          <div className="mb-5">Sign in to your account</div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
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
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mr-5">Login</Button>
          <Link to='/signup'><Button variant='ghost' className="cursor-pointer hover:underline transition">Don't have an account? Signup</Button></Link>
        </form>
      </Form>
    </div>
  );
}

export default Login;
