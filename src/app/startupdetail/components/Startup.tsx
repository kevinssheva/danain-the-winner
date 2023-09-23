"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Startup() {
  const [menu, setMenu] = useState("Overview");
  console.log(menu);
  const [Overview, setOverview] = useState(false);
  console.log(Overview);

  function content() {
    if (menu == "Overview") {
      return (
        <div className="bg-[#D9D9D9]/40 p-9 rounded-2xl w-[840px]">
          <h1 className="font-medium text-3xl">Business Description</h1>
          <p className="text-xl">
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aut
            omnis ducimus praesentium obcaecati accusamus corporis consequatur
            illum nulla ullam laborum debitis, unde porro velit, maiores nobis
            quis harum explicabo.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam aut
            omnis ducimus praesentium obcaecati accusamus corporis consequatur
            illum nulla ullam laborum debitis, unde porro velit, maiores nobis
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            illum pariatur, doloribus optio, tempora quasi repellat molestias
            exercitationem explicabo nobis aspernatur dignissimos accusamus
            obcaecati expedita modi enim velit possimus corporis?
          </p>
        </div>
      );
    } else if (menu == "Pitch Deck") {
      return (
        <iframe
          src="https://drive.google.com/file/d/1dKk8TUrmkBvDwyxQiGTU1wk93gE-r5pd/preview"
          width="840"
          height="480"
          allow="autoplay"
        ></iframe>
      );
    } else if (menu == "Updates") {
      return (
        <div className="flex flex-col">
          <Image
            src="/startupdetail/black.svg"
            width={840}
            height={480}
            alt="black"
          />
          <p>Caption</p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flex w-[750px] justify-between">
            <input
              className={`border border-opacity-0 w-2/3 rounded-full py-4 px-8 gradient-background`}
              type="text"
              placeholder="Enter your question"
            />
            <Button text="Send" isPrimary={true} fullWidth={false} onClick={() => console.log("")} />
          </div>

          <p className="font-medium text-lg font-inter mt-14 mb-7">Sort by latest</p>

          <div className="flex flex-col gap-4">
            <div className="bg-[#D9D9D9]/40 px-6 py-1 rounded-2xl">
                <p className="font-medium text-lg">Name</p>
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-[#D9D9D9]/40 px-6 py-1 rounded-2xl">
                <p className="font-medium text-lg">Name</p>
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-[#D9D9D9]/40 px-6 py-1 rounded-2xl">
                <p className="font-medium text-lg">Name</p>
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-[#D9D9D9]/40 px-6 py-1 rounded-2xl">
                <p className="font-medium text-lg">Name</p>
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="py-36 px-24">
      <h1 className="text-4xl font-medium">Business Title</h1>
      <p className="text-2xl font-medium mb-12">Company Name</p>

      <div className="flex gap-10 mb-6">
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${
            menu == "Overview" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
          }`}
          onClick={() => setMenu("Overview")}
        >
          Overview
        </button>
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${
            menu == "Pitch Deck" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
          }`}
          onClick={() => setMenu("Pitch Deck")}
        >
          Pitch Deck
        </button>
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${
            menu == "Updates" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
          }`}
          onClick={() => setMenu("Updates")}
        >
          Updates
        </button>
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${
            menu == "question" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
          }`}
          onClick={() => setMenu("question")}
        >
          Ask a Question
        </button>
      </div>

      <div className="flex gap-20 justify-start">
        {content()}

        <div className="bg-[#D9D9D9]/40 px-12 py-7 text-center absolute right-0 mr-[5%] h-[470px] rounded-2xl">
          <h1 className="text-4xl font-semibold">$2,123,456</h1>
          <p className="text-xl">raised from 300 investors</p>

          <div className="flex gap-8 mt-10 mb-20">
            <p className="text-xl">
              Invest <br />
              <span className="text-sm">min $60</span>
            </p>
            <input
              type="number"
              className="input-bg-startup px-2 focus:border-none"
            />
          </div>

          <div className="flex flex-col gap-6">
            <Button
              text="Invest"
              fullWidth={true}
              isPrimary={true}
              onClick={() => console.log("")}
            />
            <Button
              text="Chat"
              fullWidth={true}
              isPrimary={false}
              onClick={() => console.log("")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
