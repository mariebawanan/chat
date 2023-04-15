import ChannelList from "./ChannelList";
import UserSwitcher from "./UserSwitcher";

export default function Sidebar() {
  return (
    <div className="flex flex-col space-y-8 w-1/4 p-4">
      <UserSwitcher />
      <ChannelList />
    </div>
  );
}
