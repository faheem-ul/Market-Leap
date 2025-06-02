"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReusableCard from "@/components/NailSaloon/Hardware/ReusableCard";
import { industries } from "@/lib/constants/industries";

gsap.registerPlugin(ScrollTrigger);

const CardsStackSection = ({ industryId }: { industryId: string }) => {
  const industry = industries.find((i) => i.id === industryId);
  const cards = industry?.hardwarethatsuits ?? [];

  // Create refs dynamically
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (!ref) return;

      gsap.to(ref, {
        scrollTrigger: {
          trigger: ref,
          start: "top top-=400px",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, [cards]);

  return (
    <>
      {/* Desktop / Tablet View */}
      <div className="relative bg-[#F2F2F2] mob:hidden" id="what-we-do">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {(cardRefs.current[index] = el)}}
            className="w-full min-h-screen flex items-center justify-center sticky top-0 bg-[#F2F2F2]"
          >
            <div className="w-full tab:h-[70%] mob:h-auto mob:pb-[25px] rounded-[24px]">
              <ReusableCard
                heading={card.heading}
                image={card.image}
                Description={card.constent}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="mob:block hidden mob:px-[20px] bg-[#F2F2F2]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center"
          >
            <div className="w-full mob:h-auto mob:pb-[25px] rounded-[24px]">
              <ReusableCard
                heading={card.heading}
                image={card.image}
                Description={card.constent}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsStackSection;
