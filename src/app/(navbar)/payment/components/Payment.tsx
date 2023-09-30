"use client";
import PaymentForm from "./PaymentForm";
import Image from "next/image";
import { UserSession } from "@/components/UserFetcher";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Company, Transaction } from "@prisma/client";

interface Session {
    user: UserSession | null | undefined;
}

interface PaymentProps {
    session: Session;
    company: Company;
    companyId: string | string[] | undefined;
    userId: string | string[] | undefined;
}

const Payment = ({ session, company, companyId, userId }: PaymentProps) => {
    const router = useRouter();

    if (!companyId || !userId) {
        toast.error("Payment not found!", {
            duration: 5000
        });
        router.push("/");
    }

    if (userId != session?.user?.id) {
        toast.error("Payment not found!", {
            duration: 5000
        });
        router.push("/");
    }

    if (!company || (company.id != companyId)) {
        toast.error("Payment not found!", {
            duration: 5000
        });
        router.push("/");
    }

    return (
        <div className="bg-background min-h-screen px-[7%] py-32 relative overflow-hidden">
            <div className="container mx-auto z-10">
                <div className="flex flex-col gap-3">
                    <h1 className="font-light text-2xl md:text-3xl">INVEST IN</h1>
                    <h1 className="font-bold text-3xl md:text-4xl">{company.companyName}</h1>
                </div>
                <PaymentForm companyId={companyId} userId={userId} minRaise={company.minRaise} />
            </div>
            <div className="hidden lg:block absolute w-[34rem] top-0 right-[5%] z-[15]">
                <Image
                    src={"/payment/Illustration.svg"}
                    width={100}
                    height={100}
                    alt=""
                    className="w-full"
                />
            </div>
            <div className="absolute w-[40rem] md:w-[50rem] top-0 -right-[90%] lg:-right-[10%] z-10 opacity-60">
                <Image
                    src={"/payment/Glow1.svg"}
                    width={100}
                    height={100}
                    alt=""
                    className="w-full"
                />
            </div>
            <div className="absolute w-[40rem] md:w-[60rem] top-[120vh] -right-[20%] md:-right-[10%] z-10">
                <Image
                    src={"/payment/Grid.svg"}
                    width={100}
                    height={100}
                    alt=""
                    className="w-full"
                />
            </div>
            <div className="absolute w-[30rem] md:w-[60rem] top-[30vh] -left-[30%] z-10 opacity-50 md:opacity-80">
                <Image
                    src={"/payment/Glow2.svg"}
                    width={100}
                    height={100}
                    alt=""
                    className="w-full"
                />
            </div>
            <div className="absolute w-[35rem] -bottom-[20vh] -right-[0] z-10 opacity-60">
                <Image
                    src={"/payment/Glow3.svg"}
                    width={100}
                    height={100}
                    alt=""
                    className="w-full"
                />
            </div>
        </div>
    )
}

export default Payment