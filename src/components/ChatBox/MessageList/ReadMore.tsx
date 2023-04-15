import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface Props {
  onClick: () => void;
  loading: boolean;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function ReadMore({
  onClick,
  loading,
  label = "Read More",
  icon,
  className,
}: Props) {
  if (loading) {
    return (
      <div
        className={classNames(
          "px-4 py-1 self-center italic flex space-x-2 items-center bg-slate-200 rounded-xl absolute left-1/2 -translate-x-1/2 z-10",
          className
        )}
      >
        <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
        <span>Fetching messages...</span>
      </div>
    );
  }

  return (
    <button
      className={classNames(
        "px-4 py-1 self-center italic flex space-x-2 items-center hover:underline bg-slate-200 rounded-xl absolute left-1/2 -translate-x-1/2 z-10",
        className
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
}
