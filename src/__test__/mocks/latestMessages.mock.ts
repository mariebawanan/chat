import { FETCH_LATEST_MESSAGES } from "@/graphql";
import { GraphQLError } from "graphql";
import { message1, message2 } from "./data.mock";

export const mockLatestMessages = {
  request: {
    query: FETCH_LATEST_MESSAGES,
    variables: {
      channelId: "General",
    },
  },
  result: {
    data: {
      fetchLatestMessages: [message1, message2],
    },
  },
};

export const mockEmptyLatestMessages = {
  request: {
    query: FETCH_LATEST_MESSAGES,
    variables: {
      channelId: "General",
    },
  },
  result: {
    data: {
      fetchLatestMessages: [],
    },
  },
};

export const mockLatestMessagesError = {
  request: {
    query: FETCH_LATEST_MESSAGES,
    variables: { channelId: "General" },
  },
  result: {
    data: {
      fetchLatestMessages: null,
    },
    errors: [new GraphQLError("Latest Messages Error!")],
  },
};
