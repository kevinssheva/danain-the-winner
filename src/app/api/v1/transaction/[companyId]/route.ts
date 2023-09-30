import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { companyId: string } }) {
    const { companyId } = params;

    if (!companyId) {
        return NextResponse.json({ error: "companyId not provided" }, { status: 400 });
    }

    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                companyId: companyId
            }
        });

        return NextResponse.json({ message: "Transactions successfully retrieved", transactions }, { status: 200 });
    } catch (error) {
        console.error("Error retrieving transactions:", error);
        return NextResponse.json({ error: "Error retrieving transactions" }, { status: 500 });
    }
}