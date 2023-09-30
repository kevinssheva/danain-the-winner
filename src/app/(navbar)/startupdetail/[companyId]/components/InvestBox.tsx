"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const InvestBox = ({
  moneyRaised,
  moneyNeeded,
  investorCount,
  userId,
  companyId,
}: {
  moneyRaised: number;
  moneyNeeded: number;
  investorCount: number;
  userId: string | undefined;
  companyId: string;
}) => {
  const router = useRouter();

  function formatNumber(number: string) {
    // Convert the number to string
    const numberString = number;

    const [integerPart, decimalPart = ''] = numberString.split('.');

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const formattedNumber = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;

    return formattedNumber;
  }

  const handleAddInvestment = async () => {
    if (!userId) return toast.error("You must login first!");

    // redirect to /payment with companyid and userid
    router.push(`/payment?CId=${companyId}&UId=${userId}`);
  }

  return (
    <div className="w-full max-w-md p-5 glass rounded-lg">
      <div className="w-full flex flex-col text-center gap-8">
        <div>
          <h1 className="font-bold text-4xl">Rp {formatNumber(String(moneyRaised))}</h1>
          <p className="font-montserrat">
            raised from <span className="font-montserrat font-bold">{investorCount}</span>{" "}
            investors
          </p>
        </div>
        <div className="w-full h-7 bg-white rounded-full p-1">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#17ED46] to-[#1BC8EE] animate-elongate origin-left"
            style={{
              width: `${(moneyRaised / moneyNeeded) * 100}%`,
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-5">
          <Button text="Invest" onClick={handleAddInvestment} isBig isPrimary isGradient />
          <Button text="Chat" onClick={() => { }} isBig />
        </div>
      </div>
    </div>
  );
};

export default InvestBox;
