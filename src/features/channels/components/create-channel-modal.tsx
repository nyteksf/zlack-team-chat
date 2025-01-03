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
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
      <DialogContent className="p-0 bg-gray-50 overflow-hidden rounded-xl">
        <DialogHeader className="p-4 border-b bg-gray-100">
          <DialogTitle>Add a channel</DialogTitle>
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
                value={name}
                onChange={handleChange}
                disabled={isPending}
                required
                autoFocus
                minLength={3}
                maxLength={80}
                placeholder="e.g. plan-budget"
                className="pl-7 pr-3 h-10 border-gray-300"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {name.length}/80 characters
            </p>
          </div>
          <DialogFooter className="gap-x-2">
            <DialogClose asChild>
              <Button
                variant="outline"
                disabled={isPending}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending || !name.trim()}>
              {isPending ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
