import React from "react";

import Text from "@/components/ui/Text";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";

interface props {
  planType: string;
  PlanDescrip: string;
  pricing: string;
  pricingDescrip: string;
  buttontext: string;
  points: string[];
}
const ResubalePlanFle: React.FC<props> = ({
  planType,
  PlanDescrip,
  pricing,
  buttontext,
  points,
  pricingDescrip,
}) => {
  return (
    <div className="group hover:bg-secondary w-full relative max-w-[384px] h-full min-h-[558px] flex justify-center items-center border-[5px] border-secondary hover:scale-[1.3] transition-all duration-1000 cursor-pointer px-[27px] rounded-[30px]">
      <div className="relative">
        <Text className="text-[24px] font-bold text-white mb-2">
          {planType}
        </Text>
        <Text className="text-[12px] font-light text-white">{PlanDescrip}</Text>
        <Divider className="border border-[#FFFFFF]/50 my-5" />
        <Text className="text-[26px] font-bold text-white">
          {pricing}{" "}
          <span className="text-[11px] font-bold">{pricingDescrip}</span>
        </Text>
        <Button className="bg-black text-secondary transition-colors duration-1000 group-hover:bg-white group-hover:text-black group-hover:border-none font-bold border h-[41px] rounded-[30px] mt-[43px] mb-[25px] mx-auto border-white w-[149px]">
          {buttontext}
        </Button>

        {points.map((point, index) => (
          <ul
            key={index}
            className="text-[14px] list-disc pl-5 font-light text-white font-space_grotesk">
            <li className="mb-2">{point}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ResubalePlanFle;
