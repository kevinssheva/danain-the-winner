import Image from "next/image";
import Registerinvestor from "./components/Registerinvestor";

export default function LoginPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-[url('/registercompany/kotakkanan.svg')] bg-right-top bg-no-repeat min-h-screen">
        <div className="bg-[url('/registercompany/kotakkiri.svg')] bg-no-repeat bg-left-bottom w-screen min-h-screen">
          <div className="bg-[url('/registerinvestor/glowkanan.svg')] bg-no-repeat bg-left-top w-screen min-h-screen">
            <div className="bg-[url('/registerinvestor/glowkiri.svg')] bg-no-repeat bg-right-bottom min-h-screen">
              <Registerinvestor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
