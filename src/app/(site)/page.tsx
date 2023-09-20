import Button from "@/components/Button";
import Hero from "./components/Hero";
import Image from "next/image";
import About from "./components/About";
import Explore from "./components/Explore";

export default function Home() {
  return (
    <div className="bg-background px-[5%] relative overflow-hidden">
      <Hero />
      <About />
      <Explore />
      <div className="absolute w-[90rem] -top-[110vh] -left-[55%] z-10">
        <Image
          src={"/landing/LightLeft.svg"}
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
    </div>
  );
}
