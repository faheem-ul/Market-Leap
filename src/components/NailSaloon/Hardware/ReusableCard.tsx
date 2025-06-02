import React from "react";
import Image, { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

import mask from "@/public/images/Nail-saloon/suqarebg.png";
import arrow from "@/public/images/Nail-saloon/Arrow 3.svg";

interface props {
  heading: string;
  image: StaticImageData;
  Description: string;
  imageShow?: string;
}

const ReusableCard: React.FC<props> = ({
  heading,
  image,
  Description,
  imageShow,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full flex  justify-center bg-[#F2F2F2] items-center py-[160px] mob:py-10 relative px-5 mob:px-0 z-10 overflow-hidden"
      )}>
      <Image
        src={mask}
        alt="mask"
        className={cn(
          "absolute w-full h-full object-contain z-0 opacity-10",
          imageShow
        )}
      />
      <div className="w-full max-w-[1313px] flex justify-center items-center relative z-10">
        <div className="w-full">
          <div className="w-full flex justify-between xl:justify-center flex-wrap items-center mob:flex-col mob:gap-5">
            <Text className="text-black text-[50px] font-semibold">Square</Text>
            <Button className="bg-transparent border border-black w-[142px] h-[50px] rounded-[10px] text-secondary text-[18px] font-bold">
              <div className="flex gap-1">
                Explore
                <Image src={arrow} alt="arrow" />
              </div>
            </Button>
          </div>
          <div className="mt-[55px] flex justify-between items-end flex-wrap mob:items-center">
            <Image src={image} alt="image" width={489} className="mob:mb-5" />
            <div className="w-full max-w-[726px]">
                <Text className="text-[40px] mob:text-[35px] font-semibold mb-[45px] mob:mb-5 mob:text-center">
                    {heading}
                </Text>
                <Text className="text-[20px] font-light mob:text-[18px]">
                {Description}
                </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
