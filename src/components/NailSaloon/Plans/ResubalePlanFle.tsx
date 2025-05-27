import React from "react";

import Text from "@/components/ui/Text";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";

interface props {
  planType: string;
  PlanDescrip: string;
  pricing?: string;
  pricingDescrip?: string;
  buttontext: string;
  points: string[];
  inpersonValue?: string;
  onlineValue?: string;
}
const ResubalePlanFle: React.FC<props> = ({
  planType,
  PlanDescrip,
  pricing,
  buttontext,
  points,
  pricingDescrip,
  inpersonValue,
  onlineValue,
}) => {
  return (
    <div className="group hover:bg-secondary w-full relative max-w-[304px] h-full min-h-[823px] mob:min-h-fit mob:pb-[43px] flex justify-center items-start pt-[43px] border-[5px] border-secondary hover:scale-[1.15] transition-all duration-1000 cursor-pointer px-[27px] rounded-[30px]">
      <div className="relative">
        <Text className="text-[24px] font-bold font-poppins group-hover:text-white text-black mb-2">
          {planType}
        </Text>
        <Text className="text-[14px] font-light text-black group-hover:text-white">
          {PlanDescrip}
        </Text>
        <Divider className="border border-[#000000] my-2 group-hover:border-white" />

        <Text className="text-[12px] font-semibold mb-3 group-hover:text-white">
          Payment Processing Fee:
        </Text>
        <div>
          <div className="w-full flex justify-between items-center mb-[6px]">
            <Text className="text-[12px] font-light group-hover:text-white">
              In-Person
            </Text>
            <Text className="text-[12px] text-black font-light group-hover:text-white">
              {inpersonValue}
            </Text>
          </div>
          <div className="w-full flex justify-between items-center mb-[12px]">
            <Text className="text-[12px] font-light">Online</Text>
            <Text className="text-[12px] font-light group-hover:text-white">
              {onlineValue}
            </Text>
          </div>
        </div>
        <Divider className="border border-[#000000]/50 mb-4 group-hover:border-white" />
        <Text className="text-[24px] font-poppins font-bold text-black group-hover:text-white">
          {pricing} <span className="text-[11px] font-light">{pricingDescrip}</span>
        </Text>
        <Button className="bg-transparent text-secondary transition-colors duration-1000 group-hover:bg-black group-hover:text-white group-hover:border-none font-bold border h-[41px] rounded-[30px] mt-[43px] mb-[17px] mx-auto border-black w-[149px]">
          {buttontext}
        </Button>

        <Text className="text-[15px] font-bold group-hover:text-white mb-[12px]">Features:</Text>

        {points.map((point, index) => (
          <ul
            key={index}
            className="text-[14px] list-disc pl-5 font-light text-black group-hover:text-white font-space_grotesk">
            <li className="mb-2">{point}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ResubalePlanFle;
