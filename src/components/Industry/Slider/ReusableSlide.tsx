'use client';

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Divider from "@/components/ui/Divider";
import { cn } from "@/lib/utils";
import { industries } from "@/lib/constants/industries";

import arrow from "@/public/images/industry/Arrow 1.svg";
import bg from "@/public/images/industry/Vector.png";

interface RetailSlideProps {
  image: StaticImageData;
  title: string;
  description: string;
  categories?: string[];
  buttonText?: string;
  buttonShow?: string;
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
  buttonShow,
  buttonText,
}) => {
  const router = useRouter();

  const handleCategoryClick = (cat: string) => {
    const industry = industries.find(
      (i) => i.label.toLowerCase() === cat.toLowerCase()
    );

    if (industry) {
      router.push(`/industry/${industry.id}`);
    } else {
      console.warn("Industry not found for:", cat);
    }
  };

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
      <div className="relative bg-black text-white p-6 mob:pb-10 flex flex-col justify-between flex-1">
        <Image
          src={bg}
          alt="bg-image"
          className="absolute w-full object-contain max-w-[330px] right-0 top-0"
        />

        <div className="relative z-10">
          <Text
            as="h2"
            className="text-white text-[36px] font-poppins font-semibold text-left mb-4"
          >
            {title}
          </Text>

          <Text className="text-white text-[14px] mb-4 text-left">
            {description}
          </Text>

          <Divider className="border border-black mb-4" />
        </div>

        {/* ✅ Categories Buttons at Bottom */}
        <div className="relative z-10 mt-auto">
          <div className="flex flex-wrap text-white mb-4 gap-x-[18px] gap-y-[9px]">
            {categories.map((cat) => (
              <div
                className="flex gap-2 items-center cursor-pointer"
                key={cat}
                onClick={() => handleCategoryClick(cat)}
              >
                <Text className="text-white text-[18px] font-medium">
                  {cat}
                </Text>
                <Image src={arrow} alt="arrow svg" />
              </div>
            ))}
          </div>

          {/* Optional Button */}
          {buttonText && (
            <Button
              className={cn(
                "w-fit px-3 py-2 h-fit mt-4 rounded-[6px]",
                buttonShow
              )}
            >
              <div className="flex gap-[7px] items-center">
                <Text className="cursor-pointer text-white text-[14px] font-medium">
                  {buttonText}
                </Text>
                <Image src={arrow} width={12} alt="arrow svg" />
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RetailSlide;
