"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Text from "../ui/Text";

import Divider from "../ui/Divider";
import footerlogo from "@/public/images/home/footer-logo.png";
const Footer = () => {
  const currentPath = usePathname();

  return (
    <div className="bg-primary pt-16 pb-6 px-5">
      <div className="flex justify-center overflow-hidden">
        <div className="max-w-[1313px] w-full flex flex-wrap justify-between xl:justify-start gap-[28px]">
          <div className="flex-col w-full max-w-[207px]">
            <Text className="text-white text-[24px] mb-[38px] mob:mb-[14px]  font-bold mob:text-[22px]">
              Resources
            </Text>
            <Text className="mb-[18px] ">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Pricing
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Blog Guides
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Customer Stories
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Refer A Business
              </Link>
            </Text>
            {/* <div className="mt-8 mob:hidden">
              <Image src={logo} alt="" width={230} height={74} />
            </div> */}
          </div>

          {/* 2 row */}
          <div className="flex-col w-full max-w-[207px]">
            <Text className="text-white text-[24px] mb-[38px] mob:mb-[14px] font-bold mob:text-[22px]">
              Company
            </Text>
            <Text className="mb-[18px] ">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                About Us
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Contact Us
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Careers
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Help Centers
              </Link>
            </Text>
            {/* <div className="mt-8 mob:hidden">
              <Image src={logo} alt="" width={230} height={74} />
            </div> */}
          </div>

          {/* 3 */}

          <div className="flex-col w-full max-w-[207px]">
            <Text className="text-white text-[24px] mb-[38px] mob:mb-[14px] font-bold mob:text-[22px]">
              Solutions
            </Text>
            <Text className="mb-[18px] ">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Reviews
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Google Reviews
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Facebook Reviews
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Phone Calling
              </Link>
            </Text>
            {/* <div className="mt-8 mob:hidden">
              <Image src={logo} alt="" width={230} height={74} />
            </div> */}
          </div>
          {/* 4 */}
          <div className="flex-col w-full max-w-[207px]">
            <Text className="text-white text-[24px] mb-[38px] mob:mb-[14px] font-bold mob:text-[22px]">
              Partners
            </Text>
            <Text className="mb-[18px] ">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Find a Solution Partner
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Integration
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Marketplace
              </Link>
            </Text>
            <Text className="mb-[18px]">
              <Link
                href="/"
                className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                  currentPath === "/" ? "text-accentGreen" : "text-[#151515]"
                } `}>
                Developer Platform
              </Link>
            </Text>
            {/* <div className="mt-8 mob:hidden">
              <Image src={logo} alt="" width={230} height={74} />
            </div> */}
          </div>
        </div>
      </div>

      <Divider className="border-[1px] mt-[79px] mb-3" />
      <div className="flex justify-between mob:justify-start mb-[65px] w-full max-w-[1313px] mx-auto">
        <div className="flex justify-between flex-wrap xl:justify-center mob:justify-start xl:gap-[30px] items-center mob:gap-8 w-full max-w-[1313px] mob:max-w-full">
          <div className="">
            <Text className="text-white text-[18px] font-semibold flex shirnk-0 text-center">
              © Market Leap Corp Inc. 2025
            </Text>
          </div>
          <div className="flex gap-[56px] xl:flex-col tab:gap-5">
            <Text className="text-[14px] font-light text-white">
              Terms & Condition
            </Text>
            <Text className="text-[14px] font-light text-white">
              Privacy Policy
            </Text>
            <Text className="text-[14px] font-light text-white">
              Privacy Center
            </Text>
            <Text className="text-[14px] font-light text-white">
              Do Not Sell or Share Your Personal Information
            </Text>
          </div>
        </div>
      </div>
      <Image
        className="mx-auto"
        src={footerlogo}
        alt="logo"
        width={1313}
        height={186}
      />
    </div>
  );
};

export default Footer;
