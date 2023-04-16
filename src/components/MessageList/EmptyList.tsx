import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  channelId: string;
}

export default function EmptyList({ channelId }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full flex-1 flex-col space-y-4">
      <FontAwesomeIcon icon={faPaperPlane} className="text-4xl text-slate-400" />
      <span className="text">No messages in {channelId}</span>
    </div>
  );
}
