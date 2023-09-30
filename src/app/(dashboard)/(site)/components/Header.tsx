import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

interface HeaderProps {
  page: string;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-10 md:mb-16">
        <p className="text-white text-base">
          <span className="text-[#A0AEC0]">Pages </span>/ Dashboard <br />{" "}
          {props.page}
        </p>
        <Link href={"/dashboard/profile"}>
          <AiOutlineUser
            className="text-white text-3xl cursor-pointer"
            color="#32D73A"
            fill="#32D73A"
          />
        </Link>
      </div>
    </>
  );
}
