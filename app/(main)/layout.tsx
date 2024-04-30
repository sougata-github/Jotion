"use client";

import { useConvexAuth } from "convex/react";

import { redirect } from "next/navigation";

import Spinner from "@/components/Spinner";
import Navigation from "./_components/Navigation";
import SearchCommand from "@/components/SearchCommand";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  //every route inside main is now protected
  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto custom-scrollbar">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
