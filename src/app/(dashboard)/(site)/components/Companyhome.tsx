"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { Company, User, Transaction } from "@prisma/client";
import { useRouter } from "next/navigation";

interface CompanyWithTransactions extends Company {
  transactions: Transaction[];
  user: User;
}

export default function Companyhome({
  company,
}: {
  company: CompanyWithTransactions;
}) {
  const router = useRouter();

  const formatAmountInRupiah = (amount: string) => {
    const parsedAmount = parseInt(amount, 10);

    if (isNaN(parsedAmount)) {
      return "Rp 0";
    }

    const formattedAmount = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(parsedAmount);

    return formattedAmount;
  };

  const totalAmount = company?.transactions?.reduce(
    (sum: number, transaction: Transaction) => {
      const transactionAmount = parseInt(transaction.amount, 10);

      if (!isNaN(transactionAmount)) {
        return sum + transactionAmount;
      } else {
        return sum;
      }
    },
    0
  );
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <div className="rounded-2xl p-9 gap-9 flex flex-col xl:flex-row items-center funds-bg">
            <Image
              src={"/dashboard/investor/wallet.svg"}
              width={20}
              height={100}
              alt="Wallet"
              className="w-[15%]"
            />
            <div className="text-center">
              <p className="text-lg lg:text-2xl text-[#8C89B4]">
                Funds Collected
              </p>
              <h1 className="text-lg lg:text-3xl font-bold">
                {formatAmountInRupiah(totalAmount?.toString())}
              </h1>
            </div>
            <Image
              src={"/dashboard/investor/wallet2.svg"}
              width={80}
              height={100}
              alt="Wallet"
              className="hidden xl:block"
            />
          </div>

          <div
            className="lg:px-6 py-9 rounded-xl flex flex-col-reverse xl:flex-row items-center gap-9"
            style={{
              background:
                "linear-gradient(89deg, #1A1F37 5.82%, rgba(14, 13, 57, 0.00) 51%, #1A1F37 80%)",
            }}
          >
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-4">
                <p className="text-[#8C89B4]">Welcome back,</p>

                <h1 className="text-2xl font-bold">
                  {company?.user?.fullName}
                </h1>
                <p className="text-[#8C89B4]">
                  Glad to see you again! <br />
                  Ask me anything.
                </p>
              </div>
              <Button
                text="See Your Investors"
                isPrimary={true}
                fullWidth={true}
                onClick={() => {
                  router.push("/dashboard/investors");
                }}
              />
            </div>
            <Image
              src={"/dashboard/investor/welcome.svg"}
              width={280}
              height={500}
              alt="Welcome"
              className="w-[50%]"
            />
          </div>
        </div>

        <div className="bg-[#1A1F37] lg:w-1/2 py-16 flex flex-col-reverse lg:flex-row gap-4 px-6 rounded-xl">
          <div className="flex flex-col gap-4 lg:gap-0 text-justify justify-between">
            <p className="text-[#8C89B4]">
              Unlock a world of investment opportunities with our cutting-edge
              chat feature that seamlessly connects investors and companies.
              <br />
              <br /> Discover a platform designed to foster meaningful dialogues
              and facilitate informed investment decisions. Engage with a
              diverse network of businesses.
            </p>
            <Button
              text="Chat Now!"
              isPrimary={true}
              fullWidth={true}
              onClick={() => {
                router.push("/dashboard/chat");
              }}
            />
          </div>
          <Image
            src={"/dashboard/investor/chatbener.svg"}
            width={250}
            height={500}
            alt="Chat"
            className="self-center"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col xl:flex-row gap-4">
        <div
          className="p-10 bg-[#1A1F37]  rounded-xl xl:w-1/2"
          
        >
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <Image
              src={"/dashboard/investor/review.svg"}
              width={235}
              height={500}
              alt="Review"
              className="self-center"
            />
            <div className="flex flex-col gap-2 lg:gap-0 justify-between">
              <h1 className="text-4xl text-center font-semibold">
                Review your pitch deck file with AI
              </h1>
              <p className="text-[#8C89B4] text-justify">
                Try out our AI-powered pitch deck review feature to get a better
                understanding of your pitch deck’s strengths and weaknesses. Our
                AI will analyze your pitch deck and provide you with a
                comprehensive report on how to improve your pitch deck.
              </p>
            </div>
          </div>
          <Button
            text="Coming Soon"
            isPrimary={true}
            fullWidth={true}
            onClick={() => {}}
          />
        </div>

        <div
          className="p-10 xl:w-1/2 rounded-xl flex flex-col-reverse lg:flex-row"
          style={{
            background:
              "linear-gradient(89deg, rgba(14, 13, 57, 0.00) 25.82%, #1A1F37 51%, #1A1F37 51%);",
          }}
        >
          <div className="flex flex-col gap-4 lg:gap-0 justify-between">
            <h1 className="text-4xl font-semibold">
              Complete your Company Profile Now!
            </h1>
            <p className="font-normal text-[#A0AEC0] text-justify">
              Complete your company profile to get the most out of our platform
              and get noticed by investors.
            </p>

            <Button
              isPrimary={true}
              fullWidth={true}
              text="Complete Now"
              onClick={() => {
                router.push("/dashboard/companyprofile");
              }}
            />
          </div>

          <Image
            src={"/dashboard/investor/welcomeinv.svg"}
            width={235}
            height={500}
            alt="Complete"
            className="self-center"
          />
        </div>
      </div>
    </>
  );
}
