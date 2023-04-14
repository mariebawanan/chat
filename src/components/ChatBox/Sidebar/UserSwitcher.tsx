import { Dropdown } from "@/components";
import { UserContext } from "@/context/userContext";
import { Option, User } from "@/types";
import { useContext } from "react";

const userList: Option[] = [
  {
    label: User.Joyse,
    value: User.Joyse,
  },
  {
    label: User.Sam,
    value: User.Sam,
  },
  {
    label: User.Russell,
    value: User.Russell,
  },
];

export default function UserSwitcher() {
  const { userId, setUserId } = useContext(UserContext);

  const handleUserChange = (value: string) => {
    setUserId(value);
  };

  return (
    <Dropdown
      label="Choose your user"
      options={userList}
      value={userId}
      onChange={handleUserChange}
    />
  );
}
