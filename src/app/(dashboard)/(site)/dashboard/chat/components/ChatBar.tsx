"use client"
import Header from "../../../components/Header";
import Image from "next/image";
import { User, Conversation } from "@prisma/client";
import { redirect } from "next/navigation";
import { UserSession } from "@/components/UserFetcher";
import { useRouter } from "next/navigation";

interface Session {
    user: UserSession | undefined;
}

export default function ChatBar({ conversation, userId }: { conversation: (Conversation & { userOne: User, userTwo: User})[], userId: string}) {
    const router = useRouter();
    
    const filteredData = conversation.map(item => {
        if (userId === item.userOneId) {
            return item.userTwo;
        } else if (userId === item.userTwoId) {
            return item.userOne;
        }
        return null;
    })

    return (
        <div
            className="rounded-xl backdrop-blur-3xl p-6 md:w-full"
            style={{
                background:
                    "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%);",
            }
            }
        >
            <h1 className="font-semibold text-2xl mb-6">Chatting</h1>

            {
                filteredData.map(
                    (user, index) => (
                        <div className="py-1 border-t" key={index}>
                            <div onClick={() => router.push(`/dashboard/chat/${user?.id}`)} className="flex flex-row md:flex-col lg:flex-row gap-4 cursor-pointer hover:bg-white/10 rounded-xl p-3 items-center">
                                <Image
                                    src={user?.profilePicture || `/dashboard/portofolio/gibs.jpg`}
                                    width={50}
                                    height={50}
                                    className="rounded-full overflow-hidden w-16 aspect-square object-cover"
                                    alt="Profile Picture"
                                />
                                <p>{user?.fullName}</p>
                            </div>
                        </div>
                    )
                )
            }
        </div >
    )
}