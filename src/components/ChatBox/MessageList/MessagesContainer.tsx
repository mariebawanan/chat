import useMessageFetcher from "@/hooks/useMessageFetcher";

interface Props {
  children: React.ReactNode;
}

export default function MessagesContainer({ children }: Props) {
  const { loading, isOld, fetchMessages } = useMessageFetcher();

  return (
    <div className="flex flex-col overflow-scroll h-full">
      {loading && isOld ? (
        <span>fetching messages...</span>
      ) : (
        <button onClick={() => fetchMessages(true)}>Previous</button>
      )}
      <div className="flex flex-col-reverse space-y-3">{children}</div>
      {loading && !isOld ? (
        <span>fetching messages...</span>
      ) : (
        <button onClick={() => fetchMessages(false)}>Next</button>
      )}
    </div>
  );
}
