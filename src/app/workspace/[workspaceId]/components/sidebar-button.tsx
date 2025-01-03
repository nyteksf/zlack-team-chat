import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarButtonProps {
  icon: LucideIcon | IconType;
  label: string;
  isActive?: boolean;
  callback?: () => void;
}

export const SidebarButton = ({
  icon: Icon,
  label,
  isActive,
  callback,
}: SidebarButtonProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group",
        label !== "Home" && "cursor-not-allowed"
      )}
    >
      <Button
        variant="transparent"
        className={cn(
          "size-9 p-2 group-hover:bg-accent/20",
          isActive && "bg-accent/20",
          label !== "Home" && "cursor-not-allowed"
        )}
        onClick={label === "Home" ? callback : undefined}
      >
        <Icon className="size-5 text-[#F5F5F5] group-hover:scale-110 transition-all" />
      </Button>
      <span className="text-[11px] text-[#F5F5F5] group-hover:text-accent">
        {label}
      </span>
    </div>
  );
};
