import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../ui/Button";

import Logo from "@/public/logo.png";

const navItems = [
  {
    title: "Business Type",
    url: "/",
  },
  {
    title: "Products",
    url: "/#",
  },

  {
    title: "Hardware",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/#",
  },
];

const DesktopNav = () => {
  return (
    <nav className="h-full w-full navsize:hidden flex justify-center items-center px-5">
      <div className="relative flex h-[73px] items-center justify-center w-full max-w-[1313px] bg-background rounded-[10px] mt-6 mb-8 bg-primary">
        <div className="relative z-10 flex px-[49px] w-full items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={136}
              height={61}
              className="relative"
            />
          </Link>

          <div className="nav-items flex items-center gap-[50px]">
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
            <Button className="bg-transparent border-2 border-white w-[123px] h-[51px] rounded-[15px] font-bold">
              Login
            </Button>
            <Button className="w-[149px] h-[51px] rounded-[15px] font-bold">
              Get A Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
