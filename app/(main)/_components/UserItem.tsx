"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight } from "lucide-react";

const UserItem = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm px-3 py-6  w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-6 w-6">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.firstName}&apos;s Jotion
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 h-4 w-4 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit p-2"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex  space-x-2 p-2">
          <div className="p-1">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
          </div>
          <div className="flex items-start justify-center text-start flex-col space-y-2">
            <p className="text-sm line-clamp-1">{user?.fullName}</p>
            <p className="text-xs font-medium leading-none text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground"
        >
          <SignOutButton>Log Out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserItem;
