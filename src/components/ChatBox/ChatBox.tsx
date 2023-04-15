import { MessageList, Sidebar } from "@/components";
import MessageInput from "./MessageInput/MessageInput";

export default function ChatBox() {
  return (
    <div className="flex justify-center items-center p-4 flex-1 bg-gradient-to-r from-sky-100">
      <div className="w-3/4 flex h-3/4 space-x-12">
        <Sidebar />
        <div className="flex flex-col flex-1 relative group/chatbox">
          <div className="flex-1 h-full pt-14 pb-28 bg-white drop-shadow-lg rounded-lg">
            <MessageList />
          </div>
          <MessageInput />
        </div>
      </div>
    </div>
  );
}
