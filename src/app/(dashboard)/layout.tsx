import Sidebar from "./(site)/components/Sidebar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/app/lib/prisma";
import { User } from "@prisma/client";
import { UserSession } from "@/components/UserFetcher";

interface Session {
  user: UserSession | undefined;
}

export default async function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions) as Session;

  return (
    <>
      <Sidebar role={session?.user?.role} />
      {children}
    </>
  );
}
