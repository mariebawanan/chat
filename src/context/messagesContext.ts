import { MessageContextType } from "@/types";
import { createContext } from "react";

const initialState: MessageContextType = {
  messages: [],
  setMessages: () => {},
};

export const MessageContext = createContext(initialState);
