import { NextApiRequest } from "next";
import { User } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextApiResponseServerIo } from "@/types";
import { prisma } from "@/app/lib/prisma";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo,
) {
  if (req.method !== "DELETE" && req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const session = await getServerSession(authOptions);
    const { messageId, conversationId } = req.query;
    const { content } = req.body;

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!conversationId) {
      return res.status(400).json({ error: "Conversation ID missing" });
    }

    const conversation = await prisma.conversation.findFirst({
        where: {
          id: conversationId as string,
          OR: [
            {
              userOne: {
                id: (session.user as User).id,
              }
            },
            {
              userTwo: {
                id: (session.user as User).id,
              }
            }
          ]
        },
        include: {
          userOne: true,
          userTwo: true
        }
      })

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    const user = conversation.userOne.id === (session.user as User).id ? conversation.userOne : conversation.userTwo

    if (!user) {
      return res.status(404).json({ message: "Member not found" });
    }

    let message = await prisma.message.findFirst({
      where: {
        id: messageId as string,
        conversationId: conversationId as string,
      },
      include: {
        user: true
      }
    })

    if (!message || message.deleted) {
      return res.status(404).json({ error: "Message not found" });
    }

    const isMessageOwner = message.userId === user.id;

    if (!isMessageOwner) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (req.method === "DELETE") {
      message = await prisma.message.update({
        where: {
          id: messageId as string,
        },
        data: {
          fileUrl: null,
          content: "This message has been deleted.",
          deleted: true,
        },
        include: {
          user: true
        }
      })
    }

    if (req.method === "PATCH") {
      if (!isMessageOwner) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      message = await prisma.message.update({
        where: {
          id: messageId as string,
        },
        data: {
          content,
        },
        include: {
          user: true
        }
      })
    }

    const updateKey = `chat:${conversation.id}:messages:update`;

    res?.socket?.server?.io?.emit(updateKey, message);

    return res.status(200).json(message);
  } catch (error) {
    console.log("[MESSAGE_ID]", error);
    return res.status(500).json({ error: "Internal Error" });
  }
}