import React from "react";
import Image from "next/image";

import MarqueeComponent from "@/components/ui/MarqueeComponent";

import aairah from "@/public/images/home/aairh (1) 1.png";
import brow from "@/public/images/home/browandbeautyart.png";
import mysign from "@/public/images/home/mysign.png";
import river from "@/public/images/home/riveroakscleaners.png";
import auto from "@/public/images/home/alaautoinsurance.png";
import oaks from "@/public/images/home/riveroaksblinds-removebg-preview 1.png";
import health from "@/public/images/home/healthhop.png";
import tcc from "@/public/images/home/tcc.png";

const HomeMarquee = () => {
  const logos = [aairah, brow, mysign, river, auto, oaks, health, tcc];
  return (
    <div className="bg-primary h-[125px] mb-[92px]">
      <MarqueeComponent direction="left">
        <div className="flex items-center ml-[120px] justify-center gap-[112px] mob:gap-[70px] mob:ml-[70px]">
          {logos.map((logo, index) => (
            <Image
              src={logo}
              alt="image"
              key={index}
              width={150}
            //   height={60}
            //   className="object-cover"                       
            />
          ))}
        </div>
      </MarqueeComponent>
    </div>
  );
};

export default HomeMarquee;
