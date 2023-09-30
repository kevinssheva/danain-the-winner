"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { Question } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import { useMemo } from "react";

const AskQuestion = ({
  questionList,
  question,
  handleChange,
  handleAddQuestion,
}: {
  questionList?: Question[];
  question: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddQuestion: () => void;
}) => {
  const sortedQuestions = useMemo(() => {
    return questionList?.slice().sort((a: Question, b: Question) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  }, [questionList]);

  return (
    <div className="flex-1">
      <div className="w-full flex gap-4">
        <Input
          name="question"
          placeholder="Insert your question"
          value={question}
          onChange={handleChange}
        />
        <Button text="Send" onClick={handleAddQuestion} isPrimary isGradient />
      </div>
      <div className="w-full flex flex-col py-5">
        <div className="font-montserrat text-base md:text-xl mb-2 ml-auto inline-block">
          Sort by Latest
        </div>
        <div className="w-full flex-col gap-4 flex">
          {sortedQuestions?.map((item: any, index) => (
            <div key={index} className="glass px-4 md:px-6 py-3 rounded-2xl">
              <div className="flex justify-between mb-2 items-center">
                <p className="font-semibold font-poppins text-base md:text-xl">
                  {item.user.fullName}
                </p>
                <p className="text-xs md:text-sm text-gray-400 text-right">
                  {formatDistanceToNow(new Date(item.createdAt))} ago
                </p>
              </div>
              <p className="text-sm md:text-base font-montserrat">{item.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
