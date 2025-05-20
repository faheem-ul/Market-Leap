import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import MarqueeComponent from "@/components/ui/MarqueeComponent";
import DesktopNav from "./Navbar";

import marquee1 from "@/public/images/Nail-saloon/marquee1.png";
import marquee2 from "@/public/images/Nail-saloon/marquee2.png";
import bg from "@/public/images/Nail-saloon/bg.png";
const NailHero = () => {
  const images = [marquee1, marquee2];
  return (
    <div className="w-full h-full relative" >
        <Image src={bg} alt="bg" className=" absolute flex justify-center items-center h-[1260px]"/>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <DesktopNav/>
        <div className="w-full h-full max-w-[1313px] mt-[201px]">
          <Text
            as="h1"
            className="w-full max-w-[634px] mx-auto text-center text-[50px] mb-[35px]">
            Nail Salon Software That Puts You In Control
          </Text>
          <Button className="w-[166px] h-[58px] rounded-[15px] mx-auto text-white bg-secondary text-[18px] font-bold mb-[107px]">
            Contact Us
          </Button>

        </div>
      </div>
          <MarqueeComponent direction="left" className="mb-[26px]">
            <div className="flex items-center ml-[30px] justify-center gap-[30px] mob:gap-[70px] mob:ml-[70px]">
              {images.map((logo, index) => (
                <Image
                  src={logo}
                  alt="image"
                  key={index}
                  width={300}
                  //   height={60}
                  //   className="object-cover"
                />
              ))}
            </div>
          </MarqueeComponent>
    </div>
  );
};

export default NailHero;
