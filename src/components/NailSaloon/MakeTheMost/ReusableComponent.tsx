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
  const leftContentRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);
  const localImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;
    const imageEl = imageRef?.current || localImageRef.current;

    if (!leftContent || !rightContent || !imageEl) return;

    let imageFullyVisible = false;

    const calculateOpacity = (element: HTMLElement) => {
      const viewportHeight = window.innerHeight;
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
      const maxDistance = viewportHeight / 2;
      const opacity = 1 - distanceFromCenter / maxDistance;
      return Math.max(0, Math.min(1, opacity));
    };

    ScrollTrigger.create({
      trigger: leftContent,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: () => {
        const leftOpacity = calculateOpacity(leftContent);
        const rightOpacity = calculateOpacity(rightContent);

        gsap.set(leftContent, { opacity: leftOpacity });
        gsap.set(rightContent, { opacity: rightOpacity });

        // Image fades in with left content, then stays fully visible
        if (!imageFullyVisible && leftOpacity >= 1) {
          imageFullyVisible = true;
        }

        gsap.set(imageEl, { opacity: imageFullyVisible ? 1 : leftOpacity });
      },
    });

    if (!disablePin) {
      ScrollTrigger.create({
        trigger: imageEl,
        start: "center center",
        end: "+=500",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [imageRef, disablePin]);

  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center relative py-[20px] px-5 z-10 overflow-hidden",
        background
      )}
    >
      <div className="w-full max-w-[1313px] flex justify-center items-center relative z-10 gap-[39px]">
        {/* Left Content */}
        <div
          ref={leftContentRef}
          className="flex-1 flex flex-col justify-center"
        >
          <Text
            as="h1"
            className="text-[45px] font-semibold max-w-[408px] leading-[120%]"
          >
            {heading}
          </Text>
          {/* Add any additional left content here if needed */}
        </div>

        {/* Center Image */}
        {image && (
          <div ref={imageRef || localImageRef} className="max-w-[424px]">
            {/* <Image
              src={image}
              alt="image"
              width={424}
              className="max-w-[424px]"
              priority
            /> */}
          </div>
        )}

        {/* Right Content */}
        <div
          ref={rightContentRef}
          className="max-w-[354px] flex flex-col gap-[19px]"
        >
          {icons.map((icon, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={icon} alt={`icon-${index}`} width={40} height={40} />
              <Text className="text-[18px] font-light leading-[100%]">
                {iconsDescription[index]}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResuableComponent;
