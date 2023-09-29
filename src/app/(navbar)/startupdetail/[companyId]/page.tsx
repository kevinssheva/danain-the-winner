import Startup from "../components/Startup";
import Image from "next/image";
import axios from "axios";
import { Company } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { UserSession } from "@/components/UserFetcher";

interface Session {
  user: UserSession | null | undefined;
}

export default async function StartupPage({ params }: { params: { companyId: string } }) {
  const { companyId } = params;
  const session = await getServerSession(authOptions) as Session;
  const { data } = await axios.get(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/company/${companyId}`);
  const { company }: { company: Company } = data

  return (
    <div className="bg-background min-h-screen">
      <Image
        src="/startupdetail/kotakkiri.svg"
        alt="kotak kiri"
        width={650}
        height={300}
        className="absolute top-0 left-0"
      />
      <div className="bg-[url('/startupdetail/kotakkanan.svg')] bg-no-repeat bg-right-bottom">
        <Image
          src="/startupdetail/glowkanan.svg"
          alt="kotak kiri"
          width={750}
          height={300}
          className="absolute top-0 right-0"
        />
        <div className="bg-[url('/startupdetail/glowkiri.svg')] bg-no-repeat bg-left-bottom">
          <Startup company={company} session={session}/>
        </div>
      </div>
    </div>
  );
}
