import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import sectionImage from "@/public/images/home/tabimage.png";
import arrow from "@/public/images/home/right-arrow.svg";
import mask from "@/public/images/home/run-mask.png"
const RunYourBusiness = () => {
  return (
    <div className="w-full h-full flex justify-center items-center py-[160px] relative bg-[#FCFBFB] px-5 overflow-hidden">
        <Image src={mask} alt="mask" className="absolute w-full h-fulll object-contain"/>
      <div className="w-full max-w-[1313px] flex justify-center items-center relative z-10">
        <div className="w-full flex gap-[20px] justify-between xl:justify-center flex-wrap items-center">
          <Text as="h1" className="text-[55px] w-full max-w-[408px] leading-[120%]">
            Run Your Business With {" "}
            <span className="text-secondary">Confidence</span>
          </Text>
          <Image src={sectionImage} alt="image" width={424} className="" />
          <div className="w-full max-w-[394px]">
            <Text as="h1" className="text-[30px] font-semibold leading-[37px]">
              Branding and Experience
            </Text>
            <Text className="font-light text-[18px] mt-[15px] mb-[39px]">
              Use our flagship point of sale and business growth software.
              Create and own your brand from the start - and let our software do
              the heavy lifting to help you stand out.
            </Text>
            <button>
              <div className="flex gap-3 justify-center items-center">
                <Text className="text-[18px] font-normal">Get Started</Text>
                <Image src={arrow} alt="arrow" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunYourBusiness;
