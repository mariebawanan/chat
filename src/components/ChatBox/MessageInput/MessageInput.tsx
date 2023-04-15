import { ChannelContext, UserContext } from "@/context";
import useMessageSender from "@/hooks/useMessageSender";
import { useContext, useEffect, useRef } from "react";

export default function MessageInput() {
  const { userId } = useContext(UserContext);
  const { channelId } = useContext(ChannelContext);
  const [loading, sendMessage] = useMessageSender();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      const messaege = localStorage.getItem(`${channelId}-${userId}`);
      ref.current.value = messaege || "";
    }

    return () => {
      if (ref.current && ref.current.value) {
        localStorage.setItem(`${channelId}-${userId}`, ref.current.value);
      }
    };
  }, [channelId, userId]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <input ref={ref} placeholder="Type your message" />
      <button
        onClick={() => {
          if (!ref.current) return;
          sendMessage(ref.current.value);
        }}
      >
        send message as {userId}
      </button>
    </div>
  );
}
