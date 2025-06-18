import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import bg from "@/public/images/industry/industrybg.png";
import Button from "@/components/ui/Button";

const IndustryHero = () => {
  return (
    <div className="relative w-full mob:h-[374px] md:h-[59vh] overflow-hidden px-5">
      <Image src={bg} alt="hero image" fill className="object-cover" priority />
      {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}
      <div className="relative z-20 w-full h-full flex flex-col items-start  max-w-[1313px] mx-auto">
        <div className="h-full w-full flex justify-center items-center flex-col">
          <Text
            as="h1"
            className="w-full max-w-[820px] text-[50px] text-center leading-[65px] mb-[32px]">
            Start With The Right Tech For Your Business
          </Text>

          <Link href="/pricing">
            <Button className="w-[166px] h-[58px] rounded-[15px] text-white font-bold mx-auto  button-shadow-industry">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryHero;
