import ChatEmpty from "./components/ChatEmpty";
import { prisma } from "@/app/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { Conversation, User } from "@prisma/client";
import { UserSession } from "@/components/UserFetcher";
import { redirect } from "next/navigation";

interface Session {
  user: UserSession | undefined;
}

export default async function Portopage() {
  const session = await getServerSession(authOptions) as Session;

  if (!session.user) {
    redirect("/login")
  }
  const conversation = await prisma.conversation.findMany({
    where: {
      OR: [
        { userOneId: session.user.id },
        { userTwoId: session.user.id },
      ]
    },
    include: {
      userOne: true,
      userTwo: true
    }
  });
  
  return (
    <div className="bg-background h-full min-h-screen overflow-hidden">
      <div className="bg-[url('/dashboard/portofolio/kotakkanan.svg')] h-full min-h-screen bg-no-repeat bg-right">
        <div className="bg-[url('/dashboard/portofolio/kotakbawah.svg')] h-full min-h-screen bg-no-repeat bg-left-bottom">
          <div className="bg-[url('/dashboard/portofolio/glowbawah.svg')] h-full min-h-screen bg-no-repeat bg-left">
            <div className="bg-[url('/dashboard/portofolio/kotakatas.svg')] h-full min-h-screen bg-no-repeat bg-right-top">
              <div className="bg-none md:bg-[url('/dashboard/portofolio/glowatas.svg')] h-full min-h-screen bg-no-repeat bg-right-top">
                <div className="bg-none md:bg-[url('/dashboard/portofolio/glowkanan.svg')] h-full min-h-screen bg-no-repeat bg-right-bottom">
                  <ChatEmpty conversation={conversation} userId={session?.user?.id}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
