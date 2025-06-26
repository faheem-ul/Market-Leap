import React from "react";

import Text from "@/components/ui/Text";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface props {
  planType: string;
  PlanDescrip: string;
  pricing?: string;
  pricingDescrip?: string;
  buttontext: string;
  points: string[];
  inpersonValue?: string;
  onlineValue?: string;
  inperonshow?:string
  mt?:string
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
  inperonshow,
  mt
}) => {
  return (
    <div className={cn(
      "group w-full relative max-w-[304px] mob:max-w-full h-full min-h-[823px] mob:min-h-fit mob:pb-[43px] flex justify-center items-start pt-[43px] border-[2px] border-[#e5e7eb] transition-all duration-100 cursor-pointer px-[27px] rounded-[30px] hover:shadow-[0px_8px_30px_8px_#00000026]",
      planType === "Standard" ? "border-secondary" : ""
    )}>
      <div className={cn("absolute top-0 translate-y-[-50%] left-1/2 -translate-x-1/2 w-[128px] flex justify-center items-center h-[35px] bg-secondary rounded-[30px]", 
      planType === "Standard" ? "flex" : "hidden"
      )}>
        <Text className="text-white text-[14px] font-bold text-center">Most Popular</Text> 
      </div>
      <div className="relative">
        <Text className="text-[24px] font-bold font-poppins group-hover:text-secondary text-black mb-2">
          {planType}
        </Text>
        <Text className="text-[14px] font-light text-black group-hover:text-black">
          {PlanDescrip}
        </Text>
        <Divider className={cn("border border-[#000000] my-2 ", inperonshow)} />

        <Text className={cn("text-[12px] font-semibold mb-3 group-hover:text-black",inperonshow)}>
          Payment Processing Fee:
        </Text>
        <div className={cn(inperonshow)}>
          <div className={cn("w-full flex justify-between items-center mb-[6px]",)}>
            <Text className="text-[12px] font-light group-hover:text-black">
              In-Person
            </Text>
            <Text className="text-[12px] text-black font-light group-hover:text-black">
              {inpersonValue}
            </Text>
          </div>
          <div className="w-full flex justify-between items-center mb-[12px]">
            <Text className="text-[12px] group-hover:text-black font-light">Online</Text>
            <Text className="text-[12px] font-light group-hover:text-black">
              {onlineValue}
            </Text>
          </div>
        </div>
        <Divider className={cn("border border-[#000000]/50 mb-4 ", inperonshow)} />
        <Text className="text-[24px] font-poppins font-bold text-black group-hover:text-black">
          {pricing} <span className="text-[11px] font-light">{pricingDescrip}</span>
        </Text>
        <Button className={cn("bg-transparent text-secondary transition-colors duration-1000 hover:bg-black hover:text-white  font-bold border h-[41px] rounded-[30px] mt-[43px] mb-[17px] mx-auto border-black w-[149px]",mt)}
        >
          {buttontext}
        </Button>

        <Text className="text-[15px] font-bold group-hover:text-black mb-[12px]">Features:</Text>

        {points.map((point, index) => (
          <ul
            key={index}
            className="text-[14px] list-disc pl-5 font-light text-black group-hover:text-black font-space_grotesk">
            <li className="mb-2">{point}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ResubalePlanFle;
