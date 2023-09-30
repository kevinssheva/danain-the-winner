import Image from "next/image";
import Calculator from "../../components/Calculator";
import Chat from "./components/Chat";

export default function Portopage() {
  const role = "company";

  return (
    <div className="bg-background h-full min-h-screen overflow-hidden">
      <div className="bg-[url('/dashboard/portofolio/kotakkanan.svg')] h-full min-h-screen bg-no-repeat bg-right">
        <div className="bg-[url('/dashboard/portofolio/kotakbawah.svg')] h-full min-h-screen bg-no-repeat bg-left-bottom">
          <div className="bg-[url('/dashboard/portofolio/glowbawah.svg')] h-full min-h-screen bg-no-repeat bg-left">
            <div className="bg-[url('/dashboard/portofolio/kotakatas.svg')] h-full min-h-screen bg-no-repeat bg-right-top">
              <div className="bg-none md:bg-[url('/dashboard/portofolio/glowatas.svg')] h-full min-h-screen bg-no-repeat bg-right-top">
                <div className="bg-none md:bg-[url('/dashboard/portofolio/glowkanan.svg')] h-full min-h-screen bg-no-repeat bg-right-bottom">
                  <Chat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
