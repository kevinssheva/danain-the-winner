"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import Authbutton from "@/components/Authbutton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function Registercomp() {
  const router = useRouter();
  const [data, setData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    password: "",
  });

  const handleRegisterWithCrentials = async () => {
    try {
      // send post request to /api/v1/user/register/founder
      const registerResponse = await fetch(process.env.NEXT_PUBLIC_WEB_URL + "/api/v1/user/register/founder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if register complete, signin with credentials from res
      if (registerResponse.status === 201) {
        const loginResponse = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
          callbackUrl: "/",
        });

        if (loginResponse?.error) {
          toast.error(loginResponse.error);
          throw new Error(loginResponse.error);
        } else {
          toast.success("Register success!");
          router.push('/');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      const res = await signIn("google");
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterWithFacebook = async () => {
    try {
      const res = await signIn("facebook");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="py-24 px-12 flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="px-32 py-0">
          <h1 className="font-neuro text-3xl lg:text-5xl mb-2">Registration</h1>
          <p className="text-xl lg:text-3xl font-medium font-inter mb-8">
            Hello, Founders!
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            <Authbutton
              type="facebook"
              text="Continue with Facebook"
              onClick={() => handleRegisterWithFacebook()}
            />
            <Authbutton
              type="google"
              text="Continue with Google"
              onClick={() => handleRegisterWithGoogle()}
            />
          </div>

          <div className="flex gap-8 my-4 items-center justify-center">
            <div className="bg-white h-[2px] w-[50%]"></div>
            <p className="text-center">OR</p>
            <div className="bg-white h-[2px] w-[50%]"></div>
          </div>

          <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col w-80 gap-2">
                <label>Full Name</label>
                <input
                  className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
                  type="text"
                  placeholder="Enter your Fullname"
                  onChange={(e) =>
                    setData({ ...data, fullName: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Company Name</label>
                <input
                  className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
                  type="text"
                  placeholder="Enter your Company Name"
                  onChange={(e) =>
                    setData({ ...data, companyName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col w-80 gap-3">
                <label>Email</label>
                <input
                  className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label>Password</label>
                <input
                  className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              text="Register"
              isPrimary={true}
              onClick={() => handleRegisterWithCrentials()}
              fullWidth={false}
            />
          </div>
          <p className="text-center">
            Already have account? <Link href="/login" className="underline">Login</Link>
          </p>
        </div>
      </div>
      <Image
        src="/registercompany/gambar.svg"
        width={209}
        height={200}
        alt="Danain"
        className="w-1/2 lg:w-[25%] lg:animate-inverseFloat"
      />
    </div>
  );
}
