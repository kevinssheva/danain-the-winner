"use client";

import Input from "@/components/Input";
import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import Payment from "./components/Payment";
import LegalStuff from "./components/LegalStuff";

const Page = () => {
  const [amount, setAmount] = useState("");
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-numeric characters except decimal point
    let sanitizedPrice = e.target.value.replace(/[^0-9.]/g, "");

    // Add commas as thousands separators
    sanitizedPrice = sanitizedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Update the state with the formatted price
    setAmount(sanitizedPrice);
  };
  return (
    <div className="bg-background min-h-screen px-[7%] py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="font-light text-3xl">INVEST IN</h1>
          <h1 className="font-bold text-4xl">ZenniHome</h1>
        </div>
        <div className="flex flex-col w-full">
          <ul className="list-decimal">
            <div className="w-1/2">
              <li className="list-decimal text-2xl font-bold font-montserrat">
                Investment Amount
              </li>
              <Input
                name="price"
                placeholder="Enter Amount"
                value={amount}
                onChange={handlePriceChange}
                icon={BiDollar}
              />
            </div>
            <div className="w-1/2">
              <li className="list-decimal text-2xl font-bold font-montserrat">
                Investor Info
              </li>
              <div className="flex flex-col gap-4">
                <Input
                  name="price"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={handlePriceChange}
                  icon={BiDollar}
                />
                <Input
                  name="price"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={handlePriceChange}
                  icon={BiDollar}
                />
                <Input
                  name="price"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={handlePriceChange}
                  icon={BiDollar}
                />
              </div>
            </div>
            <Payment />
            <LegalStuff />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
