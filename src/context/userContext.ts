import { createContext } from "react";
import { UserContextType } from "../types/context";
import { User } from "../types/user";

const initialState: UserContextType = {
  user: User.Joyse,
  setUser: () => {},
};

export const UserContext = createContext(initialState);
