"use client";

import useLogoutModal from "@/app/hooks/useLogoutModal";
import Modal from "./Modal";
import Button from "../Button";
import { signOut } from "next-auth/react";
import {redirect} from "next/navigation";

const LogoutModal = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/"});
    redirect("/");
  };

  const logoutModal = useLogoutModal();

  const handleClose = () => {
    logoutModal.onClose();
  };

  //   const handleInvestor = () => {
  //     handleClose();
  //   };

  //   const handleCompany = () => {
  //     handleClose();
  //   };
  const bodyElement = (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="italic">Are you sure you want to sign out?</p>
      <div className="w-1/2 flex flex-col gap-3">
        <Button
          text="Yes"
          isPrimary={true}
          fullWidth={true}
          onClick={() => {
            handleSignOut();
          }}
        />
        <button
          className="font-bold text-sm w-full md:text-base py-[0.4rem] rounded-md md:py-2 px-4 md:px-8 bg-red-500 hover:shadow-[0px_2px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-4px_2px_0px_rgba(0,0,0,0.25)_inset,0px_0px_1px_4px_rgba(255,255,255,0.10),0px_0px_180px_0px_rgba(255,0,0,0.5),0px_0px_20px_#FFFFFF]"
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
  return (
    <Modal
      onClose={() => console.log("Closed")}
      title="Logout"
      isOpen={logoutModal.isOpen}
      subtitle=""
      body={bodyElement}
    />
  );
};

export default LogoutModal;
