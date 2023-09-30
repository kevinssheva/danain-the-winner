import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

import { prisma } from "@/app/lib/prisma";


export const currentProfilePages = async (authOptions: NextApiRequest, req: NextApiRequest, res: NextApiResponse) => {
    const user = await getServerSession(req, res, authOptions);

    if (!user) {
        return null;
    }

  const getUser = await prisma.user.findUnique({
    where: {
      email:  user.user?.email as string
    }
  });

  return getUser;
}