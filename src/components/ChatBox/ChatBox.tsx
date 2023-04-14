import Channels from "./Channels";
import Messages from "./Messages";

export default function ChatBox() {
  return (
    <div className="flex flex-1 bg-slate-100 justify-center">
      <div className="w-3/4 bg-red-100 my-20 flex">
        <Channels />
        <Messages />
      </div>
    </div>
  );
}
