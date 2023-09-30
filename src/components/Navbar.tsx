"use client";

import Image from "next/image";
import Button from "./Button";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MenuIcon from "./MenuIcon";
import { BsPersonCircle } from "react-icons/bs";
import { UserSession } from "./UserFetcher";
import { signOut } from "next-auth/react";

interface NavbarProps {
  user: UserSession | null;
}

const data = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Explore",
    link: "/explore",
  },
];

const userMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];

const Navbar = ({ user }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = useMemo(() => {
    return (link: string) => link === pathName;
  }, [pathName]);

  useEffect(() => {
    // Fungsi ini akan dipanggil setiap kali komponen di-mount
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTransparent(currentScrollY < 100);
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Hapus event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fungsi ini akan dipanggil setiap kali komponen di-mount
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < prevScrollPos);
      setPrevScrollPos(currentScrollY);
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Hapus event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div
      className={`fixed w-full py-4 top-0 z-50 px-[7%]
      ${isTransparent ? "bg-transparent " : "bg-background shadow-lg"}
      ${isVisible || isOpen ? "translate-y-0" : " -translate-y-full"
        } transition`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-8 md:w-9 lg:w-10"
          />
        </Link>
        <ul className="md:flex hidden">
          {data.map((item) => (
            <li
              key={item.name}
              className={`ml-6 ${isActive(item.link)
                ? "border-b-[1px] border-white font-semibold"
                : "font-normal"
                } transition relative group`}
            >
              <Link
                href={item.link}
                className={`font-montserrat text-lg text-white transition-all`}
              >
                {item.name}
              </Link>
              {!isActive(item.link) && (
                <div className="absolute w-full scale-0 border-b-[1px] bottom-0 border-white group-hover:scale-100 origin-center transition" />
              )}
            </li>
          ))}
        </ul>
        <MenuIcon
          isOpen={isOpen}
          handleToggle={() => setIsOpen((prev) => !prev)}
        />
        <div className="md:flex hidden">
          {user ? (
            <div className="border-2 relative border-white px-5 py-1 rounded-full group bg-background cursor-pointer">
              <div className="w-full flex gap-2">
                <p>
                  Hi, <span className="font-bold">{user.fullName}</span>
                </p>
                <BsPersonCircle size={24} />
              </div>
              <div
                className={`absolute w-full left-0 top-1/2 rounded-md overflow-hidden -z-10 bg-background group-hover:scale-y-100 hover:scale-y-100 scale-y-0 transition-all origin-top`}
              >
                <div className="w-full pt-6">
                  <ul className="flex flex-col ">
                    {userMenu.map((item) => (
                      <li key={item.name} className="cursor-pointer py-2 px-5">
                        <Link
                          href={item.link}
                          className={`font-montserrat hover:underline`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li
                      onClick={handleSignOut}
                      className="cursor-pointer py-2 px-5 font-montserrat hover:underline"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
                <div className="w-full bg-primary h-1"></div>
              </div>
            </div>
          ) : (
            <Button
              text="Login"
              isPrimary
              onClick={() => {
                router.push("/login");
              }}
            />
          )}
        </div>
      </div>
      <div
        className={`w-full md:hidden h-screen absolute bg-background left-0 top-0 -z-10 origin-top ${isOpen ? "scale-y-100" : "scale-y-0"
          } transition-all duration-300 px-[7%] pt-24 pb-10 flex flex-col justify-between`}
      >
        <ul className="flex flex-col items-start gap-6">
          {data.map((item) => (
            <li
              key={item.name}
              className={`${isActive(item.link)
                ? "border-b-[2px] border-white font-semibold"
                : "font-normal"
                } transition relative group pb-1`}
            >
              <Link
                href={item.link}
                className={`font-montserrat text-xl text-white`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {userMenu.map((item) => (
            <li
              key={item.name}
              className={`${isActive(item.link)
                ? "border-b-[2px] border-white font-semibold"
                : "font-normal"
                } transition relative group pb-1`}
            >
              <Link
                href={item.link}
                className={`font-montserrat text-xl text-white`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li
            onClick={handleSignOut}
            className="text-xl font-montserrat"
          >
            Logout
          </li>
        </ul>
        {user ? (
          <div className="border-2 border-white px-5 py-2 rounded-full group bg-background">
            <div className="w-full flex gap-3 text-xl">
              <BsPersonCircle size={24} />
              <p>
                Hi, <span className="font-bold">{user.fullName}</span>
              </p>
            </div>
          </div>
        ) : (
          <Button
            text="Login"
            fullWidth
            onClick={() => {
              router.push("/login");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
