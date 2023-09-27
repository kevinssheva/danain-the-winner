"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

export default function Home() {
  return (
    <div className=" px-4 md:pl-80 md:pr-12 md:py-5">
      <div className="flex justify-between items-center mb-10 md:mb-16">
        <p className="text-white text-base">
          <span className="text-[#A0AEC0]">Pages </span>/ Dashboard <br />{" "}
          Dashboard
        </p>
        <AiOutlineUser
          className="text-white text-3xl"
          color="#32D73A"
          fill="#32D73A"
        />
      </div>

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

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-8">
          <div
            className="rounded-2xl p-9 gap-9 max-w-xl flex flex-col xl:flex-row items-center"
            style={{
              background:
                "var(--dashboard, linear-gradient(127deg, rgba(6, 11, 38, 0.89) 28.26%, rgba(26, 31, 55, 0.50) 91.2%));",
            }}
          >
            <Image
              src={"/dashboard/investor/wallet.svg"}
              width={112}
              height={100}
              alt="Wallet"
              className="w-[50%]"
            />
            <div className="text-center">
              <p className="text-lg lg:text-2xl text-[#8C89B4]">Funds Collected</p>
              <h1 className="text-lg lg:text-3xl font-bold">{"$632.000"}</h1>
            </div>
            <Image
              src={"/dashboard/investor/wallet2.svg"}
              width={112}
              height={100}
              alt="Wallet"
              className="hidden xl:block"
            />
          </div>

          <div
            className="lg:px-6 py-9 rounded-xl max-w-xl flex flex-col-reverse xl:flex-row items-center gap-9"
            style={{
              background:
                "linear-gradient(89deg, #1A1F37 5.82%, rgba(14, 13, 57, 0.00) 51%, #1A1F37 80%)",
            }}
          >
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-4">
                <p className="text-[#8C89B4]">Welcome back,</p>

                <h1 className="text-2xl font-bold">Kevin Lie</h1>
                <p className="text-[#8C89B4]">
                  Glad to see you again! <br />
                  Ask me anything.
                </p>
              </div>
              <Button
                text="See Your Investors"
                isPrimary={true}
                fullWidth={true}
                onClick={() => {}}
              />
            </div>
            <Image
              src={"/dashboard/investor/welcome.svg"}
              width={280}
              height={500}
              alt="Welcome"
              className="w-[50%]"
            />
          </div>
        </div>

        <div className="bg-[#1A1F37] max-w-xl py-16 flex flex-col-reverse lg:flex-row gap-4 px-6 rounded-xl">
          <div className="flex flex-col text-justify justify-between">
            <p className="text-[#8C89B4]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever. <br /> <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever.
            </p>
            <Button
              text="Chat Now!"
              isPrimary={true}
              fullWidth={true}
              onClick={() => {}}
            />
          </div>
          <Image
            src={"/dashboard/investor/chatbener.svg"}
            width={250}
            height={500}
            alt="Chat"
          />
        </div>
      </div>

      <div className="p-10 bg-[#1A1F37] max-w-[34.5rem] mt-16 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <Image
            src={"/dashboard/investor/review.svg"}
            width={235}
            height={500}
            alt="Review"
          />
          <div>
            <h1 className="text-4xl text-center font-semibold">
              Review your pitch deck file with AI
            </h1>
            <p className="text-[#8C89B4] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever.
            </p>
          </div>
        </div>
        <Button
          text="Coming Soon"
          isPrimary={true}
          fullWidth={true}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
