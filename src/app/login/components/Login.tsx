"use client";
import Authbutton from "@/components/Authbutton";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  //buat ditembak ke api
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="py-20 px-24 flex h-screen justify-between">
      <div className="px-0 py-10">
        <h1 className="font-neuro text-5xl mb-2">Login</h1>
        <p className="text-3xl font-medium font-inter mb-8">
          Hello, Welcome Back!
        </p>

        <div className="flex gap-8">
          <Authbutton
            type="facebook"
            text="Login with Facebook"
            onClick={() => console.log("")}
          />
          <Authbutton
            type="google"
            text="Login with Google"
            onClick={() => console.log("")}
          />
        </div>

        <div className="flex gap-8 my-4 items-center justify-center">
          <div className="bg-white h-[2px] w-[50%]"></div>
          <p className="text-center">OR</p>
          <div className="bg-white h-[2px] w-[50%]"></div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col w-80 gap-2">
            <label>Email</label>
            <input
              className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-80 gap-2 mb-8">
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
            onClick={() => console.log("")}
            fullWidth={false}
          />
        </div>
        <p className="text-center">
          Not yet have an account? <span className="underline cursor-pointer">Register</span>
        </p>
      </div>
      <Image src="/login/gambar.svg" width={689} height={500} alt="Danain" />
    </div>
  );
}
