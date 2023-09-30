import { prisma } from "@/app/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { S3Post } from "@/utils/s3";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "No session" }, { status: 400 });
  }

  try {
    const company = await prisma.company.findFirst({
      where: {
        userId: (session.user as User).id,
      },
      include: {
        user: true,
        categories: {
          select: {
            name: true,
          },
        },
      },
    });
    return NextResponse.json(
      { message: "Company successfully retrieved", company },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "No session" }, { status: 400 });
  }

  const data = await req.formData();
  const name = data.get("name") as string;
  const address = data.get("address") as string;
  const tagline = data.get("tagline") as string;
  const founder = data.get("founder") as string;
  const video = data.get("video") as string;
  const minimum = data.get("minimum") as string;
  const maximum = data.get("maximum") as string;
  const instagram = data.get("instagram") as string;
  const linkedin = data.get("linkedin") as string;
  const website = data.get("website") as string;
  const category = data.get("category") as string;
  const coverPhoto = data.get("coverPhoto") as File;
  const pitchDeck = data.get("pitchDeck") as File;
  const pitchDescription = data.get("pitchdesc") as string;

  try {
    const company = await prisma.company.findFirst({
      where: {
        userId: (session.user as User).id,
      },
    });

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 400 });
    }

    let postImage, postPitchDeck;
    if (coverPhoto) {
      postImage = await S3Post(coverPhoto as File, "company");
    }

    if (pitchDeck) {
      postPitchDeck = await S3Post(pitchDeck as File, "pitchDeck");
    }

    const updateCompany = await prisma.company.update({
      where: {
        id: company.id,
      },
      data: {
        companyName: name,
        companyPlace : address,
        tagline,
        videoProfile : video,
        minRaise : minimum,
        money : maximum,
        instagram,
        linkedin,
        website,
        pitchDescription,
        coverPhoto: postImage,
        pitchDeck: postPitchDeck,
      },
    });
    return NextResponse.json(
        { message: "Company successfully updated", updateCompany },
        { status: 200 }
      );
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
