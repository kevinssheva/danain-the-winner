import Startup from "./components/Startup";
import Image from "next/image";
import axios from "axios";
import { Company, Question, User, Transaction, Category } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { UserSession } from "@/components/UserFetcher";

interface Session {
  user: UserSession | null | undefined;
}

interface CompanyExtends extends Company {
  categories: Category[];
  questions?: Question[];
  user: User;
}

export default async function StartupPage({
  params,
}: {
  params: { companyId: string };
}) {
  const { companyId } = params;
  const session = (await getServerSession(authOptions)) as Session;

  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/company/${companyId}`
  );

  // get all transaction data
  const { data: transactionData } = await axios.get(
    process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/transaction/${companyId}`
  );

  const { company }: { company: CompanyExtends } = data;
  const { transactions }: { transactions: Transaction[] } = transactionData;

  // get total money raised from transactions with companyId = companyId and status = "ACTIVE"
  const moneyRaised = transactions
    .filter((transaction) => transaction.status == "ACTIVE")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

    // get total investor count from transactions with companyId = companyId and status = "ACTIVE", and make it a distinct
  const investorCount = transactions
    .filter((transaction) => transaction.status == "ACTIVE")
    .map((transaction) => transaction.userId)
    .filter((value, index, self) => self.indexOf(value) === index).length;

  return (
    <div className="bg-background px-[7%] relative overflow-hidden min-h-screen py-20 z-10">
      <Startup company={company} session={session} moneyRaised={moneyRaised} investorCount={investorCount}/>
      <Image
        src={"/startupdetail/kotakkiri.svg"}
        width={100}
        height={100}
        alt=""
        className="w-[40rem] absolute top-0 left-0 -z-10"
      />
      <Image
        src={"/startupdetail/GridMid.svg"}
        width={100}
        height={100}
        alt=""
        className="w-[60rem] absolute right-0 top-[90vh] -z-10"
      />
      <Image
        src={"/startupdetail/glowkanan.svg"}
        width={100}
        height={100}
        alt=""
        className="w-[60rem] absolute right-0 top-0 -z-10 opacity-70"
      />
      <Image
        src={"/startupdetail/glowkiri.svg"}
        width={100}
        height={100}
        alt=""
        className="w-[60rem] absolute left-0 bottom-0 -z-10"
      />
      <Image
        src={"/startupdetail/Glow.svg"}
        width={100}
        height={100}
        alt=""
        className="w-[30rem] absolute right-0 top-[130vh] -z-10"
      />
    </div>
  );
}
