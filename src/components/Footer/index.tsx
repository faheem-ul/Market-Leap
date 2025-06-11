"use client";
import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Text from "../ui/Text";

import Divider from "../ui/Divider";
// import footerlogo from "@/public/images/home/footer-logo.png";
const Footer = () => {
  const currentPath = usePathname();

  return (
    <div className="bg-primary pt-16 pb- px-5">
      <div className="flex justify-center overflow-hidden">
        <div className="max-w-[1313px] w-full  xl:justify-start gap-[28px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex-col w-full">
              <Text className="text-white text-[24px] mb-[50px] font-poppins mob:mb-[14px]  font-bold mob:text-[22px]">
                Pages
              </Text>
              <div className="flex w-full justify-between mob:flex-col mob:items-start flex-wrap tab:justify-start tab:gap-[16px] items-center">
                <div>
                  <Text className="mb-[18px] ">
                    <Link
                      href="/industry"
                      className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                        currentPath === "/"
                          ? "text-accentGreen"
                          : "text-[#151515]"
                      } `}>
                      Business Types
                    </Link>
                  </Text>
                  <Text className="">
                    <Link
                      href="/pricing"
                      className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                        currentPath === "/"
                          ? "text-accentGreen"
                          : "text-[#151515]"
                      } `}>
                      Pricing
                    </Link>
                  </Text>
                </div>
                <div>
                  <Text className="mb-[18px]">
                    <Link
                      href="/terms-and-service"
                      className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                        currentPath === "/"
                          ? "text-accentGreen"
                          : "text-[#151515]"
                      } `}>
                      Terms of Sevices
                    </Link>
                  </Text>
                  <Text className="">
                    <Link
                      href="/privacy-policy"
                      className={`text-[18px] font-light font-space_grotesk text-[#FFFFFF] mob:text-[15px]${
                        currentPath === "/"
                          ? "text-accentGreen"
                          : "text-[#151515]"
                      } `}>
                      Privacy Policy
                    </Link>
                  </Text>
                </div>

                <Link href="/">
                {/* <Image
                  className="max-w-[713px] mob:max-w-[300px] mob:h-[50px] mob:mt-10 h-[100px]"
                  src={footerlogo}
                  alt="logo"
                  width={713}
                  height={50}
                /> */}
                <video
            src="/marketleap.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover max-w-[713px] mob:max-w-[350px] relative right-[40px] mob:right-[10px]"
          />
                </Link>
              </div>
            </div>
           
          </div>

          {/* 2 row */}
          {/* <div className="flex-col w-full max-w-[207px]">
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
           
          </div> */}

          {/* 3 */}

          {/* <div className="flex-col w-full max-w-[207px]">
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
          
          </div> */}
          {/* 4 */}
          {/* <div className="flex-col w-full max-w-[207px]">
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
          
          </div> */}
        </div>
      </div>

      <Divider className="border-[1px] mt-[79px]" />
      <div className="flex justify-between mob:justify-start w-full max-w-[1313px] mx-auto">
        <div className="flex justify-center flex-wrap my-8 xl:justify-center mob:justify-center xl:gap-[30px] items-center mob:gap-8 w-full max-w-[1313px] mob:max-w-full">
          <div className="">
            <Text className="text-white text-[18px] mob:text-center mob:mx-auto font-semibold flex shirnk-0 text-center">
              © Market Leap Corp Inc. 2025
            </Text>
          </div>
          {/* <div className="flex gap-[56px] xl:flex-col tab:gap-5">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
