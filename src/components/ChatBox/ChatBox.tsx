import MessageList from "./MessageList";
import Sidebar from "./Sidebar/Sidebar";

export default function ChatBox() {
  return (
    <div className="flex flex-1 bg-slate-100 justify-center my-20 p-4">
      <div className="w-3/4 h-full flex">
        <Sidebar />
        <MessageList />
      </div>
    </div>
  );
}
