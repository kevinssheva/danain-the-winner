"use client";

import Image from "next/image";
import Button from "./Button";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "./MenuIcon";

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

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
      console.log(currentScrollY);
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

  return (
    <div
      className={`fixed w-full py-4 top-0 z-50 px-[7%]
      ${isTransparent ? "bg-transparent " : "bg-background shadow-lg"}
      ${
        isVisible || isOpen ? "translate-y-0" : " -translate-y-full"
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
              className={`ml-6 ${
                isActive(item.link)
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
          <Button text="Login" isPrimary onClick={() => {}} />
        </div>
      </div>
      <div
        className={`w-full md:hidden h-screen absolute bg-background left-0 top-0 -z-10 origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } transition-all duration-300 px-[7%] pt-24 pb-10 flex flex-col justify-between`}
      >
        <ul className="flex flex-col items-start gap-6">
          {data.map((item) => (
            <li
              key={item.name}
              className={`${
                isActive(item.link)
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
        </ul>
        <Button text="Login" fullWidth onClick={() => {}} />
      </div>
    </div>
  );
};

export default Navbar;
