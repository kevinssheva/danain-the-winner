"use client";
import { BiArrowToLeft } from "react-icons/bi";
import Header from "../../../components/Header";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import Input from "@/components/Input";
import { useEffect, useRef, useState } from "react";
import { BsFillSendFill, BsSend } from "react-icons/bs";
import Chatin from "./Chatin";
import Chatout from "./Chatout";
import { type } from "os";

interface Message {
  message: string;
  type: "in" | "out";
}

export default function Chat() {
  const [currentChat, setCurrentChat] = useState("");
  const [data, setData] = useState<Message[]>([
    {
      message: "Hello",
      type: "in",
    },
    {
      message: "Hello there, my Love",
      type: "out",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentChat(e.target.value);
  };

  const handleSendMessage = () => {
    if (currentChat.trim() !== "") {
      const newMessage: Message = {
        message: currentChat,
        type: "out",
      };

      setData((prevData: Message[]) => [...prevData, newMessage]);
      setCurrentChat("");
    }
  };

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [data]);

  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20 z-50 text-white">
      <Header page="Chatting" />

      <div className="flex flex-col md:flex-row gap-8">
        <div
          className="rounded-xl backdrop-blur-3xl p-6 md:w-1/3"
          style={{
            background:
              "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%);",
          }}
        >
          <h1 className="font-semibold text-2xl mb-6">Chatting</h1>

          {["Gibran Fasha", "Abraham Megantoro", "Vania", "Iyal"].map(
            (name, index) => (
              <div className="py-1 border-t" key={index}>
                <div className="flex flex-row md:flex-col lg:flex-row gap-4 cursor-pointer hover:bg-white/10 rounded-xl p-3 items-center">
                  <Image
                    src={`/dashboard/portofolio/gibs.jpg`}
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt="Profile Picture"
                  />
                  <p>{name}</p>
                </div>
              </div>
            )
          )}
        </div>

        <div
          className="rounded-xl p-10 md:w-2/3 flex flex-col justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.09);",
          }}
        >
          <div
            className="border rounded-xl flex items-center gap-4 backdrop-blur-3xl p-3"
            style={{
              background:
                "radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%);",
            }}
          >
            {/* <FaArrowLeft className="cursor-pointer" /> */}
            <Image
              src={`/dashboard/portofolio/gibs.jpg`}
              width={40}
              height={50}
              className="rounded-full"
              alt="Profile Picture"
            />
            <div className="flex flex-col">
              <p>Gibran Fasha</p>
              <p>CEO of Gijax</p>
            </div>
          </div>

          <div className="h-80 md:max-h-80 overflow-y-auto py-3 px-2 md:px-10 flex w-full">
            <div className="w-full h-fit flex gap-4 flex-col">
              {data.map((messageData, index) => {
                if (messageData.type === "in") {
                  return <Chatin key={index} message={messageData.message} />;
                } else if (messageData.type === "out") {
                  return <Chatout key={index} message={messageData.message} />;
                }
                return null; // Handle other types if needed
              })}
              <div ref={bottomRef} className="pt-1" />
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Input
              placeholder="Type your message here"
              name="chat"
              value={currentChat}
              onChange={handleInputChange}
            />
            <BsSend
              color="#34EE30"
              fill="#34EE30"
              className="cursor-pointer text-3xl"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
