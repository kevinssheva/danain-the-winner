import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = params;

    if (!userId) {
        return NextResponse.json({ error: "userId not provided" }, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User successfully retrieved", user }, { status: 200 });
    } catch (error) {
        console.error("Error retrieving user:", error);
        return NextResponse.json({ error: "Error retrieving user" }, { status: 500 });
    }
}

// ONLY UPDATE ROLE
export async function PATCH(req: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = params;

    if (!userId) {
        return NextResponse.json({ error: "userId not provided" }, { status: 400 });
    }

    const body = await req.json();

    if (!body) {
        return NextResponse.json({ error: "Missing body" }, { status: 400 });
    }

    const { role } = body;

    // update role
    try {
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                role: role
            }
        });

        return NextResponse.json({ message: "User successfully updated", user }, { status: 201 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Error updating user" }, { status: 500 });
    }
}
