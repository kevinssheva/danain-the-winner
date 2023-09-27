import { prisma } from "@/app/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "No session" }, { status: 400 });
    }

    try {
        // find companyId of the founder first
        const company = await prisma.company.findFirst({
            where: {
                userId: (session.user as User).id,
            },
        });

        if (!company) {
            return NextResponse.json({ error: "No company" }, { status: 400 });
        }

        const transactions = await prisma.transaction.findMany({
            where: {
                companyId: company.id,
            },
            include: {
                user: true,
            }
        });
        return NextResponse.json({ message: "Transactions successfully retrieved", transactions }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}