import { getServerSession } from "next-auth";
import Description from "./components/Description";
import GetStarted from "./components/GetStarted";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserSession } from "@/components/UserFetcher";

interface Session {
  user: UserSession | undefined;
}

const Page = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  return (
    <div className="bg-background relative overflow-hidden min-h-screen pt-20 z-10">
      <div className="min-h-screen flex flex-col gap-12 z-20">
        <Description />
        <GetStarted isLogin={!!session} />
      </div>
      <div className="absolute w-[40rem] top-0 left-0 -z-10">
        <Image
          src={"/about/Glow-1.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[40rem] top-0 right-0 -z-10">
        <Image
          src={"/about/Glow-2.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[40rem] top-0 right-0 -z-10">
        <Image
          src={"/about/Grid-1.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="hidden md:block absolute w-[12rem] top-[8%] right-[2%] z-10 animate-inverseFloat blur-[2px] opacity-80">
        <Image
          src={"/about/Coin3.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
