"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import readyToTrans from "@/public/images/home/businessgrad.png";
import building from "@/public/images/home/ready-to-transofrm.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReadytoStart = () => {
  useEffect(() => {
    // Setup ScrollTrigger animation for #hero-heading (Business)
    gsap.fromTo(
      "#hero-heading",
      {
        bottom: -400,
      },
      {
        bottom: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: "#hero-heading",
          start: "top 80%",
          end: "top 20%",
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
    <section className="relative flex min-h-[190vh] xl:min-h-[220vh] w-full flex-col items-center justify-center overflow-x-hidden bg-primary mob:h-full mob:min-h-[947px] z-10">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={readyToTrans}
          alt="heroImage"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      {/* Second Image Positioned AFTER the First */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] ">
        <Image
          src={building}
          alt="heroImage"
          layout="fill"
          objectFit="cover"
          className="z-[0]"
        />
      </div>

      {/* Center Text */}
      <div className="mt-[150px] absolute top-[10px] mob:flex mob:flex-col mob:items-center">
      
          <span
            className=" mob:bottom-[-763px] duration-500 mob:flex mob:justify-center"
            id="sub-heading-ready"
          >
            <Text className="text-[82px] mob:text-[25px] mob:leading-[45px] font-semibold text-white font-poppins leading-[100px]">
              Ready To Transform Your
            </Text>
          </span>
          <span
            className="mob:bottom-[-763px] duration-500  mob:flex mob:justify-center"
            id="sub-text"
          >
            <Text className="text-[24px] font-normal text-white mob:text-[16px] px-7 text-center w-full max-w-[691px] mx-auto">
              Join thousands of business owners who are growing faster and
              working smarter with Market Leap.
            </Text>
          </span>
       
        <span
          className="relative bottom-[-772px] xl:bottom-[-400px] z-[0] mob:bottom-[-163px] duration-1000 mob:flex mob:justify-center"
          id="hero-heading">
            
          <Text
            as="h1"
            className="mx-auto text-center leading-[100%] mob:text-[15vw] text-[12vw] font-bold text-[#FCFCFC] ">
            Business
          </Text>
          
        </span>
      </div>
    </section>
  );
};

export default ReadytoStart;
