import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { companyId: string } }) {
    const { companyId } = params;

    if (!companyId) {
        return NextResponse.json({ error: "Missing company ID" }, { status: 400 });
    }

    try {
        const company = await prisma.company.findUnique({
            where: {
                id: companyId
            },
            include: {
                categories: true,
                user: true,
                questions: {
                    include: {
                        user: true,
                    }
                }
            }
        });

        if (!company) {
            return NextResponse.json({ error: "Company not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Company successfully retrieved", company }, { status: 200 });
    } catch (error) {
        console.error("Error retrieving company:", error);
        return NextResponse.json({ error: "Error retrieving company" }, { status: 500 });
    }
}
