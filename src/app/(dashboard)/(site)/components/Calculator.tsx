"use client";
import Input from "@/components/Input";
import Header from "./Header";
import { useState } from "react";
import Button from "@/components/Button";

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20 z-50 text-white">
      <Header page="Calculator Simulation" />
      <div className="flex flex-col gap-8 md:flex-row w-full justify-between">
        <div className="w-full flex flex-col gap-1">
          <p className="text-xl flex flex-col gap-2">Jumlah Investasi</p>
          <Input
            name="Jumlah"
            type="number"
            value={amount}
            placeholder="Rp 0"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <p className="text-xl flex flex-col gap-2">
            Waktu Investasi {"(tahun)"}
          </p>
          <Input
            name="Jumlah"
            value={amount}
            type="number"
            placeholder="0"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button text="Calculate" isPrimary={true} onClick={() => {}} />
      </div>

      <div
        className="py-11 px-6 rounded-2xl backdrop-blur-3xl mt-12"
        style={{
          background:
            "linear-gradient(127deg, rgba(6, 11, 40, 0.91) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
        }}
      >
        <h1 className="text-3xl font-semibold text-center mb-4">The Result</h1>
        
        <table className="w-full text-xl">
          <thead>
            <tr className="w-full">
              <th className="text-xl"></th>
              <th className="text-xl"></th>
              <th className="text-xl "></th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border-b">
              <td className="text-xl py-6 text-center">Profit</td>
              <td className="text-xl py-6">19%</td>
              <td className="text-xl py-6">Rp.9.500.000</td>
            </tr>
            <tr className="border-b">
              <td className="text-xl py-6">Capital Gain</td>
              <td className="text-xl py-6">0%</td>
              <td className="text-xl py-6"></td>
            </tr>
            <tr className="border-b">
              <td className="text-xl py-6">Divided</td>
              <td className="text-xl py-6">19%</td>
              <td className="text-xl py-6">Rp.9.500.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
