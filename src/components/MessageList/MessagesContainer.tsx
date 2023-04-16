import { ChannelContext, MessageContext } from "@/context";
import useMessageFetcher from "@/hooks/useMessageFetcher";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef } from "react";
import ReadMore from "./ReadMore";

interface Props {
  children: React.ReactNode;
}

export default function MessagesContainer({ children }: Props) {
  const { loading, fetchMessages } = useMessageFetcher();
  const { messages, isOld } = useContext(MessageContext);
  const { channelId } = useContext(ChannelContext);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef || !listRef.current) return;

    // Scroll to bottom if new message is sent or fetching new messages
    // Scroll to top if old message
    listRef.current.scrollTo({
      top: isOld ? 0 : listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [listRef, messages, isOld]);

  return (
    <div
      ref={listRef}
      className="h-full overflow-y-auto scrollbar-thumb scrollbar-thumb-transparent group-hover/chatbox:scrollbar-thumb-gray-200 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent"
    >
      <div className="h-16 z-1 absolute top-0 flex items-center py-6 px-4 text-2xl font-serif bg-slate-100 w-ful font-bold text-slate-600 pb-2 border-b border-slate-200 w-full">
        {channelId}
      </div>
      <div className="flex text-sm px-4 flex-col ">
        <ReadMore
          label="Read older messages"
          loading={loading && isOld}
          onClick={() => fetchMessages(true)}
          icon={<FontAwesomeIcon icon={faArrowUp} />}
          className="top-20"
        />

        <div className="flex flex-col-reverse">{children}</div>

        <ReadMore
          label="Read new messages"
          loading={loading && !isOld}
          onClick={() => fetchMessages(false)}
          icon={<FontAwesomeIcon icon={faArrowDown} />}
          className="bottom-24"
        />
      </div>
    </div>
  );
}
