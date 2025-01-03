"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
  const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();
  const [name, setName] = useState("");

  const { mutate, isPending } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    setName("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      { name },
      {
        onSuccess(id) {
          toast.success("Workspace created successfully.");
          router.push(`/workspace/${id}`);
          handleClose();
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="p-0 bg-gray-50 overflow-hidden rounded-xl">
        <DialogHeader className="p-4 border-b bg-gray-100">
          <DialogTitle>Create New Workspace</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Workspace name
            </label>
            <Input
              disabled={isPending}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
              minLength={3}
              maxLength={80}
              placeholder="e.g. work, personal, home"
              className="h-10 border-gray-300"
            />
            <p className="text-xs text-gray-500 mt-1">
              {name.length}/80 characters
            </p>
          </div>
          <DialogFooter className="gap-x-2">
            <DialogClose asChild>
              <Button
                type="button"
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
