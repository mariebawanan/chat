import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  message: string;
}

export default function Error({ message }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full flex-1 flex-col space-y-4">
      <FontAwesomeIcon icon={faExclamationCircle} className="text-4xl text-red-300" />
      <span className="text">Error: {message}</span>
    </div>
  );
}
