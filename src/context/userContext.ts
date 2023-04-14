import { createContext } from "react";
import { UserContextType } from "../types/context";
import { User } from "../types/user";

const initialState: UserContextType = {
  userId: User.Joyse,
  setUserId: () => {},
};

export const UserContext = createContext(initialState);
