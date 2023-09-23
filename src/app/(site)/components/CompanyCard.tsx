import Image from "next/image";
import Category from "./Category";

interface CompanyCardProps {
  name: string;
  owner: string;
  position: string;
  description: string;
  imageURL: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  owner,
  position,
  description,
  imageURL,
}) => {
  return (
    <div
      className="
      bg-[rgba(255,255,255,0.5)]
        shadow-[0_1px_12px_rgba(0,0,0,0.25)]
        backdrop-blur-[20px]
        border-[1px] border-[rgba(255,255,255,0.3)]
        w-full max-w-[23rem] rounded-2xl aspect-[385/500]
        flex flex-col
        text-left
        relative
        overflow-hidden
        group
        cursor-pointer
      "
    >
      <div className="w-full bg-sky-200 h-full overflow-hidden relative group-hover:brightness-75 transition-all">
        <Image
          src={imageURL}
          fill={true}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* <div className="w-full bg-background h-[25%] overflow-hidden"></div> */}
      <div
        className="
        white-glass
        absolute
        px-4 py-2
        inset-x-0
        bottom-0
        h-[25%]
        group-hover:h-[80%]
        transition-all
      
      "
      >
        <h1 className="font-semibold text-xl">{name}</h1>
        <div className="flex mt-1 items-center gap-3 mb-5">
          <div className="w-1/5 aspect-square bg-white rounded-full"></div>
          <div className="flex flex-col flex-1 gap-1">
            <p>{owner}</p>
            <p>{position}</p>
          </div>
        </div>
        <p className="line-clamp-4 hidden group-hover:block">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Category name="Technology" color="#A31AD3" />
          <Category name="Food Waste" color="#4C80B0" />
          <Category name="Online" color="#DDBB0A" />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
