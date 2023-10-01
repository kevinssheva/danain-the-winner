"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import MenuIcon from "@/components/MenuIcon";
import Icon from "./Icon";
import { redirect, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import LogoutModal from "@/components/Modal/LogoutModal";
import useLogoutModal from "@/app/hooks/useLogoutModal";

interface SidebarProps {
  role: string | undefined;
}

export default function Sidebar(props: SidebarProps) {
  const logoutModal = useLogoutModal();
  const router = useRouter();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const sidebarItems =
    props.role === "INVESTOR"
      ? [
          { label: "Dashboard", type: "home" },
          { label: "Portfolio", type: "portofolio" },
          { label: "Calculator Simulation", type: "calculator" },
          { label: "Chatting", type: "chat" },
          { label: "Profile", type: "profile" },
          { label: "Logout", type: "logout" },
        ]
      : [
          { label: "Dashboard", type: "home" },
          { label: "Company Profile", type: "companyprofile" },
          { label: "Investors", type: "investors" },
          { label: "Chatting", type: "chat" },
          { label: "Profile", type: "profile" },
          { label: "Sign out", type: "logout" },
        ];
  return (
    <>
      <LogoutModal />
      <div className="fixed left-0 top-0 bottom-0 z-[70] py-8 my-1 px-[5%] overflow-hidden w-[22rem]">
        <MenuIcon isOpen={open} handleToggle={() => setOpen((prev) => !prev)} />

        <aside
          id="default-sidebar"
          className={`fixed md:absolute top-0 left-0 z-10 w-64 h-screen transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-16 overflow-y-auto sidebar-glass">
            <div
              className="flex justify-center gap-4 mb-4 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image src={"/logo.svg"} width={36} height={34} alt="Logo" />
              <p className="font-montserrat text-[#24E641] text-3xl font-semibold">
                danain
              </p>
            </div>
            <Image
              src={"/dashboard/line.svg"}
              width={250}
              height={250}
              alt="Line"
            />

            <ul className="space-y-2 mt-4 font-medium font-inter">
              {sidebarItems.slice(0, -2).map((item) => (
                <li key={item.type}>
                  <a
                    href={
                      item.type === "home"
                        ? "/dashboard"
                        : `/dashboard/${item.type.toLowerCase()}`
                    }
                    className={`flex items-center py-3 px-4 rounded-xl ${
                      item.type === "home"
                        ? pathName === "/dashboard"
                          ? "bg-gray-700"
                          : "bg-none"
                        : pathName === `/dashboard/${item.type.toLowerCase()}`
                        ? "bg-gray-700"
                        : "bg-none"
                    } hover:bg-gray-700 group`}
                  >
                    <Icon
                      active={
                        item.type === "home"
                          ? pathName === "/dashboard"
                          : pathName === `/dashboard/${item.type.toLowerCase()}`
                      }
                      type={item.type}
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}

              <p className="my-2">Account Pages</p>

              {sidebarItems.slice(-2).map((item) => (
                <li key={item.type} className="cursor-pointer">
                  <a
                    onClick={() => {
                      if (item.type === "logout") {
                        logoutModal.onOpen();
                      } else {
                        window.location.href = `/dashboard/${item.type.toLowerCase()}`;
                      }
                    }}
                    className={`flex cursor-pointer items-center py-3 px-4 rounded-xl ${
                      pathName === `/dashboard/${item.type.toLowerCase()}`
                        ? "bg-gray-700"
                        : "bg-none"
                    } hover:bg-gray-700 group`}
                  >
                    <Icon
                      active={
                        pathName === `/dashboard/${item.label.toLowerCase()}`
                      }
                      type={item.type}
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
