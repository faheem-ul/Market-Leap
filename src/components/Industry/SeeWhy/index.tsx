import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import seewhy1 from "@/public/images/industry/seewhy1.png";
import seewhy2 from "@/public/images/industry/seewhy2.png";
import Button from "@/components/ui/Button";

const SeeWhy = () => {
  return (
    <div>
      <div>
        <div>
          <Text as="h1" className="text-[50px] w-full max-w-[556px] mx-auto text-center my-[57px]">See Why <span className="text-secondary">Market Leap </span>  Stands Out</Text>
          <div className="flex flex-wrap justify-center gap-5 mb-[142px]">
            <div className="w-full max-w-[586px] relative flex justify-center items-center overflow-hidden min-h-[390px] h-full">
              <Image
                src={seewhy1}
                alt="Office Growth"
                layout="responsive"
                width={586}
                height={152}
                className="absolute w-full"
              />
                <div className="absolute inset-0 Image-overlay z-0 rounded-[20px] flex justify-center items-center h-[390px]" /> 
              <div className="flex justify-start items-center w-full relative z-10">
                <div className="pl-[35px] w-full">
                  <Text
                    as="h1"
                    className="w-full text-[20px] leading-[25px] text-white mb-[10px]">
                    Why choose Square?
                  </Text>
                  <Text className="text-[12px] max-w-[315px] text-white">
                    Check out what Square can do for your business and how it
                    could improve your day-to-day and big picture.
                  </Text>
                  <Button className="w-[103px] text-[12px] h-[36px] rounded-[10px] text-white font-bold mt-[26px]">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-full max-w-[586px] relative flex justify-center items-center overflow-hidden min-h-[390px] h-full">
              <Image
                src={seewhy2}
                alt="Office Growth"
                layout="responsive"
                width={586}
                height={152}
                className="absolute rounded-[20px] w-full"
              />
              <div className="absolute inset-0 Image-overlay z-0 rounded-[20px] flex justify-center items-center h-[390px]" /> 
              <div className="flex justify-start items-center w-full relative z-10">
                <div className="pl-[35px] w-full">
                  <Text
                    as="h1"
                    className="w-full text-[20px] leading-[25px] text-white mb-[10px]">
                    How does Square compare?
                  </Text>
                  <Text className="text-[12px] max-w-[395px] text-white">
                    See how Square stacks up against other payment providers to
                    make the best decision for your business.
                  </Text>
                  <Button className="w-[103px] text-[12px] h-[36px] rounded-[10px] text-white font-bold mt-[26px]">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeWhy;
