"use client";

import Input from "@/components/Input";
import { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import PaymentType from "./PaymentType";
import LegalStuff from "./LegalStuff";
import Complete from "./Complete";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface PaymentFormProps {
  companyId: string | string[] | undefined;
  userId: string | string[] | undefined;
  minRaise: string | null;
}

const PaymentForm = ({ companyId, userId, minRaise }: PaymentFormProps) => {
  const [amount, setAmount] = useState("");
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
  const router = useRouter();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let sanitizedPrice = e.target.value.replace(/[^0-9,]/g, "");

    sanitizedPrice = sanitizedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    setAmount(sanitizedPrice);
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

  const handleInvestment = async () => {
    if (!companyId || !userId) toast.error("company or user not found!");

    if (!isLegalChecked) return toast.error("You must agree to the terms!");

    if (Number(amount.replace(/\./g, "")) < Number(minRaise))
      return toast.error("Amount must be greater than minimum raise!");

    if (paymentType == "BANK") {
      if (
        !bankData.accountNumber ||
        !bankData.accountType ||
        !bankData.bankName ||
        !bankData.ownerName
      )
        return toast.error("Please fill all the Bank Data fields!");
    } else {
      if (!creditData.cardNumber || !creditData.expirationDate)
        return toast.error("Please fill all the Credit Data fields!");
    }

    const body = {
      companyId: companyId,
      userId: userId,

      paymentMethod: paymentType,
      amount: Number(amount.replace(/\./g, "")),
      totalAmount: Math.round(Number(amount.replace(/\./g, "")) * 1.025), // yang udah ditambah fee 2.5%

      bankName: bankData.bankName,
      accountType: bankData.accountType,
      accountName: bankData.ownerName,
      accountNumber: bankData.accountNumber,

      cardNumber: creditData.cardNumber,
      expirationDate: creditData.expirationDate,
    };

    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/transaction`,
        body
      );

      if (res.status == 200) {
        toast.success("Investment success!", {
          duration: 3000,
        });

        router.push(`/startupdetail/${companyId}`);
      }
    } catch (err) {
      toast.error("Error: " + err, {
        duration: 3000,
      });
      console.log(err);
    }
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
        {/* <div className="w-full max-w-md z-20">
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
        </div> */}
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
        <Complete amount={amount} />

        {/* PAYMENT BUTTON */}
        <button
          className="w-full md:w-1/3 py-3 rounded-xl bg-[#0038FF] text-white font-bold text-lg md:text-xl font-montserrat"
          disabled={!isLegalChecked}
          onClick={handleInvestment}
        >
          COMPLETE INVESTMENT
        </button>
      </ul>
    </div>
  );
};

export default PaymentForm;
