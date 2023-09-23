import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20 text-center z-20">
      <h1 className="font-neuro text-5xl">How does it Work?</h1>
      <p className="text-lg my-10">
        <span className="font-bold text-primary">Danain</span> streamlines the
        investment process by seamlessly connecting visionary companies with
        discerning investors. Through easy registration, companies create
        profiles, showcase projects, and engage with potential investors. danain
        serves as a bridge, enabling meaningful connections where entrepreneurs
        present their innovative ventures, and investors explore opportunities
        aligned with their interests. This facilitates transparent discussions
        and negotiations, ultimately leading to successful funding
        collaborations that drive business growth and innovation.
      </p>
      <div className="flex justify-around gap-10">
        <div className="flex-1 flex flex-col items-center gap-1 px-7 mt-10">
          <Image
            src={"/landing/Register.svg"}
            width={100}
            height={100}
            alt=""
            className="w-[7.5rem] aspect-square"
          />
          <h3 className="text-xl font-bold">Register</h3>
          <p>
            Registration to create a pitch and put your business in front of
            potential investor
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1 px-7 mt-10">
          <Image
            src={"/landing/Connect.svg"}
            width={100}
            height={100}
            alt=""
            className="w-[7.9rem] aspect-square"
          />
          <h3 className="text-xl font-bold">Connect with Investor</h3>
          <p>
            Connect with & message interested investors. We have over 200,000
            active investors globally
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1 px-7 mt-10">
          <Image
            src={"/landing/Invest.svg"}
            width={100}
            height={100}
            alt=""
            className="w-[7.0rem] aspect-square"
          />
          <h3 className="text-xl font-bold mt-3">GetFunded</h3>
          <p>Over $200 million raised for our members tro date</p>
        </div>
      </div>
    </div>
  );
};

export default About;
