import { Message } from "@/types";

export const sortMessages = (messages: Message[]) => {
  return messages.sort((a, b) => a.datetime.valueOf() - b.datetime.valueOf());
};
