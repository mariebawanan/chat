import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="flex justify-center w-full bg-slate-200 py-4 absolute top-0 h-16 shadow">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 justify-between md:items-end px-4 md:px-0">
        <div className="flex space-x-4 items-center">
          <FontAwesomeIcon icon={faComments} className="text-3xl text-black" />
          <h1 className="font-bold text-lg">1-Day Chat App</h1>
        </div>

        <span className="italic text-sm">
          All messages will be deleted at every 00:00 UTC
        </span>
      </div>
    </div>
  );
}
