import { createContext } from "react";
import { Channel } from "../types/channel";
import { ChannelContextType } from "../types/context";

const initialState: ChannelContextType = {
  channel: Channel.General,
  setChannel: () => {},
};

export const ChannelContext = createContext(initialState);
