import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "@/public/images/wond-app/footer-logo.svg";
import instaIcon from "@/public/images/wond-app/whiteinsta.svg";
import facebookIcon from "@/public/images/wond-app/whitefb.svg";
import tiktok from "@/public/images/wond-app/whitetiktok.svg";

import DrawerMenuMob from "../ui/Drawer";
import Divider from "../ui/Divider";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <nav className="hidden navsize:block">
        <div className="flex w-full justify-between pt-2">
          <Link
            href="/"
            className="flex space-x-3 mob:justify-start rtl:space-x-reverse">
            <Image
              onClick={onClose}
              src={Logo}
              alt="Flowbite Logo"
              height={100}
              width={100}
            />
          </Link>

          {/* tab and mob  menu*/}
          <div className="">
            <div
              className="relative flex cursor-pointer pt-[5px]"
              onClick={onOpen}>
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
                    <Link
                      href="/"
                      className="block font-sora text-[16px] font-semibold uppercase leading-[24px] text-[#FCFCFC]"
                      onClick={onClose}>
                      <li className="list-items flex justify-center py-[15px]">
                        Home
                      </li>
                    </Link>
                    <Divider />
                    <Link
                      onClick={onClose}
                      href="/#AppFeatures"
                      className="block font-sora text-[16px] font-semibold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                        App Features
                      </li>
                    </Link>
                    <Divider />
                    <Link
                      onClick={onClose}
                      href="/#abouttme"
                      className="block font-sora text-[16px] font-semibold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                        About Me
                      </li>
                    </Link>
                    <Divider />
                    <Link
                      href="/#Testimonials"
                      className="block font-sora text-[16px] font-semibold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                        Testimonials
                      </li>
                    </Link>
                    <Divider />
                    <Link
                      onClick={onClose}
                      href="/#donwload"
                      className="block font-sora text-[16px] font-semibold uppercase leading-[24px] text-[#FCFCFC]">
                      <li className="list-items flex justify-center py-[15px]">
                        Download Now
                      </li>
                    </Link>

                    <Divider />

                    <div className="mt-6 flex items-center justify-center gap-7">
                      <Link onClick={onClose} href="#">
                        <Image src={instaIcon} alt="instaIcon" />
                      </Link>
                      <Link onClick={onClose} href="#">
                        <Image src={facebookIcon} alt="facebookIcon" />
                      </Link>
                      <Link onClick={onClose} href="#">
                        <Image src={tiktok} alt="discordIcon" />
                      </Link>
                    </div>
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
