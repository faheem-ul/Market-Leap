"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/home/right-arrow.svg";
import calenderImage from "@/public/images/Nail-saloon/calender.png";
// import payment from "@/public/images/Nail-saloon/take-payments.png";
// import keep from "@/public/images/Nail-saloon/keep.png";
import mask from "@/public/images/home/run-mask.png";
import RunMobSlider from "./RunMobSlider";

gsap.registerPlugin(ScrollTrigger);

const MakeTheMost = () => {
  const sectionRef1 = useRef<HTMLDivElement | null>(null);
  const sectionRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef3 = useRef<HTMLDivElement | null>(null);

  const imageRef1 = useRef<HTMLImageElement | null>(null);
  const imageRef2 = useRef<HTMLImageElement | null>(null);
  const imageRef3 = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const sections = [sectionRef1.current, sectionRef2.current, sectionRef3.current];
  
    sections.forEach((section) => {
      if (!section) return;
  
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          // opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",    // when top of section hits bottom of viewport
            end: "bottom top",    
             onUpdate: () => {
              const viewportHeight = window.innerHeight;
              const sectionRect = section.getBoundingClientRect();
              const sectionCenter = sectionRect.top + sectionRect.height / 2;
              const viewportCenter = viewportHeight / 2;
              const distanceFromCenter = Math.abs(
                viewportCenter - sectionCenter
              );
              const maxDistance = viewportHeight / 2;
              const opacity = 1 - distanceFromCenter / maxDistance;
              gsap.set(section, { opacity: Math.max(0, Math.min(1, opacity)) });
            },  // when bottom of section hits top of viewport
            scrub: true,            // smooth scrubbing
          },
        }
      );
    });
  }, []);
  

  return (
    <div className="w-full h-full relative bg-[#FCFBFB]">
      {/* Fixed background image container */}
      <div
        className="absolute top-0 mob:hidden left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${mask.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
         
      </div>

      <div className="w-full h-full relative flex mob:flex-col max-w-[1313px] gap-5 mx-auto px-5">
        {/* Sticky Heading on the Left */}
        <div className="sticky mob:relative mob:h-auto top-[0%] w-full max-w-[408px] h-screen flex justify-center items-center z-10">
          <Text as="h1" className="text-[55px] w-full max-w-[408px] leading-[120%]">
            Run Your Business With{" "}
            <span className="text-secondary">Confidence</span>
          </Text>
        </div>

        {/* Content on the Right */}
        <div className="flex flex-col items-center w-full relative mob:hidden">
          {/* Section 1 */}
          <div
            ref={sectionRef1}
            className="w-full flex items-center justify-between flex-wrap xl:justify-center xl:gap-5 min-h-screen py-[80px] mx-auto max-w-[860px]"
          >
            <div className="image-container">
              <Image
                ref={imageRef1}
                src={calenderImage}
                width={424}
                alt="calendar"
                className="max-w-[424px] mob:px-5"
              />
            </div>
            <div className="w-full max-w-[394px]">
              <Text as="h1" className="text-[30px] font-semibold leading-[37px]">
                Branding and Experience
              </Text>
              <Text className="font-light text-[18px] mt-[15px] mb-[39px]">
                Use our flagship point of sale and business growth software.
                Create and own your brand from the start - and let our software
                do the heavy lifting to help you stand out.
              </Text>
              <button>
                <div className="flex gap-3 justify-center items-center">
                  <Text className="text-[18px] font-normal">Get Started</Text>
                  <Image src={arrow} alt="arrow" />
                </div>
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div
            ref={sectionRef2}
            className="w-full flex items-center justify-between flex-wrap xl:justify-center xl:gap-5 min-h-screen py-[80px] mx-auto max-w-[860px]"
          >
            <div className="image-container">
              <Image
                ref={imageRef2}
                src={calenderImage}
                width={424}
                alt="payment"
                className="max-w-[424px] mob:px-5"
              />
            </div>
            <div className="w-full max-w-[394px]">
              <Text as="h1" className="text-[30px] font-semibold leading-[37px]">
                Accept Payments Anywhere, Anytime
              </Text>
              <Text className="font-light text-[18px] mt-[15px] mb-[39px]">
                Never miss a sale again. Take payments in-store, online, by
                text, or on the go - all with the lowest rates in the industry.
                Plus, get paid faster with next-day deposits. Simple, secure,
                and built for your success.
              </Text>
            </div>
          </div>

          {/* Section 3 */}
          <div
            ref={sectionRef3}
            className="w-full flex items-center justify-between min-h-screen flex-wrap xl:justify-center xl:gap-5 py-[80px] mx-auto max-w-[860px]"
          >
            <div className="image-container">
              <Image
                ref={imageRef3}
                src={calenderImage}
                width={424}
                alt="keep"
                className="max-w-[424px] mob:px-5"
              />
            </div>
            <div className="w-full max-w-[394px]">
              <Text as="h1" className="text-[30px] font-semibold leading-[37px]">
                Customer Engagement
              </Text>
              <Text className="font-light text-[18px] mt-[15px] mb-[39px]">
                Delight customers with a solid brand experience using our
                flagship loyalty, retention marketing, and customer engagement
                software. Easy setup and fully managed for you. No need to stress
                over getting every detail right. Our AI optimizes the experience
                based on your customer and business data - removing the guesswork.
              </Text>
            </div>
          </div>
        </div>
      </div>

      <RunMobSlider/>
    </div>
  );
};

export default MakeTheMost;
