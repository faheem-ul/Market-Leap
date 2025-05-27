import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import DesktopNav from "@/components/NailSaloon/Hero/Navbar";

import bg from "@/public/images/Pricing/hero.png";
import Button from "@/components/ui/Button";

const PricingHero = () => {
  return (
    <div className="w-full relative">
      <Image
        src={bg}
        alt="bg"
        fill
        className="object-cover z-[-10]"
      />
      <div className="w-full relative z-10">
        {/* Make nav fixed on top */}
        <DesktopNav  />
        {/* Add padding top equal to nav height, adjust as needed */}
        <div className="w-full h-full max-w-[1313px] mx-auto flex flex-col justify-center  items-center min-h-screen px-5">
          <Text
            as="h1"
            className="w-full max-w-[634px] mob:text-[35px] mob:leading-[45px] text-center mx-auto flex justify-center items-center text-[50px] text-white"
          >
            Pricing That Scales With 
            Your Success
          </Text>
          <Button className="w-[166px] h-[58px] rounded-[15px] text-white font-bold mx-auto mt-[23px] button-shadow-industry">
          Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
