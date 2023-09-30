import { prisma } from "@/app/lib/prisma";
import { hash, compare } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { S3Post } from "@/utils/s3";

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
  const oldpassword = data.get("oldpassword") as string;
  const newpassword = data.get("newpassword") as string;
  const confirmpassword = data.get("confirmpassword") as string;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email as string,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    let postImage, postCv, hashedPassword;
    if (oldpassword && newpassword && confirmpassword) {
      const isPasswordValid = await compare(oldpassword, user.password);

      if (!isPasswordValid) {
        return NextResponse.json(
          { error: "Invalid password" },
          { status: 400 }
        );
      }

      if (newpassword !== confirmpassword) {
        return NextResponse.json(
          { error: "Passwords do not match" },
          { status: 400 }
        );
      }

      hashedPassword = await hash(newpassword, 10);
    }

    if (profilePicture) {
      postImage = await S3Post(profilePicture as File, "profilePicture");
    }

    if (cv) {
      postCv = await S3Post(cv as File, "cv");
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
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "user successfully updated", updatedUser },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
