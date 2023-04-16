import { MessageBubble, MessageOwner, MessageStatus } from "@/components";
import { UserContext } from "@/context";
import { Message } from "@/types";
import classNames from "classnames";
import { useContext } from "react";

interface Props {
  message: Message;
}

export default function MessageItem({ message }: Props) {
  const { userId } = useContext(UserContext);
  const isSelf = message.userId === userId;

  if (message.failed && !isSelf) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2 my-4">
      <div
        className={classNames("w-fit flex max-w-[70%] min-w-[130px]", {
          "self-end flex": isSelf,
          "flex-row-reverse": !isSelf,
        })}
      >
        <div className="w-full mx-4 space-y-2">
          <MessageBubble isSelf={isSelf} text={message.text} failed={message.failed} />
          <MessageStatus
            isSelf={message.userId === userId}
            failed={message.failed}
            datetime={message.datetime}
          />
        </div>

        <MessageOwner userId={message.userId} isSelf={isSelf} />
      </div>
    </div>
  );
}
