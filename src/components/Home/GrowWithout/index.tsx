"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import grow1 from "@/public/images/home/grow.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import GrowWithoutMobSlider from "./GrowMobSlider";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const GrowWithout = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeIndexRef = useRef(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const img = new window.Image();
      img.src = grow1.src;
  
      // Set initial state for the first content section to be visible
      gsap.set("#content1", { opacity: 1, y: 0 });
      for (let i = 2; i <= 4; i++) {
        gsap.set(`#content${i}`, { opacity: 0, y: -50 });
      }
  
      // Set initial position for dot on the semicircle and label to the left
      gsap.set("#dot", {
        motionPath: {
          path: "#semiPath",
          align: "#semiPath",
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0,
        },
        opacity: 0.3,
        scale: 1,
      });
  
      gsap.set("#label", {
        x: 0, // Adjusted to position label to the left of the semicircle
        y: 0,
        opacity: 0.3,
        textAnchor: "start", // Align text to the left of the circle
      });
  
      const setupAnimation = () => {
        const numSections = 4;
        const sectionLength = 1 / numSections;
  
        gsap.timeline({
          scrollTrigger: {
            trigger: "#grow-without-container",
            start: "top 10%",
            end: "#end-animation",
            endTrigger: "#end-animation",
            scrub: true,
            pin: "#pinned-section",
            pinSpacing: true,
            anticipatePin: 1,
            immediateRender: true,
            onEnter: () => {
              ScrollTrigger.refresh();
            },
            onUpdate: (self) => {
              const progress = self.progress;
              const sectionIdx = Math.min(
                Math.floor(progress / sectionLength),
                numSections - 1
              );
              if (activeIndexRef.current !== sectionIdx + 1) {
                activeIndexRef.current = sectionIdx + 1;
                setActiveIndex(sectionIdx + 1);
                for (let i = 1; i <= 4; i++) {
                  gsap.set(`#content${i}`, {
                    opacity: i === sectionIdx + 1 ? 1 : 0,
                    y: i === sectionIdx + 1 ? 0 : -50,
                  });
                }
              }
              const localProgress =
                (progress - sectionIdx * sectionLength) / sectionLength;
  
              // Animate dot position along the path
              gsap.set("#dot", {
                motionPath: {
                  path: "#semiPath",
                  align: "#semiPath",
                  alignOrigin: [0.5, 0.5],
                  start: 0,
                  end: localProgress,
                },
              });
  
              // Keep the text label to the left of the dot during the animation
              gsap.set("#label", {
                motionPath: {
                  path: "#semiPath",
                  align: "#semiPath",
                  alignOrigin: [1.4, 0.5],
                  start: localProgress,
                  end: localProgress,
                  autoRotate: false,
                },
                x: -60, // Keep the label 60px to the left of the semicircle
              });
  
              const dotOpacity = Math.max(0.3, 1 - 4 * Math.pow(localProgress - 0.5, 2));
              const dotScale = Math.max(0, 1 - 4 * Math.pow(localProgress - 0.5, 2));
              gsap.set(["#dot", "#label"], { opacity: dotOpacity, scale: dotScale });
            },
          },
        });
      };
  
      const timer = setTimeout(setupAnimation, 200);
  
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timer);
      };
    });
  
    return () => ctx.revert();
  }, []);
  

  const labels = ["Marketing", "Reviews", "Local Market", "Never Lose Lead"];

  return (
    <>
      <div
        id="grow-without-container"
        className="flex justify-center items-center w-full min-h-[400vh] mob:hidden">
        <div className="w-full max-w-[100vw] flex flex-col items-center relative">
          <div
            id="pinned-section"
            className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 min-h-[100vh]">
            <div
              id="scroll-container"
              className="w-full md:w-3/5 relative flex flex-col items-center justify-center min-h-screen gap-4">
              <div className="relative w-full flex flex-col items-center justify-center gap-4 max-w-[50vw]">
                <div className="relative w-full min-h-[50vh]">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      id={`content${i}`}
                      className="absolute inset-0 top-[8vh] opacity-0 translate-y-[-3vw] transition-all duration-500 text-center flex flex-col items-center justify-center">
                      <Image
                        src={grow1}
                        alt="grow"
                        width={0}
                        height={0}
                        className="mx-auto w-[38vw] md:w-[40vw] h-auto"
                        priority
                      />
                      <Text
                        as="h2"
                        className="text-[2.5vw] sm:text-[2vw] md:text-[1.7vw] mb-[1.2vw] md:mb-[1vw]">
                        {i === 1 && "Marketing That Actually Works"}
                        {i === 2 && "Enhance Business Visibility Online"}
                        {i === 3 && "Streamline Business Operations"}
                        {i === 4 && "Customizable At Scale"}
                      </Text>
                      <Text className="mb-[1.5vw] md:mb-[1vw] text-[1.1vw] sm:text-[1vw] md:text-[0.95vw]">
                        {i === 1 &&
                          "Get predictable and measurable customer growth powered by our best in class marketing software. Source leads from ads, search, referrals, and more. We do the heavy lifting behind the scenes so you can focus on your business."}
                        {i === 2 &&
                          "Meet customers where they are. You focus on delighting customers and we take care of helping you get reviews as well as creating, managing, and optimizing your business listings across third party platforms, local search, and social platforms so that you're always front and center for prospective customers."}
                        {i === 3 &&
                          "Our software makes business operations seamless for single location businesses as well as multi store and franchise operations. Load in your products and services, and let our state of the art management system take care of optimizing your operations around your business goals and operational data. Automate as much or as little as you want and get access to powerful technology that doesn't get in the way and lets you run your business on your terms."}
                        {i === 4 &&
                          "As you scale and your business operations evolve, continue using our state of the art software APIs with your own platform. Every part of our software is modular, giving you the flexibility to supercharge your systems with the best of ours."}
                      </Text>
                      <Button className="bg-primary w-[12vw] sm:w-[13vw] md:w-[14vw] mx-auto py-[1vw] font-bold rounded-[1vw] text-white text-[1vw] sm:text-[1.1vw] md:text-[1.2vw]">
                        {i === 1
                          ? "Marketing"
                          : i === 2
                          ? "Visibility Online"
                          : i === 3
                          ? "Operations"
                          : "Software Apis"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="svg-container"
              className="w-full md:w-[40vw] flex justify-center md:justify-end items-center min-h-[80vh] relative">
              <svg
                viewBox="0 0 400 800"
                className="w-full max-w-[40vw] sm:max-w-[25vw] md:max-w-[18vw] h-auto overflow-visible">
                <path
                  id="semiPath"
                  d="M400,0 A400,400 0 0,0 400,800"
                  fill="none"
                  stroke="#0055FF"
                  strokeWidth="8"
                />
                <g className="">
                  <circle id="dot" r="20" fill="#0055FF" />
                  <text className="text-right italic" id="label" fontSize="24" fontFamily="Poppins" fill="#000" fontWeight="bold"  >
                    {labels[activeIndex - 1]}
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="end-animation" style={{ height: "1px" }}></div>
      <GrowWithoutMobSlider />
    </>
  );
};

export default GrowWithout;