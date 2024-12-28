import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Id } from "../../../../../convex/_generated/dataModel";

const userItemVariants = cva(
  "flex items-center gap-1.5 justify-start font-normal h-7 px-4 text-sm overflow-hidden",
  {
    variants: {
      variant: {
        default: "text-[#F9EDFFCC]",
        active: "text-[#481349] bg-white/90 hover:bg-white/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface UserItemProps extends VariantProps<typeof userItemVariants> {
  id: Id<"members">;
  label?: string;
  image?: string;
}

export const UserItem = ({
  id,
  label = "Member",
  image,
  variant = "default",
}: UserItemProps) => {
  const workspaceId = useWorkspaceId();
  const avatarFallback = label.charAt(0).toUpperCase();

  return (
    <Button
      variant="transparent"
      className={cn(userItemVariants({ variant: variant }))}
      size="sm"
      asChild
    >
      <Link href={`/workspace/${workspaceId}/member/${id}`}>
        <Avatar className="size-5 rounded-md mr-1">
          <div className="absolute inset-0 overflow-hidden rounded-md">
            <div className="grayscale-[15%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-200 w-full h-full">
              <AvatarImage
                className="rounded-md object-cover w-full h-full"
                src={image}
              />
              <AvatarFallback className="rounded-md !text-[#FFFFFF]/95 bg-[#E96A68]/90 text-xs w-full h-full flex items-center justify-center">
                {avatarFallback}
              </AvatarFallback>
            </div>
          </div>
        </Avatar>
        <span className="text-sm truncate">{label}</span>
      </Link>
    </Button>
  );
};
