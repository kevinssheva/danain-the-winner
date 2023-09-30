import Image from "next/image";
import Portofolio from "../../components/Portofolio";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/app/lib/prisma";
import { User } from "@prisma/client";
import { UserSession } from "@/components/UserFetcher";

interface Session {
  user: UserSession | undefined;
}

export default async function Portopage() {
  const session = await getServerSession(authOptions) as Session;

  const role = session?.user?.role || '';

  let portofolio;
  if (role === "INVESTOR") {
    portofolio = await prisma.transaction.findMany({
      where: {
        userId: (session?.user as User).id,
      },
      include: {
        company: true,
      }
    });
  } else if (role === "FOUNDER") {
    const company = await prisma.company.findFirst({
      where: {
        userId: (session?.user as User).id,
      },
    });

    if (!company) {
      return <div>Company not found</div>;
    }

    portofolio = await prisma.transaction.findMany({
      where: {
        companyId: company.id,
      },
      include: {
        user: true,
      }
    });
  }

  if(!portofolio) {
    return <div>Portofolio not found</div>;
  }

  return (
    <div className="bg-background h-[250vh]">
      <Image
        src="/dashboard/portofolio/kotakkanan.svg"
        width={720}
        height={1080}
        alt="kotakatas"
        className="absolute top-[50%] right-0"
      />
      {/* <Image
        src="/dashboard/portofolio/glowatas.svg"
        width={720}
        height={1080}
        alt="kotakatas"
        className="absolute top-0 right-0 z-10"
      /> */}

      <div className="bg-[url('/dashboard/portofolio/kotakbawah.svg')] h-full bg-no-repeat bg-left-bottom">
        <div className="bg-[url('/dashboard/portofolio/glowbawah.svg')] h-full bg-no-repeat bg-left">
          <div className="bg-[url('/dashboard/portofolio/kotakatas.svg')] h-full bg-no-repeat bg-right-top">
            <div className="bg-none md:bg-[url('/dashboard/portofolio/glowatas.svg')] h-full bg-no-repeat bg-right-top">
              <Portofolio portofolio={portofolio}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
