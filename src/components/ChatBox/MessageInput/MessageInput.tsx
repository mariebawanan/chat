import { ChannelContext, UserContext } from "@/context";
import useMessageSender from "@/hooks/useMessageSender";
import { useContext, useEffect, useRef } from "react";

export default function MessageInput() {
  const { userId } = useContext(UserContext);
  const { channelId } = useContext(ChannelContext);
  const [loading, sendMessage] = useMessageSender();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentInput = ref.current;
    if (!currentInput) {
      return;
    }

    const draft = localStorage.getItem(`${channelId}-${userId}`);
    currentInput.value = draft || "";

    return () => {
      if (currentInput && currentInput.value) {
        localStorage.setItem(`${channelId}-${userId}`, currentInput.value);
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
