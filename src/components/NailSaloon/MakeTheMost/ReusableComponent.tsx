import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

interface Props {
  heading: string;
  icons: StaticImageData[];
  iconsDescription: string[];
  background?: string;
  imageShow?: string;
  noImage?: boolean;
  image?: StaticImageData;
  imageRef?: React.RefObject<HTMLImageElement>;
}

const ResuableComponent: React.FC<Props> = ({
  heading,
  icons,
  iconsDescription,
  background,
  // imageShow,
  noImage,
  image,
  imageRef,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Set initial opacity for content
    gsap.set(contentRef.current, { opacity: 0 });

    // Animate content opacity based on scroll position
    gsap.to(contentRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: () => {
          const viewportHeight = window.innerHeight;
          const sectionRect = contentRef.current!.getBoundingClientRect();
          const sectionCenter = sectionRect.top + sectionRect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = Math.abs(viewportCenter - sectionCenter);
          const maxDistance = viewportHeight / 2;
          const opacity = 1 - distanceFromCenter / maxDistance;
          gsap.set(contentRef.current, { opacity: Math.max(0, Math.min(1, opacity)) });
        },
      },
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === contentRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center relative py-[20px] px-5 z-10 overflow-hidden",
        background
      )}
    >
      <div className="w-full  max-w-[1313px] flex justify-center items-center relative z-10">
        <div className="w-full flex gap-[39px] justify-center items-center">
          {image && !noImage && (
            <Image
              src={image}
              alt="image"
              width={300}
              ref={imageRef}
            />
          )}
          <div ref={contentRef} className="w-full flex gap-[39px] justify-center flex-wrap items-center">
            <Text
              as="h1"
              className="text-[45px] font-semibold w-full max-w-[408px] leading-[120%]"
            >
              {heading}
            </Text>
            <div className="w-full max-w-[394px] flex flex-col gap-[19px]">
              {icons.map((icon, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={icon}
                    alt={`icon-${index}`}
                    width={40}
                    height={40}
                  />
                  <Text className="text-[18px] font-light leading-[100%]">
                    {iconsDescription[index]}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResuableComponent;
