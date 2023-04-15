import { UserContext } from "@/context";
import { Message } from "@/types";
import classNames from "classnames";
import { format } from "date-fns";
import { useContext } from "react";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const { userId } = useContext(UserContext);

  return (
    <div className="flex flex-col">
      <div
        className={classNames("bg-slate-200 rounded-md p-2 w-fit max-w-[50%]", {
          "self-end": message.userId === userId,
          "border-2 border-red-900": message.failed,
        })}
      >
        <p
          className={classNames("font-semibold", {
            "text-right": message.userId === userId,
          })}
        >
          {message.userId}
        </p>
        <p className="">{message.text}</p>
        <p className="text-sm font-thin text-right w-full">
          {format(new Date(message.datetime), "hh:mm a")}
        </p>
      </div>
      {message.failed && <span className="text-red-800">Error, message not sent</span>}
    </div>
  );
}
