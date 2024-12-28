import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const useConfirmModal = (
  title: string,
  message: string
): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () =>
    new Promise<boolean>((resolve, reject) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const ConfirmDialog = () => {
    return (
      <Dialog open={promise !== null} onOpenChange={handleClose}>
        <DialogContent className="p-0 bg-gray-50 overflow-hidden rounded-xl">
          <DialogHeader className="p-4 border-b bg-gray-100">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4 space-y-2">
            <p className="text-sm text-gray-500">{message}</p>
            <DialogFooter className="gap-x-2">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="text-gray-700"
              >
                Cancel
              </Button>
              <Button onClick={handleConfirm}>Confirm</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return [ConfirmDialog, confirm];
};
