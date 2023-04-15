import { ChannelContext, MessageContext } from "@/context";
import useMessageFetcher from "@/hooks/useMessageFetcher";
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
      <div className="h-12 absolute top-0 flex items-center px-4 text-2xl font-serif bg-slate-100 w-full">
        {channelId}
      </div>
      <div className="flex text-sm px-4 flex-col ">
        <ReadMore
          loading={loading}
          onClick={() => fetchMessages(true)}
          disabled={loading && isOld}
        />

        <div className="flex flex-col-reverse">{children}</div>

        <ReadMore
          loading={loading}
          onClick={() => fetchMessages(false)}
          disabled={loading && !isOld}
        />
      </div>
    </div>
  );
}
