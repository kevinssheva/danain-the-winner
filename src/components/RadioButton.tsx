import { IconType } from "react-icons";

interface RadioButtonProps {
  name: string;
  checked: boolean;
  onChange: () => void;
  isBig?: boolean;
  icon?: IconType;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  checked,
  onChange,
  isBig = false,
  icon: Icon,
}) => {
  return (
    <div
      className={`${
        isBig && "font-semibold text-lg md:text-xl"
      } flex items-center ${
        isBig ? "gap-2 md:gap-5" : "gap-1 md:gap-2"
      } cursor-pointer`}
      onClick={onChange}
    >
      <div
        className={`${
          isBig ? "w-[1rem]" : "w-[0.8rem]"
        } aspect-square border-2 border-white rounded-full p-[0.1rem]`}
      >
        <div
          className={`w-full h-full bg-white rounded-full transition ${
            checked ? "scale-100" : "scale-0"
          }`}
        ></div>
      </div>
      {Icon && <Icon size={32} />}
      {name}
    </div>
  );
};

export default RadioButton;
