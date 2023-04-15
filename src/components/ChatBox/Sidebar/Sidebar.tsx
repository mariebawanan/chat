import ChannelList from "./ChannelList";
import UserSwitcher from "./UserSwitcher";

export default function Sidebar() {
  return (
    <div className="flex flex-col space-y-4 w-full md:w-1/4">
      <UserSwitcher />
      <ChannelList />
    </div>
  );
}
