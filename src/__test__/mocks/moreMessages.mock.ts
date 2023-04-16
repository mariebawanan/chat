import { FETCH_MORE_MESSAGES } from "@/graphql";
import { message1, message2, message3 } from "./data.mock";

export const mockFetchMoreOldMessages = {
  request: {
    query: FETCH_MORE_MESSAGES,
    variables: {
      channelId: "General",
      messageId: message1.messageId,
      old: true,
    },
  },
  result: {
    data: {
      fetchMoreMessages: [message3],
    },
  },
};

export const mockFetchMoreNewMessages = {
  request: {
    query: FETCH_MORE_MESSAGES,
    variables: {
      channelId: "General",
      messageId: message2.messageId,
      old: false,
    },
  },
  result: {
    data: {
      fetchMoreMessages: [message1, message2],
    },
  },
};
