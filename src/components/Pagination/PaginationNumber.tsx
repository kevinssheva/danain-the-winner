"use client";

export interface PaginationNumberProps {
  pageNumber?: number | string;
  isDots?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function PaginationNumber({
  pageNumber,
  isDots = false,
  isActive = false,
  isDisabled = false,
  onClick,
}: PaginationNumberProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`flex w-[9%] max-w-[2rem] aspect-square text-base md:text-lg ${
        isActive ? "bg-gradient-to-r from-[#196D0F] from-[-15%] to-[#42EA3F] shadow-sm shadow-primary scale-110" : ""
      } justify-center items-center font-bold font-sen ${
        !isDots ? "rounded-md " : ""
      } ${
        !isActive && !isDots ? "hover:text-green-500 ease-out duration-200" : ""
      }`}
    >
      {isDots ? "..." : pageNumber}
    </button>
  );
}
