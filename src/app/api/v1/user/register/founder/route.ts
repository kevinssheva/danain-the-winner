import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs"

// Register a new user with role of "FOUNDER", before registering a new user, check if the user already exists
export async function POST(req: NextRequest) {
    try {
        const { fullName, companyName, email, password } = await req.json();

        if (!email || !password || !fullName || !companyName) {
            throw new Error("Email, password, full name, and company name are required");
        }

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (user) {
            throw new Error(`User with email of ${user.email} already exists`);
        }

        // Create the user, and create its profile
        const newUser = await prisma.user.create({
            data: {
                fullName,
                email,
                password: await hash(password, 10),
                role: "FOUNDER",
                company: {
                    create: {
                        companyName
                    },
                },
            },
        });

        return NextResponse.json({ message: "User successfully created", user: newUser }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
}
