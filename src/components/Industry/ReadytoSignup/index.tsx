import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import bg from "@/public/images/industry/Mask group.png";

const ReadyToSignup = () => {
  return (
    <div className="w-full relative min-h-[373px] overflow-hidden bg-black">
      {/* Background image */}
      <Image src={bg} alt="bg" fill className=" z-0" priority />

      {/* Content container */}
      <div className="flex justify-center items-center h-full min-h-[373px] relative z-10">
        <div className="w-full max-w-[1313px] px-4 flex justify-between flex-wrap mob:justify-center gap-10">
          <Text
            as="h1"
            className="text-[50px] mob:text-[28px] text-white font-semibold">
            <span className="text-secondary">Ready </span>
            To Sign Up?
          </Text>
          <div className="flex gap-[20px] mob:flex-col mob:w-full">
            <Link href="/pricing">
            <Button className="w-[168px] rounded-[15px] h-[67px] mob:w-full mob:max-w-full bg-transparent font-bold text-[18px] border-2 border-white text-white">
              Get A Demo
            </Button>
            </Link>

            <a
              href="tel:+14692105193"
              className=" font-poppins justify-center px-[30px] flex h-[67px] items-center mob:w-full bg-secondary rounded-[15px] text-white hover:text-gray-300 transition-colors">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToSignup;
