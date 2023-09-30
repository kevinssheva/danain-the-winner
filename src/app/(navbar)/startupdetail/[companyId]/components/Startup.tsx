"use client";
import { useState } from "react";
import { Category, Company, Question, User } from "@prisma/client";
import { UserSession } from "@/components/UserFetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import InvestBox from "./InvestBox";
import Overview from "./Overview";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineChevronLeft } from "react-icons/hi";
import VideoProfile from "./VideoProfile";
import PitchDeck from "./PitchDeck";
import AskQuestion from "./AskQuestion";
import FounderProfile from "./FounderProfile";
import toast from "react-hot-toast";
import Link from "next/link";

interface Session {
  user: UserSession | null | undefined;
}

interface CompanyExtends extends Company {
  categories: Category[];
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
    <div className="md:py-14 container mx-auto z-20">
      <Link href="/explore" className="flex cursor-pointer items-center gap-2 font-montserrat text-sm md:text-lg">
        <HiOutlineChevronLeft className="text-lg md:text-4xl" />
        Back to Explore
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mt-10 md:mt-12">{company.companyName}</h1>
      <p className="text-base md:text-xl font-normal mb-12 opacity-80 font-montserrat">
        {company.tagline}
      </p>

      <div className="flex mb-6 w-full max-w-2xl relative overflow-x-auto">
        {menuData.map((item, index) => (
          <button
            key={index}
            className={`w-1/4 text-center cursor-pointer z-20 py-3 rounded-xl font-inter font-medium text-sm md:text-lg`}
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

      <div className="w-full flex flex-col lg:flex-row gap-5 justify-start items-start">
        {menu === 0 && (
          <Overview
            description={company.companyDescription ?? "Not Yet"}
            categories={company.categories}
          />
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
          <h1 className="font-semibold font-poppins text-2xl md:text-3xl">
            Description
          </h1>
          <p className="font-montserrat text-base md:text-lg">
            {company.pitchDescription ?? "No pitch description available."}
          </p>
          {company.pitchDeck ? (
            <button
              onClick={() =>
                window.open(
                  company.pitchDeck ? company.pitchDeck : "404notfound"
                )
              }
              className="bg-white border-[1px] border-[#1019FF] text-[#1019FF] px-4 py-2 md:py-3 rounded-md font-semibold font-poppins flex items-center gap-3 text-sm md:text-base"
            >
              <AiOutlineDownload color="blue" fill="blue" size={24} />
              Download Pitch Deck
            </button>
          ) : (
            <p className="font-montserrat text-lg">
              No pitch deck file download available.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
