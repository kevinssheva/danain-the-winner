"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const GetStarted = () => {
  const router = useRouter();
  return (
    <div className="relative container mx-auto pb-32 text-center z-20 flex flex-col items-center gap-10">
      <h1 className="font-neuro text-3xl md:text-5xl">
        What are you waiting for?
      </h1>
      <Button
        text="GET STARTED"
        onClick={() => {
          router.push("/register");
        }}
        isPrimary
        isGradient
        isBig
      />
    </div>
  );
};

export default GetStarted;
