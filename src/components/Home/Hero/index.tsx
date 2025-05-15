"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";

import image1 from "@/public/images/home/img1.png"
import image2 from "@/public/images/home/img2.png"
import image3 from "@/public/images/home/img3.png"
import image4 from "@/public/images/home/img4.png"
gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const smootherRef = useRef(null);
  useEffect(() => {
    // Initialize ScrollSmoother
    // const smoother = ScrollSmoother.create({
    //   smooth: 0.7,
    //   effects: true,
    // });
    //    ScrollSmoother.create({
    //   smooth: 0.7,
    //   effects: true,
    // });

    if (videoRef.current && wrapperRef.current) {
      gsap.set(wrapperRef.current, { perspective: 1200 });
      gsap.set(videoRef.current, {
        transformOrigin: "center center",
        force3D: true,
      });

      gsap.fromTo(
        videoRef.current,
        {
          rotateX: 20,
          scale: 1.02,
        },
        {
          rotateX: 0,
          scale: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 90%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0.1,
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 45%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={smootherRef}
      className="w-full h-full mt-[76px] px-5"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text as="h1" className="text-[50px] text-center">
            More than just a point-of-sale.
          </Text>
          <Text as="h2" className="text-[40px] font-normal leading-[50px] mb-[52px] mt-1 mob:mb-[30px] text-center w-full max-w-[754px] mx-auto">
            Everything you need to run and grow your business, all in one place.
          </Text>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden items-center flex justify-center mb-[76px] mob:mb-[60px]"
        ref={wrapperRef}>
        <div
          className="relative w-full flex max-w-[1240px] xl:max-w-[1100px] mx-auto z-10 h-auto"
          ref={videoRef}>
          <div className="absolute inset-0 bg-black opacity-50 z-20 pointer-events-none rounded-[40px]" />

          <Image src={image1} alt="homeImage" width={310} className="border-r-[5px] border-[#FFFFFF]/30 rounded-l-[40px]"/>
          <Image src={image2} alt="homeImage" width={310} className="border-r-[5px] border-[#FFFFFF]/30"/>
          <Image src={image3} alt="homeImage" width={310} className="border-r-[5px] border-[#FFFFFF]/30"/>
          <Image src={image4} alt="homeImage" width={310} className="rounded-r-[40px]"/>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
