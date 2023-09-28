"use client";

import Input from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import { useState } from "react";
import { AiFillBank, AiFillCreditCard } from "react-icons/ai";
import PaymentCard from "./PaymentCard";
import { BsCreditCard2Front } from "react-icons/bs";

interface PaymentTypeProps {
  type: "BANK" | "CREDIT";
  handleTypeChange: (type: "BANK" | "CREDIT") => void;
  bankData: {
    accountType: "CHECKING" | "SAVING";
    ownerName: string;
    bankName: string;
    accountNumber: string;
  };
  handleBankDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAccountTypeChange: (type: "CHECKING" | "SAVING") => void;
  creditData: {
    cardNumber: string;
    expirationDate: string;
  };
  handleCreditDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentType: React.FC<PaymentTypeProps> = ({
  type,
  handleTypeChange,
  bankData,
  handleBankDataChange,
  handleAccountTypeChange,
  creditData,
  handleCreditDataChange,
}) => {
  const bankBodyElement = (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 justify-between font-montserrat">
        Account Type
        <div className="flex gap-5">
          <RadioButton
            name="Checking"
            checked={bankData.accountType === "CHECKING"}
            onChange={() => handleAccountTypeChange("CHECKING")}
          />
          <RadioButton
            name="Saving"
            checked={bankData.accountType === "SAVING"}
            onChange={() => handleAccountTypeChange("SAVING")}
          />
        </div>
      </div>
      <Input
        name="bankName"
        placeholder="Account Name"
        value={bankData.ownerName}
        onChange={handleBankDataChange}
      />
      <Input
        name="bankName"
        placeholder="Bank Name"
        value={bankData.bankName}
        onChange={handleBankDataChange}
      />
      <Input
        name="accountNumber"
        placeholder="Account Number"
        value={bankData.accountNumber}
        onChange={handleBankDataChange}
      />
    </>
  );

  const creditCardBodyElement = (
    <>
      <Input
        name="cardNumber"
        placeholder="Account Number"
        value={creditData.cardNumber}
        onChange={handleCreditDataChange}
        icon={AiFillCreditCard}
      />
      <Input
        name="expirationDate"
        placeholder="Account Number"
        value={creditData.expirationDate}
        onChange={handleCreditDataChange}
      />
    </>
  );

  return (
    <div className="w-full z-20">
      <li className="list-decimal text-xl md:text-2xl font-bold font-montserrat my-3">
        Payment
      </li>
      <div className="flex flex-col md:flex-row gap-7 justify-start items-center md:items-start h-[30rem] md:h-[22rem]">
        <PaymentCard
          title="Bank Account"
          icon={AiFillBank}
          isOpened={type === "BANK"}
          onClick={() => handleTypeChange("BANK")}
          body={bankBodyElement}
        />
        <PaymentCard
          title="Credit Card"
          icon={BsCreditCard2Front}
          isOpened={type === "CREDIT"}
          onClick={() => handleTypeChange("CREDIT")}
          body={creditCardBodyElement}
        />
      </div>
    </div>
  );
};

export default PaymentType;
