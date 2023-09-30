import { BiHomeAlt2, BiBook, BiGroup } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsChatSquareText, BsBuildings } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";

interface IconProps {
  active: boolean;
  type: string;
}

export default function Icon(props: IconProps) {
  function konten() {
    if (props.type == "home") {
      return (
        <BiHomeAlt2
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else if (props.type == "portofolio") {
      return (
        <BiBook
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else if (props.type == "calculator") {
      return (
        <FaMoneyBillTrendUp
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else if (props.type == "chat") {
      return (
        <BsChatSquareText
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else if (props.type == "profile") {
      return (
        <AiOutlineUser
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else if (props.type == "investors") {
      return (
        <BiGroup
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else if (props.type == "companyprofile") {
      return (
        <BsBuildings
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    }
    else {
      return (
        <RiLogoutBoxRLine
          ccolor="red"
          fill="red"
          className={`text-lg font-semibold`}
        />
      );
    }
  }

  return (
    <div
      className={`p-2 ${
        props.active ? "bg-[#32D73A]" : "bg-[#1A1F37]"
      } rounded-lg`}
    >
      {konten()}
    </div>
  );
}
