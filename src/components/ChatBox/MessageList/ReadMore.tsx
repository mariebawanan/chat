import classNames from "classnames";

interface Props {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
}

export default function ReadMore({ onClick, loading, disabled }: Props) {
  return (
    <button
      className={classNames("px-4 py-1 self-center italic", {
        "hover:underline": !loading,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "Fetching messages..." : "Read More"}
    </button>
  );
}
