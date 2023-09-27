import Startup from "./components/Startup";
import Image from "next/image";

export default function StartupPage() {
  return (
    <div className="bg-background min-h-screen">
      <Image
        src="/startupdetail/kotakkiri.svg"
        alt="kotak kiri"
        width={650}
        height={300}
        className="absolute top-0 left-0"
      />
      <div className="bg-[url('/startupdetail/kotakkanan.svg')] bg-no-repeat bg-right-bottom">
        <Image
          src="/startupdetail/glowkanan.svg"
          alt="kotak kiri"
          width={750}
          height={300}
          className="absolute top-0 right-0"
        />
        <div className="bg-[url('/startupdetail/glowkiri.svg')] bg-no-repeat bg-left-bottom">
          <Startup />
        </div>
      </div>
    </div>
  );
}
