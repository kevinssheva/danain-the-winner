"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import Authbutton from "@/components/Authbutton";
import Link from "next/link";

export default function Registerinvestor() {
  //buat ditembak ke api
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  return (
    <div className="py-20 lg:py-28 lg:pr-8 flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="px-32 py-0 ">
          <h1 className="font-neuro text-3xl lg:text-5xl mb-2">Registration</h1>
          <p className="text-xl lg:text-3xl font-medium font-inter mb-8">
            Hello, Welcome!
          </p>

          <div className="flex gap-8 lg:flex-row flex-col">
            <Authbutton
              type="facebook"
              text="Resgister with Facebook"
              onClick={() => console.log("")}
            />
            <Authbutton
              type="google"
              text="Register with Google"
              onClick={() => console.log("")}
            />
          </div>

          <div className="flex gap-8 my-4 items-center justify-center">
            <div className="bg-white h-[2px] w-[50%]"></div>
            <p className="text-center">OR</p>
            <div className="bg-white h-[2px] w-[50%]"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-3 w-80">
              <div className="flex flex-col gap-2">
                <label>Fullname</label>
                <input
                  className={`border border-opacity-0 rounded-full py-4 px-8 gradient-background`}
                  type="text"
                  placeholder="Enter your Fullname"
                  onChange={(e) =>
                    setData({ ...data, fullname: e.target.value })
                  }
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
            </div>
            <div className="flex flex-col w-80 gap-2 mb-8">
              <label>Password</label>
              <input
                className={`border border-opacity-0 rounded-full py-4 px-8 gradient-background`}
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Button
              text="Register"
              isPrimary={false}
              onClick={() => console.log("")}
              fullWidth={false}
            />
          </div>
          <p className="text-center">
            Already have account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Image
        src="/registerinvestor/gambar.svg"
        width={209}
        height={500}
        alt="Danain"
        className="w-[48%] lg:w-1/4 self-center"
      />
    </div>
  );
}