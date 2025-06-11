"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "../ui/Button";

import Logo from "@/public/whitelogo.svg";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Business Type",
    url: "/industry",
  },
  // {
  //   title: "Products",
  //   url: "/#",
  // },

  // {
  //   title: "Hardware",
  //   url: "/",
  // },
  {
    title: "Pricing",
    url: "/pricing",
  },
];

const DesktopNav = () => {
  const pathname = usePathname();

  const hideNav =
    pathname === "/nail-salon" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-service" ||
    pathname === "/pricing" ||
    pathname.startsWith("/industry/");

  return (
    <nav
      className={cn(
        "h-full w-full navsize:hidden flex justify-center items-center px-5",
        hideNav && "hidden"
      )}>
      <div className="relative flex h-[73px] items-center justify-center w-full max-w-[1313px] bg-background rounded-[10px] mt-6 mb-8 bg-primary">
        <div className="relative z-10 flex px-[49px] w-full items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={169}
              height={61}
              className="relative"
            />
          </Link>

          <div className="nav-items flex items-center gap-[55px]">
            {navItems.map((navItem) => (
              <Link
                href={navItem.url}
                key={navItem.title}
                className="leading6 text-[16px] font-poppins font-semibold text-[#FFFFFF]">
                {navItem.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-[20px]">
            <a
              href="tel:+14692105193"
              className=" font-poppins md:flex items-center text-white hover:text-gray-300 transition-colors">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+1 (469) 210-5193</span>
            </a>
            <Link href="/pricing">
            <Button className="w-[149px] h-[51px] rounded-[15px] font-bold">
              Get A Demo
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
