"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

export const Hint = ({ label, children, side, align }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          <div>{children}</div>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className="bg-[#242424] text-[#F5F5F5] border border-[#F5F5F5]/5 animate-in fade-in-0 backdrop-blur-sm shadow-lg zoom-in-95"
        >
          <p className="font-medium text-xs">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
