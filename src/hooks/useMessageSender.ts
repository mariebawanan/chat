import { ChannelContext, MessageContext, UserContext } from "@/context";
import { POST_MESSAGE } from "@/graphql";
import { Message } from "@/types";
import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";

export default function useMessageSender(): [boolean, (message: string) => void] {
  const { messages, setMessages } = useContext(MessageContext);
  const { userId } = useContext(UserContext);
  const { channelId } = useContext(ChannelContext);
  const [text, setText] = useState("");

  const [postMessage, { loading }] = useMutation(POST_MESSAGE, {
    onCompleted: (data) => {
      const { postMessage } = data;
      setMessages([postMessage, ...messages]);
    },
    onError: (_) => {
      const unsentMessage: Message = {
        messageId: `unsent-${new Date().toISOString()}-${userId}`,
        text,
        userId,
        datetime: new Date(),
        failed: true,
      };
      setMessages([unsentMessage, ...messages]);
    },
  });

  const sendMessage = (message: string) => {
    setText(message);
    postMessage({
      variables: {
        text,
        channelId,
        userId,
      },
    });
  };

  return [loading, sendMessage];
}
