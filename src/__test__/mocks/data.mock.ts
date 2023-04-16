import { Message } from "@/types";

export const message1: Message = {
  messageId: "message-id-1",
  text: "Message Text 1",
  datetime: new Date(),
  userId: "user-id-1",
};

export const message2: Message = {
  messageId: "message-id-2",
  text: "Message Text 2",
  datetime: new Date(),
  userId: "user-id-2",
};

export const message3: Message = {
  messageId: "message-id-3",
  text: "Message Text 3",
  datetime: new Date(),
  userId: "user-id-3",
};

export const message4: Message = {
  messageId: "message-id-4",
  text: "Message Text 4",
  datetime: new Date(),
  userId: "user-id-4",
};

export const messageError: Message = {
  messageId: "message-error-1",
  text: "Message Error 1",
  datetime: new Date(),
  userId: "user-error-1",
  failed: true,
};
