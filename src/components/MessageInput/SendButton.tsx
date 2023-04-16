import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface Props {
  loading: boolean;
  onClick: () => void;
}

export default function SendButton({ loading, onClick }: Props) {
  return (
    <button
      data-testid="send-button"
      disabled={loading}
      onClick={onClick}
      className={classNames(
        "rounded-full p-2 border bg-sky-200 h-12 w-12 flex items-center justify-center self-center mr-3 drop-shadow-lg",
        {
          "cursor-not-allowed hover:none bg-opacity-20": loading,
        }
      )}
    >
      <FontAwesomeIcon
        data-testid="send-icon"
        className={classNames("text-slate-500", { "animate-spin": loading })}
        icon={loading ? faSpinner : faPaperPlane}
      />
    </button>
  );
}
