"use client";

import Input from "@/components/Input";
import { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import PaymentType from "./PaymentType";
import LegalStuff from "./LegalStuff";
import Complete from "./Complete";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [dataInfo, setDataInfo] = useState({
    name: "",
    address: "",
  });
  const [paymentType, setPaymentType] = useState("BANK" as "BANK" | "CREDIT");

  const [bankData, setBankData] = useState({
    accountType: "CHECKING" as "CHECKING" | "SAVING",
    ownerName: "",
    bankName: "",
    accountNumber: "",
  });

  const [creditData, setCreditData] = useState({
    cardNumber: "",
    expirationDate: "",
  });

  const [isLegalChecked, setIsLegalChecked] = useState(false);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-numeric characters except decimal point
    let sanitizedPrice = e.target.value.replace(/[^0-9.]/g, "");

    // Add commas as thousands separators
    sanitizedPrice = sanitizedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Update the state with the formatted price
    setAmount(sanitizedPrice);
  };

  const handleDataInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTypeChange = (type: "BANK" | "CREDIT") => {
    setPaymentType(type);
  };

  const handleBankDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBankData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAccountTypeChange = (type: "CHECKING" | "SAVING") => {
    setBankData((prev) => ({
      ...prev,
      accountType: type,
    }));
  };

  const handleCreditDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full my-10 z-20 pl-[8%] pr-[5%] md:px-0">
      <ul className="list-decimal flex flex-col gap-10">
        {/* INVESTMENT AMOUNT */}
        <div className="w-full max-w-md z-20">
          <li className="list-decimal text-xl md:text-2xl font-bold font-montserrat my-3">
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
        {/* INVESTMENT INFO */}
        <div className="w-full max-w-md z-20">
          <li className="list-decimal text-xl md:text-2xl font-bold font-montserrat my-3">
            Investor Info
          </li>
          <div className="flex flex-col gap-4">
            <Input
              name="name"
              placeholder="Enter Your Full Name"
              value={dataInfo.name}
              onChange={handleDataInfoChange}
              icon={MdPersonOutline}
            />
            <Input
              name="address"
              placeholder="Enter Your Address"
              value={dataInfo.address}
              onChange={handleDataInfoChange}
              icon={HiOutlineHome}
            />
          </div>
        </div>
        {/* PAYMENT */}
        <PaymentType
          type={paymentType}
          handleTypeChange={handleTypeChange}
          bankData={bankData}
          creditData={creditData}
          handleBankDataChange={handleBankDataChange}
          handleAccountTypeChange={handleAccountTypeChange}
          handleCreditDataChange={handleCreditDataChange}
        />
        {/* LEGAL STUFF */}
        <LegalStuff
          isLegalChecked={isLegalChecked}
          handleLegalCheck={() => {
            setIsLegalChecked((prev) => !prev);
          }}
        />
        {/* COMPLETE */}
        <Complete />
      </ul>
    </div>
  );
};

export default PaymentForm;
