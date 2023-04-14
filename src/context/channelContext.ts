import { createContext } from "react";
import { Channel } from "../types/channel";
import { ChannelContextType } from "../types/context";

const initialState: ChannelContextType = {
  channelId: Channel.General,
  setChannelId: () => {},
};

export const ChannelContext = createContext(initialState);
