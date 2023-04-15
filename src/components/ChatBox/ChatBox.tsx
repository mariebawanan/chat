import { MessageList, Sidebar } from "@/components";
import MessageInput from "./MessageInput/MessageInput";

export default function ChatBox() {
  return (
    <div className="flex flex-1  justify-center p-4">
      <div className="w-3/4 flex h-3/4 ">
        <Sidebar />
        <div className="flex flex-col flex-1 relative">
          <MessageList />
          <MessageInput />
        </div>
      </div>
    </div>
  );
}
