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
    const user = await prisma.user.findFirst({
      where: {
        id: (session.user as User).id,
      },
    });
    return NextResponse.json(
      { message: "user successfully retrieved", user },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "No session" }, { status: 400 });
  }

  const data = await req.formData();
  const fullname = data.get("fullname");
  const email = data.get("email");
  const description = data.get("description");
  const instagram = data.get("instagram");
  const linkedin = data.get("linkedin");
  const cv = data.get("cv");
  const profilePicture = data.get("profilePicture");

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email as string,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    let postImage, postCv
    if (profilePicture) {
        postImage = await S3Post(profilePicture as File, "profilePicture")
    }

    if (cv) {
        postCv = await S3Post(cv as File, "cv")
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        fullName: fullname as string,
        email: email as string,
        description: description as string,
        instagram: `https://www.instagram.com/${instagram}`,
        linkedIn: `https://www.linkedin.com/in/${linkedin}`,
        cv: postCv,
        profilePicture: postImage,
      },
    });

    return NextResponse.json(
      { message: "user successfully updated", updatedUser },
      { status: 200 }
    );
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
