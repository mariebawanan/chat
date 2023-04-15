import { MessageContext } from "@/context";
import useDrafter from "@/hooks/useDrafter";
import useMessageSender from "@/hooks/useMessageSender";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useContext, useState } from "react";

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
    <div className="flex flex-col h-24 absolute bottom-0 left-0 w-full items-center">
      <div className="flex w-full mx-4 border-t-2 border-slate-200 h-full">
        <textarea
          value={draft}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Type your message..."
          className="h-full resize-none px-4 py-2 flex-1 focus:outline-none ring-0 scrollbar-thumb scrollbar-thumb-transparent group-hover/chatbox:scrollbar-thumb-gray-200 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent"
        />

        <button
          disabled={loading}
          onClick={() => handleSend(draft)}
          className={classNames(
            "rounded-full p-2 border bg-sky-200 h-12 w-12 flex items-center justify-center self-center mr-3 drop-shadow-lg",
            {
              "cursor-not-allowed hover:none bg-opacity-20": loading,
            }
          )}
        >
          <FontAwesomeIcon
            className={classNames("text-slate-500", { "animate-spin": loading })}
            icon={loading ? faSpinner : faPaperPlane}
          />
        </button>
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
