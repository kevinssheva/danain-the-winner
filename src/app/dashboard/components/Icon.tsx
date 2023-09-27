import { BiHomeAlt2, BiBook } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsChatSquareText } from "react-icons/bs";
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
    } else if (props.type == "porto") {
      return (
        <BiBook
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else if (props.type == "calcu") {
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
    } else if (props.type == "user") {
      return (
        <AiOutlineUser
          color={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          fill={`${props.active ? "#FFFFFF" : "#32D73A"}`}
          className={`text-lg font-semibold`}
        />
      );
    } else {
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
