"use client";

import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const UserButton = () => {
  const { signOut } = useAuthActions();
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader className="size-4 animate-spin text-muted-foreground" />;
  }

  if (!data) {
    return null;
  }

  const { image, name } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="rounded-md size-10 hover:opacity-75 transition">
          <div className="absolute inset-0 overflow-hidden rounded-md">
            <div className="grayscale-[15%] opacity-90 hover:grayscale-0 transition-all duration-200 w-full h-full">
              <AvatarImage
                className="rounded-md object-cover w-full h-full"
                alt={name}
                src={image}
              />
              <AvatarFallback className="rounded-md !text-[#F5F5F5] bg-[#5C3B58] w-full h-full flex items-center justify-center">
                {avatarFallback}
              </AvatarFallback>
            </div>
          </div>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right" className="w-60">
        <DropdownMenuItem
          onClick={() => signOut()}
          className="h-10 cursor-pointer"
        >
          <LogOut className="size-4 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
