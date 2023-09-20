import Image from "next/image";

const CompanyCard = () => {
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
          src={"/landing/company_1.jpg"}
          fill={true}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* <div className="w-full bg-background h-[25%] overflow-hidden"></div> */}
      <div
        className="
        bg-[rgba(255,255,255,0.5)]
        shadow-[0_1px_12px_rgba(0,0,0,0.25)]
        backdrop-blur-[20px]
        border-[1px] border-[rgba(255,255,255,0.3)]
        absolute
        px-4 py-2
        inset-x-0
        bottom-0
        h-[25%]
        group-hover:h-[80%]
        transition-all
      
      "
      >
        <h1 className="font-semibold text-xl">Company Name</h1>
        <div className="flex mt-1 items-center gap-3 mb-5">
          <div className="w-1/5 aspect-square bg-white rounded-full"></div>
          <div className="flex flex-col flex-1 gap-1">
            <p>Full Name</p>
            <p>Position</p>
          </div>
        </div>
        <p className="line-clamp-4 hidden group-hover:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          reiciendis, quia eos ea debitis harum, quasi animi magnam ipsam
          accusamus nihil error similique autem laudantium, asperiores odit
          doloremque soluta consectetur consequuntur dolorem deserunt minima
          culpa! Commodi nobis ducimus voluptate iste?
        </p>
      </div>
    </div>
  );
};

export default CompanyCard;
