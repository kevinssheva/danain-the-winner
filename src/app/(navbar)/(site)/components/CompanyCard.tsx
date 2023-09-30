import Image from "next/image";
import Category from "./Category";
import { Category as CategoryInterface } from "@prisma/client";
import { useState } from "react";

interface CompanyCardProps {
  name?: string;
  headline?: string;
  description?: string;
  companyImage?: string;
  ownerImage?: string;
  price?: string;
  categories?: CategoryInterface[];
}

export const deconvertCategoryName = (categoryName: string) => {
  switch (categoryName) {
    case "Energy":
      return "Energy";
    case "Games":
      return "Games";
    case "ARNVR":
      return "AR & VR";
    case "FNB":
      return "Food & Beverage";
    case "ClimateChange":
      return "Climate Change";
    case "Education":
      return "Education";
    case "TravelNTourism":
      return "Travel & Tourism";
    case "FintechNFinance":
      return "Fintech & Finance";
    case "Technology":
      return "Technology";
    case "HealthNFitness":
      return "Health & Fitness";
    case "Agriculture":
      return "Agriculture";
    case "Sport":
      return "Sport";
    case "AI":
      return "AI";
    case "Sustainability":
      return "Sustainability";
    default:
      return "";
  }
};

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  headline,
  description,
  companyImage,
  ownerImage,
  price,
  categories,
}) => {
  const [imageLoadedCP, setImageLoadedCP] = useState(false);
  const [imageLoadedOP, setImageLoadedOP] = useState(false);

  function formatNumber(number: string) {
    // Convert the number to string
    const numberString = number;

    const [integerPart, decimalPart = ""] = numberString.split(".");

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const formattedNumber = decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;

    return formattedNumber;
  }

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
      <div
        className="w-full flex-1 overflow-hidden relative group-hover:brightness-75 transition-all"
        style={{
          // Apply blur filter when the image is not loaded
          filter: imageLoadedCP ? "none" : "blur(8px)",
        }}
      >
        <Image
          src={companyImage || "/landing/company_1.jpg"}
          fill={true}
          alt=""
          className="object-cover w-full h-full object-top"
          onLoad={() => setImageLoadedCP(true)}
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
          <div
            className="w-full h-full relative rounded-full overflow-hidden"
            style={{
              // Apply blur filter when the image is not loaded
              filter: imageLoadedOP ? "none" : "blur(8px)",
            }}
          >
            <Image
              src={ownerImage || "/profile.jpg"}
              alt=""
              className="object-cover w-full h-full"
              fill={true}
              onLoad={() => setImageLoadedOP(true)}
            />
          </div>
        </div>
        <h1 className="text-base md:text-xl text-slate-300 font-montserrat">
          {name}
        </h1>
        <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold my-1 sm:my-2 line-clamp-2">
          {headline}
        </h1>
        <p className="line-clamp-3 group-hover:line-clamp-4 text-sm">
          {description}
        </p>
        <div className="flex gap-2 mb-5 mt-auto">
          {categories?.slice(0, 2)?.map((category) => (
            <Category
              key={category.id}
              name={deconvertCategoryName(category.name)}
              color={category.color}
            />
          ))}
        </div>
        <div className="absolute -bottom-full w-full px-4 left-0 group-hover:bottom-0 transition-all">
          <div className="border-b-[1px] border-white" />
          <p className="text-sm sm:text-base font-bold font-montserrat my-3">
            Rp{price && formatNumber(price)}{" "}
            <span className="font-normal">Valuation Cap</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
