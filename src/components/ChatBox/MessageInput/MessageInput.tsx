import { UserContext } from "@/context";
import useDrafter from "@/hooks/useDrafter";
import useMessageSender from "@/hooks/useMessageSender";
import { useContext, useState } from "react";

export default function MessageInput() {
  const [loading, sendMessage] = useMessageSender();
  const { userId } = useContext(UserContext);
  const [error, setError] = useState("");
  const [draft, setDraft] = useDrafter();

  if (loading) {
    return <div>loading...</div>;
  }

  const handleSend = (message: string) => {
    if (!message) {
      setError("Please enter a message");
      return;
    }

    sendMessage(message);
    setDraft("");
  };

  return (
    <div className="flex h-20 absolute bottom-0 left-0 bg-white w-full border-2 border-slate-800">
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={() => handleSend(draft)}>send message as {userId}</button>
      {error && <div>{error}</div>}
    </div>
  );
}
