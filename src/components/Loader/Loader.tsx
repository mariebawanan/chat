export default function Loader() {
  return (
    <div className="flex flex-col w-full h-full space-y-4 p-4">
      <div className="flex space-x-2 animate-pulse">
        <div className="rounded-full w-8 h-8 bg-slate-200" />
        <div className="rounded-md w-44 h-20 bg-slate-200" />
      </div>

      <div className="flex space-x-2 animate-pulse justify-end">
        <div className="rounded-md w-44 h-20 bg-slate-200" />
        <div className="rounded-full w-8 h-8 bg-slate-200" />
      </div>

      <div className="flex space-x-2 animate-pulse justify-end">
        <div className="rounded-md w-44 h-20 bg-slate-200" />
        <div className="rounded-full w-8 h-8 bg-slate-200" />
      </div>

      <div className="flex space-x-2 animate-pulse">
        <div className="rounded-full w-8 h-8 bg-slate-200" />
        <div className="rounded-md w-44 h-20 bg-slate-200" />
      </div>
    </div>
  );
}
