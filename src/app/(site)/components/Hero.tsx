"use client";

import Button from "@/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20">
      <div className="w-full flex justify-around gap-10 items-center">
        <div
          className="
          flex-1 max-w-[38.75rem] flex flex-col gap-5 justify-start items-start px-5 py-7 rounded-2xl
          glass
          z-20
        "
        >
          <h1 className="font-neuro text-5xl">
            Investing into the Future: Bridging Opportunities and Funds
          </h1>
          <p className="text-xl">
            Seamlessly connecting visionary businesses with eager investors.
            Empowering growth and fostering innovation together
          </p>
          <Button text="GET STARTED" onClick={() => {}} />
        </div>
        <Image
          src={"/landing/CryptoHero.svg"}
          width={558}
          height={538}
          alt="crypto-banner"
          className="w-[42%] z-20"
        />
      </div>
    </div>
  );
};

export default Hero;
