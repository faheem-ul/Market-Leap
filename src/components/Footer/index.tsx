"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Text from "../ui/Text";
import Button from "../ui/Button";

import logo from "@/public/logo.svg";
// import { useTabContext } from "@/contexts/TabContext";
// import twitter from "@/public/icons/twitter.svg";
// import intsa from "@/public/icons/instagaram.svg";
// import fb from "@/public/icons/facebook.svg";
const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  // const { activeTab, setActiveTab } = useTabContext();
  const currentPath = usePathname();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      if (response.ok) {
        setResponseMessage("Thank you for your submission!");
        alert("You Have Subscribed successfully!");
      } else {
        setResponseMessage("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#131A25]  pt-16 pb-6 px-5">
      <div className="flex justify-center overflow-hidden">
        <div className="max-w-[1153px] w-full flex flex-wrap justify-between">
          <div className="flex-col w-full max-w-[207px]">
            <Text className="text-[#D5D8DD] text-[24px] font-semibold mob:text-[22px]">
              About
            </Text>
            <Text className="text-[#FFFFFF]  leading-[25.89px] text-[14px] mt-4 mob:mt-2">
              At TACTIQ, we transform organizations by seamlessly blending
              cutting-edge technology with strategic insight.
            </Text>
            <div className="mt-8 mob:hidden">
              <Image src={logo} alt="" width={230} height={74} />
            </div>
          </div>
          <div className="flex-col w-full max-w-[207px] mob:mt-5 ]">
            <Text className="text-[#D5D8DD] text-[24px] font-semibold mob:text-[22px] mb-4 mob:mb-2">
              Sitemap
            </Text>

            <Link
              href="/"
              className={`  leading-[25.89px] text-[14px] uppercase font-montserrat text-[#FFFFFF] mob:text-[15px]  ${
                currentPath === "/"
                  ? "text-accentGreen font-semibold"
                  : "text-[#151515]"
              } `}
            >
              {/* <Text className=""> */}
              Home
              {/* </Text> */}
            </Link>
            <br />
            <Link
              href="/who-we-are"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-montserrat  font-normal  mob:text-[15px]  ${
                currentPath === "/who-we-are"
                  ? "text-accentGreen font-semibold"
                  : "text-[#151515]"
              }`}
            >
              Who We Are
            </Link>
            <br />
            <Link
              href="/what-we-do"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-montserrat  font-normal  mob:text-[15px]  ${
                currentPath === "/what-we-do"
                  ? "text-accentGreen font-semibold"
                  : "text-[#151515]"
              }`}
            >
              What we do
            </Link>

            <br />
            <Link
              href="/careers"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-montserrat  font-normal  mob:text-[15px]  ${
                currentPath === "/careers"
                  ? "text-accentGreen font-semibold"
                  : "text-[#151515]"
              }`}
            >
              CAREERS AT TACTIQ
            </Link>

            <br />
            <Link
              href="/contact"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-montserrat  font-normal  mob:text-[15px] ${
                currentPath === "/contact"
                  ? "text-accentGreen font-semibold"
                  : "text-[#151515]"
              }`}
            >
              Contact Us
            </Link>
            <br />
            <Link
              href="/We-Are-TactIQ-Combined-Capabilities-1.pdf"
              className={`text-[#FFFFFF]  leading-[25.89px] text-[14px] uppercase font-montserrat  font-normal  mob:text-[15px] `}
            >
              Capabilities Statement
            </Link>
            {/* <Text className="text-[#FFFFFF]  leading-[25.89px]   mt-1 text-[14px] uppercase">
              Statement
            </Text> */}
          </div>
          <div className="flex-col w-full max-w-[256px] mob:mt-5">
            <Text className="text-[#D5D8DD] text-[24px] font-semibold mob:text-[22px]">
              Address
            </Text>
            <Text className="text-[#FFFFFF]  leading-[25.89px] text-[14px] mt-4 mob:mt-2">
              HQ – 608 ½ Parkside place NE Washington D.C. 20019 California
              Office- 1150 S. Olive Street, 19th Floor, Los Angeles, CA 90015
            </Text>
            <Text className="text-[#D5D8DD] text-[24px] font-semibold mob:text-[22px] mt-[12px]">
              Contact US
            </Text>

            <Text className="text-[#FFFFFF] leading-[25.89px] text-[14px] mt-2">
              {" "}
              <a href="tel: (202) 695-8449">(202) 695-8449</a>
            </Text>
          </div>
          <div className="flex-col w-full max-w-[297px] mob:mt-5">
            <Text className="text-[#D5D8DD] text-[24px] font-semibold mob:text-[22px]">
              Newsletter
            </Text>
            <Text className="text-[#FFFFFF]  leading-[25.89px] text-[14px] mt-4 mob:mt-2">
              Stay in the loop with the latest updates!
            </Text>
            <form className="flex mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#FFFFFF] placeholder:text-[16px] placeholder:text-[#6B6B6B] py-1 pl-2 pr-3 max-w-[190px] rounded-l-[4px] outline-none"
              />
              <Button
                className=" bg-[#30434D] w-[130px] h-[36px] rounded-r-[4px] "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "subscribing..." : "Subscribe"}
              </Button>
            </form>
            {responseMessage && (
              <p className="text-center text-[#4fb848] mt-4 font-montserrat">
                {responseMessage}
              </p>
            )}
            <div className=" flex items-center mob:justify-center gap-[21px] mt-10 mob:w-full">
              <div className="mob:block hidden">
                <Image src={logo} alt="" width={230} height={74} />
              </div>
              {/* <div className="flex items-center mob:w-full gap-[21px] ">
                <Image src={twitter} alt="" width={24.52} height={24.52} />
                <Image src={intsa} alt="" width={24.52} height={24.52} />
                <Image src={fb} alt="" width={24.52} height={24.52} />
                </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 mob:justify-start">
        <div className="flex justify-between items-center mob:w-[140px] mob:gap-8 w-full max-w-[1170px]">
          <div className="flex-col  w-full">
            <hr className="border-t-1  w-full border-gray-400 my-4" />
          </div>
          <div className=" flex justify-center min-w-[300px]">
            <Text className="text-white/80 flex shirnk-0 text-center">
              Copyright © 2025 TactIQ
            </Text>
          </div>
          <div className="flex-col  w-full">
            <hr className="border-t-1 w-full  border-gray-400 my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
