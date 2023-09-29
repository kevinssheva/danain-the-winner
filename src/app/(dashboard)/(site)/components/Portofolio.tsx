import { Transaction, Company, User } from "@prisma/client";
import Header from "./Header";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/app/lib/prisma";
import { UserSession } from "@/components/UserFetcher";

interface Session {
  user: UserSession | undefined;
}

export default async function Portofolio() {
  const session = await getServerSession(authOptions) as Session;

  console.log(session.user)
  const portofolio = await prisma.transaction.findMany({
    where: {
      userId: (session?.user as User).id,
    },
    include: {
      company: true,
    }
  });

  console.log(portofolio)

  const formatAmountInRupiah = (amount: string) => {
    const parsedAmount = parseInt(amount, 10);
  
    if (isNaN(parsedAmount)) {
      return 'Invalid Amount';
    }
  
    const formattedAmount = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(parsedAmount);
  
    return formattedAmount;
  }

  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20 z-50">
      <Header page="Portofolio" />
      <div className="max-w-screen overflow-x-auto">
        <table className="font-semibold text-left lg:text-center overflow-x-scroll w-full">
          <thead className="mb-12">
            <tr className="text-sm lg:text-lg">
              <th className="px-8"></th>
              <th className="px-8">
                Company
              </th>
              <th className="px-8">Fund Investment</th>
              <th className="px-8 ">Investment Date</th>
              <th className="px-8">Status</th>
            </tr>
          </thead>
          <tbody className="text-base lg:text-xl">
            {portofolio?.map((item, index) => (
              <tr key={index} className="border-b border-[#FDFDFD] h-28">
                <td className="justify-center flex h-28">
                  <Image
                    src={item.company?.coverPhoto ?? ''}
                    width={50}
                    height={50}
                    alt={`row${index + 1}`}
                    className="self-center"
                  />
                </td>
                <td className="px-8">{item.company?.companyName}</td>
                <td className="px-8">{formatAmountInRupiah(item.amount)}</td>
                <td className="px-8">{item.createdAt.toLocaleDateString()}</td>
                <td className="px-8">
                  <div className="bg-[#D9D9D9] flex rounded-xl justify-center items-center-lg gap-4 px-4 py-2">
                    {item.status === "ACTIVE" ? (
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
