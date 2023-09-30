"use client";

import useRegistrationModal from "@/app/hooks/useRegistrationModal";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";

const RegistrationModal = ({ role, userId }: { role: string, userId: string | undefined }) => {
  const registrationModal = useRegistrationModal();

  const handleClose = () => {
    registrationModal.onClose();
  };

  const handleInvestor = async () => {
    if (!userId) return toast.error("You must login first!");
    // patch user role to investor
    const res = await axios.patch(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/user/${userId}`, {
      role: "INVESTOR",
    });

    if (res.status == 201) {
      toast.success("Registration success!", {
        duration: 3000,
      });
      handleClose();
    }
  };

  const handleCompany = async () => {
    if (!userId) return toast.error("You must login first!");
    // patch user role to company
    const res = await axios.patch(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/user/${userId}`, {
      role: "FOUNDER",
    });

    if (res.status == 201) {
      toast.success("Registration success!", {
        duration: 3000,
      });
      handleClose();
    }
  };
  
  const bodyElement = (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="italic">Please select a role to register</p>
      <button
        className="transition duration-100 hover:bg-gradient-to-b from-[#C6D524] to-[#9C9710] investor-button py-4 w-1/3 text-xl font-montserrat font-semibold"
        onClick={handleInvestor}
      >
        Investor
      </button>
      <button
        className="transition duration-100 hover:bg-gradient-to-b from-[#16D5E1] to-[#168392] company-button py-4 w-1/3 text-xl font-montserrat font-semibold"
        onClick={handleCompany}
      >
        Company
      </button>
    </div>
  );
  return (
    <Modal
      onClose={() => console.log("Closed")}
      title="Registration"
      isOpen={registrationModal.isOpen}
      subtitle="Hello, Welcome"
      body={bodyElement}
    />
  );
};

export default RegistrationModal;
