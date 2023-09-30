import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { companyId: string, userId: string } }) {
    const { companyId, userId } = params;

    if (!companyId) {
        return NextResponse.json({ error: "Missing company ID" }, { status: 400 });
    };

    if (!userId) {
        return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    };

    try {
        const transaction = await prisma.transaction.findFirst({
            where: {
                company: {
                    id: companyId
                },
                user: {
                    id: userId
                }
            }
        });

        return NextResponse.json({ message: "Transaction successfully retrieved", transaction }, { status: 200 });
    } catch (error) {
        console.error("Error retrieving transaction:", error);
        return NextResponse.json({ error: "Error retrieving transaction" }, { status: 500 });
    }
}


