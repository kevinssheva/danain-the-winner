import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ message: "Users successfully retrieved", users }, { status: 200 });
    } catch (error) {
        console.error("Error retrieving users:", error);
        return NextResponse.json({ error: "Error retrieving users" }, { status: 500 });
    }
}