"use client";
import Authbutton from "@/components/Authbutton";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLoginWithCredentials = async () => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });

      if (res?.error) {
        toast.error(res.error);
        throw new Error(res.error);
      } else {
        toast.success("Login success!");
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const res = await signIn("google");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      const res = await signIn("facebook");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="py-10 lg:py-20 px-8 lg:px-24 flex flex-col lg:flex-row-reverse justify-center lg:justify-between">
      <Image src="/login/gambar.svg" width={689} height={500} alt="Danain" className="w-[60%] md:w-1/3 self-center md:animate-inverseFloat" />

      <div className="px-0 py-10">
        <h1 className="font-neuro text-3xl lg:text-5xl mb-2">Login</h1>
        <p className="text-xl lg:text-3xl font-medium font-inter mb-8">
          Hello, Welcome Back!
        </p>

        <div className="flex flex-col items-center justify-center md:justify-between md:flex-row gap-8">
          <Authbutton
            type="facebook"
            text="Continue with Facebook"
            onClick={() => handleLoginWithFacebook()}
          />
          <Authbutton
            type="google"
            text="Continue with Google"
            onClick={() => handleLoginWithGoogle()}
          />
        </div>

        <div className="flex gap-8 my-4 items-center justify-center">
          <div className="bg-white h-[2px] w-[50%]"></div>
          <p className="text-center">ORz</p>
          <div className="bg-white h-[2px] w-[50%]"></div>
        </div>

        <div className="flex flex-col mb-8 items-center md:justify-between md:flex-row gap-8">
          <div className="flex flex-col w-80 gap-2">
            <label>Email</label>
            <input
              className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-80 gap-2">
            <label>Password</label>
            <input
              className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-center z-50 mt-2">
          <Button
            text="Login"
            isPrimary={true}
            onClick={() => handleLoginWithCredentials()}
            fullWidth={false}
          />
        </div>
        <p className="text-center">
          Not yet have an account? <span className="underline cursor-pointer" onClick={() => router.push("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}
