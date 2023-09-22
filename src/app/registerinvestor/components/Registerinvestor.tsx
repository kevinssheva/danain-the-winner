"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Registerinvestor() {
  //buat ditembak ke api
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  return (
    <div className="py-10 px-36 flex justify-between">
      <div className="flex flex-col">
        <Image
          src={"/logo.svg"}
          width={62}
          height={59}
          alt="Danain"
          className="mt-5 "
        />

        <div className="px-32 py-0 ">
          <h1 className="font-neuro text-5xl mb-2">Registration</h1>
          <p className="text-3xl font-medium font-inter mb-8">
            Hello, Welcome!
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label>Fullname</label>
              <input
                className={`border border-opacity-0 rounded-full py-4 px-8 gradient-background`}
                type="text"
                placeholder="Enter your Fullname"
                onChange={(e) => setData({ ...data, fullname: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                className={`border border-opacity-0 rounded-full py-4 px-8 gradient-background`}
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label>Password</label>
              <input
                className={`border border-opacity-0 rounded-full py-4 px-8 gradient-background`}
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              text="Register"
              isPrimary={false}
              onClick={() => console.log("")}
              fullWidth={false}
            />
          </div>
          <p className="text-center">
            Already have account?{" "}
            <span className="underline">Login</span>
          </p>
        </div>
      </div>
      <Image
        src="/registerinvestor/gambar.svg"
        width={209}
        height={500}
        alt="Danain"
        className="w-[40%]"
      />
    </div>
  );
}
