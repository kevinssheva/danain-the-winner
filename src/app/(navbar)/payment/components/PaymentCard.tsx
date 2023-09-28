import Input from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import { IconType } from "react-icons";
interface PaymentCardProps {
  title: string;
  icon: IconType;
  isOpened: boolean;
  onClick: () => void;
  body: React.ReactElement;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  title,
  icon: Icon,
  isOpened,
  onClick,
  body,
}) => {
  return (
    <div
      className={`flex-1 glass py-5 px-5 rounded-xl flex flex-col overflow-hidden`}
      onClick={onClick}
    >
      <RadioButton
        name={title}
        checked={isOpened}
        onChange={onClick}
        isBig
        icon={Icon}
      />
      <div
        className={`grid ${
          isOpened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="overflow-hidden">
          <div className="pt-8 flex flex-col gap-4 pb-10">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
