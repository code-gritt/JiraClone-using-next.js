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

const SignUpCard = () => {
  return (
    <>
      <Card className="w-full h-full md:w-[487px] border-none shadow-lg">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription className="max-w-[400px] mx-auto">
            By signing up you agree to our{" "}
            <span className="text-blue-500">Terms of Service and {""}</span>
            and
            <span className="text-blue-500">{""} Privacy Policy</span>.
          </CardDescription>
        </CardHeader>
        <div className="px-7 mb-2">
          <Separator />
        </div>
        <CardContent className="p-7">
          <form className="space-y-4">
            <Input
              className=""
              required
              type="text"
              placeholder="Enter your Name"
              value={""}
              onChange={() => {}}
              disabled={false}
            />
            <Input
              className=""
              required
              type="email"
              placeholder="Enter your Email"
              value={""}
              onChange={() => {}}
              disabled={false}
            />
            <Input
              className=""
              required
              type="password"
              placeholder="Enter Password"
              value={""}
              onChange={() => {}}
              disabled={false}
              min={8}
              max={256}
            />
            <Button className="w-full" disabled={false} size="lg">
              Login
            </Button>
          </form>
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
