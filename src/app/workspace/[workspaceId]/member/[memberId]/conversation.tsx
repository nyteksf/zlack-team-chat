import { Loader } from "lucide-react";

import { UseGetMember } from "@/features/members/api/use-get-member";
import { useGetMessages } from "@/features/messages/api/use-get-messages";

import { usePanel } from "@/hooks/use-panel";
import { useMemberId } from "@/hooks/use-member-id";

import Header from "@/app/workspace/[workspaceId]/member/[memberId]/header";
import { ChatInput } from "@/app/workspace/[workspaceId]/member/[memberId]/chat-input";

import { MessageList } from "@/components/message-list";

import { Id } from "../../../../../../convex/_generated/dataModel";

interface ConversationProps {
    id: Id<"conversations">;
}

export const Conversation = ({ id }: ConversationProps) => {
    const memberId = useMemberId()

    const { onOpenProfile } = usePanel();

    const { data: member, isLoading: memberLoading } = UseGetMember({ id: memberId })
    const { results, status, loadMore } = useGetMessages({
        conversationId: id,
    });

    if (memberLoading || status === "LoadingFirstPage") {
        
        return (
          <div className="h-full flex items-center justify-center">
            <Loader className="size-6 animate-spin text-muted-foreground" />
          </div>
        );
      }
    
    return (
        <div className="flex flex-col h-full">
            <Header
                memberName={member?.user.name}
                memberImage={member?.user.image}
                onClick={() => onOpenProfile(memberId)}
            />
            <MessageList
                data={results}
                variant="conversation"
                memberImage={member?.user.image}
                memberName={member?.user.name}
                loadMore={loadMore}
                isLoadingMore={status === "LoadingMore"}
                canLoadMore={status === "CanLoadMore"}
            />
            <ChatInput
                placeholder={`Message ${member?.user.name}`}
                conversationId={id}
            />
        </div>
    );
};