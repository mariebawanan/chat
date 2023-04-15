import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col text-base w-full h-screen overflow-hidden">
      <Header />
      {children}
    </div>
  );
}
