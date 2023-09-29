"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import { Company, Question } from "@prisma/client";
import { UserSession } from "@/components/UserFetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";

interface Session {
  user: UserSession | null | undefined;
}

interface CompanyWithQuestions extends Company {
  questions?: Question[];
}

export default function Startup({ company, session }: { company: CompanyWithQuestions, session: Session }) {
  const [menu, setMenu] = useState("Overview");
  const [Overview, setOverview] = useState(false);
  const [question, setQuestion] = useState("");
  const router = useRouter();
  const { user } = session;

  const handleAddQuestion = async () => {
    if (!user) return alert("You must login first.");

    const res = await axios.post(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/question/${company.id}`, {
      question,
      userId: user.id,
    });

    if (res.status == 201) {
      setQuestion("");
      router.refresh();
    }
  }

  // Sort company questions by latest
  const sortedQuestions = company?.questions?.slice().sort((a: Question, b: Question) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

  function content() {
    if (menu == "Overview") {
      return (
        <div className="bg-[#D9D9D9]/40 p-9 rounded-2xl w-[840px]">
          <h1 className="font-medium text-3xl">Business Description</h1>
          <p className="text-xl">
            {company.companyDescription}
          </p>
        </div>
      );
    } else if (menu == "Pitch Deck") {
      return (
        company.videoProfile ?
          (<iframe
            src="https://drive.google.com/file/d/1dKk8TUrmkBvDwyxQiGTU1wk93gE-r5pd/preview"
            width="840"
            height="480"
            allow="autoplay"
          ></iframe>
          ) : (
            <div className="flex flex-col">
              <p>No Video Profile Available.</p>
            </div>
          )
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
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button text="Send" isPrimary={true} fullWidth={false} onClick={handleAddQuestion} />
          </div>

          <p className="font-medium text-lg font-inter mt-14 mb-7">Sort by latest</p>

          <div className="flex flex-col gap-4">
            {sortedQuestions ? (sortedQuestions.map((question: any) => (
              <div key={question.id} className="bg-[#D9D9D9]/40 px-6 py-1 rounded-2xl">
                <p className="font-medium text-lg">{question.user.fullName} <span className="text-sm text-gray-600 dark:text-gray-400">{formatDistanceToNow(new Date(question.createdAt))} ago</span></p>
                <p className="text-sm">{question.question}</p>
              </div>
            ))) : (
              <div className="bg-[#D9D9D9]/40 px-6 py-1 rounded-2xl">
                <p className="font-medium text-lg">No Question Available.</p>
              </div>
            )}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="py-36 px-24">
      <h1 className="text-4xl font-medium">{company.companyName}</h1>
      <p className="text-2xl font-medium mb-12">{company.tagline}</p>

      <div className="flex gap-10 mb-6">
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${menu == "Overview" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
            }`}
          onClick={() => setMenu("Overview")}
        >
          Overview
        </button>
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${menu == "Pitch Deck" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
            }`}
          onClick={() => setMenu("Pitch Deck")}
        >
          Pitch Deck
        </button>
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${menu == "Updates" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
            }`}
          onClick={() => setMenu("Updates")}
        >
          Updates
        </button>
        <button
          className={`w-40 text-center cursor-pointer z-50 py-1 rounded-xl font-inter font-medium text-lg ${menu == "question" ? "bg-[#0038FF]/60" : "bg-[#3E73C3]"
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
