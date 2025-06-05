"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ResuableComponent from "@/components/NailSaloon/MakeTheMost/ReusableComponent";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { industries } from "@/lib/constants/industries";

import linesbg from "@/public/images/Nail-saloon/linesbg.png";
import bg from "@/public/images/Nail-saloon/bg.png";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = ({ industryId }: { industryId: string }) => {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const industry = industries.find((industry) => industry.id === industryId);
  const makeTheMost = industry?.makeTheMostSection ?? [];

  return (
    <div className="w-full h-full relative mob:mt-[250px] mob:hidden ">
      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="w-full max-w-[1313px] mx-auto">
          <Text
            as="h1"
            className="text-[60px] w-full max-w-[470px] my-[70px] text-center mx-auto">
            Make The Most Of <span className="text-secondary"> Every Hour</span>
          </Text>
        </div>

        <div
          className="relative  mx-auto bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${linesbg.src})` }}>
          {/* absolute inset-0 bg-black/20 z-0 pointer-events-none */}
          <Image
            src={bg}
            alt="bg"
            className="absolute inset-0 h-full z-0 opacity-30 pointer-events-none"
          />
          {makeTheMost.map((section, index) => {
            const headingKey = Object.keys(section).find((key) =>
              key.includes("heading")
            );
            const contentKey = Object.keys(section).find((key) =>
              key.includes("Content")
            );
            const imageKey = Object.keys(section).find((key) =>
              key.includes("Image")
            );

            if (!headingKey || !contentKey) return null;

            const heading = section[
              headingKey as keyof typeof section
            ] as string;
            const content = section[contentKey as keyof typeof section] as {
              icon: StaticImageData;
              content: string;
            }[];
            const image = section[
              imageKey as keyof typeof section
            ] as StaticImageData;

            const isLast = index === makeTheMost.length - 1;

            return (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className={cn(
                  "w-full flex items-center justify-center relative ",
                  isLast ? "py-[160px]" : "py-[160px]"
                )}>
                <div className="content w-full max-w-[1313px] px-5">
                  <ResuableComponent
                    heading={heading}
                    image={image}
                    icons={content.map((item) => item.icon)}
                    iconsDescription={content.map((item) => item.content)}
                    disablePin={isLast}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
