import { MessageContextType } from "@/types";
import { createContext } from "react";

const initialState: MessageContextType = {
  messages: [],
  setMessages: () => {},
  isOld: false,
  setIsOld: () => {},
};

export const MessageContext = createContext(initialState);
