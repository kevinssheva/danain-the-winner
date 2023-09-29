"use client";

import Button from "@/components/Button";

const InvestBox = ({
  moneyRaised,
  moneyNeeded,
  investorCount,
}: {
  moneyRaised: number;
  moneyNeeded: number;
  investorCount: number;
}) => {
  const formatMoney = (money: number) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="w-full max-w-md p-5 glass rounded-lg">
      <div className="w-full flex flex-col text-center gap-8">
        <div>
          <h1 className="font-bold text-4xl">${formatMoney(moneyRaised)}</h1>
          <p className="font-montserrat">
            raised from <span className="font-montserrat font-bold">300</span>{" "}
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
          <Button text="Invest" onClick={() => {}} isBig isPrimary isGradient />
          <Button text="Chat" onClick={() => {}} isBig />
        </div>
      </div>
    </div>
  );
};

export default InvestBox;
