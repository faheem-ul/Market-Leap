"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ResuableComponent from "@/components/NailSaloon/MakeTheMost/ReusableComponent";
import Text from "@/components/ui/Text";
import { industries } from "@/lib/constants/industries";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = ({ industryId }: { industryId: string }) => {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);

  const industry = industries.find((industry) => industry.id === industryId);
  const makeTheMost = industry?.makeTheMostSection ?? [];

  useEffect(() => {
    makeTheMost.forEach((_, index) => {
      const section = sectionRefs.current[index];
      const image = imageRefs.current[index];

      if (!section || !image) return;

      gsap.set(image, { opacity: index === 0 ? 1 : 0 }); // First image visible

      gsap.to(section.querySelector(".content"), {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      if (index > 0) {
        const prevImage = imageRefs.current[index - 1];
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          onEnter: () => {
            gsap.to(image, { opacity: 1, duration: 0.5 });
            if (prevImage) gsap.to(prevImage, { opacity: 0, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to(image, { opacity: 0, duration: 0.5 });
            if (prevImage) gsap.to(prevImage, { opacity: 1, duration: 0.5 });
          },
        });
      }
    });
  }, [makeTheMost]);

  return (
    <div className="w-full h-full relative mb-[500px] mob:mt-[250px] mob:hidden">
         <div className="w-full max-w-[1313px] mx-auto">
          <Text
            as="h1"
            className="text-[60px] w-full max-w-[470px] my-[70px] text-center mx-auto"
          >
            Make The Most Of <span className="text-secondary"> Every Hour</span>
          </Text>
        </div>
      {/* Sticky Image Container */}
      <div className="sticky top-[26%] left-1/2 transform -translate-x-1/2 w-[424px] h-auto pointer-events-none z-0">
        {makeTheMost.map((section, index) => {
          const imageKey = Object.keys(section).find((key) => key.includes("Image"));
          const headingKey = Object.keys(section).find((key) => key.includes("heading"));

          if (!imageKey || !headingKey) return null;

          const image = section[imageKey as keyof typeof section] as { src: string };
          const heading = section[headingKey as keyof typeof section] as string;

          return (
            <Image
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}              
              src={image.src}
              alt={heading}
              width={424}
              height={389}
              className="absolute left-0 w-full opacity-0 transition-opacity duration-500"
            />
          );
        })}
      </div>

      {/* Content Sections */}
      <div className="relative max-w-[1313px] mx-auto">
        {makeTheMost.map((section, index) => {
          const headingKey = Object.keys(section).find((key) => key.includes("heading"));
          const contentKey = Object.keys(section).find((key) => key.includes("Content"));

          if (!headingKey || !contentKey) return null;

          const heading = section[headingKey as keyof typeof section] as string;
          const content = section[contentKey as keyof typeof section] as { icon: StaticImageData; content: string }[];

          return (
            <div
              key={index}
              ref={(el) => {(sectionRefs.current[index] = el)}}
              className="w-full flex items-center justify-center py-[160px]"
            >
              <div className="content w-full max-w-[1313px] px-5">
                <ResuableComponent
                  heading={heading}
                  icons={content.map((item) => item.icon)}
                  iconsDescription={content.map((item) => item.content)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondSection;
