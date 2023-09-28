"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import Image from "next/image";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  subtitle?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  closable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  subtitle,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  closable,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    if (!onSubmit) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-[45%] my-6 mx-auto h-auto">
          {/* CONTENT */}
          <div
            className={`translate duration-300 h-full 
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div className="translate h-auto border-0 rounded-2xl shadow-lg relative overflow-hidden flex flex-col gap-5 w-full bg-background outline-none focus:outline-none px-8 py-10">
              {/* HEADER */}
              <div className="flex items-start rounded-t relative z-20">
                <div className="flex flex-col flex-1 gap-2 text-center">
                  <p className="text-[2.4rem] font-neuro">{title}</p>
                  {subtitle && <p className="text-[1.4rem]">{subtitle}</p>}
                </div>
                {closable && (
                  <button
                    onClick={handleClose}
                    className="p-1 hover:opacity-70 transition"
                  >
                    <IoMdClose size={20} />
                  </button>
                )}
              </div>
              {/* BODY */}
              {body && <div className="relative flex-auto z-20">{body}</div>}
              {/* FOOTER */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-end gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      text={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  {actionLabel && onSubmit && (
                    <Button
                      isPrimary
                      text={actionLabel}
                      onClick={handleSubmit}
                    />
                  )}
                </div>
                {footer}
              </div>
              <div className="absolute w-[50rem] top-0 left-0 z-10">
                <Image
                  src={"/modal/Glow.svg"}
                  width={100}
                  height={100}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="absolute w-[60rem] -top-[80%] -right-[80%] z-10">
                <Image
                  src={"/modal/Grid.svg"}
                  width={100}
                  height={100}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="absolute w-[60rem] -bottom-[80%] -left-[80%] z-10">
                <Image
                  src={"/modal/Grid.svg"}
                  width={100}
                  height={100}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
