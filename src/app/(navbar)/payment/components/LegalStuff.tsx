"use client";

import { BsCheck } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const LegalStuff = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="w-1/2">
      <li className="list-decimal text-2xl font-bold font-montserrat">
        Payment
      </li>
      <div className="w-full glass rounded-xl">
        <ul className="text-sm flex flex-col gap-5 p-5">
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
            onClick={() => setChecked((prev) => !prev)}
          >
            <div
              className={`w-full h-full pl-[0.1rem] bg-green-600 flex items-center justify-center overflow-hidden rounded-sm ${
                checked ? "scale-100" : "scale-0"
              } transition-all duration-200`}
            >
              <FaCheck size={13} />
            </div>
          </div>
          <p className="text-green-600 text-sm">
            I agree to this and the Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalStuff;
