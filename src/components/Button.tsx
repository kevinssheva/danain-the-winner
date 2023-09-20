import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  isPrimary?: boolean;
  isGradient?: boolean;
  fullWidth?: boolean;
  icon?: IconType;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  isPrimary,
  isGradient,
  fullWidth,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      className={`
        ${fullWidth && "w-full"}
        ${
          isGradient
            ? "bg-[linear-gradient(88deg,#20F335_-11.23%,#51AB6C_55.98%,#139319_113.79%)] text-white"
            : isPrimary
            ? "bg-[#62D13B] text-white"
            : "bg-white text-black"
        }
        ${!isPrimary && "border-white border-[3px]"}
        py-2 px-4
        font-bold
        text-sm lg:text-base
        rounded-md
        flex items-center justify-center gap-2
        font-montserrat
        shadow-[0px_2px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-4px_2px_0px_rgba(0,0,0,0.25)_inset,0px_0px_1px_4px_rgba(255,255,255,0.10),0px_0px_180px_0px_rgba(0,0,0,0.00)]
        active:scale-100
        hover:scale-[103%]
        ${
          isPrimary
            ? "hover:shadow-[0px_2px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-4px_2px_0px_rgba(0,0,0,0.25)_inset,0px_0px_1px_4px_rgba(255,255,255,0.10),0px_0px_180px_0px_rgba(0,0,0,0.00),0px_0px_35px_#62D13B]"
            : "hover:shadow-[0px_2px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-4px_2px_0px_rgba(0,0,0,0.25)_inset,0px_0px_1px_4px_rgba(255,255,255,0.10),0px_0px_180px_0px_rgba(0,0,0,0.00),0px_0px_20px_#FFFFFF]"
        }
        transition-all
      `}
      onClick={onClick}
    >
      {Icon && <Icon size={22} />}
      {text}
    </button>
  );
};

export default Button;
