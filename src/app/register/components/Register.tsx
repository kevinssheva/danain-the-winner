"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Register() {
  const router = useRouter();
  return (
    <div className="flex py-24 justify-center gap-32">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="font-neuro text-5xl">Registration</h1>
        <p className="font-semibold font-inter text-3xl mb-12">
          Hello, Welcome!
        </p>
        <p className="italic font-inter mb-12">Please select a role to register</p>

        <div className="flex flex-col w-60 text-2xl gap-4 justify-center">
          <button className="investor-button py-4" onClick={() => router.push("/register/investor")}>Investor</button>
          <button className="company-button py-4" onClick={() => router.push("/register/company")}>Company</button>
        </div>
      </div>

      <Image src="/register/gambar.svg" width={474} height={513} alt="Register" />
    </div>
  );
}
