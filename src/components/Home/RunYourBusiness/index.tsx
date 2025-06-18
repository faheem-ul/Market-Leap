"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/home/right-arrow.svg";
import calenderImage from "@/public/images/Nail-saloon/calender.png";
import mask from "@/public/images/home/run-mask.png";
import RunMobSlider from "./RunMobSlider";

gsap.registerPlugin(ScrollTrigger);

const MakeTheMost = () => {
  const sectionRef1 = useRef<HTMLDivElement | null>(null);
  const sectionRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef3 = useRef<HTMLDivElement | null>(null);
  const heading1Ref = useRef<HTMLDivElement | null>(null);
  const heading2Ref = useRef<HTMLDivElement | null>(null);
  const heading3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const headings = [heading1Ref.current, heading2Ref.current, heading3Ref.current];
    const sections = [sectionRef1.current, sectionRef2.current, sectionRef3.current];

    headings.forEach((heading, index) => {
      if (!heading || !sections[index]) return;

      // Fade in
      gsap.fromTo(
        heading,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: sections[index],
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Fade out
      gsap.to(heading, {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: sections[index],
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const sections = [
      sectionRef1.current,
      sectionRef2.current,
      sectionRef3.current,
    ];

    const handleScrollAnimations = () => {
      sections.forEach((section) => {
        if (!section) return;

        gsap.fromTo(
          section,
          { opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onUpdate: () => {
                const viewportHeight = window.innerHeight;
                const rect = section.getBoundingClientRect();
                const center = rect.top + rect.height / 2;
                const distance = Math.abs(viewportHeight / 2 - center);
                const maxDistance = viewportHeight / 2;
                const opacity = 1 - distance / maxDistance;
                gsap.set(section, { opacity: Math.max(0, Math.min(1, opacity)) });
              },
            },
          }
        );
      });
    };

    handleScrollAnimations();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-full relative bg-[#FCFBFB]">
      {/* Fixed background image */}
      <div
        className="absolute top-0 mob:hidden left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${mask.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full h-full relative flex mob:flex-col max-w-[90vw] gap-5 px-5 mob:hidden">
          {/* Sticky Heading */}
          <div className="sticky mob:relative mob:h-auto top-0 w-full max-w-[32vw] h-screen flex justify-center items-center z-10">
            <div className="relative w-full h-[200px]">
              <div ref={heading1Ref} className="absolute w-full">
                <Text as="h1" className="text-[4vw] leading-[120%]">
                  Run Your Business With <span className="text-secondary">Confidence</span>
                </Text>
              </div>
              <div ref={heading2Ref} className="absolute w-full">
                <Text as="h1" className="text-[4vw] leading-[120%]">
                  Scale Your Business <span className="text-secondary">Effortlessly</span>
                </Text>
              </div>
              <div ref={heading3Ref} className="absolute w-full">
                <Text as="h1" className="text-[4vw] leading-[120%]">
                  Grow Your Business <span className="text-secondary">Seamlessly</span>
                </Text>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col items-center w-full relative mob:hidden">
            {/* Section 1 */}
            <div
              ref={sectionRef1}
              className="w-full flex items-center justify-between flex-wrap xl:justify-center xl:gap-5 min-h-screen py-[80px] mx-auto max-w-[80vw]"
            >
              <div className="image-container w-full max-w-[24.6vw]">
                <Image
                  src={calenderImage}
                  width={424}
                  alt="calendar"
                  className="w-full max-w-[24.6vw] mob:px-5"
                />
              </div>
              <div className="w-full max-w-[27.6vw]">
                <Text as="h1" className="text-[2vw] font-semibold leading-[2.5vw]">
                  Your Business Command Center
                </Text>
                <Text className="font-light text-[1.2vw] mt-[15px] mb-[39px]">
                  Everything you need in one powerful platform. Effortlessly
                  manage sales, inventory, staff, and customer relationships.
                  Whether {"you're"} a small boutique or a growing chain, get
                  the insights and control you need to make better decisions and
                  delight your customers.
                </Text>
                <Link href="/pricing">
                  <button>
                    <div className="flex gap-3 justify-center items-center">
                      <Text className="text-[1.2vw] font-normal">Get Started</Text>
                      <Image src={arrow} alt="arrow" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 2 */}
            <div
              ref={sectionRef2}
              className="w-full flex items-center justify-between flex-wrap xl:justify-center xl:gap-5 min-h-screen py-[80px] mx-auto max-w-[80vw]"
            >
              <div className="image-container w-full max-w-[24.6vw]">
                <Image
                  src={calenderImage}
                  width={424}
                  alt="calendar"
                  className="w-full max-w-[24.6vw] mob:px-5"
                />
              </div>
              <div className="w-full max-w-[27.6vw]">
                <Text as="h1" className="text-[2vw] font-semibold leading-[2.5vw]">
                  Accept Payments Anywhere, Anytime
                </Text>
                <Text className="font-light text-[1.2vw] mt-[15px] mb-[39px]">
                  Never miss a sale again. Take payments in-store, online, by
                  text, or on the go - all with the lowest rates in the
                  industry. Plus, get paid faster with next-day deposits.
                  Simple, secure, and built for your success.
                </Text>
              </div>
            </div>

            {/* Section 3 */}
            <div
              ref={sectionRef3}
              className="w-full flex items-center justify-between min-h-screen flex-wrap xl:justify-center xl:gap-5 py-[80px] mx-auto max-w-[80vw]"
            >
              <div className="image-container w-full max-w-[24.6vw]">
                <Image
                  src={calenderImage}
                  width={424}
                  alt="calendar"
                  className="w-full max-w-[24.6vw] mob:px-5"
                />
              </div>
              <div className="w-full max-w-[27.6vw]">
                <Text as="h1" className="text-[2vw] font-semibold leading-[2.5vw]">
                  Customer Engagement
                </Text>
                <Text className="font-light text-[1.2vw] mt-[15px] mb-[39px]">
                  Delight customers with a solid brand experience using our
                  flagship loyalty, retention marketing, and customer engagement
                  software. Easy setup and fully managed for you. No need to
                  stress over getting every detail right. Our AI optimizes the
                  experience based on your customer and business data - removing
                  the guesswork.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RunMobSlider />
    </div>
  );
};

export default MakeTheMost;
