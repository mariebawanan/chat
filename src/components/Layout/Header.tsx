export default function Header() {
  return (
    <div className="flex justify-center w-full bg-gray-300 py-4">
      <div className="flex w-3/4 justify-between items-end">
        <h1 className="font-bold text-3xl">1-Day Chat App</h1>
        <span className="italic text-sm">
          All messages will be deleted at every 00:00 UTC
        </span>
      </div>
    </div>
  );
}
