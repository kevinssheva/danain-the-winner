"use client";
import { useState } from "react";
import { Company, Question, User } from "@prisma/client";
import { UserSession } from "@/components/UserFetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import InvestBox from "./InvestBox";
import Overview from "./Overview";
import { AiOutlineDownload, AiOutlineInstagram } from "react-icons/ai";
import VideoProfile from "./VideoProfile";
import PitchDeck from "./PitchDeck";
import AskQuestion from "./AskQuestion";
import FounderProfile from "./FounderProfile";
import toast from "react-hot-toast";

interface Session {
  user: UserSession | null | undefined;
}

interface CompanyExtends extends Company {
  questions?: Question[];
  user: User;
}

const menuData = ["Overview", "Video Profile", "Pitch Deck", "Ask a Question"];

export default function Startup({
  company,
  session,
  moneyRaised,
  investorCount,
}: {
  company: CompanyExtends;
  session: Session;
  moneyRaised: number;
  investorCount: number;
}) {
  const [menu, setMenu] = useState(0);
  const [question, setQuestion] = useState("");
  const router = useRouter();

  const handleAddQuestion = async () => {
    if (!session?.user) return toast.error("You must login first!");

    const res = await axios.post(
      process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/question/${company.id}`,
      {
        question,
        userId: session?.user?.id,
      }
    );

    if (res.status == 201) {
      setQuestion("");
      router.refresh();
      toast.success("Question added!");
    }
  };

  return (
    <div className="py-20 container mx-auto z-20">
      <h1 className="text-4xl font-bold">{company.companyName}</h1>
      <p className="text-xl font-normal mb-12 opacity-80 font-montserrat">
        {company.tagline}
      </p>

      <div className="flex mb-6 w-full max-w-2xl relative">
        {menuData.map((item, index) => (
          <button
            key={index}
            className={`flex-1 text-center cursor-pointer z-20 py-3 px-4 rounded-xl font-inter font-medium text-lg`}
            onClick={() => setMenu(index)}
          >
            {item}
          </button>
        ))}
        <div
          className="h-[6px] w-1/4 bg-[#1019FF] absolute rounded-t-lg bottom-0 left-0 transition-all ease-in-out"
          style={{
            transform: `translateX(${menu * 100}%)`,
          }}
        />
      </div>

      <div className="w-full flex gap-5 justify-start items-start">
        {menu === 0 && (
          <Overview description={company.companyDescription ?? "Not Yet"} />
        )}
        {menu === 1 && <VideoProfile link={company.videoProfile || ""} />}
        {menu === 2 && <PitchDeck link={company.pitchDeck || ""} />}
        {menu === 3 && (
          <AskQuestion
            questionList={company.questions}
            question={question}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuestion(e.target.value)
            }
            handleAddQuestion={handleAddQuestion}
          />
        )}
        <InvestBox
          moneyNeeded={Number(company.money)}
          moneyRaised={moneyRaised}
          investorCount={investorCount}
          userId={session?.user?.id}
          companyId={company.id}
        />
      </div>
      {menu === 0 && (
        <FounderProfile
          name={company.user.fullName}
          imageURL={company.user.profilePicture ?? "/profile.jpg"}
          description={company.user.description ?? "No Description Yet"}
          instagram={company.user.instagram ?? ""}
          linkedIn={company.user.linkedIn ?? ""}
          cv={company.user.cv ?? ""}
        />
      )}

      {menu === 2 && (
        <div className="w-full flex flex-col gap-4 items-start mt-10">
          <h1 className="font-semibold font-poppins text-3xl">Description</h1>
          <p className="font-montserrat text-lg">{company.pitchDescription ?? "No pitch description available."}</p>
          {company.pitchDeck ? (
            <button
              onClick={() => window.open(company.pitchDeck ? company.pitchDeck : "404notfound")}
              className="bg-white border-[1px] border-[#1019FF] text-[#1019FF] px-4 py-3 rounded-md font-semibold font-poppins flex items-center gap-3"
            >
              <AiOutlineDownload color="blue" fill="blue" size={24} />
              Download Pitch Deck
            </button>) : (
            <p className="font-montserrat text-lg">No pitch deck file download available.</p>
          )}
        </div>
      )}
    </div>
  );
}
