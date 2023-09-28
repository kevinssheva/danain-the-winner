import Image from "next/image";
import Calculator from "../../components/Calculator";
import Profileinvestor from "./components/Profileinvestor";
import Profilecompany from "./components/Profilecompany";

export default function Portopage() {
  const role = "company";

  return (
    <div className="bg-background h-[275vh]">
      <div className="bg-[url('/dashboard/portofolio/kotakkanan.svg')] h-full bg-no-repeat bg-right">
        <div className="bg-[url('/dashboard/portofolio/kotakbawah.svg')] h-full bg-no-repeat bg-left-bottom">
          <div className="bg-[url('/dashboard/portofolio/glowbawah.svg')] h-full bg-no-repeat bg-left">
            <div className="bg-[url('/dashboard/portofolio/kotakatas.svg')] h-full bg-no-repeat bg-right-top">
              <div className="bg-none md:bg-[url('/dashboard/portofolio/glowatas.svg')] h-full bg-no-repeat bg-right-top">
                <div className="bg-none md:bg-[url('/dashboard/portofolio/glowkanan.svg')] h-full bg-no-repeat bg-right-bottom">
                  {role=="company"? <Profilecompany /> : <Profileinvestor />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
