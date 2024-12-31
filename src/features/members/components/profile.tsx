import { AlertTriangle, Loader, XIcon } from "lucide-react";

import { UseGetMember } from "@/features/members/api/use-get-member";

import { Button } from "@/components/ui/button";

import { Id } from "../../../../convex/_generated/dataModel";

interface ProfileProps {
    memberId: Id<"members">;
    onClose: () => void;
}

export const Profile = ({
    memberId,
    onClose
}: ProfileProps) => {
    const { data: member, isLoading: isLoadingMember } = UseGetMember({ id: memberId });

    if (isLoadingMember || status === "LoadingFirstPage") {
        return (
          <div className="h-full flex flex-col">
            <div className="h-[49px] flex justify-between items-center px-4 border-b">
              <p className="text-lg font-bold">Thread</p>
              <Button onClick={onClose} size="iconSm" variant="ghost">
                <XIcon className="size-5 stroke-[1.5]" />
              </Button>
            </div>
            <div>
              <div className="flex flex-col gap-y-2 h-full items-center justify-center">
                <Loader className="size-5 animate-spin text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Message not found</p>
              </div>
            </div>
          </div>
        );
      }
    
      if (!member) {
        return (
          <div className="h-full flex flex-col">
            <div className="h-[49px] flex justify-between items-center px-4 border-b">
              <p className="text-lg font-bold">Thread</p>
              <Button onClick={onClose} size="iconSm" variant="ghost">
                <XIcon className="size-5 stroke-[1.5]" />
              </Button>
            </div>
            <div>
              <div className="flex flex-col gap-y-2 h-full items-center justify-center">
                <AlertTriangle className="size-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Message not found</p>
              </div>
            </div>
          </div>
        );
      }

    return (
        <div>
            Profile
        </div>
    );
};