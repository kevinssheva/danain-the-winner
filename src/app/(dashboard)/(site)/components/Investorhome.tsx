"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

export default function Investorhome({ user }: { user: User | null }) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="lg:px-6 py-9 rounded-xl flex flex-col-reverse xl:flex-row items-center justify-between gap-9"
            style={{
              background:
                "linear-gradient(89deg, #1A1F37 5.82%, rgba(14, 13, 57, 0.00) 61%, #1A1F37 80%)",
            }}
          >
            <div className="flex flex-col gap-4 h-full justify-between">
              <div className="flex flex-col w-full gap-2">
                <p className="text-[#8C89B4]">Welcome back,</p>

                <h1 className="text-2xl font-bold">{user?.fullName}</h1>
                <p className="text-[#8C89B4]">
                  Glad to see you again! <br />
                  Ask me anything.
                </p>
              </div>
              <Button
                text="See Your Portofolio"
                isPrimary={true}
                fullWidth={true}
                onClick={() => {
                  router.push("/dashboard/portofolio");
                }}
              />
            </div>
            <Image
              src={"/dashboard/investor/welcomeinv.svg"}
              width={280}
              height={500}
              alt="Welcome"
              className="w-[40%]"
            />
          </div>
          <div className="bg-[#1A1F37] self-center w-full lg:w-[80%] max-w-xl py-16 flex flex-col-reverse lg:flex-row gap-4 px-6 rounded-xl">
            <div className="flex flex-col text-justify justify-between">
              <p className="text-[#8C89B4] mb-4 lg:mb-0">
                Unlock a world of investment opportunities with our cutting-edge
                chat feature that seamlessly connects investors and companies.
                <br />
                <br /> Discover a platform designed to foster meaningful
                dialogues and facilitate informed investment decisions. Engage
                with a diverse network of businesses.
              </p>
              <Button
                text="Chat Now!"
                isPrimary={true}
                fullWidth={true}
                onClick={() => {
                  router.push("dashboard/chat");
                }}
              />
            </div>
            <Image
              src={"/dashboard/investor/chatbener.svg"}
              width={250}
              height={500}
              alt="Chat"
              className="self-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row mt-16">
        <div
          className="rounded-2xl py-10 lg:w-[45rem] flex flex-col justify-between px-5 backdrop-blur-3xl"
          style={{
            background:
              "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
          }}
        >
          <div>
            <h1 className="text-2xl font-semibold text-center">
              Calculator Simulation
            </h1>

            <div className="flex flex-col xl:flex-row gap-4 justify-center items-center md:justify-between mt-4">
              <Image
                src={"/dashboard/investor/graph.svg"}
                width={300}
                height={500}
                alt="Calculator"
              />
              <Image
                src={"/dashboard/investor/calcu.svg"}
                width={200}
                height={500}
                alt="Calculator"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              text="Use feature"
              isPrimary={true}
              fullWidth={false}
              onClick={() => {
                router.push("/dashboard/calculator");
              }}
            />
          </div>
        </div>

        <div
          className="rounded-2xl self-center px-[5%] py-10 flex flex-col gap-4 justify-center backdrop-blur-3xl max-w-[30rem]"
          style={{
            background:
              "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(14, 21, 58, 0.71) 91.2%)",
          }}
        >
          <h1 className="text-2xl font-semibold text-center">
            Explore More Startups
          </h1>
          <Image
            src={"/dashboard/investor/welcome.svg"}
            width={200}
            height={500}
            alt="Startup"
            className="self-center"
          />
          <p className="text-[#A0AEC0] text-justify">
            Explore a diverse range of startups and find the perfect fit for
            your investment portfolio. We have a wide range of startups from
            various industries and sectors. Find the perfect fit for your investment portfolio.
          </p>
          <div className="flex justify-end">
            <Button
              text="Explore Now"
              isPrimary={true}
              fullWidth={false}
              onClick={() => {
                router.push("/explore");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
