"use client";
import Header from "../../../components/Header";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { User, Conversation } from "@prisma/client";
import { useRouter } from "next/navigation";
import ChatBar from "./ChatBar";

interface Message {
  message: string;
  type: "in" | "out";
}

export default function Chat({ conversation, userId }: { conversation: (Conversation & { userOne: User, userTwo: User})[], userId: string}) {

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
        <ChatBar conversation={conversation} userId={userId}/>       
      </div>
    </div>
  );
}
