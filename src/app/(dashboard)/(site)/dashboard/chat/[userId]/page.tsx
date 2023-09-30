import Chat from "../components/Chat";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { UserSession } from "@/components/UserFetcher";
import { getOrCreateConversation } from "@/app/lib/conversation";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";

interface Session {
  user: UserSession | undefined;
}

export default async function Portopage({ params }: { params: { userId: string } }) {
  const session = await getServerSession(authOptions) as Session;

  if (!session.user) {
    return redirect("/login")
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    }
  });

  if (!currentUser) {
    return redirect("/login")
  }

  const conversation = await getOrCreateConversation(session.user?.id, params.userId);

  if (!conversation) {
    return redirect(`/dashboard/chat`);
  }

  const { userOne, userTwo } = conversation;

  const otherUser = userOne.id === session.user.id ? userTwo : userOne;

  return (
    <div className="bg-background h-full min-h-screen overflow-hidden">
      <div className="bg-[url('/dashboard/portofolio/kotakkanan.svg')] h-full min-h-screen bg-no-repeat bg-right">
        <div className="bg-[url('/dashboard/portofolio/kotakbawah.svg')] h-full min-h-screen bg-no-repeat bg-left-bottom">
          <div className="bg-[url('/dashboard/portofolio/glowbawah.svg')] h-full min-h-screen bg-no-repeat bg-left">
            <div className="bg-[url('/dashboard/portofolio/kotakatas.svg')] h-full min-h-screen bg-no-repeat bg-right-top">
              <div className="bg-none md:bg-[url('/dashboard/portofolio/glowatas.svg')] h-full min-h-screen bg-no-repeat bg-right-top">
                <div className="bg-none md:bg-[url('/dashboard/portofolio/glowkanan.svg')] h-full min-h-screen bg-no-repeat bg-right-bottom">
                  <Chat
                    user={currentUser}
                    otherUser={otherUser}
                    chatId={conversation.id}
                    apiUrl="/api/v1/message"
                    paramKey="conversationId"
                    paramValue={conversation.id}
                    socketUrl="/api/socket/messages"
                    socketQuery={{
                      conversationId: conversation.id,
                    }}
                    query={{ 
                      conversationId: conversation.id,
                     }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
