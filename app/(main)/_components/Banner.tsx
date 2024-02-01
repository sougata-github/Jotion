"use client";

import ConfirmModal from "@/components/modals/ConfirmModal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

interface BannerProps {
  documentId: Id<"documents">;
}

const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting Note...",
      success: "Note deleted.",
      error: "Failed to remove Note!",
    });

    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring Note...",
      success: "Note Restored.",
      error: "Failed to restore Note!",
    });
  };

  return (
    <div className="w-full bg-transparent text-center text-sm px-2 py-4 flex items-center justify-start text-muted-foreground">
      <p>&#9432; This page is in trash.</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="ghost"
        className="text-muted-foreground p-1 px-2 h-auto font-normal"
      >
        Restore Page
      </Button>
      <span className="hidden md:block">|</span>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="ghost"
          className="text-muted-foreground p-1 px-2 h-auto font-normal"
        >
          Delete Forever
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default Banner;
