import { IconType } from "react-icons";

interface InputProps {
  type?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  icon?: IconType;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  disabled,
  icon: Icon,
}) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        name={name}
        id={name}
        placeholder=" "
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
        px-4 md:px-6 py-[0.6rem]
        rounded-xl
        border-[1px] border-slate-600
        text-base
        w-full
        gradient-background
        peer
        focus:border-white focus:outline-none
      `}
      />
      <label
        className="absolute top-0 left-4 md:left-6 hidden h-full items-center gap-2 peer-placeholder-shown:flex peer-focus:hidden"
        htmlFor={name}
      >
        {Icon && <Icon size={20} />}
        <p className="font-light font-montserrat">{placeholder}</p>
      </label>
    </div>
  );
};

export default Input;
