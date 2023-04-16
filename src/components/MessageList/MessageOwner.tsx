import { UserAvatars } from "@/types";
import classNames from "classnames";

interface Props {
  userId: string;
  isSelf: boolean;
}

export default function MessageOwner({ userId, isSelf }: Props) {
  return (
    <p
      className={classNames("text-xs font-thin", {
        "text-right": isSelf,
      })}
    >
      <img
        src={UserAvatars[`${userId}`]}
        alt="user avatar"
        className=" w-8 h-auto rounded-full"
      />
      {userId}
    </p>
  );
}
