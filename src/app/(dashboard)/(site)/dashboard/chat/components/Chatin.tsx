interface ChatinProps {
  message: string;
}

export default function Chatin(props: ChatinProps) {
  return (
    <div className="flex justify-start">
      <div className="flex w-11/12">
        <div className="relative max-w-xl rounded-xl rounded-tl-none px-4 py-2" style={{
            background: "radial-gradient(50% 50% at 50% 50%, #C8C5A2 0%, #B5C8A2 0.01%, #DEF1CE 100%);"
            
        }}>
          <span className="text-sm text-black font-medium text-heading">
            {props.message}
          </span>
        </div>
      </div>
    </div>
  );
}
