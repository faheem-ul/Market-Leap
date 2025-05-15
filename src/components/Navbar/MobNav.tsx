"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "@/public/logo.png";

import DrawerMenuMob from "../ui/Drawer";
import Divider from "../ui/Divider";
import Button from "../ui/Button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <nav className="hidden navsize:block px-5 mt-5">
        <div className="flex w-full justify-between mb-5 px-5 py-4 bg-primary items-center rounded-[10px]">
          <Link
            href="/"
            className="flex space-x-3 mob:justify-start rtl:space-x-reverse">
            <Image
              onClick={onClose}
              src={Logo}
              alt="Flowbite Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* tab and mob  menu*/}
          <div className="">
            <div className="relative flex cursor-pointer" onClick={onOpen}>
              <button
                type="button"
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}>
                <span className="sr-only">Open main menu</span>

                <GiHamburgerMenu size={30} fill="white" />
              </button>
            </div>
            <div className="relative z-40">
              <DrawerMenuMob isOpen={isOpen} onClose={onClose}>
                <div className="relative z-[999] flex h-full w-full pt-8">
                  <ul className="z-50 mt-4 flex h-full min-h-[860px] w-full flex-col pt-4 font-normal rtl:space-x-reverse">
                    {/* <Link
                      href="/"
                      className="block font-poppins text-[16px] font-bold uppercase leading-[24px] text-[#FCFCFC]"
                      onClick={onClose}>
                      <li className="list-items flex justify-center py-[15px]">
                        Home
                      </li>
                    </Link> */}
                    <Divider />
                    <Link
                      onClick={onClose}
                      href="/#AppFeatures"
                      className="block font-poppins text-[16px] font-bold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                      Business Type
                      </li>
                    </Link>
                    <Divider />
                    <Link
                      onClick={onClose}
                      href="/#abouttme"
                      className="block font-poppins text-[16px] font-bold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                      Products
                      </li>
                    </Link>
                    <Divider />
                    <Link
                      href="/#Testimonials"
                      className="block font-poppins text-[16px] font-bold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                      Hardware
                      </li>
                    </Link>
                    <Divider />
                    <Link
                      onClick={onClose}
                      href="/#donwload"
                      className="block font-poppins text-[16px] font-bold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                      Pricing
                      </li>
                    </Link>

                    <Divider />

                    <Button className="bg-transparent border-2 w-full border-white my-[15px] mx-auto h-[51px] rounded-[15px] font-bold">
                      Login
                    </Button>
                    <Divider/>
                    <Button className="h-[51px] rounded-[15px] w-full font-bold my-[15px] mx-auto">
                      Get A Demo
                    </Button>
                  </ul>
                </div>
              </DrawerMenuMob>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
