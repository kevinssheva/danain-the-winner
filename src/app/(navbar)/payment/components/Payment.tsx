"use client";

import Input from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import { useState } from "react";
import { AiFillBank, AiFillCreditCard } from "react-icons/ai";
import PaymentCard from "./PaymentCard";
import { BsCreditCard2Front } from "react-icons/bs";

const Payment = () => {
  const [type, setType] = useState("BANK");
  const [bankData, setBankData] = useState({
    accountType: "CHECKING", //radio button
    name: "",
    bankName: "",
    accountNumber: "",
  });

  const [creditData, setCreditData] = useState({
    cardNumber: "",
    expirationDate: "",
  });

  const handleBankDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBankData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreditDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const bankBodyElement = (
    <>
      <div className="flex items-center justify-between font-montserrat">
        Account Type
        <div className="flex gap-5">
          <RadioButton
            name="Checking"
            checked={bankData.accountType === "CHECKING"}
            onChange={() =>
              setBankData((prev) => ({
                ...prev,
                accountType: "CHECKING",
              }))
            }
          />
          <RadioButton
            name="Saving"
            checked={bankData.accountType === "SAVING"}
            onChange={() =>
              setBankData((prev) => ({
                ...prev,
                accountType: "SAVING",
              }))
            }
          />
        </div>
      </div>
      <Input
        name="name"
        placeholder="Account Name"
        value={bankData.name}
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
    <div className="w-full">
      <li className="list-decimal text-2xl font-bold font-montserrat">
        Payment
      </li>
      <div className="flex gap-7 items-start">
        <PaymentCard
          title="Bank Account"
          icon={AiFillBank}
          isOpened={type === "BANK"}
          onClick={() => setType("BANK")}
          body={bankBodyElement}
        />
        <PaymentCard
          title="Credit Card"
          icon={BsCreditCard2Front}
          isOpened={type === "CREDIT"}
          onClick={() => setType("CREDIT")}
          body={creditCardBodyElement}
        />
      </div>
    </div>
  );
};

export default Payment;
