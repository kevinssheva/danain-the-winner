import Image from "next/image";

const Benefit = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20 text-center z-20">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            expedita ex voluptatibus magnam ab fugiat, veritatis eius obcaecati
            deserunt fugit?
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
