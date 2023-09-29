interface ChatoutProps {
  message: string;
}

export default function Chatout(props: ChatoutProps) {
  return (
    <div className="flex justify-end">
      <div className="flex w-11/12 flex-row-reverse">
        <div className="relative max-w-xl rounded-xl chat-bg rounded-tr-none px-4 py-2" style={{}}>
          <span className="text-sm font-medium text-white">
            {props.message}
          </span>
        </div>
      </div>
    </div>
  );
}
