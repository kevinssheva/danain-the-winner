"use client";
import Header from "../../../components/Header";
import Image from "next/image";
import Input from "@/components/Input";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsFillSendFill, BsSend } from "react-icons/bs";
import Chatin from "./Chatin";
import Chatout from "./Chatout";
import { User, Conversation, Message } from "@prisma/client";
import ChatBar from "./ChatBar";
import { useChatQuery } from "@/app/hooks/useChatQuery";
import { useChatSocket } from "@/app/hooks/useChatSocket";
import { useChatScroll } from "@/app/hooks/useChatScroll";
import Loader from "@/components/Loader";
import qs from "query-string";
import axios from "axios";
import { useRouter } from "next/navigation";

type MessageWithUser = Message & {
  user: User
}

interface ChatMessagesProps {
  otherUser: User;
  user: User;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  query: Record<string, string>;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
}

export default function Chat({
  otherUser,
  user,
  chatId,
  apiUrl,
  socketUrl,
  socketQuery,
  query,
  paramKey,
  paramValue,
}: ChatMessagesProps) {
  const router = useRouter()
  const queryKey = `chat:${chatId}`;
  const addKey = `chat:${chatId}:messages`;
  const updateKey = `chat:${chatId}:messages:update`

  const chatRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useChatQuery({
    queryKey,
    apiUrl,
    paramKey,
    paramValue,
  });
  useChatSocket({ queryKey, addKey, updateKey });
  useChatScroll({
    chatRef,
    bottomRef,
    loadMore: fetchNextPage,
    shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
    count: data?.pages?.[0]?.items?.length ?? 0,
  })

  const [currentChat, setCurrentChat] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentChat(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const url = qs.stringifyUrl({
        url: socketUrl,
        query,
      });

      const data = { content: currentChat }
      await axios.post(url, data);

      setCurrentChat("")
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  // const handleSendMessage = () => {
  //   if (currentChat.trim() !== "") {
  //     const newMessage: Message = {
  //       message: currentChat,
  //       type: "out",
  //     };

  //     setData((prevData: Message[]) => [...prevData, newMessage]);
  //     setCurrentChat("");
  //   }
  // };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [data]);

  return (
    <div className="px-[5%] md:pl-80 md:pr-12 md:py-14 py-20 z-50 text-white">
      <Header page="Chatting" />

      <div className="flex flex-col md:flex-row gap-8">
        {/* <ChatBar  /> */}

        <div
          className="rounded-xl p-10 md:w-2/3 flex flex-col justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.09);",
          }}
        >
          <div
            className="border rounded-xl flex items-center gap-4 backdrop-blur-3xl p-3"
            style={{
              background:
                "radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%);",
            }}
          >
            {/* <FaArrowLeft className="cursor-pointer" /> */}
            <Image
              src={otherUser.profilePicture || `/profile.jpg`}
              width={40}
              height={50}
              className="rounded-full"
              alt="Profile Picture"
            />
            <div className="flex flex-col">
              <p>{otherUser.fullName}</p>
              <p className="line-clamp-1">{otherUser.description}</p>
            </div>
          </div>

          <div className="h-80 md:max-h-80 overflow-y-auto py-3 px-2 md:px-10 flex w-full">
            {hasNextPage && (
              <div className="flex justify-center">
                {isFetchingNextPage ? (
                  <Loader />
                ) : (
                  <button
                    onClick={() => fetchNextPage()}
                    className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 text-xs my-4 dark:hover:text-zinc-300 transition"
                  >
                    Load previous messages
                  </button>
                )}
              </div>
            )}
            <div className="w-full h-fit flex gap-4 flex-col-reverse">
              {data?.pages?.map((group, i) => (
                <Fragment key={i}>
                  {group.items.map((message: MessageWithUser) => {
                    if (message.user.id === user.id) {
                      return (
                        <Chatout
                          key={message.id}
                          id={message.id}
                          currentUser={user}
                          user={message.user}
                          content={message.content}
                          deleted={message.deleted}
                          socketUrl={socketUrl}
                          socketQuery={socketQuery}
                        />
                      )
                    } else {
                      return (
                        <Chatin
                          key={message.id}
                          id={message.id}
                          currentUser={user}
                          user={message.user}
                          content={message.content}
                          deleted={message.deleted}
                          socketUrl={socketUrl}
                          socketQuery={socketQuery}
                        />
                      )
                    }
                  })}
                </Fragment>
              ))}
              <div ref={bottomRef} className="pt-1" />
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Input
              placeholder="Type your message here"
              name="chat"
              value={currentChat}
              onChange={handleInputChange}
            />
            <BsSend
              color="#34EE30"
              fill="#34EE30"
              className="cursor-pointer text-3xl"
              onClick={() => {onSubmit()}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
