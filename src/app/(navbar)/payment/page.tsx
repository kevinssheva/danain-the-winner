import Payment from "./components/Payment";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { UserSession } from "@/components/UserFetcher";
import { Company } from "@prisma/client";
import { redirect } from "next/navigation";
import axios from "axios";

interface Session {
  user: UserSession | null | undefined;
}

const Page = async ({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) => {
  const session = await getServerSession(authOptions) as Session;

  if (!session) {
    redirect("/login");
  }

  const { data: companyData } = await axios.get(`/api/v1/company/${searchParams?.CId}`);
  // const { data: transactionData } = await axios.get(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/transaction/${searchParams?.CId}/${searchParams?.UId}`);

  const { company }: { company: Company } = companyData;
  // const { transaction }: { transaction: Transaction } = transactionData;

  return (
    <>
      <Payment session={session} company={company} companyId={searchParams?.CId} userId={searchParams?.UId} />
    </>
  );
};

export default Page;
