export interface UserContextType {
  userId: string;
  setUserId: (user: string) => void;
}

export interface ChannelContextType {
  channelId: string;
  setChannelId: (channel: string) => void;
}
