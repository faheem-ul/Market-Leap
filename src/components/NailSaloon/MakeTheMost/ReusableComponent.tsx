import React from "react";
import Image, { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

import mask from "@/public/images/Nail-saloon/Vector.png"

interface props {
  heading: string,
  image: StaticImageData,
  icons: StaticImageData[],
  iconsDescription: string[],
  background?:string,
  imageShow?:string
}

const ResuableComponent: React.FC<props> = ({
  heading, image, icons, iconsDescription, background, imageShow
}) => {
  return (
    <div className={cn("w-full h-full flex justify-center items-center py-[160px] relative px-5 z-10 overflow-hidden", background)}>
      <Image src={mask} alt="mask" className={cn("absolute w-full h-full object-contain z-0 opacity-10", imageShow)} />
      <div className="w-full max-w-[1313px] flex justify-center items-center relative z-10">
        <div className="w-full flex gap-[20px] justify-between xl:justify-center flex-wrap items-center">
          <Text as="h1" className="text-[45px] font-semibold w-full max-w-[408px] leading-[120%]">
            {heading}
          </Text>
          <Image src={image} alt="image" width={424} className="" />
          <div className="w-full max-w-[394px] flex flex-col gap-[33px]">
            {icons.map((icon, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image src={icon} alt={`icon-${index}`} width={40} height={40} />
                <Text className="text-[18px] font-light leading-[100%]">{iconsDescription[index]}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResuableComponent;
