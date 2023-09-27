import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

export default function Page() {
  return (
    <div className="bg-background min-h-screen">
      <Image
        src="/dashboard/investor/kotakkanan.svg"
        alt="kotakkanan"
        width={700}
        height={400}
        className="right-0 top-0 absolute"
      />

      <div className="h-full min-h-screen bg-none md:bg-[url('/dashboard/investor/glowatas.svg')] bg-no-repeat bg-right-top">
        <div className="h-full min-h-screen bg-[url('/dashboard/investor/glowtengah.svg')] bg-no-repeat">
          <div className="h-full min-h-screen bg-none md:bg-[url('/dashboard/investor/glowbawah.svg')] bg-no-repeat bg-right-bottom">
          <div className="h-full min-h-screen bg-[url('/dashboard/investor/kotakkiri.svg')] bg-no-repeat bg-left-bottom">
            <Sidebar />
            <Home />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
