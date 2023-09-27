import Image from "next/image";

interface AuthButtonProps {
    type: string;
    text: string;
    onClick: () => void;
}


export default function Authbutton(props: AuthButtonProps) {
    return (
        <button
            className="w-80 px-6 py-2 bg-[#D9D9D9] cursor-pointer z-50 flex rounded-2xl justify-center items-center gap-4"
            onClick={props.onClick}
        >
            <Image src={props.type == "facebook" ? "/register/facebook.svg" : "/register/google.svg"} width={46} height={24} alt="Google" />
            <p className="text-lg font-medium text-black">{props.text}</p>
        </button>
    )
}