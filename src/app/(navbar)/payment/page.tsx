import PaymentForm from "./components/PaymentForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-background min-h-screen px-[7%] py-32 relative overflow-hidden">
      <div className="container mx-auto z-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-light text-2xl md:text-3xl">INVEST IN</h1>
          <h1 className="font-bold text-3xl md:text-4xl">ZenniHome</h1>
        </div>
        <PaymentForm />
      </div>
      <div className="hidden lg:block absolute w-[34rem] top-0 right-[5%] z-[15]">
        <Image
          src={"/payment/Illustration.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[40rem] md:w-[50rem] top-0 -right-[90%] lg:-right-[10%] z-10 opacity-60">
        <Image
          src={"/payment/Glow1.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[40rem] md:w-[60rem] top-[120vh] -right-[20%] md:-right-[10%] z-10">
        <Image
          src={"/payment/Grid.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[30rem] md:w-[60rem] top-[30vh] -left-[30%] z-10 opacity-50 md:opacity-80">
        <Image
          src={"/payment/Glow2.svg"}
          width={100}
          height={100}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute w-[35rem] -bottom-[20vh] -right-[0] z-10 opacity-60">
        <Image
          src={"/payment/Glow3.svg"}
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
