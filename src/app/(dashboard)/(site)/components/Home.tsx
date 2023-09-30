"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import Companyhome from "./Companyhome";
import Investorhome from "./Investorhome";
import Header from "./Header";
import { User } from "@prisma/client";

export default function Home({ user } : { user: User | null }) {
  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20">
      <Header page="Dashboard" />

      <div className="flex">
        <p className="text-lg">Welcome Back,</p>
        <Image
          src={"/dashboard/investor/tangan.svg"}
          width={23}
          height={50}
          alt="Wave hand"
        />
      </div>
      <p className="text-[#A0AEC0] mb-7">
        Here’s what’s happening with your store today.
      </p>

      {user?.role === "INVESTOR" ? <Investorhome user={user} /> : <Companyhome />}


      {/* <p className="mt-32">@ 2023, Made with ❤️ by Type Omegans for a better web</p> */}
    </div>
  );
}
