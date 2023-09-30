"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse lg:flex-row py-24 justify-center gap-8 lg:gap-32">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="font-neuro text-3xl lg:text-5xl">Registration</h1>
        <p className="font-semibold font-inter text-xl lg:text-3xl mb-12">
          Hello, Welcome!
        </p>
        <p className="italic font-inter mb-12">
          Please select a role to register
        </p>

        <div className="flex flex-col w-60 text-2xl gap-4 justify-center">
          <button
            className="transition duration-100 hover:bg-gradient-to-b from-[#C6D524] to-[#9C9710] investor-button py-4 text-xl font-montserrat font-semibold"
            onClick={() => router.push("/register/investor")}
          >
            Investor
          </button>
          <button
            className="transition duration-100 hover:bg-gradient-to-b from-[#16D5E1] to-[#168392] company-button py-4 text-xl font-montserrat font-semibold"
            onClick={() => router.push("/register/company")}
          >
            Company
          </button>
        </div>
      </div>

      <Image
        src="/register/gambar.svg"
        width={474}
        height={513}
        alt="Register"
        className="w-[60%] md:w-1/3 self-center animate-inverseFloat"
      />
    </div>
  );
}
