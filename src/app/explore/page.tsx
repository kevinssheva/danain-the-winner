import Explore from "./components/Explore";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-background px-[7%] relative overflow-hidden min-h-screen py-20 z-10">
      <Explore />
      <div className="absolute w-[90rem] -top-[30vh] -right-[30%] -z-10">
        <Image
          src={"/explore/background/Glow-1.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[50rem] top-0 left-0 -z-10">
        <Image
          src={"/explore/background/Grid-1.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[65rem] top-[100vh] right-0 -z-10">
        <Image
          src={"/explore/background/Grid-2.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[65rem] top-[150vh] -left-[30%] -z-10">
        <Image
          src={"/explore/background/Glow-2.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[65rem] -bottom-[90vh] -right-[20%] -z-10">
        <Image
          src={"/explore/background/Glow-3.svg"}
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
