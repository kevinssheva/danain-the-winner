import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { companyId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "No session" }, { status: 400 });
  }

  const { companyId } = params;

  if (!companyId) {
    return NextResponse.json(
      { error: "companyId not provided" },
      { status: 400 }
    );
  }

  const {
    companyName,
    companyPlace,
    pitchDeck,
    tagline,
    coverPhoto,
    videoProfile,
    pitchDescription,
    money,
    category,
    website,
    instagram,
    linkedin,
  } = await req.json();

  try {
    const company = await prisma.company.update({
      where: {
        id: companyId,
      },
      data: {
        companyName,
        companyPlace,
        pitchDeck,
        tagline,
        coverPhoto,
        videoProfile,
        pitchDescription,
        money,
        category,
        website,
        instagram,
        linkedin,
      },
    });

    return NextResponse.json(
      { message: "Company successfully updated", company },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating company:", error);
    return NextResponse.json({ error: "Error updating company" }, { status: 500 });
  }
}
