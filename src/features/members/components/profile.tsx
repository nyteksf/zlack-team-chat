import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ChevronDownIcon,
  Loader,
  MailIcon,
  XIcon,
} from "lucide-react";

import { UseGetMember } from "@/features/members/api/use-get-member";
import { useRemoveMember } from "@/features/members/api/use-remove-member";
import { useUpdateMember } from "@/features/members/api/use-update-member";
import { useCurrentMember } from "@/features/members/api/use-current-member";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useConfirmModal } from "@/hooks/use-confirm-modal";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

import { Id } from "../../../../convex/_generated/dataModel";

interface ProfileProps {
  memberId: Id<"members">;
  onClose: () => void;
}

export const Profile = ({ memberId, onClose }: ProfileProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();

  const [UpdateDialog, confirmUpdate] = useConfirmModal(
    "Change role",
    "Are you sure you want to change the selected member's role?"
  );

  const [LeaveDialog, confirmLeave] = useConfirmModal(
    "Leave workspace",
    "Are you sure you want to leave this workspace?"
  );

  const [RemoveDialog, confirmRemove] = useConfirmModal(
    "Remove member",
    "Are you sure you want to remove this member?"
  );

  const { data: currentMember, isLoading: isLoadingCurrentMember } =
    useCurrentMember({
      workspaceId,
    });
  const { data: member, isLoading: isLoadingMember } = UseGetMember({
    id: memberId,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mutate: updateMember, isPending: isUpdatingMember } =
    useUpdateMember();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mutate: removeMember, isPending: isRemovingMember } =
    useRemoveMember();

  const onRemove = async () => {
    const okay = await confirmRemove();

    if (!okay) return;

    removeMember(
      { id: memberId },
      {
        onSuccess: () => {
          toast.success("Member has been removed successfully");
          onClose();
        },
        onError: () => {
          toast.error("Failed to remove member. Are they an admin?");
        },
      }
    );
  };

  const onLeave = async () => {
    const okay = await confirmLeave();

    if (!okay) return;

    removeMember(
      { id: memberId },
      {
        onSuccess: () => {
          toast.success("You have left the workspace.");
          router.replace("/");
          onClose();
        },
        onError: () => {
          toast.error("Failed to leave the workspace");
        },
      }
    );
  };

  const onUpdateRole = async (role: "admin" | "member") => {
    const okay = await confirmUpdate();

    if (!okay) return;

    updateMember(
      { id: memberId, role },
      {
        onSuccess: () => {
          toast.success("Member role has been changed successfully");
          onClose();
        },
        onError: () => {
          toast.error("Failed to change member role");
        },
      }
    );
  };

  if (isLoadingMember || isLoadingCurrentMember) {
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
            <p className="text-sm text-muted-foreground">Profile not found</p>
          </div>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="h-full flex flex-col">
        <div className="h-[49px] flex justify-between items-center px-4 border-b">
          <p className="text-lg font-bold">Profile</p>
          <Button onClick={onClose} size="iconSm" variant="ghost">
            <XIcon className="size-5 stroke-[1.5]" />
          </Button>
        </div>
        <div>
          <div className="flex flex-col gap-y-2 h-full items-center justify-center">
            <AlertTriangle className="size-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Sorry, profile not found
            </p>
          </div>
        </div>
      </div>
    );
  }

  const avatarFallback = member.user.name?.[0] ?? "M";

  return (
    <>
      <RemoveDialog />
      <LeaveDialog />
      <UpdateDialog />
      <div className="h-full flex flex-col">
        <div className="h-[49px] flex justify-between items-center px-4 border-b">
          <p className="text-lg font-bold">Profile</p>
          <Button onClick={onClose} size="iconSm" variant="ghost">
            <XIcon className="size-5 stroke-[1.5]" />
          </Button>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center p-4">
            <Avatar className="max-w-[256px] max-h-[256px] size-full">
              <AvatarImage src={member.user.image} />
              <AvatarFallback className="aspect-square text-6xl">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-xl font-bold">{member.user.name}</p>
          {/* IF CURMEMBER IS ADMIN AND LOOKING AT OTHER PROFILE: CHANGE/DELETE */}
          {currentMember?.role === "admin" &&
          currentMember?._id !== memberId ? (
            <div className="flex items-center gap-2 mt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full capitalize">
                    {member.role} <ChevronDownIcon className="size-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuRadioGroup
                    value={member.role}
                    onValueChange={(role) =>
                      onUpdateRole(role as "admin" | "member")
                    }
                  >
                    <DropdownMenuRadioItem value="admin">
                      Admin
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="member">
                      Member
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={onRemove} variant="outline" className="w-full">
                Remove
              </Button>
            </div>
          ) : // IF CURMEMBER LOOKING AT SELF AND NOT AN ADMIN: LEAVE
          currentMember?._id === memberId && currentMember?.role !== "admin" ? (
            <div className="mt-4">
              <Button onClick={onLeave} variant="outline" className="w-full">
                Leave
              </Button>
            </div> // ADMIN LOOKING AT SELF HAS NO OPTIONS
          ) : null}
        </div>
        <Separator />
        <div className="flex flex-col p-4">
          <p className="text-sm font-bold mb-4">Contact information</p>
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-md bg-muted flex items-center justify-center">
              <MailIcon className="size-4" />
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] font-semibold text-muted-foreground">
                Email address
              </p>
              <Link
                href={`mailto:${member.user.email}`}
                className="text-sm hover:underline text-[#1264A3]"
              >
                {member.user.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
