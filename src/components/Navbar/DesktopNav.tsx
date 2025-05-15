import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.svg";


const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "App Features",
    url: "/#",
  },
  
  {
    title: "About Me",
    url: "/",
  },
  {
    title: "Testimonials",
    url: "/#",
  },
  {
    title: "Download Now",
    url: "/",
  },
];



const HeroNav = () => {
  return (
    <nav className="relative top-0 h-full w-full navsize:hidden flex justify-center items-center">
      {/* <div className="no-scrollbar flex h-[74px] w-full items-center justify-between overflow-auto rounded-[37px] bg-[#18181A] px-[50px] py-[16px] text-white">
        HeroNav
      </div> */}

      {/* <Image src={NavBox} alt="NavBox" className="h-[100px] w-full" /> */}

      <div className="relative flex h-[82px] items-center justify-center w-full max-w-[1272px] bg-background rounded-lg mt-6 mb-8">
        {/* <Image
          src={NavBox}
          alt="NavBox"
          className="absolute h-[100px] w-full"
        /> */}

        <div className="relative z-10 flex px-[36px] w-full items-center justify-between">
          {/* <Link href="/"> */}
            <Image src={Logo} alt="Logo" width={136} height={61} className="relative" />
          {/* </Link> */}

          <div className="nav-items flex items-center gap-[80px]">
            {navItems.map((navItem) => (
              <Link
                href={navItem.url}
                key={navItem.title}
                className="leading6 text-[18px] font-normal font-aileron text-primary">
                {navItem.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-6">

          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeroNav;
