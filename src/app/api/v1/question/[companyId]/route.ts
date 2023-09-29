import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { companyId: string } }) {
    const { companyId } = params;

    if (!companyId) {
        return NextResponse.json({ error: "Missing company ID" }, { status: 400 });
    }

    try {
        const questions = await prisma.question.findMany({
            where: {
                companyId,
            },
            include: {
                user: true,
            },
        });

        if (!questions) {
            return NextResponse.json({ error: "Questions not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Questions successfully retrieved", questions }, { status: 200 });
    } catch (error) {
        console.error("Error retrieving questions:", error);
        return NextResponse.json({ error: "Error retrieving questions" }, { status: 500 });
    }
}

export async function POST(req: NextRequest, { params }: { params: { companyId: string } }) {
    const { companyId } = params;

    if (!companyId) {
        return NextResponse.json({ error: "Missing company ID" }, { status: 400 });
    }

    const body = await req.json();

    if (!body) {
        return NextResponse.json({ error: "Missing body" }, { status: 400 });
    }

    const { question, userId } = body;

    if (!question) {
        return NextResponse.json({ error: "Missing question" }, { status: 400 });
    }

    if (!userId) {
        return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }

    try {
        const createdQuestion = await prisma.question.create({
            data: {
                question,
                user: {
                    connect: {
                        id: userId,
                    },
                },
                company: {
                    connect: {
                        id: companyId,
                    },
                },
            },
            include: {
                user: true,
            },
        });

        if (!createdQuestion) {
            return NextResponse.json({ error: "Question not created" }, { status: 404 });
        }

        return NextResponse.json({ message: "Question successfully created", createdQuestion }, { status: 201 });
    } catch (error) {
        console.error("Error creating question:", error);
        return NextResponse.json({ error: "Error creating question" }, { status: 500 });
    }
}