import { ChannelContext, MessageContext, UserContext } from "@/context";
import { FETCH_LATEST_MESSAGES } from "@/graphql";
import { Message } from "@/types";
import { useQuery } from "@apollo/client";
import classNames from "classnames";
import format from "date-fns/format";
import { useContext } from "react";
import MessagesContainer from "./MessagesContainer";

export default function MessageList() {
  const { channelId } = useContext(ChannelContext);
  const { userId } = useContext(UserContext);
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

  console.log(messages);

  return (
    <div className="p-4 flex-1 bg-red-200 ">
      <MessagesContainer>
        {messages.map((message: Message) => (
          <div
            className={classNames("w-full flex flex-col items-start space-x-2", {
              "items-end": message.userId === userId,
            })}
          >
            <div>{format(new Date(message.datetime), "MMM dd yyyy hh:mm a")}</div>
            <div>
              {message.text} - {message.messageId}
            </div>
            <div>{message.userId}</div>
          </div>
        ))}
      </MessagesContainer>
    </div>
  );
}
