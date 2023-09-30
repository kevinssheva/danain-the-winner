import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/app/lib/prisma";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: (session?.user as User)?.id,
    },
  });

  const company = await prisma.company.findFirst({
    where: {
      userId: (session?.user as User)?.id,
    },
    include: {
      user: true,
      transactions: true
    }
  });

  console.log("session?.user", session?.user)
  return (
    <div className="bg-background min-h-screen">
      <Image
        src="/dashboard/investor/kotakkanan.svg"
        alt="kotakkanan"
        width={700}
        height={400}
        className="right-0 top-0 absolute"
      />

      <div className="h-full min-h-screen bg-none md:bg-[url('/dashboard/investor/glowatas.svg')] bg-no-repeat bg-right-top">
        <div className="h-full min-h-screen bg-[url('/dashboard/investor/glowtengah.svg')] bg-no-repeat">
          <div className="h-full min-h-screen bg-none md:bg-[url('/dashboard/investor/glowbawah.svg')] bg-no-repeat bg-right-bottom">
            <div className="h-full min-h-screen bg-[url('/dashboard/investor/kotakkiri.svg')] bg-no-repeat bg-left-bottom">
              <Home user={user} company={company || null || undefined} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
