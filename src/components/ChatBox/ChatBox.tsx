import { MessageList, Sidebar } from "@/components";
import MessageInput from "./MessageInput/MessageInput";

export default function ChatBox() {
  return (
    <div className="flex flex-1 bg-slate-100 justify-center my-20 p-4">
      <div className="w-3/4 h-full flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <MessageList />
          <MessageInput />
        </div>
      </div>
    </div>
  );
}
