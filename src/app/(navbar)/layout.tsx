import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import UserFetcher from "@/components/UserFetcher";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider>
        <UserFetcher>{({ user }) => <Navbar user={user} />}</UserFetcher>
        <div>{children}</div>
      </Provider>
    </>
  );
}
