import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bg from "@/public/images/industry/industrybg.png";
import Button from "@/components/ui/Button";

const IndustryHero = () => {
  return (
    <div className=" w-full relative flex justify-center items-center overflow-hidden min-h-[530px] h-full">
        <Image
      src={bg}
      alt="Office Growth"
      layout="responsive"
      width={414}
      height={152}
      className="absolute w-full"
    />
      <div className="flex justify-center items-center w-full max-w-[1313px] relative z-10">
        <div>
          <Text
            as="h1"
            className="w-full max-w-[820px] text-[50px] text-center leading-[65px] mt-[46px] mb-[32px]">
            Start With The Right Tech For Your Business
          </Text>
          <Button className="w-[166px] h-[58px] rounded-[15px] text-white font-bold mx-auto mb-[80px]">
          Get Started
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default IndustryHero;
