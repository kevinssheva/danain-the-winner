"use client";

import Image from "next/image";
import Button from "./Button";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className={`fixed w-full py-4 top-0 z-50 px-[5%]
      ${isTransparent ? "bg-transparent " : "bg-background shadow-lg"}
      ${isVisible ? "translate-y-0" : " -translate-y-full"} transition`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-10"
          />
        </Link>
        <ul className="flex">
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
        <div className="flex">
          <Button text="Login" isPrimary onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
