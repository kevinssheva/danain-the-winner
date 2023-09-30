import { prisma } from "@/app/lib/prisma";

export const getOrCreateConversation = async (userOneId: string, userTwoId: string) => {
    let conversation = await findConversation(userOneId, userTwoId) || await findConversation(userTwoId, userOneId);
  
    if (!conversation) {
      conversation = await createNewConversation(userOneId, userTwoId);
    }
  
    return conversation;
  }
  
  const findConversation = async (userOneId: string, userTwoId: string) => {
    try {
      return await prisma.conversation.findFirst({
        where: {
          AND: [
            { userOneId: userOneId },
            { userTwoId: userTwoId },
          ]
        },
        include: {
          userOne: true,
          userTwo: true
        }
      });
    } catch {
      return null;
    }
  }
  
const createNewConversation: (userOneId: string, userTwoId: string) => Promise<any> = async (userOneId: string, userTwoId: string) => {
    try {
      return await prisma.conversation.create({
        data: {
          userOneId,
          userTwoId,
        },
        include: {
          userOne: true,
          userTwo: true
        }
      })
    } catch {
      return null;
    }
  }