"use client";


import { useCallback, useEffect } from "react";
import Image from "next/image";

import { twMerge } from "tailwind-merge";

// import Text from "@/ui/Text";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import closeIcon from "/public/icons/close-icon.svg";

import cross from "@/public/images/home/cross.png"

type DrawerProps = {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
  drawerTitle?: string;
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  className,
  // drawerTitle,
  children,
}) => {
  const handleEscapeKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleEscapeKeyPress);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscapeKeyPress);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, handleEscapeKeyPress]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      //   onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed  right-0 top-0 z-[100] h-full w-full  "
          onClick={handleOverlayClick}>
          {/* open */}
        </div>
      )}
      <div
        className={twMerge(
          `fixed right-0 top-0 z-[999] h-full w-[308px] mob:w-full transform overflow-x-hidden  transition-transform duration-400 bg-[#FFFFFF] ease-in-out ${
            isOpen
              ? "transition-transform duration-700 ease-in-out translate-x-0"
              : "transition-transform duration-700 ease-in-out  translate-x-full"
            // isOpen ? "h-[100%] w-full translate-y-[10%]" : "translate-y-full"
          }`,
          className
        )}
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add desired box shadow
        }}>
        {/* Drawer Close Button */}
        <div className="px-[30px] mob:px-[25px] flex justify-end items-center mt-10">
          
          {/* <Link href="/">
          <Image
              onClick={onClose}
              src={Logo}
              alt="Flowbite Logo"
              width={150}
              height={150}
            />
            </Link> */}
          <button className="text-white" onClick={onClose}>
            <Image src={cross} alt="close icon" width={30} height={20} />
          </button>
        </div>

        {/* Drawer content */}
        {/* Conditionally render the children based on 'isOpen' */}
        {isOpen && (
          <div className="h-full  pb-[50px] flex justify-center items-center">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Drawer;
