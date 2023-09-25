"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import Authbutton from "@/components/Authbutton";

export default function Registercomp() {
  //buat ditembak ke api
  const [data, setData] = useState({
    fullname: "",
    company: "",
    email: "",
    password: "",
  });

  return (
    <div className="py-24 px-12 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="px-32 py-0 ">
          <h1 className="font-neuro text-5xl mb-2">Registration</h1>
          <p className="text-3xl font-medium font-inter mb-8">
            Hello, Welcome!
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
            <div className="flex flex-col gap-3">
              <div className="flex flex-col w-80 gap-2">
                <label>Fullname</label>
                <input
                  className={`border border-opacity-0 rounded-2xl py-4 px-8 gradient-background`}
                  type="text"
                  placeholder="Enter your Fullname"
                  onChange={(e) =>
                    setData({ ...data, fullname: e.target.value })
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
                    setData({ ...data, company: e.target.value })
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
              onClick={() => console.log("")}
              fullWidth={false}
            />
          </div>
          <p className="text-center">
            Already have account? <span className="underline">Login</span>
          </p>
        </div>
      </div>
      <Image
        src="/registercompany/gambar.svg"
        width={209}
        height={200}
        alt="Danain"
        className="w-[25%]"
      />
    </div>
  );
}
