"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Loader from "@/components/Loader";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "The password must be at least 8 characters long")
    .max(32, "The password must be a maximun 32 characters"),
});

const SignInCard = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay for content loading (you can remove this if using real data fetching logic)
  setTimeout(() => {
    setIsLoading(false);
  }, 1000); // 3 seconds loader delay (this can be replaced with real data fetching logic)

  return (
    <>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <Card className="w-full h-full md:w-[487px] border-none shadow-lg">
            <CardHeader className="flex items-center justify-center text-center p-7">
              <CardTitle className="text-2xl">Welcome back!</CardTitle>
            </CardHeader>
            <div className="px-7 mb-2">
              <Separator />
            </div>
            <CardContent className="p-7">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submit)}
                  className="space-y-4"
                >
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
            <div className="px-7">
              <Separator />
            </div>
            <CardContent className="p-7 flex items-center justify-center">
              <p>
                Don't have an account?
                <Link href="/sign-up" className="text-blue-500 hover:underline">
                  {""} Sign Up
                </Link>
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default SignInCard;
