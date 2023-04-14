import { ChannelContext, MessageContext } from "@/context";
import { FETCH_MORE_MESSAGES } from "@/graphql";
import { useLazyQuery } from "@apollo/client";
import { useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function MessagesContainer({ children }: Props) {
  const [isOld, setIsOld] = useState(false);
  const { messages, setMessages } = useContext(MessageContext);
  const { channelId } = useContext(ChannelContext);

  const [fetchMoreMessages, { loading, error }] = useLazyQuery(FETCH_MORE_MESSAGES, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      const { fetchMoreMessages } = data;

      if (isOld) {
        setMessages([...messages, ...fetchMoreMessages]);
      } else {
        const sorted = [...fetchMoreMessages].reverse();
        setMessages([...sorted, ...messages]);
      }
    },
  });

  const handleFetch = (old: boolean) => {
    setIsOld(old);

    const messageId = old
      ? messages[messages.length - 1].messageId
      : messages[0].messageId;

    console.log(messageId);
    fetchMoreMessages({
      variables: {
        channelId,
        messageId,
        old,
      },
    });
  };

  return (
    <div className="flex flex-col">
      {loading && isOld ? (
        <span>fetching messages...</span>
      ) : (
        <button onClick={() => handleFetch(true)}>Previous</button>
      )}
      <div className="flex flex-col-reverse space-y-3">{children}</div>
      {loading && !isOld ? (
        <span>fetching messages...</span>
      ) : (
        <button onClick={() => handleFetch(false)}>Next</button>
      )}
    </div>
  );
}
