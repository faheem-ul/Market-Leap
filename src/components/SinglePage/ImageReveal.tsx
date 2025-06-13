"use client";

import React from "react";
import Image  from "next/image";
import { StaticImageData } from "next/image";

import ResuableComponent from "@/components/NailSaloon/MakeTheMost/ReusableComponent";
import { industries } from "@/lib/constants/industries";
import { cn } from "@/lib/utils";
import Text from "@/components/ui/Text";

import linesbg from "@/public/images/Nail-saloon/linesbg.png";
import bg from "@/public/images/Nail-saloon/bg.png";


const ImageReveal = ({ industryId }: { industryId: string }) => {
  const industry = industries.find((industry) => industry.id === industryId);
  const makeTheMost = industry?.makeTheMostSection ?? [];

  return (
    <div className="w-full mob:hidden">
      <div className="w-full max-w-[1313px] mx-auto">
        <Text
          as="h1"
          className="text-[60px] w-full max-w-[470px] my-[70px] text-center mx-auto">
          Make The Most Of <span className="text-secondary"> Every Hour</span>
        </Text>
      </div>
      <div 
       className="relative  mx-auto bg-fixed bg-center bg-cover"
       style={{ backgroundImage: `url(${linesbg.src})` }}
      >

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

        if (!headingKey || !contentKey || !imageKey) return null;

        const heading = section[headingKey as keyof typeof section] as string;
        const content = section[contentKey as keyof typeof section] as {
          icon: StaticImageData;
          content: string;
        }[];
        const image = section[
          imageKey as keyof typeof section
        ] as StaticImageData;
        const isLast = index === makeTheMost.length - 1;

        return (
          <section
            key={index}
            className={cn(
              "w-full flex items-center h-screen justify-center relative bg-cover bg-center bg-no-repeat",
              isLast ? "py-[160px]" : "py-[160px]"
            )}
            style={{
              backgroundImage: `url(${image.src || image})`,
              backgroundAttachment: "fixed",
              backgroundSize: "400px",
              //   height: '100vh',
            }}>
            <div className="content w-full max-w-[1313px] px-5">
              <ResuableComponent
                heading={heading}
                image={image}
                icons={content.map((item) => item.icon)}
                iconsDescription={content.map((item) => item.content)}
                disablePin={isLast}
              />
            </div>
          </section>
        );
      })}
      </div>
    </div>
  );
};

export default ImageReveal;
