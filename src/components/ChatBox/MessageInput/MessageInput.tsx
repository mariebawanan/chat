import Input from "@/components/Input/Input";
import { ChannelContext, MessageContext, UserContext } from "@/context";
import { POST_MESSAGE } from "@/graphql";
import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";

export default function MessageInput() {
  const { channelId } = useContext(ChannelContext);
  const { messages, setMessages } = useContext(MessageContext);
  const { userId } = useContext(UserContext);
  const [text, setText] = useState("");

  const [postMessage, { loading, error }] = useMutation(POST_MESSAGE, {
    onCompleted: (data) => {
      console.log(data);
      const { postMessage } = data;
      setMessages([postMessage, ...messages]);
    },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  const handleSendMessage = () => {
    postMessage({
      variables: {
        userId,
        text,
        channelId,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <Input value={text} onChange={setText} placeholder="Type your message" />
      <button onClick={handleSendMessage}>send message as {userId}</button>
    </div>
  );
}
