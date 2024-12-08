"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces."),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "The password must be at least 8 characters long")
    .max(32, "The password must be a maximun 32 characters"),
});

const SignUpCard = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };
  return (
    <>
      <Card className="w-full h-full md:w-[487px] border-none shadow-lg">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription className="max-w-[400px] mx-auto">
            By signing up you agree to our{" "}
            <span className="text-blue-500">Terms of Service {""}</span>
            and
            <span className="text-blue-500">{""} Privacy Policy</span>.
          </CardDescription>
        </CardHeader>
        <div className="px-7 mb-2">
          <Separator />
        </div>
        <CardContent className="p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your Name"
                        type="text"
                        {...field}
                      />
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
                    <FormControl>
                      <Input
                        placeholder="Enter your Email"
                        type="email"
                        {...field}
                      />
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
                    <FormControl>
                      <Input
                        placeholder="Enter Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" disabled={false} size="lg">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>

        <div className="px-7">
          <Separator />
        </div>
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button
            className="w-full"
            disabled={false}
            size="lg"
            variant="secondary"
          >
            <FcGoogle className="mr-2 size-5" />
            Login with Google
          </Button>
          <Button
            className="w-full"
            disabled={false}
            size="lg"
            variant="secondary"
          >
            <FaGithub className="mr-2 size-5" />
            Login with Github
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
export default SignUpCard;
