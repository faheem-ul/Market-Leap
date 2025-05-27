import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import seewhy1 from "@/public/images/industry/seewhy1.png";
import seewhy2 from "@/public/images/industry/seewhy2.png";

const SeeWhy = () => {
  return (
    <div className="px-5">
      <div>
        <Text as="h1" className="text-[50px] w-full max-w-[556px] mx-auto text-center my-[57px] mob:mb-[31px]">
          See Why <span className="text-secondary">Market Leap </span> Stands Out
        </Text>
        <div className="flex flex-wrap justify-center gap-5 mb-[142px] mob:mb-[117px] mob:gap-10">
          {/* 1st Image Block */}
          <div className="w-full max-w-[586px] relative flex mob:block justify-center items-center overflow-hidden min-h-[390px] h-full">
            <Image
              src={seewhy1}
              alt="Office Growth"
              layout="responsive"
              width={586}
              height={152}
              className="absolute w-full"
            />
            <div className="absolute inset-0 Image-overlay z-0 rounded-[20px] flex justify-center items-center h-[390px]" />
            {/* Content at the bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6 pb-[52px] bg-gradient-to-t from-black to-transparent rounded-b-[20px] flex flex-col justify-end">
              <Text as="h1" className="text-[20px] leading-[25px] text-white mb-[10px]">
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

          {/* 2nd Image Block */}
          <div className="w-full relative max-w-[586px] flex mob:block justify-center items-center overflow-hidden min-h-[390px] h-full">
            <Image
              src={seewhy2}
              alt="Office Growth"
              layout="responsive"
              width={586}
              height={152}
              
              className="absolute object-cover rounded-[20px] w-full"
            />
            <div className="absolute inset-0 Image-overlay z-0 rounded-[20px] flex justify-center items-center h-[390px] mob:hidden" />
            {/* Content at the bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6 pb-[52px] bg-gradient-to-t from-black to-transparent rounded-b-[20px] flex flex-col justify-end">
              <Text as="h1" className="text-[20px] leading-[25px] text-white mb-[10px]">
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
  );
};

export default SeeWhy;
