"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 p-2">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans unified. Welcome <br />
        to Jotion.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where
        <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">Enter Jotion</Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Jotion Free <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
