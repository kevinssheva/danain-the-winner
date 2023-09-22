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
    <div className="w-full max-w-sm aspect-[385/400] white-glass py-4 px-8 relative">
      <div className="w-1/3 aspect-square rounded-full bg-white absolute top-0 -translate-y-1/2 overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src={imageURL}
            alt=""
            className="object-cover w-full h-full"
            fill={true}
          />
        </div>
      </div>
      <div className="w-full flex flex-col mt-[20%] gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{name}</h1>
          <h2 className="text-xl font-light">{role}</h2>
        </div>
        <div className="w-full relative self-end py-8">
          <div className="text-5xl font-bold font-montserrat absolute top-0 left-0">
            "
          </div>
          <div className="absolute w-[90%] border-t-2 border-white right-0 top-0 translate-y-3" />
          <p className="text-lg line-clamp-4">
            {testimonial}
          </p>
          <div className="text-5xl font-bold font-montserrat absolute bottom-0 right-0 translate-y-[40%]">
            "
          </div>
          <div className="absolute w-[90%] border-t-2 border-white bottom-0 left-0 -translate-y-3" />
        </div>
      </div>
    </div>
  );
};

export default TestimoniCard;
