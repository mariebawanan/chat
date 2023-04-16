import { ChannelContext, UserContext } from "@/context";
import { useContext, useEffect, useState } from "react";

export default function useDrafter(): [string, (value: string) => void] {
  const { userId } = useContext(UserContext);
  const { channelId } = useContext(ChannelContext);
  const [state, setInternalState] = useState("");
  const key = `${channelId}-${userId}`;

  useEffect(() => {
    // Get the existing drafts from local storage
    // Format is channelId-userId
    const value = localStorage.getItem(key);
    setInternalState(value || "");
  }, [key]);

  const setState = (value: string) => {
    // If value was cleared or empty or just sent,
    // remove the draft from local storage
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
