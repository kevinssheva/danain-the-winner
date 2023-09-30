import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { hash } from "bcryptjs"

export async function PATCH(
  req: NextRequest,
  { params }: { params: { investorId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "No session" }, { status: 400 });
  }

  const { investorId } = params;

  if (!investorId) {
    return NextResponse.json(
      { error: "investorId not provided" },
      { status: 400 }
    );
  }

  const {
    fullName,
    email,
    description,
    newPassword,
    confirmPassword,
  } = await req.json();

  try {
    if(newPassword !== confirmPassword) return NextResponse.json({ error: "Password not match" }, { status: 400 });

    const user = await prisma.user.update({
      where: {
        id: investorId,
      },
      data: {
        fullName,
        email,
        description,
        password: await hash(newPassword, 10),
      },
    });

    return NextResponse.json(
      { message: "User successfully updated", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating company:", error);
    return NextResponse.json({ error: "Error updating company" }, { status: 500 });
  }
}
