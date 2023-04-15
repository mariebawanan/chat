import { ChannelContext, MessageContext } from "@/context";
import { FETCH_MORE_MESSAGES } from "@/graphql";
import { useLazyQuery } from "@apollo/client";
import { useContext, useState } from "react";

export default function useMessageFetcher(): {
  loading: boolean;
  isOld: boolean;
  fetchMessages: (old: boolean) => void;
} {
  const { channelId } = useContext(ChannelContext);
  const { messages, setMessages, setIsOld } = useContext(MessageContext);
  const [isOld, setIsOldInternal] = useState(false);

  const [fetchMoreMessages, { loading }] = useLazyQuery(FETCH_MORE_MESSAGES, {
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

  const fetchMessages = (old: boolean) => {
    setIsOldInternal(old);
    setIsOld(old);

    const messageId = old
      ? messages[messages.length - 1].messageId
      : messages[0].messageId;

    fetchMoreMessages({
      variables: {
        channelId,
        messageId,
        old,
      },
    });
  };

  return { loading, isOld, fetchMessages };
}
