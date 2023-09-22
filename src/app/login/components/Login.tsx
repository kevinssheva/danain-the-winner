"use client";
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
      <div>
        <Image src={"/logo.svg"} width={62} height={59} alt="Danain" />

        <div className="px-28 py-10">
          <h1 className="font-neuro text-5xl mb-2">Login</h1>
          <p className="text-3xl font-medium font-inter mb-8">
            Hello, Welcome Back!
          </p>

          <div className="flex flex-col w-96 gap-2">
            <label>Email</label>
            <input
              className={`border border-opacity-0 rounded-full py-4 px-8 gradient-background`}
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-96 gap-2 mb-8">
            <label>Password</label>
            <input
              className={`border border-opacity-0 rounded-full py-4 px-8 gradient-background`}
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="w-96 flex justify-center">
            <Button
              text="Login"
              isPrimary={true}
              onClick={() => console.log("")}
              fullWidth={false}
            />
          </div>
          <p className="text-center w-96">
            Not yet have an account?{" "}
            <span className="underline">Register</span>
          </p>
        </div>
      </div>
      <Image src="/login/gambar.svg" width={689} height={500} alt="Danain" />
    </div>
  );
}
