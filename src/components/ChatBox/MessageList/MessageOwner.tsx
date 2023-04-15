import classNames from "classnames";

interface Props {
  userId: string;
  isSelf: boolean;
}

export default function MessageOwner({ userId, isSelf }: Props) {
  return (
    <p
      className={classNames("font-semibold", {
        "text-right": isSelf,
      })}
    >
      {userId}
    </p>
  );
}
