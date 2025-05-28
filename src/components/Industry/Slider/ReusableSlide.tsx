import React from "react";
import Image, { StaticImageData } from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Divider from "@/components/ui/Divider";

import arrow from "@/public/images/industry/Arrow 1.svg";
import bg from "@/public/images/industry/Vector.png"

interface RetailSlideProps {
  image: StaticImageData;
  title: string;
  description: string;
  categories?: string[];
  buttonText?: string;
}

const RetailSlide: React.FC<RetailSlideProps> = ({
  image,
  title,
  description,
  categories = [
    "Clothing",
    "Garden",
    "Grocery",
    "Home & Gift",
    "Wine & Liquor",
  ],
}) => {
  return (
    <div className="flex mob:flex-wrap max-w-[637px] min-h-[401px] overflow-hidden rounded-2xl shadow-md">
      {/* Left - Image */}
      <div className="w-full max-w-[309px] mob:max-w-full">
        <Image
          src={image}
          alt={title}
          width={309}
          className="w-full h-full mob:h-[300px] mob:max-w-full object-cover max-w-[309px]"
        />
      </div>

      {/* Right - Content */}
      <div className="relative bg-black text-white p-6 mob:pb-10">
        <Image src={bg} alt="bg-image" className="absolute w-full object-contain max-w-[330px] right-0 top-0"/>
        <div className="relative z-10">
          <Text
            as="h2"
            className="text-white text-[36px] font-poppins font-semibold text-left  mb-4">
            {title}
          </Text>

          <Text className="text-white text-[14px] mb-4 text-left">
            {description}
          </Text>
          <Divider className="border border-black mb-4" />
          <div className="flex flex-wrap text-white mb-4 gap-x-[18px] gap-y-[9px]">
            {categories.map((cat) => (
              <div className="flex gap-2 items-center" key={cat}>
                <Text className="cursor-pointer text-white text-[18px] font-medium">{cat}</Text>
                <Image src={arrow} alt="arrow svg" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Button className="w-[106px] h-[40px] mt-4 rounded-[6px]">
          <div className="flex gap-[7px] items-center">
                <Text className="cursor-pointer text-white text-[14px] font-medium">All Retail</Text>
                <Image src={arrow} width={12} alt="arrow svg" />
              </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RetailSlide;
