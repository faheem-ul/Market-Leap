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
    // Preload image to ensure stable rendering

    const ctx = gsap.context(() => {
      const img = new window.Image();
      img.src = grow1.src;

      // Set initial state for the first content section to be visible
      gsap.set("#content1", { opacity: 1, y: 0 });
      for (let i = 2; i <= 4; i++) {
        gsap.set(`#content${i}`, { opacity: 0, y: -50 });
      }

      const setupAnimation = () => {
        // ScrollTrigger.refresh();

        const initialPositions = [0.75, 0.5, 0.25, 0];

        // Set initial positions on page load
        initialPositions.forEach((position, index) => {
          gsap.set(`#dot${index + 1}`, {
            motionPath: {
              path: "#semiPath",
              align: "#semiPath",
              alignOrigin: [0.5, 0.5],
              start: position,
              end: position,
            },
            opacity: 1,
            scale: 1,
          });
        });

        // const contentHeight =
        //   document.querySelector("#scroll-container")?.getBoundingClientRect()
        //     .height || 800;
        // const viewportHeight = window.innerHeight;
        // const animationDuration = Math.max(
        //   contentHeight * 4,
        //   viewportHeight * 2
        // );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#grow-without-container",
            start: "top 10%",
            endTrigger: "#end-animation",
            end: "top top",
            // end: "+=1500",
            scrub: true,
            pin: "#pinned-section",
            pinSpacing: true,
            // markers: true,
            anticipatePin: 1,
            immediateRender: true,
            onEnter: () => {
              ScrollTrigger.refresh();
            },
            onUpdate: (self) => {
              const progress = self.progress;
              let newIndex;

              if (progress < 0.25) newIndex = 1;
              else if (progress < 0.5) newIndex = 2;
              else if (progress < 0.75) newIndex = 3;
              else newIndex = 4;

              if (activeIndexRef.current !== newIndex) {
                activeIndexRef.current = newIndex;
                setActiveIndex(newIndex);

                for (let i = 1; i <= 4; i++) {
                  gsap.set(`#content${i}`, {
                    opacity: i === newIndex ? 1 : 0,
                    y: i === newIndex ? 0 : -50,
                  });
                }
              }
            },
          },
        });

        tl.to({}, { duration: 0.1 });

        // Phase animations (dot motion along path)
        tl.to("#dot1", {
          motionPath: {
            path: "#semiPath",
            align: "#semiPath",
            alignOrigin: [0.5, 0.5],
            start: initialPositions[0],
            end: 1,
          },
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "none",
        })
          .to(
            "#dot2",
            {
              motionPath: {
                path: "#semiPath",
                align: "#semiPath",
                alignOrigin: [0.5, 0.5],
                start: initialPositions[1],
                end: initialPositions[0],
              },
              duration: 1,
              ease: "none",
            },
            "<"
          )
          .to(
            "#dot3",
            {
              motionPath: {
                path: "#semiPath",
                align: "#semiPath",
                alignOrigin: [0.5, 0.5],
                start: initialPositions[2],
                end: initialPositions[1],
              },
              duration: 1,
              ease: "none",
            },
            "<"
          )
          .to(
            "#dot4",
            {
              motionPath: {
                path: "#semiPath",
                align: "#semiPath",
                alignOrigin: [0.5, 0.5],
                start: initialPositions[3],
                end: initialPositions[2],
              },
              duration: 1,
              ease: "none",
            },
            "<"
          );

        tl.to("#dot2", {
          motionPath: {
            path: "#semiPath",
            align: "#semiPath",
            alignOrigin: [0.5, 0.5],
            start: initialPositions[0],
            end: 1,
          },
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "none",
        })
          .to(
            "#dot3",
            {
              motionPath: {
                path: "#semiPath",
                align: "#semiPath",
                alignOrigin: [0.5, 0.5],
                start: initialPositions[1],
                end: initialPositions[0],
              },
              duration: 1,
              ease: "none",
            },
            "<"
          )
          .to(
            "#dot4",
            {
              motionPath: {
                path: "#semiPath",
                align: "#semiPath",
                alignOrigin: [0.5, 0.5],
                start: initialPositions[2],
                end: initialPositions[1],
              },
              duration: 1,
              ease: "none",
            },
            "<"
          );

        tl.to("#dot3", {
          motionPath: {
            path: "#semiPath",
            align: "#semiPath",
            alignOrigin: [0.5, 0.5],
            start: initialPositions[0],
            end: 1,
          },
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "none",
        }).to(
          "#dot4",
          {
            motionPath: {
              path: "#semiPath",
              align: "#semiPath",
              alignOrigin: [0.5, 0.5],
              start: initialPositions[1],
              end: initialPositions[0],
            },
            duration: 1,
            ease: "none",
          },
          "<"
        );

        tl.to("#dot4", {
          motionPath: {
            path: "#semiPath",
            align: "#semiPath",
            alignOrigin: [0.5, 0.5],
            start: initialPositions[0],
            end: 1,
          },
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "none",
        });
      };

      const timer = setTimeout(setupAnimation, 200);

      console.log("GrowWithout component mounted", timer);

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);
      handleResize();
    });
    return () => ctx.revert();
  }, []);

  const labels = ["Marketing", "Reviews", "Local Market", "Never Lose Lead"];

  return (
    <>
      <div
        id="grow-without-container"
        className="flex justify-center items-center w-full min-h-[83vh] px-4 sm:px-6 md:px-8 mob:hidden">
        <div className="w-full max-w-[90vw] flex flex-col items-center relative">
          {/* Pinned + ScrollSynced Section */}
          <div
            id="pinned-section"
            className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 min-h-[100vh]">
            {/* LEFT SECTION */}
            <div
              id="scroll-container"
              className="w-full md:w-3/5 relative flex flex-col items-center justify-center min-h-screen gap-4">
              {/* Animated Content Wrapper */}
              <div className="relative w-full flex flex-col items-center justify-center gap-4 max-w-[50vw]">
                {/* Labels bar placed ABOVE content */}
                <div className="bg-secondary relative z-10 rounded-[20px] w-full py-3 px-4 sm:px-6 md:px-12 flex justify-between items-center h-[8vh] sm:h-[10vh]">
                  {labels.map((label, index) => {
                    const isActive = activeIndex === index + 1;
                    return (
                      <Text
                        key={label}
                        className={`font-semibold text-[1.5vw] transition-all duration-1000 ${
                          isActive
                            ? "text-white px-[0.5vw] sm:px-3 md:px-5 py-[0.5vw] sm:py-[0.5vw] bg-black rounded-[15px]"
                            : "text-[#fff]/80"
                        }`}>
                        {label}
                      </Text>
                    );
                  })}
                </div>

                {/* Content container below labels */}
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
                        className="mx-auto w-[38vw] sm:w-[32vw] md:w-[24vw] h-auto"
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

            {/* RIGHT SECTION (SVG Path Animation) */}
            <div
              id="svg-container"
              className="w-full md:w-[40vw] flex justify-center md:justify-end items-center min-h-[80vh]">
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
                <circle id="dot1" r="20" fill="#0055FF" />
                <circle id="dot2" r="20" fill="#0055FF" />
                <circle id="dot3" r="20" fill="#0055FF" />
                <circle id="dot4" r="20" fill="#0055FF" />
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
