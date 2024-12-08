"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen ">
      <div className="mx-auto max-w-screen-xl p-4">
        <nav className="flex justify-between items-center lg:sticky top-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo/jiralogo.png" alt="Logo" width={50} height={50} />
            <h2 className="text-2xl font-bold">Project Jira</h2>
          </div>
          <Link href="/sign-up">
            {" "}
            <Button asChild variant="secondary">
              <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                {isSignIn ? "Sign Up" : "Sign In"}
              </Link>
            </Button>
          </Link>
        </nav>
        <div className="flex flex-col pt-4 md:pt-14 justify-center items-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
