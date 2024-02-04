"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { ImageIcon, X } from "lucide-react";

import { useCoverImage } from "@/hooks/useCoverImage";
import { useParams } from "next/navigation";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";

interface CoverProps {
  url?: string;
  preview?: boolean;
}

const Cover = ({ url, preview }: CoverProps) => {
  const params = useParams();

  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    //removes the file from the edge store bucket as well.
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }

    const promise = removeCoverImage({
      id: params.documentId as Id<"documents">,
    });

    toast.promise(promise, {
      loading: "Removing cover image",
      success: "Cover image removed.",
      error: "Failed to remove cover image!",
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group bg-muted",
        window.location.toString().includes("preview") ? "dark:bg-black" : ""
      )}
    >
      {!!url && <Image src={url} fill alt="cover" className="object-cover" />}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            className="text-muted-foreground"
            onClick={() => coverImage.onReplace(url)}
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            className="text-muted-foreground"
            onClick={onRemove}
            variant="outline"
            size="sm"
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full h-[35vh]" />;
};

export default Cover;
