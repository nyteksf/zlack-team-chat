import { useToggle } from "react-use";
import { PlusIcon } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

interface WorkspaceSectionprops {
  children: React.ReactNode;
  label: string;
  hint: string;
  onNew?: () => void;
}

export const WorkspaceSection = ({
  children,
  label,
  hint,
  onNew,
}: WorkspaceSectionprops) => {
  const [on, toggle] = useToggle(true);

  return (
    <div className="flex flex-col mt-3 px-2">
      <div className="flex items-center px-3.5 group">
        <Button
          variant="transparent"
          className="p-0.5 text-sm text-[#F9EDFFCC] shrink-0 size-6"
          onClick={toggle}
        >
          {" "}
          <FaCaretDown
            className={cn("size-4 transition-transform", !on && "-rotate-90")}
          />
        </Button>
        <Button
          variant="transparent"
          size="sm"
          className="group px-1.5 text-sm text-[#F9EDFFCC] h-[28px] justify-start overflow-hidden items-center mr-auto"
        >
          <span className="truncate">{label}</span>
        </Button>
        {onNew && (
          <Hint label={hint} side="top" align="center">
            <Button
              variant="transparent"
              className={cn(
                "opacity-0 group-hover:opacity-100 transition-opacity justify-center p-0.5 text-sm text-[#F9EDFFCC] size-6 shrink-0",
                label === "Direct Messages" && "cursor-not-allowed"
              )}
              onClick={onNew}
            >
              <PlusIcon className="size-5" />
            </Button>
          </Hint>
        )}
      </div>
      {on && children}
    </div>
  );
};
