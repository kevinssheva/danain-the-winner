import Image from "next/image";
import Investor from "../../components/Investor";

export default async function Portopage() {
  return (
    <div className="bg-background min-h-screen overflow-hidden">
      {/* <Image
        src="/dashboard/portofolio/kotakkanan.svg"
        width={720}
        height={1080}
        alt="kotakatas"
        className="absolute top-[50%] right-0"
      /> */}
      {/* <Image
        src="/dashboard/portofolio/glowatas.svg"
        width={720}
        height={1080}
        alt="kotakatas"
        className="absolute top-0 right-0 z-10"
      /> */}

      <div className="bg-[url('/dashboard/portofolio/kotakbawah.svg')] h-full bg-no-repeat bg-left-bottom">
        <div className="bg-[url('/dashboard/portofolio/glowbawah.svg')] h-full bg-no-repeat bg-left">
          <div className="bg-[url('/dashboard/portofolio/kotakatas.svg')] h-full bg-no-repeat bg-right-top">
            <div className="bg-none md:bg-[url('/dashboard/portofolio/glowatas.svg')] h-full bg-no-repeat bg-right-top">
              <div className="bg-none md:bg-[url('/dashboard/portofolio/glowkanan.svg')] h-full bg-no-repeat bg-right-bottom">
                <Investor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
