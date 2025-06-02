import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  heading: string;
  icons: StaticImageData[];
  iconsDescription: string[];
  background?: string;
  imageShow?: string;
  noImage?: boolean;
  image?: StaticImageData;
  imageRef?: React.RefObject<HTMLDivElement>;
  disablePin?: boolean;
}

const ResuableComponent: React.FC<Props> = ({
  heading,
  icons,
  iconsDescription,
  background,
  image,
  imageRef,
  disablePin = false,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const localImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const content = contentRef.current;
    const imageEl = imageRef?.current || localImageRef.current;

    if (!content || !imageEl) return;

    // Animate content opacity based on scroll
    ScrollTrigger.create({
      trigger: content,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: () => {
        const viewportHeight = window.innerHeight;
        const sectionRect = content.getBoundingClientRect();
        const sectionCenter = sectionRect.top + sectionRect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter = Math.abs(viewportCenter - sectionCenter);
        const maxDistance = viewportHeight / 2;
        const opacity = 1 - distanceFromCenter / maxDistance;
        gsap.set(content, { opacity: Math.max(0, Math.min(1, opacity)) });
      },
    });

    // Pin the image when it's at the center
    if(!disablePin) {
    ScrollTrigger.create({
      trigger: imageEl,
      start: "center center",
      end: "+=500", 
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
  }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [imageRef]);

  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center relative py-[20px] px-5 z-10 overflow-hidden",
        background
      )}
    >
      <div className="w-full max-w-[1313px] flex justify-center items-center relative z-10">
        <div className="w-full flex gap-[39px] justify-center items-center">
          <div
            ref={contentRef}
            className="w-full flex justify-between flex-wrap items-center"
          >
            <Text
              as="h1"
              className="text-[45px] font-semibold w-full max-w-[408px] leading-[120%]"
            >
              {heading}
            </Text>

            {/* Wrap image in a div to allow ref pinning */}
            {image && (
              <div ref={imageRef || localImageRef}>
                <Image src={image} alt="image" width={424} className="max-w-[424px]" />
              </div>
            )}

            <div className="w-full max-w-[354px] flex flex-col gap-[19px]">
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
