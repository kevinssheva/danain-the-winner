import Image from "next/image";

const Benefit = () => {
  return (
    <div className="min-h-[70vh] relative container mx-auto py-20 text-center z-20">
      <h1 className="font-neuro text-4xl md:text-5xl">Why Invest on danain?</h1>
      <div className="flex flex-wrap justify-around gap-10 my-10">
        <div className="flex-1 flex flex-col items-center gap-1 px-7 mt-10">
          <Image
            src={"/landing/benefit1.svg"}
            width={100}
            height={100}
            alt=""
            className="w-[7.0rem] aspect-square"
          />
          <h3 className="text-2xl font-bold mt-7 mb-2">
            Invest and receive equity
          </h3>
          <p>
            Danain can help you to invest in a lot of different companies and
            receive equity from them. You can also get a lot of returns from
            your investment.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1 px-7 mt-10">
          <Image
            src={"/landing/benefit2.svg"}
            width={100}
            height={100}
            alt=""
            className="w-[7.0rem] aspect-square"
          />
          <h3 className="text-2xl font-bold mt-7 mb-2">
            Build wealth over time
          </h3>
          <p>
            Through the years, Danain has helped a lot of people to build their
            wealth over time. You can also build your wealth by investing in
            Danain.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1 px-7 mt-10">
          <Image
            src={"/landing/benefit3.svg"}
            width={100}
            height={100}
            alt=""
            className="w-[7.0rem] aspect-square"
          />
          <h3 className="text-2xl font-bold mt-7 mb-2">Get front row seats</h3>
          <p>
            Danain keeps you up to date with the latest news about companies
            rising around the world. You can also get front row seats to the
            latest news about the companies you invested in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
