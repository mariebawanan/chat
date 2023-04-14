export interface UserContextType {
  user: string;
  setUser: (user: string) => void;
}

export interface ChannelContextType {
  channel: string;
  setChannel: (channel: string) => void;
}
