import useDrafter from "@/hooks/useDrafter";
import useMessageSender from "@/hooks/useMessageSender";
import classNames from "classnames";
import { useState } from "react";

export default function MessageInput() {
  const [loading, sendMessage] = useMessageSender();
  const [error, setError] = useState("");
  const [draft, setDraft] = useDrafter();

  const handleSend = (message: string) => {
    if (!message.trim()) {
      setError("Please enter a message.");
      return;
    }

    sendMessage(message);
    setDraft("");
  };

  const handleChange = (value: string) => {
    setError("");
    setDraft(value);
  };

  return (
    <div className="flex flex-col h-24 absolute bottom-0 left-0  w-full items-center">
      <div className="flex w-full mx-4 border-t-2 border-slate-200">
        <textarea
          cols={2}
          value={draft}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Type your message"
          className=" resize-none px-4 py-2 flex-1 focus:outline-none ring-0 scrollbar-thumb scrollbar-thumb-transparent group-hover/chatbox:scrollbar-thumb-gray-200 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent"
        />
        <button onClick={() => handleSend(draft)}>{loading ? "..." : "send"}</button>
      </div>
      <div
        className={classNames(
          "text-sm text-left w-full px-4 visible text-red-400 absolute bottom-1",
          {
            invisible: !error,
          }
        )}
      >
        {error}
      </div>
    </div>
  );
}
