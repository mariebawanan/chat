import { POST_MESSAGE } from "@/graphql";

export const messagePost = {
  request: {
    query: POST_MESSAGE,
    variables: {
      channelId: "General",
      text: "Hello!",
      userId: "Joyse",
    },
  },
  result: {
    data: {
      postMessage: {
        userId: "Joyse",
        text: "Hello!",
        messageId: "2309825079123736794",
        datetime: "2023-04-16T19:16:48.87431Z",
      },
    },
  },
};

export const messagePostError = {
  request: {
    query: POST_MESSAGE,
    variables: { channelId: "General", text: "Hello!", userId: "user-error-1" },
  },
  result: {
    data: {
      postMessage: null,
    },
  },
  error: new Error("Message Post Error!"),
};
