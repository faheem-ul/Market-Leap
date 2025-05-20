import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import sectionimage from "@/public/images/Nail-saloon/image 22.png";
import grow from "@/public/images/Nail-saloon/image 23.png";
import add from "@/public/images/Nail-saloon/image 24.png";
const EverythingYouNeed = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text as="h1" className="text-[60px] text-center">
            Everything You Need To <br className="mob:hidden" />
            <span className="text-secondary"> Keep Things Growing</span>
          </Text>

          {/* Bank through Market Leap */}
          <div className="flex flex-wrap justify-between items-center px-5 mb-[133px]">
            <div className="w-full max-w-[610px]">
              <Text as="h2" className="text-[45px] font-semibold">
                Bank through Market Leap
              </Text>
              <Text className="mt-[21px] mb-[52px] text-[24px] font-light">
                Manage all of your shop’s finances — payments, business banking
                accounts, cash flow, and more — together in one place.
              </Text>
              <Button className="w-[166px] h-[58px] rounded-[15px] text-[18px] font-bold">
                Get Started
              </Button>
            </div>
            <Image
              src={sectionimage}
              alt=""
              className="mt-[150px] animate-bounce "
            />
          </div>
          {/* Bank through Market Leap */}
        </div>
      </div>
      {/* Grow Your Client Base */}
      <div className=" bg-[#F2F2F2] w-full">
        <div className="flex flex-row-reverse flex-wrap justify-between items-center px-5 w-full max-w-[1313px] mx-auto">
          <div className="w-full max-w-[510px]">
            <Text as="h2" className="text-[45px] font-semibold">
              Grow Your Client Base
            </Text>
            <Text className="mt-[21px] mb-[52px] text-[24px] font-light">
              Expand your shop’s reach and keep clients coming back with
              customized, automated email and text campaigns.
            </Text>
            <Button className="w-[166px] h-[58px] rounded-[15px] text-[18px] font-bold">
              Get Started
            </Button>
          </div>
          <Image src={grow} alt="" className="my-[150px] animate-bounce " />
        </div>
      </div>
      {/* Grow Your Client Base */}

      {/* Add New Revenue */}
      <div className="w-full">
        <div className="flex justify-between flex-wrap items-center px-5 w-full max-w-[1313px] mx-auto">
          <div className="w-full max-w-[510px]">
            <Text as="h2" className="text-[45px] font-semibold">
              Add New Revenue Streams
            </Text>
            <Text className="mt-[21px] mb-[52px] text-[24px] font-light">
              Sell aftercare, merch, and other retail products online and
              in-store with inventory management and a customizable eCommerce
              site.
            </Text>
            <Button className="w-[166px] h-[58px] rounded-[15px] text-[18px] font-bold">
              Get Started
            </Button>
          </div>
          <Image src={add} alt="" className="my-[150px] animate-bounce " />
        </div>
      </div>
      {/* Add New Revenue  */}
    </div>
  );
};

export default EverythingYouNeed;
