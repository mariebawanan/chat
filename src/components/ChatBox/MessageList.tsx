import { ChannelContext } from "@/context";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { FETCH_LATEST_MESSAGES } from "../../graphql/queries";

export default function MessageList() {
  const { channelId } = useContext(ChannelContext);
  console.log(channelId);

  const { loading, error, data } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { channelId },
  });

  console.log(loading, error, data);

  return <div className="p-4 flex-1 bg-red-200">messages here</div>;
}
