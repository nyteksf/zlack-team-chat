import { toast } from "sonner";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { useUpdateWorkspace } from "@/features/workspaces/api/use-update-workspace";
import { useRemoveWorkspace } from "@/features/workspaces/api/use-remove-workspace";

import { Input } from "@/components/ui/input";
import { useConfirmModal } from "@/hooks/use-confirm-modal";
import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PreferencesModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  initialValue: string;
}

export const PreferencesModal = ({
  open,
  setOpen,
  initialValue,
}: PreferencesModalProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const [ConfirmDialog, confirm] = useConfirmModal(
    "Are you sure you want to continue?",
    "This action cannot be undone. Once deleted, your data will be permanently removed from our servers."
  );

  const [value, setValue] = useState(initialValue);
  const [editOpen, setEditOpen] = useState(false);

  const { mutate: updateWorkspace, isPending: isUpdatingWorkspace } =
    useUpdateWorkspace();
  const { mutate: removeWorkspace, isPending: isRemovingWorkspace } =
    useRemoveWorkspace();

  const handleEditOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setValue(initialValue);
    }
    setEditOpen(isOpen);
  };

  const handleRemove = async () => {
    const isOkay = await confirm();

    if (!isOkay) return;

    removeWorkspace(
      {
        id: workspaceId,
      },
      {
        onSuccess: () => {
          toast.success("Workspace removed successfully.");
          router.replace("/");
        },
        onError: () => {
          toast.error("Failed to remove workspace. Please try again.");
        },
      }
    );
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateWorkspace(
      {
        id: workspaceId,
        name: value,
      },
      {
        onSuccess: () => {
          setEditOpen(false);
          toast.success("Workspace updated successfully.");
        },
        onError: () => {
          toast.error("Failed to update workspace. Please try again.");
        },
      }
    );
  };

  return (
    <>
      <ConfirmDialog />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 bg-gray-50 overflow-hidden rounded-xl">
          <DialogHeader className="p-4 border-b bg-gray-100 transition-colors">
            <DialogTitle>{initialValue}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4 flex flex-col gap-y-2">
            <Dialog open={editOpen} onOpenChange={handleEditOpenChange}>
              <DialogTrigger>
                <div
                  className="px-5 py-4 bg-gray-100 rounded-lg border cursor-pointer hover:bg-gray-50 hover:shadow-sm 
            transition-all duration-150 ease-in-out"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">
                      Workspace name
                    </p>
                    <p
                      className="text-sm text-[#1264A3] font-semibold hover:underline 
                transition-colors duration-150"
                    >
                      Edit
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 text-left">
                    {initialValue}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rename current workspace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleEdit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Workspace name
                    </label>
                    <Input
                      value={value}
                      disabled={isUpdatingWorkspace}
                      onChange={(e) => setValue(e.target.value)}
                      required
                      autoFocus
                      minLength={3}
                      maxLength={80}
                      placeholder='Workspace name e.g. "Work", "Personal", "Home"'
                      className="h-10 border-gray-300"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {value.length}/80 characters
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isUpdatingWorkspace}
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      disabled={
                        !value.trim() ||
                        isUpdatingWorkspace ||
                        value === initialValue
                      }
                    >
                      {isUpdatingWorkspace ? "Saving..." : "Save"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <button
              disabled={isRemovingWorkspace}
              onClick={handleRemove}
              className="flex items-center gap-x-2 px-5 py-4 bg-gray-100 rounded-xl border border-gray-200 cursor-pointer hover:bg-rose-50 text-rose-600 hover:text-rose-700 transition-all duration-150 ease-in-out hover:shadow-sm"
            >
              <TrashIcon className="size-4" />
              <p className="text-sm font-semibold">Delete workspace</p>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
