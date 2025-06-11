import React from "react";
import Link from "next/link";

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
const ResubalePlanFile: React.FC<props> = ({
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
    <div className="group hover:bg-secondary w-full relative max-w-[304px] mob:max-w-full  h-full min-h-[853px] mob:mb-10 
    mob:min-h-fit mob:pb-[43px] flex justify-center items-start pt-[43px] border-[5px] border-secondary hover:scale-[1.085] mob:hover:scale-[1] 
    transition-all duration-1000 cursor-pointer px-[27px] rounded-[30px]">
      <div className="relative">
        <Text className="text-[24px] font-bold font-poppins group-hover:text-white text-white mb-2">
          {planType}
        </Text>
        <Text className="text-[14px] font-light text-white group-hover:text-white">
          {PlanDescrip}
        </Text>
        <Divider className={cn("border border-[#ffffff] my-3 group-hover:border-white", inperonshow)} />

        <Text className={cn("text-[12px] font-semibold mb-3 text-white group-hover:text-white",inperonshow)}>
          Payment Processing Fee:
        </Text>
        <div className={cn(inperonshow)}>
          <div className={cn("w-full flex justify-between items-center mb-[6px]",)}>
            <Text className="text-[12px] font-light text-white group-hover:text-white">
              In-Person
            </Text>
            <Text className="text-[12px] text-white font-light group-hover:text-white">
              {inpersonValue}
            </Text>
          </div>
          <div className="w-full flex justify-between items-center mb-[12px]">
            <Text className="text-[12px] text-white font-light">Online</Text>
            <Text className="text-[12px] text-white font-light group-hover:text-white">
              {onlineValue}
            </Text>
          </div>
        </div>
        <Divider className={cn("border border-[#ffffff]/50 mb-4 group-hover:border-white", inperonshow)} />
        <Text className="text-[24px] font-poppins font-bold text-white group-hover:text-white">
          {pricing} <span className="text-[11px] font-light">{pricingDescrip}</span>
        </Text>
        <Link href="/pricing">
        <Button className={cn("bg-transparent text-secondary transition-colors duration-1000 group-hover:bg-black group-hover:text-white group-hover:border-none font-bold border h-[41px] rounded-[30px] mt-[43px] mb-[17px] mx-auto border-white w-[149px]",mt)}
        >
          {buttontext}
        </Button>
        </Link>

        <Text className="text-[15px] font-bold group-hover:text-white mb-[12px] text-white">Features:</Text>

        {points.map((point, index) => (
          <ul
            key={index}
            className="text-[14px] list-disc pl-5 font-light text-white group-hover:text-white font-space_grotesk">
            <li className="mb-2">{point}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ResubalePlanFile;
