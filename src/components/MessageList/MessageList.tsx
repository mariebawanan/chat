import { EmptyList, Error, Message, MessagesContainer } from "@/components";
import Loader from "@/components/Loader/Loader";
import { ChannelContext, MessageContext } from "@/context";
import { FETCH_LATEST_MESSAGES } from "@/graphql";
import { useQuery } from "@apollo/client";
import { useContext } from "react";

export default function MessageList() {
  const { channelId } = useContext(ChannelContext);
  const { messages, setMessages } = useContext(MessageContext);

  const { loading, error } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { channelId },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      const { fetchLatestMessages } = data;
      setMessages(fetchLatestMessages);
    },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  if (!messages.length) {
    return <EmptyList channelId={channelId} />;
  }

  return (
    <MessagesContainer>
      {messages.map((message) => (
        <Message key={message.messageId} message={message} />
      ))}
    </MessagesContainer>
  );
}
