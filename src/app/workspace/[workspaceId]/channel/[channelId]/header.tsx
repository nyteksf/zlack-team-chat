import { toast } from "sonner";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

import { useChannelId } from "@/hooks/use-channel-id";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useConfirmModal } from "@/hooks/use-confirm-modal";

import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { useCurrentMember } from "@/features/members/api/use-current-member";
import { useUpdateChannel } from "@/features/channels/api/use-update-channel";
import { useRemoveChannel } from "@/features/channels/api/use-remove-channel";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();
  const channelId = useChannelId();
  const workspaceId = useWorkspaceId();
  const { data: currentMember } = useCurrentMember({
    workspaceId,
  });

  const [value, setValue] = useState(title);
  const [channelName, setChannelName] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [ConfirmDialog, confirm] = useConfirmModal(
    "Delete this channel?",
    "You are about to permanently delete this channel from your workspace. This action is irreversible."
  );

  const { mutate: updateChannel, isPending: isUpdatingChannel } =
    useUpdateChannel();
  const { mutate: removeChannel, isPending: isRemovingChannel } =
    useRemoveChannel();

  const handleEditOpenChange = (isOpen: boolean) => {
    if (currentMember?.role !== "admin") return;

    if (isOpen) {
      setChannelName(title);
    }
    setEditOpen(isOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateChannel(
      { id: channelId, name: value },
      {
        onSuccess: () => {
          toast.success("Channel name updated successfully");
          setEditOpen(false);
        },
        onError: () => {
          toast.error("Failed to update channel name");
        },
        onSettled: () => {
          resetChannelName();
        },
      }
    );
  };

  const handleDelete = async () => {
    const okay = await confirm();

    if (!okay) return;

    removeChannel(
      { id: channelId },
      {
        onSuccess: () => {
          toast.success("Channel deleted successfully");
          router.push(`/workspace/${workspaceId}`);
        },
        onError: () => {
          toast.error("Failed to delete channel");
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
    setValue(value);
    setChannelName(value);
  };

  // DO I NEED THIS IF onOpenChange resets it anyway?
  const resetChannelName = () => {
    setChannelName("");
  };

  return (
    <div className="bg-white border-b h-[49px] flex items-center px-4 overflow-hidden">
      <ConfirmDialog />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-lg font-semibold px-2 overflow-hidden w-auto"
            size="sm"
          >
            <span className="truncate"># {title}</span>
            <FaChevronDown className="size-2.5 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-gray-50 overflow-hidden rounded-xl">
          <DialogHeader className="p-4 border-b bg-gray-100 transition-colors">
            <DialogTitle># {title}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4 flex flex-col gap-y-2">
            {/* START NESTED DIALOG */}
            <Dialog open={editOpen} onOpenChange={handleEditOpenChange}>
              <DialogTrigger asChild>
                <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Channel name</p>
                    {currentMember?.role === "admin" && (
                      <p className="text-sm text-[#1264a3] hover:underline font-semibold">
                        Edit
                      </p>
                    )}
                  </div>
                  <p className="text-sm"># {title}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 bg-gray-50 overflow-hidden rounded-xl">
                <DialogHeader className="p-4 border-b bg-gray-100">
                  <DialogTitle>Rename this channel</DialogTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    Channel names must be lowercase and without spaces
                  </p>
                </DialogHeader>
                <form className="p-4 space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Channel name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 select-none">
                        #
                      </span>
                      <Input
                        value={channelName}
                        onChange={handleChange}
                        disabled={isUpdatingChannel}
                        required
                        autoFocus
                        minLength={3}
                        maxLength={80}
                        placeholder="e.g. plan-budget"
                        className="pl-7 pr-3 h-10 border-gray-300"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {channelName.length}/80 characters
                    </p>
                  </div>
                  <DialogFooter className="gap-x-2">
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        disabled={isUpdatingChannel}
                        onClick={resetChannelName}
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      disabled={
                        !channelName.trim() ||
                        isUpdatingChannel ||
                        channelName === title
                      }
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            {/* END NESTED DIALOG */}
            {currentMember?.role === "admin" && (
              <button
                onClick={handleDelete}
                disabled={isRemovingChannel}
                className="flex items-center gap-x-2 px-5 py-4 bg-gray-100 rounded-xl border border-gray-200 cursor-pointer hover:bg-rose-50 text-rose-600 hover:text-rose-700 transition-all duration-150 ease-in-out hover:shadow-sm"
              >
                <TrashIcon className="size-4" />
                <p className="text-sm font-semibold">Delete channel</p>
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Header;
