import ChannelList from "./ChannelList";
import UserSwitcher from "./UserSwitcher";

export default function Sidebar() {
  return (
    <div className="flex flex-col space-y-2 w-1/4 bg-red-100 p-4">
      <UserSwitcher />
      <ChannelList />
    </div>
  );
}
