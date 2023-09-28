import Image from "next/image";
import Header from "./Header";

export default function Investor() {
  const data = [
    {
      picurl: "/dashboard/portofolio/gibs.jpg",
      fullname: "Clara Alrosa",
      fund: "$10,000",
      date: "29 September 2023",
      status: "Active",
    },
    {
      picurl: "/dashboard/portofolio/gibs.jpg",
      fullname: "Gibran Fasha",
      fund: "$15,000",
      date: "28 September 2023",
      status: "Inactive",
    },
  ];
  
  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20 z-50">
      <Header page="Portofolio" />
      <div className="max-w-screen overflow-x-auto">
        <table className="font-semibold text-left lg:text-center overflow-x-scroll w-full">
          <thead className="mb-12">
            <tr className="text-sm lg:text-lg">
              <th className="px-8"></th>
              <th className="px-8">Fullname</th>
              <th className="px-8">Fund Investment</th>
              <th className="px-8 ">Investment Date</th>
              <th className="px-8">Status</th>
            </tr>
          </thead>
          <tbody className="text-base lg:text-xl">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-[#FDFDFD] h-28">
                <td className="justify-center flex h-28">
                  <Image
                    src={item.picurl}
                    width={50}
                    height={50}
                    alt={`row${index + 1}`}
                    className="self-center rounded-full object-cover"
                  />
                </td>
                <td className="px-8">{item.fullname}</td>
                <td className="px-8">{item.fund}</td>
                <td className="px-8">{item.date}</td>
                <td className="px-8">
                  <div className="bg-[#D9D9D9] flex rounded-xl justify-center items-center-lg gap-4 px-4 py-2">
                    {item.status == "Active" ? (
                      <Image
                        src={"/dashboard/portofolio/blue.svg"}
                        width={20}
                        height={20}
                        alt="active"
                      />
                    ) : (
                      <Image
                        src={"/dashboard/portofolio/red.svg"}
                        width={20}
                        height={20}
                        alt="inactive"
                      />
                    )}
                    <p className="text-black">{item.status}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
