import { ChannelContext, UserContext } from "@/context";
import { Message } from "@/types";
import { useQuery } from "@apollo/client";
import classNames from "classnames";
import { useContext } from "react";
import { FETCH_LATEST_MESSAGES } from "../../graphql/queries";

export default function MessageList() {
  const { channelId } = useContext(ChannelContext);
  const { userId } = useContext(UserContext);

  console.log(userId);

  const { loading, error, data } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { channelId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.fetchLatestMessages) {
    return null;
  }

  return (
    <div className="p-4 flex-1 bg-red-200">
      {data.fetchLatestMessages
        .map((message: Message) => (
          <div
            className={classNames("w-full flex justify-start", {
              "justify-end": message.userId === userId,
            })}
          >
            <span>{message.text}</span>
            <span>{`${message.datetime}`}</span>
            <span>{message.userId}</span>
          </div>
        ))
        .reverse()}
    </div>
  );
}
