import React from "react";
import Image from "next/image";

import bgl from "@/public/images/home4left.png";
import bgr from "@/public/images/home4right.png";
import Text from "@/components/ui/Text";
import Link from "next/link";

const ForthSection = () => {
  return (
    <div className="relative flex justify-center">
      <div className="w-[50%] mob:w-full relative overflow-hidden">
        <Image
          className="absolute w-full object-cover object-center h-full z-0 custom-scale"
          src={bgl}
          alt="bg"
        />
        <div className=" min-h-screen overflow-hidden flex items-center justify-start  px-14 mob:px-5 ">
          <div className="relative z-10 w-full">
            <Text as="h2" className="mb-3">
            LIGHTROOM PRESETS
            </Text>
            <Link href="#">
              <Text className="text-accent items-center uppercase tracking-[0.7px] underline underline-offset-[3px]">
              SHOP PRESETS <span className="">→</span>{" "}
              </Text>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] mob:hidden relative overflow-hidden">
        <Image
          className="absolute w-full object-cover object-center h-full z-0 custom-scale"
          src={bgr}
          alt="bg"
        />
      </div>
    </div>
  );
};

export default ForthSection;
