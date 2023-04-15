export default function Header() {
  return (
    <div className="flex justify-center w-full bg-slate-200 py-4 absolute top-0 h-16">
      <div className="flex w-3/4 justify-between items-end">
        <h1 className="font-bold text-3xl">1-Day Chat App</h1>
        <span className="italic text-sm">
          All messages will be deleted at every 00:00 UTC
        </span>
      </div>
    </div>
  );
}
