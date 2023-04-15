import { ChannelContext, UserContext } from "@/context";
import { useContext, useEffect, useState } from "react";

export default function useDrafter(): [string, (value: string) => void] {
  const { userId } = useContext(UserContext);
  const { channelId } = useContext(ChannelContext);
  const [state, setInternalState] = useState("");
  const key = `${channelId}-${userId}`;

  useEffect(() => {
    const value = localStorage.getItem(key);
    setInternalState(value || "");
  }, [key]);

  const setState = (value: string) => {
    if (!value) {
      localStorage.removeItem(key);
      setInternalState("");
      return;
    }

    localStorage.setItem(key, value);
    setInternalState(value);
  };

  return [state, setState];
}
