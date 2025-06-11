import React from "react";
import Link from "next/link";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const PricingIncluded = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center px-5 mb-[94px]">
        <div className="w-full max-w-[1313px] min-h-[391px] pt-[39px] flex justify-start items-start bg-[#000000]/5 mob:pb-10 rounded-[30px] px-[40px] mob:px-[20px]">
          <div className="w-full">
            <Text className="text-[36px] font-medium mob:text-[30px] mob:leading-[35px] mob:text-center font-poppins mb-[33px]">
              Included With Every Market Leap Account
            </Text>
            <ul className="list-disc pl-6 text-[18px] font-light font-space_grotesk space-y-2 w-full max-w-[1123px]">
              <li>
                Manually entered card transactions are 3.3% + $0.15 for all
                plans.ACH invoice payments are 1% + $0.10 for all plans.
              </li>
              <li>ACH invoice payments are 1% + $0.10 for all plans.</li>
              <li>
                Marketing budgets are not included in the pricing. However, you
                may receive credits for marketing spend based on your monthly
                revenue.
              </li>
              <li>
                Email and SMS usage rates apply. Email: $0.003/email, SMS:
                $0.03/message segment.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full mb-[92px] relative z-10 w-full max-w-[1313px] mx-auto">
        <div className="w-full max-w-[1313px] px-4 flex justify-between flex-wrap mob:justify-center gap-10">
          <Text
            as="h1"
            className="text-[65px] mob:text-[28px] text-black font-semibold">
            Try Market Leap
          </Text>
          <div className="flex gap-[20px] justify-center items-center mob:flex-col mob:w-full">
            <Link href="/pricing" className="mob:w-full">
              <Button className="w-[168px] rounded-[15px] h-[67px] mob:w-full mob:max-w-full bg-transparent font-bold text-[18px] border-2 border-black text-black">
                Get A Demo
              </Button>
            </Link>
            <a
              href="tel:+14692105193"
              className=" font-poppins justify-center flex h-[67px] items-center mob:w-full bg-secondary px-[30px] rounded-[15px] text-white hover:text-gray-300 transition-colors">
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
    </>
  );
};

export default PricingIncluded;
