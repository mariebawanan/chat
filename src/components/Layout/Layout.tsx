import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex relative text-base w-full h-screen pt-11 overflow-hidden">
      <Header />
      {children}
    </div>
  );
}
