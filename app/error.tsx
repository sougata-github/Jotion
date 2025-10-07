"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/assets/error.png"
        height={300}
        width={300}
        alt="error"
        className="dark:hidden"
      />
      <Image
        src="/assets/error-dark.png"
        height={300}
        width={300}
        alt="error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
