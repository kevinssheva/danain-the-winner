"use client";

import useRegistrationModal from "@/app/hooks/useRegistrationModal";
import Button from "@/components/Button";
import RegistrationModal from "@/components/Modal/RegistrationModal";
import Image from "next/image";
import { useEffect } from "react";

const Hero = ({ role }: { role: string}) => {
  const isUnregistered = role === "UNREGISTERED";
  const registrationModal = useRegistrationModal();

  useEffect(() => {
    if (isUnregistered) {
      registrationModal.onOpen();
    }
  }, [isUnregistered]);

  return (
    <>
      <RegistrationModal />
      <div className="min-h-screen relative container mx-auto py-20">
        <div className="w-full flex flex-col lg:flex-row justify-around gap-10 items-center">
          <div
            className="
          flex-1 w-full max-w-[38.75rem] flex flex-col gap-3 md:gap-5 justify-start items-start px-5 py-7 rounded-2xl
          glass
          z-20
        "
          >
            <h1 className="font-neuro text-3xl md:text-4xl xl:text-5xl">
              Investing into the Future: Bridging Opportunities and Funds
            </h1>
            <p className="text-base md:text-lg xl:text-xl mb-4">
              Seamlessly connecting visionary businesses with eager investors.
              Empowering growth and fostering innovation together
            </p>
            <Button text="GET STARTED" onClick={() => {}} isBig />
          </div>
          <Image
            src={"/landing/CryptoHero.svg"}
            width={558}
            height={538}
            alt="crypto-banner"
            className="w-full max-w-lg z-20"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
