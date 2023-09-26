import Image from "next/image";
import Register from "./components/Register";

export default function RegisterPage() {
  return (
    <div className="bg-background min-h-screen lg:max-h-screen w-full overflow-hidden">
      <Image
        src="/register/kotakkanan.svg"
        width={950}
        height={300}
        className="absolute top-0 right-0"
        alt="Kotak Kanan"
      />
      {/* <Image
        src="/register/kotakkiri.svg"
        width={1850}
        height={300}
        className="absolute bottom-0 left-0 w-full"
        alt="Kotak Kanan"
      /> */}
      <div className="bg-[url('/register/kotakkiri.svg')] bg-no-repeat bg-left-bottom min-h-screen">
        <div className="lg:bg-[url('/register/glowkiri.svg')] bg-none bg-no-repeat bg-left min-h-screen">
          <div className="lg:bg-[url('/register/glowbawah.svg')] bg-none bg-no-repeat bg-right-bottom min-h-screen">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}
