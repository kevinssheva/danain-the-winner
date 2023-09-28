"use client";

import useRegistrationModal from "@/app/hooks/useRegistrationModal";
import Modal from "./Modal";

const RegistrationModal = () => {
  const registrationModal = useRegistrationModal();

  const handleClose = () => {
    registrationModal.onClose();
  };

  const handleInvestor = () => {
    handleClose();
  };

  const handleCompany = () => {
    handleClose();
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
