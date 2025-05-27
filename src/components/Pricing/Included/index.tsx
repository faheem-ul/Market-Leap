import React from "react";

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
          <div className="flex gap-[20px] justify-center items-center">
            <Button className="w-[168px] rounded-[15px] h-[67px] bg-transparent font-bold text-[18px] border-2 border-black text-black">
              Get A Demo
            </Button>
            <Button className="w-[168px] rounded-[15px] h-[67px] bg-secondary font-bold text-[18px] text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingIncluded;
