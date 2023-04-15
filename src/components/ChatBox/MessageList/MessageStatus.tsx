import { faCheckCircle, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { format } from "date-fns";

interface Props {
  isSelf: boolean;
  failed?: boolean;
  datetime: Date;
}

export default function MessageStatus({ isSelf, failed, datetime }: Props) {
  return (
    <div
      className={classNames("text-xs font-thin w-full flex flex-col", {
        "text-right": isSelf,
        "text-left": !isSelf,
      })}
    >
      <div className="flex space-x-2 items-center text-xs">
        <FontAwesomeIcon
          className={classNames({ "text-emerald-200": !failed, "text-red-300": failed })}
          icon={failed ? faCircleExclamation : faCheckCircle}
        />
        {failed && <p className="text-red-800">Message not sent</p>}
        <span>{format(new Date(datetime), "hh:mm a")}</span>
      </div>
    </div>
  );
}
