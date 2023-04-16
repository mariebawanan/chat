import { MessageContext } from "@/context";
import useDrafter from "@/hooks/useDrafter";
import useMessageSender from "@/hooks/useMessageSender";
import classNames from "classnames";
import { useContext, useState } from "react";
import SendButton from "./SendButton";

export default function MessageInput() {
  const { setIsOld } = useContext(MessageContext);
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
    setIsOld(false);
  };

  const handleChange = (value: string) => {
    setError("");
    setDraft(value);
  };

  return (
    <div className="flex flex-col absolute bottom-6 left-0 w-full items-center">
      <div className="flex w-full mx-4 h-full">
        <textarea
          value={draft}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Type your message..."
          className="border shadow text-sm rounded-md h-16 mx-4 border-slate-300 resize-none px-4 py-2 flex-1 focus:outline-none ring-0 scrollbar-thumb scrollbar-thumb-transparent group-hover/chatbox:scrollbar-thumb-gray-200 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent"
        />

        <SendButton loading={loading} onClick={() => handleSend(draft)} />
      </div>
      <div
        className={classNames(
          "text-sm text-left w-full px-4 visible text-red-400 absolute -bottom-5 left-1",
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
