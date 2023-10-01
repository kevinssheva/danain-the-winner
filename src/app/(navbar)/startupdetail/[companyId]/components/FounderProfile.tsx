"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineInstagram, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const FounderProfile = ({
  id,
  name,
  imageURL,
  description,
  instagram,
  linkedIn,
  cv,
}: {
  id: string
  name: string;
  imageURL?: string;
  description?: string;
  instagram?: string;
  linkedIn?: string;
  cv?: string;
}) => {
  const router = useRouter()
  return (
    <div className="w-full">
      <div className="flex items-center my-10 z-20">
        <div className="flex-1 border-b-2 border-white"></div>
        <h1 className="px-3 md:px-7 text-2xl lg:text-4xl font-bold">
          Meet Our Founder
        </h1>
        <div className="flex-1 border-b-2 border-white"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start gap-10">
        <div className="w-full max-w-lg aspect-[354/394] relative">
          <div className="w-full h-full relative rounded-md overflow-hidden">
            <Image
              src={imageURL ?? "/profile.jpg"}
              alt=""
              className="w-full h-full object-cover"
              fill={true}
            />
          </div>
          {(instagram || linkedIn) && (
            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex px-4 bg-white items-center py-1 rounded-lg">
              {instagram && (
                <Link
                  href={instagram}
                  className="p-3 rounded-lg cursor-pointer"
                >
                  <AiOutlineInstagram
                    size={28}
                    fill="#1019FF"
                    color="#1019FF"
                  />
                </Link>
              )}
              {linkedIn && (
                <Link
                  href={linkedIn}
                  className="bg-[#1019FF] p-3 cursor-pointer rounded-lg"
                >
                  <FaLinkedinIn size={24} />
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col ">
          <h1 className="font-poppins font-semibold text-4xl md:text-6xl leading-tight">
            <span className="text-3xl md:text-5xl font-light">Hello, I&apos;m</span>
            <br /> {name}
          </h1>
          <p className="font-montserrat text-lg md:text-xl mt-5">
            {description ?? "No Description Yet"}
          </p>
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <button onClick={() => (router.push(`/dashboard/chat/${id}`))} className="bg-[#1019FF] text-white px-5 md:px-10 py-3 rounded-md font-semibold font-poppins text-sm md:text-base">
              Say Hello!
            </button>
            {cv ? (
              <button
                onClick={() => window.open(cv)}
                className="bg-white border-[1px] border-[#1019FF] text-[#1019FF] px-8 py-3 rounded-md font-semibold font-poppins flex items-center gap-3"
              >
                <AiOutlineDownload color="blue" fill="blue" size={24} />
                Download CV
              </button>
            ) : (
              <p className="font-montserrat text-sm md:text-lg">
                No CV file download available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;
