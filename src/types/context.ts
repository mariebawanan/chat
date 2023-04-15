import { Message } from "./message";

export interface UserContextType {
  userId: string;
  setUserId: (user: string) => void;
}

export interface ChannelContextType {
  channelId: string;
  setChannelId: (channel: string) => void;
}

export interface MessageContextType {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  isOld: boolean;
  setIsOld: (isOld: boolean) => void;
}
