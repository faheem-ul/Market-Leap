"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
// import readyToTrans from "@/public/images/home/businessgrad.png";
import building from "@/public/images/home/building.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReadytoStart = () => {
  useEffect(() => {
    // Setup ScrollTrigger animation for #hero-heading (Business)
    const isMobile = window.innerWidth <= 768;
    gsap.fromTo(
      "#hero-heading",

      {
        bottom: isMobile ? "-100" : "-500",
      },
      {
        bottom: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: "#hero-heading",
          start: isMobile ? "top 90%" : "top 90%",
          end: isMobile ? "top 20%" : "top 0%",
          scrub: true,
          // markers: true,
        },
      }
    );

    // Animation for the 'Ready to transform your' text
    gsap.fromTo(
      "#sub-heading",
      {
        bottom: -200,
      },
      {
        bottom: 0,
        // opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#sub-heading-ready",
          start: "top 70%",
          end: "top center",
          scrub: true,
          // markers: true
        },
      }
    );

    // Animation for the 'Join thousands of business owners...' text
    gsap.fromTo(
      "#sub-text",
      {
        bottom: -200,
      },
      {
        bottom: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#sub-text",
          start: "top 100%",
          end: "top center",
          scrub: true,
          // markers: true
        },
      }
    );
  }, []);

  return (
    <section className="relative flex min-h-[80vh] building-shadow xl:min-h-[100vh] w-full flex-col items-center justify-center overflow-x-hidden mob:h-full mob:min-h-[48vh] z-10">
      {/* Background Image */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={readyToTrans}
          alt="heroImage"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div> */}

      {/* Second Image Positioned AFTER the First */}
      <div className="absolute bottom-0 left-0 w-full z-[1] flex justify-center">
        <Image
          src={building}
          alt="Building"
          className="w-full max-w-[42vw] object-cover"
        />
      </div>

      {/* Center Text */}
      <div className="mt-[1vw] absolute top-[10px] mob:flex mob:flex-col mob:items-center">
        <span
          className=" mob:bottom-[-763px] duration-500 mob:flex mob:justify-center"
          id="sub-heading-ready"
        >
          <Text className="text-[4.5vw] mob:text-[25px] mob:leading-[45px] font-semibold text-white font-poppins leading-[5vw]">
            Ready To Transform Your
          </Text>
        </span>
        
        <Text className="mob:flex mob:text-[25px] mob:leading-[45px] font-semibold text-white font-poppins hidden text-white px-5 text-center mob:justify-center">
         Business
        </Text>
        <span className="mob:bottom-[-763px] duration-500 mob:hidden mob:flex mob:justify-center">
          {/* <Text className="text-[1.2vw] mob:text-[15vw] mob:leading-[20vw] leading-[2vw] font-normal text-white mob:text-[16px] px-7 mt-[11px] text-center w-full max-w-[50vw] mx-auto">
            Join thousands of business owners who are growing faster and working
            smarter with Market Leap.
          </Text> */}
          <Text className="text-[4.5vw] text-center mob:text-[25px] mob:leading-[45px] font-semibold text-white font-poppins leading-[100px]">
            Business
          </Text>
        </span>

        {/* <span
          className="relative bottom-[-7px] xl:bottom-[-400px] z-[0] mob:bottom-[0px] duration-500 mob:flex mob:justify-center"
          // id="hero-heading"
        > */}
          <Text
            as="h1"
            // className="mx-auto text-center leading-[9vw] mob:text-[15vw] text-[9vw] font-bold text-[#FCFCFC] "
            className="text-[1.2vw] md:leading-[1vw] leading-[7vw] font-normal text-white mob:leading-[7vw] mob:text-[16px] px-7 mt-[12px] text-center w-full max-w-[100vw] mx-auto"
          >
            Join thousands of business owners who are growing faster and working
            smarter with Market Leap.
          </Text>
        {/* </span> */}
      </div>
    </section>
  );
};

export default ReadytoStart;
