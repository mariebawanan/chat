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
    return (
      <div className="w-full h-full flex  items-center justify-center">Loading...</div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MessagesContainer>
      {messages.map((message) => (
        <MessageBubble key={message.messageId} message={message} />
      ))}
    </MessagesContainer>
  );
}
