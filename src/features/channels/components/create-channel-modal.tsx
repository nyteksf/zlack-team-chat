import { toast } from "sonner";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useCreateChannel } from "@/features/channels/api/use-create-channel";
import { useCreateChannelModal } from "@/features/store/use-create-channel-modal";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CreateChannelModal = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();

  const [open, setOpen] = useCreateChannelModal();
  const { mutate, isPending } = useCreateChannel();

  const [name, setName] = useState("");

  const handleClose = () => {
    setName("");
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (name.length >= 3 && name.length <= 80 && !isPending) {
        handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
    setName(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      { name, workspaceId },
      {
        onSuccess: (id) => {
          toast.success("Channel created successfully");
          router.push(`/workspace/${workspaceId}/channel/${id}`);
          handleClose();
        },
        onError: () => {
          toast.error("Failed to create new channel.");
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a channel</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              value={name}
              disabled={isPending}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              autoFocus
              minLength={3}
              maxLength={80}
              placeholder="e.g. Plan budget"
              className="p-3 border-2 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p className="text-sm text-gray-500">
              Please provide a unique name.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button
                disabled={isPending}
                variant="outline"
                onClick={handleClose}
                className="text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isPending || !name}
                className="text-white focus:ring-4 focus:ring-blue-500 focus:outline-none"
              >
                {isPending ? "Creating..." : "Create"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
