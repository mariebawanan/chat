import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  message?: string;
}

export default function Spinner({ message }: Props) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center space-y-4">
      <FontAwesomeIcon className="animate-spin text-4xl text-sky-400" icon={faSpinner} />
      <span className="text-center text-gl">{message}...</span>
    </div>
  );
}
