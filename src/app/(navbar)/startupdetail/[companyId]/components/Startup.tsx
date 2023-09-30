"use client";
import { useState } from "react";
import { Company, Question } from "@prisma/client";
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

interface Session {
  user: UserSession | null | undefined;
}

interface CompanyWithQuestions extends Company {
  questions?: Question[];
}

const menuData = ["Overview", "Video Profile", "Pitch Deck", "Ask a Question"];

export default function Startup({
  company,
  session,
}: {
  company: CompanyWithQuestions;
  session: Session;
}) {
  const [menu, setMenu] = useState(0);
  const [question, setQuestion] = useState("");
  const router = useRouter();
  const { user } = session;

  const handleAddQuestion = async () => {
    if (!user) return alert("You must login first.");

    const res = await axios.post(
      process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/question/${company.id}`,
      {
        question,
        userId: user.id,
      }
    );

    if (res.status == 201) {
      setQuestion("");
      router.refresh();
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
        {menu === 1 && <VideoProfile />}
        {menu === 2 && <PitchDeck />}
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
          moneyNeeded={4000000}
          moneyRaised={3000000}
          investorCount={10}
        />
      </div>
      {menu === 0 && (
        <FounderProfile
          name="John Doe"
          imageURL="/profile.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore
        dolores aspernatur accusantium in quis animi neque recusandae
        perferendis hic harum natus ipsa voluptates minus corrupti, repellat
        odit nulla commodi, libero dolore? Blanditiis asperiores nemo ea,"
          instagram="https://www.instagram.com"
          linkedIn="https://www.linkedin.com"
        />
      )}

      {menu === 2 && (
        <div className="w-full flex flex-col gap-4 items-start mt-10">
          <h1 className="font-semibold font-poppins text-3xl">Description</h1>
          <p className="font-montserrat text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore
            dolores aspernatur accusantium in quis animi neque recusandae
            perferendis hic harum natus ipsa voluptates minus corrupti, repellat
            odit nulla commodi, libero dolore? Blanditiis asperiores nemo ea,
            dolor vero, quas quidem ullam deleniti autem fugiat explicabo
            placeat. Repudiandae sed quaerat officiis!
          </p>
          <button className="bg-white border-[1px] border-[#1019FF] text-[#1019FF] px-4 py-3 rounded-md font-semibold font-poppins flex items-center gap-3">
            <AiOutlineDownload color="blue" fill="blue" size={24} />
            Download Pitch Deck
          </button>
        </div>
      )}
    </div>
  );
}
