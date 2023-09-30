"use client";

import Button from "@/components/Button";
import Image from "next/image";

const GetStarted = ({ isLogin }: { isLogin?: boolean }) => {
  return (
    <div className="flex-1 w-full bg-gradient-to-b from-[#2F338A] to-[#07092A] to-[150%] py-8 rounded-t-[2.5rem] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.9)] relative">
      <div className="container mx-auto flex flex-col gap-8 items-center z-20 px-[5%] lg:px-0">
        <div className="text-center">
          <Image src="/logo.svg" width={80} height={80} alt="" />
          <p className="text-primary font-bold text-[1.4rem] [text-shadow:_0_1px_8px_rgb(0_0_0_/_100%)] font-montserrat mt-1">
            danain
          </p>
        </div>
        <div className="text-center z-20">
          <p className="font-bold text-xl">
            Danain, Where Startups and Investors Collide
          </p>
          <p className="font-montserrat text-lg">
            Discover unique opportunities with us! Join now to find the
            investors or startups you're looking for.
          </p>
        </div>
        <div className="z-20">
          {!isLogin && (
            <Button
              text="Create Account"
              onClick={() => {}}
              isPrimary
              isBig
              isGradient
            />
          )}
        </div>
        <div className="w-full z-20">
          <div className="border-b-2 w-full mb-2"></div>
          <div className="w-full flex justify-between text-sm">
            <p>© 2023 Copyright by danain Developers. All rights reserved.</p>
            <p>www.danain.com</p>
          </div>
        </div>
      </div>
      <div className="absolute w-[25rem] md:w-[40rem] bottom-0 left-0 z-10 opacity-70">
        <Image
          src={"/about/Glow-33.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[20rem] md:w-[40rem] bottom-0 right-0 z-10 opacity-80">
        <Image
          src={"/about/Glow-4.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="hidden md:block absolute w-[15rem] top-0 left-0 z-10 rotate-12 animate-inverseFloat blur-[2px] opacity-60">
        <Image
          src={"/about/Coin.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="hidden md:block absolute w-[15rem] bottom-0 right-0 z-10 animate-float blur-[5px] opacity-80">
        <Image
          src={"/about/Coin2.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GetStarted;
