import Image from "next/image";
import Category from "./Category";

interface CompanyCardProps {
  name: string;
  headline: string;
  description: string;
  companyImage: string;
  ownerImage: string;
  price: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  headline,
  description,
  companyImage,
  ownerImage,
  price,
}) => {
  return (
    <div
      className="
        w-full max-w-[23rem] rounded-2xl aspect-[385/555]
        flex flex-col
        text-left
        relative
        overflow-hidden
        group
        cursor-pointer
      "
    >
      <div className="w-full flex-1 overflow-hidden relative group-hover:brightness-75 transition-all">
        <Image
          src={companyImage}
          fill={true}
          alt=""
          className="object-cover w-full h-full object-top"
        />
      </div>
      {/* <div className="w-full bg-background h-[25%] overflow-hidden"></div> */}
      <div
        className="
        rounded-b-2xl
        glass
        px-4 pb-2 pt-6
        h-[55%]
        group-hover:h-[75%]
        group-hover:pb-[2.7rem]
        transition-all
        flex flex-col
        relative
      "
      >
        <div className="absolute w-[18%] aspect-square bg-white p-1 rounded-full overflow-hidden top-0 -translate-y-1/2 right-0 -translate-x-1/3">
          <div className="w-full h-full relative rounded-full overflow-hidden">
            <Image
              src={ownerImage}
              alt=""
              className="object-cover w-full h-full"
              fill={true}
            />
          </div>
        </div>
        <h1 className="text-base md:text-xl text-slate-300 font-montserrat">
          {name}
        </h1>
        <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold my-1 sm:my-2 line-clamp-2">
          {headline}
        </h1>
        <p className="line-clamp-3 group-hover:line-clamp-4 text-sm">{description}</p>
        <div className="flex gap-2 mb-5 mt-auto">
          <Category name="Technology" color="#A31AD3" />
          <Category name="Food Waste" color="#4C80B0" />
          <Category name="Online" color="#DDBB0A" />
        </div>
        <div className="absolute -bottom-full w-full px-4 left-0 group-hover:bottom-0 transition-all">
          <div className="border-b-[1px] border-white" />
          <p className="text-sm sm:text-base font-bold font-montserrat my-3">
            {price} <span className="font-normal">Valuation Cap</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
