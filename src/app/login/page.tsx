import Image from "next/image";
import Login from "./components/Login";

export default function LoginPage() {
  return (
    <div className="bg-background h-screen">
      <div className="bg-[url('/login/kotak-kiri-atas.svg')] h-screen bg-no-repeat">
        <div className="bg-[url('/login/kotak-kanan-bawah.svg')] h-screen bg-no-repeat bg-right-bottom w-screen">
          <Image
            src={"/login/glowkanan-ori.svg"}
            width={500}
            height={500}
            className="absolute top-0 right-0 "
            alt="glow"
          />
          <Image
            src={"/login/glowkiri-ori.svg"}
            width={500}
            height={500}
            className="absolute bottom-0 left-0"
            alt="glow"
          />
          <Login />
        </div>
      </div>
    </div>
  );
}