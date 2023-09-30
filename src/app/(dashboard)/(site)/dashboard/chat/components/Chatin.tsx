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

export default function Chatin({
  id,
  content,
  user,
  currentUser,
  deleted,
  socketUrl,
  socketQuery
}: ChatItemProps) {
  return (
    <div className="flex justify-start">
      <div className="flex w-11/12">
        <div className="relative max-w-xl rounded-xl rounded-tl-none px-4 py-2" style={{
            background: "radial-gradient(50% 50% at 50% 50%, #C8C5A2 0%, #B5C8A2 0.01%, #DEF1CE 100%)"
        }}>
          <span className="text-sm text-black font-medium text-heading">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
