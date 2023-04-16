interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SectionLayout({ title, children }: Props) {
  return (
    <div className="shadow bg-white rounded-lg py-6 px-4 flex flex-col space-y-4">
      <span className="text-2xl font-bold text-slate-600 font-serif pb-2 border-b border-slate-200">
        {title}
      </span>
      {children}
    </div>
  );
}
