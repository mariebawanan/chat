import classNames from "classnames";

interface Props {
  isSelf: boolean;
  failed?: boolean;
  text: string;
}

export default function MessageBubble({ isSelf, failed, text }: Props) {
  return (
    <div
      className={classNames("p-2 border  rounded-md shadow relative min-h-[38px]", {
        "border-red-900 bg-red-100": failed,
        "border-slate-300": !failed,
      })}
    >
      <div
        className={classNames("absolute  border-t border-r w-3 h-3 rounded-sm top-3", {
          "right-0 translate-x-1/2 rotate-45": isSelf,
          "left-0 -translate-x-1/2 -rotate-[135deg]": !isSelf,
          "border-slate-300 bg-white ": !failed,
          "border-red-900 bg-red-100": failed,
        })}
      />
      <p className={classNames({ "italic text-gray-300": !text })}>
        {text || "Empty Message"}
      </p>
    </div>
  );
}
