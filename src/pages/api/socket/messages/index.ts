import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextApiResponseServerIo } from "@/types";
import { prisma } from "@/app/lib/prisma";
import { currentProfilePages } from "@/app/lib/currentProfile";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const session = await currentProfilePages(req, req, res);
    const { content } = await req.body;
    const { conversationId } = req.query;
    
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }    
  
    if (!conversationId) {
      return res.status(400).json({ error: "Conversation ID missing" });
    }
          
    if (!content) {
      return res.status(400).json({ error: "Content missing" });
    }


    const conversation = await prisma.conversation.findFirst({
      where: {
        id: conversationId as string,
        OR: [
          {
            userOne: {
              id: session.id,
            }
          },
          {
            userTwo: {
              id: session.id,
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
      return res.status(404).json({ message: "Conversation not found" });
    }

    const user = conversation.userOne.id === session.id ? conversation.userOne : conversation.userTwo

    if (!user) {
      return res.status(404).json({ message: "Member not found" });
    }

    const message = await prisma.message.create({
      data: {
        content,
        conversationId: conversationId as string,
        userId: user.id,
      },
      include: {
        user: true
      }
    });

    const channelKey = `chat:${conversationId}:messages`;

    res?.socket?.server?.io?.emit(channelKey, message);

    return res.status(200).json(message);
  } catch (error) {
    console.log("[DIRECT_MESSAGES_POST]", error);
    return res.status(500).json({ message: "Internal Error" }); 
  }
}