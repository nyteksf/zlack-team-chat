import { toast } from "sonner";
import { CopyIcon, RefreshCcw } from "lucide-react";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useConfirmModal } from "@/hooks/use-confirm-modal";
import { useNewJoinCode } from "@/features/workspaces/api/use-new-join-code";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InviteModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  joinCode: string;
}

export const InviteModal = ({
  open,
  setOpen,
  name,
  joinCode,
}: InviteModalProps) => {
  const workspaceId = useWorkspaceId();
  const [ConfirmDialog, confirm] = useConfirmModal(
    "Generate a New Workspace Invite Code?",
    "Creating a new invite code will deactivate the current one. Only members with the new code can join the workspace."
  );

  const { mutate } = useNewJoinCode();

  const handleNewCode = async () => {
    const okay = await confirm();

    if (!okay) return;

    mutate(
      { workspaceId },
      {
        onSuccess: () => {
          toast.success("Success! Your new invite code is ready to use.");
        },
        onError: () => {
          toast.error("Error: Unable to regenerate the invite code.");
        },
      }
    );
  };

  const handleCopy = () => {
    const inviteLink = `${window.location.origin}/join/${workspaceId}?${joinCode}`;
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        toast.success("Invite link copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy invite link");
        console.log(err);
      });
  };

  return (
    <>
      <ConfirmDialog />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="p-6 max-w-xl bg-white rounded-lg shadow-lg transition-opacity duration-300 ease-in-out"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <DialogHeader className="space-y-2">
            <DialogTitle
              id="modal-title"
              className="text-xl font-semibold text-gray-900"
            >
              Invite to {name}
            </DialogTitle>
            <DialogDescription
              id="modal-description"
              className="text-sm text-gray-600"
            >
              Share the invite code and link below to get others into your
              workspace.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <p className="uppercase text-4xl font-semibold tracking-wide text-gray-800">
              {joinCode}
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCopy}
              className="flex items-center space-x-2 text-blue-600 border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Copy Invite Link"
            >
              <span>Copy Invite Link</span>
              <CopyIcon className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <Button onClick={handleNewCode} variant="outline">
              New code
              <RefreshCcw className="size-4 ml-2" />
            </Button>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
