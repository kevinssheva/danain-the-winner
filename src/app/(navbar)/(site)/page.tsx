import Button from "@/components/Button";
import Hero from "./components/Hero";
import Image from "next/image";
import About from "./components/About";
import Explore from "./components/Explore";
import Benefit from "./components/Benefit";
import Testimoni from "./components/Testimoni";
import GetStarted from "./components/GetStarted";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { UserSession } from "@/components/UserFetcher";

interface Session {
  user: UserSession | null;
}

export default async function Home() {
  const session = await getServerSession(authOptions) as Session;
  const { role } = session?.user as UserSession;

  return (
    <div className="bg-background px-[7%] relative overflow-hidden">
      <Hero />
      <About />
      <Explore />
      <Benefit />
      <Testimoni />
      <GetStarted />
      <div className="absolute w-[90rem] -top-[110vh] -left-[70%] md:-left-[55%] z-10">
        <Image
          src={"/landing/LightLeft.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[90rem] top-[50vh] -right-[180%] lg:-right-[30%] z-10">
        <Image
          src={"/landing/Glow2.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[50rem] bottom-0 left-0 z-10">
        <Image
          src={"/landing/Glow3.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[60rem] -right-[9%] top-[60vh] z-10">
        <Image
          src={"/landing/Grid1.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[45rem] left-0 top-0 z-10">
        <Image
          src={"/landing/Grid2.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[60rem] right-0 top-[300vh] z-10">
        <Image
          src={"/landing/Grid3.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}
