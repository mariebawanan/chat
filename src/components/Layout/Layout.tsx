import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col text-base bg-gray-100 w-full h-screen">
      <Header />
      {children}
    </div>
  );
}
