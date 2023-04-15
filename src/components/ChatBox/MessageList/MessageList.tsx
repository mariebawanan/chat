import { ChannelContext, MessageContext } from "@/context";
import { FETCH_LATEST_MESSAGES } from "@/graphql";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import MessageBubble from "./MessageBubble";
import MessagesContainer from "./MessagesContainer";

export default function MessageList() {
  const { channelId } = useContext(ChannelContext);
  const { messages, setMessages } = useContext(MessageContext);

  const { loading, error } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { channelId },
    onCompleted: (data) => {
      const { fetchLatestMessages } = data;
      setMessages(fetchLatestMessages);
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4 flex-1 mt-2 h-full pb-24">
      <MessagesContainer>
        {messages.map((message) => (
          <MessageBubble key={message.messageId} message={message} />
        ))}
      </MessagesContainer>
    </div>
  );
}
