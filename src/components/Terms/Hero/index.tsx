import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import DesktopNav from "@/components/NailSaloon/Hero/Navbar";

import bg from "@/public/images/privacy-policy/hero.png";
const TermsHero = () => {
  return (
    <div className="w-full relative ">
      <Image
        src={bg}
        alt="bg"
        fill
        style={{backgroundPosition: "center"}}
        className="object-cover z-[-10]"
      />
      <div className="w-full relative z-10">
        {/* Make nav fixed on top */}
        <DesktopNav  />
        {/* Add padding top equal to nav height, adjust as needed */}
        <div className="w-full h-full max-w-[1313px] mx-auto flex justify-center items-center min-h-[59vh]">
          <Text
            as="h1"
            className="w-full max-w-[634px] text-center mx-auto flex justify-center items-center text-[70px] text-white"
          >
            Terms of Service
          </Text>
        </div>
      </div>
    </div>

  );
};

export default TermsHero;
