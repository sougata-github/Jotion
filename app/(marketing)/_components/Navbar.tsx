"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <div className="z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1F1F1F] border-b">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 ">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
