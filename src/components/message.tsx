import { toast } from "sonner";
import dynamic from "next/dynamic";
import { format, isToday, isYesterday } from "date-fns";

import { cn } from "@/lib/utils";
import { useConfirmModal } from "@/hooks/use-confirm-modal";
import { useRemoveMessage } from "@/features/messages/api/use-remove-message";
import { useUpdateMessage } from "@/features/messages/api/use-update-message";

import { Hint } from "@/components/hint";
import { Toolbar } from "@/components/toolbar";
import { Thumbnail } from "@/components/thumbnail";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Doc, Id } from "../../convex/_generated/dataModel";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
const Renderer = dynamic(() => import("@/components/renderer"), { ssr: false });

interface MessageProps {
  id: Id<"messages">;
  memberId: Id<"members">;
  authorImage?: string;
  authorName?: string;
  isAuthor: boolean;
  reactions: Array<
    Omit<Doc<"reactions">, "memberId"> & {
      count: number;
      memberIds: Id<"members">[];
    }
  >;
  isEditing: boolean;
  body: Doc<"messages">["body"];
  image: string | null | undefined;
  updatedAt: Doc<"messages">["updatedAt"];
  createdAt: Doc<"messages">["_creationTime"];
  setEditingId: (id: Id<"messages"> | null) => void;
  isCompact?: boolean;
  threadCount?: number;
  threadImage?: string;
  threadTimestamp?: number;
  hideThreadButton?: boolean;
}

const formatFullTime = (date: Date) => {
  return `${isToday(date) ? "Today" : isYesterday(date) ? "Yesterday" : format(date, "MMM d, yyyy")} at ${format(date, "h:mm:ss a")}`;
};

export const Message = ({
  id,
  isAuthor,
  memberId,
  authorImage,
  authorName = "Member",
  reactions,
  body,
  image,
  createdAt,
  updatedAt,
  isEditing,
  isCompact,
  setEditingId,
  hideThreadButton,
  threadCount,
  threadImage,
  threadTimestamp,
}: MessageProps) => {
  const [ConfirmDialog, confirm] = useConfirmModal(
    "Permanently Delete Message",
    "This message will be permanently removed from the conversation and cannot be recovered. Are you sure you want to proceed?"
  );

  const { mutate: updateMessage, isPending: isUpdatingMessage } =
    useUpdateMessage();
  const { mutate: removeMessage, isPending: isRemovingMessage } =
    useRemoveMessage();

  const isPending = isUpdatingMessage;

  const handleRemove = async () => {
    const okay = await confirm();

    if (!okay) return;

    setTimeout(() => {
      removeMessage(
        { id },
        {
          onSuccess: () => {
            toast.success("Message successfully deleted");

            // ToDo: CLOSE CUR THREAD IF THREAD OF SAME MSG IS OPENED AS IT WAS JUST DELETED
          },
          onError: () => {
            toast.error(
              "Failed to delete message. Please reload and try again."
            );
          },
        }
      );
    }, 350);
  };

  const handleUpdate = ({ body }: { body: string }) => {
    updateMessage(
      { id, body },
      {
        onSuccess: () => {
          toast.success("Message updated successfully");
          setEditingId(null);
        },
        onError: () => {
          toast.error("Failed to update message. Please try again.");
        },
      }
    );
  };

  if (isCompact) {
    return (
      <>
        <ConfirmDialog />
        <div
          className={cn(
            "flex flex-col gap-2 p-1.5 px-5 scale-100 opacity-100 hover:bg-gray-100/60 group relative",
            "transform transition-all",
            isEditing && "bg-[#F2C74433] hover:bg-[#F2C74433]",
            isRemovingMessage &&
              "bg-rose-500/50 transform transition-all scale-y-0 opacity-0 origin-bottom"
          )}
        >
          <div className="flex items-start gap-2">
            <Hint label={formatFullTime(new Date(createdAt))}>
              <button className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 w-[40px] leading-[22px] text-center hover:underline">
                {format(new Date(createdAt), "hh:mm")}
              </button>
            </Hint>
            {isEditing ? (
              <div className="w-full h-full">
                <Editor
                  onSubmit={handleUpdate}
                  disabled={isPending}
                  defaultValue={JSON.parse(body)}
                  onCancel={() => setEditingId(null)}
                  variant="update"
                />
              </div>
            ) : (
              <div className="flex flex-col w-full">
                <Renderer value={body} />
                <Thumbnail url={image} />
                {updatedAt ? (
                  <span className="text-xs text-muted-foreground">
                    (edited)
                  </span>
                ) : null}
              </div>
            )}
          </div>
          {!isEditing && (
            <Toolbar
              isAuthor={isAuthor}
              isPending={false}
              handleEdit={() => setEditingId(id)}
              handleThread={() => {}}
              handleDelete={handleRemove}
              handleReaction={() => {}}
              hideThreadButton={hideThreadButton}
            />
          )}
        </div>
      </>
    );
  }

  const avatarFallback = authorName.charAt(0).toUpperCase();

  return (
    <>
      <ConfirmDialog />
      <div
        className={cn(
          "flex flex-col gap-2 p-1.5 px-5 scale-100 opacity-100 hover:bg-gray-100/60 group relative",
          "transform transition-all",
          isEditing && "bg-[#F2C74433] hover:bg-[#F2C74433]",
          isRemovingMessage &&
            "bg-rose-500/50 transform transition-all scale-y-0 opacity-0 origin-bottom"
        )}
      >
        <div className="flex items-start gap-2">
          <button>
            <Avatar>
              <AvatarImage src={authorImage} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
          </button>
          {isEditing ? (
            <div className="w-full h-full">
              <Editor
                onSubmit={handleUpdate}
                disabled={isPending}
                defaultValue={JSON.parse(body)}
                onCancel={() => setEditingId(null)}
                variant="update"
              />
            </div>
          ) : (
            <div className="flex flex-col w-full overflow-hidden">
              <div className="text-sm flex items-center gap-2">
                <button
                  onClick={() => {}}
                  className="font-bold text-primary hover:underline"
                >
                  {authorName}
                </button>
                <Hint label={formatFullTime(new Date(createdAt))}>
                  <button className="text-xs text-muted-foreground hover:underline">
                    {format(new Date(createdAt), "h:mm a")}
                  </button>
                </Hint>
              </div>
              {/* CHAT TEXT */}
              <Renderer value={body} />
              <Thumbnail url={image} />
              {updatedAt ? (
                <span className="text-xs text-muted-foreground">(edited)</span>
              ) : null}
            </div>
          )}
        </div>
        {!isEditing && (
          <Toolbar
            isAuthor={isAuthor}
            isPending={isPending}
            handleEdit={() => setEditingId(id)}
            handleThread={() => {}}
            handleDelete={handleRemove}
            handleReaction={() => {}}
            hideThreadButton={hideThreadButton}
          />
        )}
      </div>
    </>
  );
};
