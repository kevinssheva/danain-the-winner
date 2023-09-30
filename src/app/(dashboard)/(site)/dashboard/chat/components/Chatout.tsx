import { User, Conversation } from "@prisma/client";

interface ChatItemProps {
  id: string;
  content: string;
  user: User
  deleted: boolean;
  currentUser: User;
  socketUrl: string;
  socketQuery: Record<string, string>;
};

export default function Chatout({id,
  content,
  user,
  currentUser,
  deleted,
  socketUrl,
  socketQuery
}: ChatItemProps) {
  return (
    <div className="flex justify-end">
      <div className="flex w-11/12 flex-row-reverse">
        <div className="relative max-w-xl rounded-xl chat-bg rounded-tr-none px-4 py-2" style={{}}>
          <span className="text-sm font-medium text-white">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
