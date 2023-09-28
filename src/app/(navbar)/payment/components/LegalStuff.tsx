"use client";

import { BsCheck } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

interface LegalStuffProps {
  isLegalChecked: boolean;
  handleLegalCheck: () => void;
}

const LegalStuff: React.FC<LegalStuffProps> = ({
  isLegalChecked,
  handleLegalCheck,
}) => {
  return (
    <div className="w-full max-w-md z-20">
      <li className="list-decimal text-xl md:text-2xl font-bold font-montserrat my-3">
        Legal Stuff
      </li>
      <div className="w-full max-w-md glass rounded-xl">
        <ul className="text-xs md:text-sm flex flex-col gap-5 p-5">
          <li>
            I've read the Investor FAQ. I understand startups are risky and can
            afford to lose my entire investment.
          </li>

          <li>
            I understand these investments are not easily resold. I can wait
            years for a return.
          </li>

          <li>
            I understand Wefunder does not offer investment advice. I am making
            my own investment decisions.
          </li>

          <li>I am complying with my annual investment limit.</li>

          <li>
            I understand that I may cancel anytime until four days after making
            my investment or until my funds are disbursed, whichever is later.
          </li>

          <li>
            I agree to the contracts with my electronic signature and authorize
            Wefunder to debit my account.
          </li>

          <li>
            I understand that if I'm an accredited investor I may be
            transitioned into a concurrent Reg D.
          </li>
        </ul>
        <div className="w-full py-3 px-5 bg-[#D4F4EA] rounded-xl flex items-center gap-3">
          <div
            className="w-[1.2rem] rounded-md aspect-square border-2 cursor-pointer border-green-600 overflow-hidden"
            onClick={handleLegalCheck}
          >
            <div
              className={`w-full h-full pl-[0.1rem] bg-green-600 flex items-center justify-center overflow-hidden rounded-sm ${
                isLegalChecked ? "scale-100" : "scale-0"
              } transition-all duration-200`}
            >
              <FaCheck size={13} />
            </div>
          </div>
          <p className="text-green-600 text-xs md:text-sm">
            I agree to this and the Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalStuff;
