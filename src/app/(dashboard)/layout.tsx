import Sidebar from "./(site)/components/Sidebar";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar role="company" />
      {children}
    </>
  );
}
