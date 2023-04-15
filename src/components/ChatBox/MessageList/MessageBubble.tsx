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

  if (message.failed && message.userId !== userId) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-2 my-4">
      <div
        className={classNames("w-fit flex max-w-[70%] min-w-[130px]", {
          "self-end flex": message.userId === userId,
          "flex-row-reverse": message.userId !== userId,
        })}
      >
        <div className="w-full mx-4 space-y-2">
          <div
            className={classNames(
              "p-2 border  rounded-md shadow-bubble relative min-h-[38px]",
              {
                " border-red-900 bg-red-100": message.failed,
                "border-slate-300": !message.failed,
              }
            )}
          >
            <div
              className={classNames(
                "absolute  border-t border-r w-3 h-3 rounded-sm top-3",
                {
                  "right-0 translate-x-1/2 rotate-45": message.userId === userId,
                  "left-0 -translate-x-1/2 -rotate-[135deg]": message.userId !== userId,
                  "border-slate-300 bg-white ": !message.failed,
                  "border-red-900 bg-red-100": message.failed,
                }
              )}
            />
            <p className={classNames({ "italic text-gray-300": !message.text })}>
              {message.text || "Empty Message"}
            </p>
          </div>
          <p
            className={classNames("text-xs font-thin w-full", {
              "text-right": message.userId === userId,
              "text-left": message.userId !== userId,
            })}
          >
            {format(new Date(message.datetime), "hh:mm a")}{" "}
            {message.failed && (
              <span className="text-red-800">Error: Message not sent</span>
            )}
          </p>
        </div>
        <p
          className={classNames("font-semibold", {
            "text-right": message.userId === userId,
          })}
        >
          {message.userId}
        </p>
      </div>
    </div>
  );
}
