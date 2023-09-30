import Image from "next/image";

const TestimoniCard = ({
  name,
  role,
  testimonial,
  imageURL,
}: {
  name: string;
  role: string;
  testimonial: string;
  imageURL: string;
}) => {
  return (
    <div className="w-[30rem] max-w-sm aspect-[385/500] bg-white rounded-2xl relative flex flex-col overflow-hidden">
      <div className="h-[65%] bg-gradient-to-br from-[#2CA717] to-[#14E08B] px-7 py-14 relative">
        <div className="w-full flex text-left">
          <p className="text-base md:text-lg text-white font-semibold font-montserrat">
            {testimonial}
          </p>
        </div>
        <Image
          src="/landing/koma.svg"
          alt=""
          className="absolute bottom-[10%] right-[10%] opacity-75 w-[3rem] md:w-[5rem]"
          width={100}
          height={100}
        />
      </div>

      <div className="w-full flex flex-col pb-4 pt-16 px-8 flex-1 relative text-center">
        <div className="w-[28%] aspect-square rounded-full bg-white overflow-hidden absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 border-white border-[5px]">
          <div className="w-full h-full relative">
            <Image
              src={imageURL}
              alt=""
              className="object-cover w-full h-full"
              fill={true}
            />
          </div>
        </div>
        <h1 className="text-xl md:text-[1.5rem] text-black font-bold">{name}</h1>
        <p className="text-black">{role}</p>
      </div>
    </div>
  );
};

export default TestimoniCard;
