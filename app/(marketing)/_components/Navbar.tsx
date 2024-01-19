"use client";

import { useConvexAuth } from "convex/react";
import Logo from "./Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1F1F1F] border-b">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 ">
        {isLoading && <Spinner />}

        {!isAuthenticated && !isLoading && (
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm" className="border-[0.5px]">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm" className="border-[0.5px] sm:block hidden">
                Get Jotion Free
              </Button>
            </SignInButton>
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <div className="flex gap-4">
            <UserButton afterSignOutUrl="/" />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden sm:flex sm:items-center"
            >
              <Link href="/documents">Enter Jotion</Link>
            </Button>
          </div>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
