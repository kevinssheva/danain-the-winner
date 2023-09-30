"use client";

import Button from "@/components/Button";
import { Company } from "@prisma/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const InvestBox = ({
  moneyRaised,
  moneyNeeded,
  investorCount,
  userId,
  company,
}: {
  moneyRaised: number;
  moneyNeeded: number;
  investorCount: number;
  userId: string | undefined;
  company: Company;
}) => {
  const router = useRouter();

  function formatNumber(number: string) {
    // Convert the number to string
    const numberString = number;

    const [integerPart, decimalPart = ""] = numberString.split(".");

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const formattedNumber = decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;

    return formattedNumber;
  }

  const handleAddInvestment = async () => {
    if (!userId) return toast.error("You must login first!");

    // redirect to /payment with companyid and userid
    router.push(`/payment?CId=${company.id}&UId=${userId}`);
  };

  const percentage = (moneyRaised / moneyNeeded) * 100;

  const limitedPercentage = percentage > 100 ? 100 : percentage;

  return (
    <div className="w-full max-w-md p-5 glass rounded-lg">
      <div className="w-full flex flex-col text-center gap-8">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl">
            Rp {formatNumber(String(moneyRaised))}
          </h1>
          <p className="font-montserrat">
            raised from{" "}
            <span className="font-montserrat font-bold">{investorCount}</span>{" "}
            investors
          </p>
        </div>
        <div className="w-full h-6 bg-white rounded-full border-white border-4 relative group transition mb-6">
          <div className="w-full h-full overflow-hidden rounded-full">
            <div
              className="h-full rounded-full bg-gradient-to-r max-w-full from-[#17ED46] to-[#1BC8EE] animate-elongate origin-left"
              style={{
                width: `${limitedPercentage}%`,
              }}
            ></div>
          </div>
          <div className="absolute px-5 h-10 bg-slate-700 top-full -z-10 justify-center flex items-center rounded-b-2xl origin-top lg:scale-y-0 lg:group-hover:scale-y-100 transition right-0">
            <p className="font-bold text-sm md:text-base">
              {limitedPercentage}%{" "}
              <span className="font-montserrat font-normal">
                of Rp. {formatNumber(String(moneyNeeded))}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Button
            text="Invest"
            onClick={handleAddInvestment}
            isBig
            isPrimary
            isGradient
          />
          <Button text="Chat" onClick={() => {router.push(`../dashboard/chat/${company.userId}`)}} isBig />
        </div>
      </div>
    </div>
  );
};

export default InvestBox;
