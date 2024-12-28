import { MessageSquareTextIcon, Pencil, Smile, Trash } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { EmojiPopover } from "@/components/emoji-popover";

interface ToolbarProps {
  isAuthor: boolean;
  isPending: boolean;
  handleEdit: () => void;
  handleThread: () => void;
  handleDelete: () => void;
  handleReaction: (value: string) => void;
  hideThreadButton?: boolean;
}

export const Toolbar = ({
  isAuthor,
  isPending,
  handleEdit,
  handleThread,
  handleDelete,
  handleReaction,
  hideThreadButton,
}: ToolbarProps) => {
  return (
    <div className="absolute top-0 right-5 hover:top-0.5">
      <div className="opacity-0 group-hover:opacity-100 border bg-white rounded-md shadow-sm transform hover:scale-105 transition-all flex flex-row">
        <EmojiPopover
          hint="Add reaction"
          onEmojiSelect={(emoji) => handleReaction(emoji.native)}
        >
          <Button
            className="hover:translate-x-[-4] hover:translate-y-[4] transition-all"
            variant="ghost"
            size="iconSm"
            disabled={isPending}
          >
            <Smile className="size-4" />
          </Button>
        </EmojiPopover>
        {!hideThreadButton && (
          <Hint label="Reply in thread">
            <Button
              className="hover:translate-x-[-4] hover:translate-y-[-4] transition-all"
              variant="ghost"
              size="iconSm"
              disabled={isPending}
              onClick={handleThread}
            >
              <MessageSquareTextIcon className="size-4" />
            </Button>
          </Hint>
        )}
        {isAuthor && (
          <Hint label="Edit message">
            <Button
              className="hover:translate-x-[-4] hover:translate-y-[4] transition-all"
              variant="ghost"
              size="iconSm"
              disabled={isPending}
              onClick={handleEdit}
            >
              <Pencil className="size-4" />
            </Button>
          </Hint>
        )}
        {isAuthor && (
          <Hint label="Delete message">
            <Button
              className="hover:translate-x-[-4] hover:translate-y-[-4] transition-all"
              variant="ghost"
              size="iconSm"
              disabled={isPending}
              onClick={handleDelete}
            >
              <Trash className="size-4" />
            </Button>
          </Hint>
        )}
      </div>
    </div>
  );
};
