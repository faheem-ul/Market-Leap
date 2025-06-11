"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import image1 from "@/public/images/home/img1.png";
import image2 from "@/public/images/home/img2.png";
import image3 from "@/public/images/home/img3.png";
import image4 from "@/public/images/home/img4.png";
import mobimage from "@/public/images/home/mob-hero-image.png";

gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
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
            start: "top 15%",
            end: "top 20%",
            scrub: 1,
            // markers:true
          },
        }
      );
    }

    if (subTextRef.current) {
      const isMobile = window.innerWidth <= 768;

      gsap.fromTo(
        subTextRef.current,
        {
          y: 0,
          color: "#000000",
        },
        {
          y: isMobile ? 220 : 400, // Less movement on mobile
          color: "#FFFFFF",
          ease: "none",
          scrollTrigger: {
            trigger: subTextRef.current,
            start: "top 20%",
            end: "top 6%",
            scrub: 1,
            // markers: true,
          },
        }
      );
    }

    // Animate button only after subText is fully visible and centered
    // Animate button only after subText is fully visible and centered
    if (buttonRef.current && subTextRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subTextRef.current,
            start: "top 6%",
            end: "top 6%",
            scrub: true,
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
      className="w-full h-full mt-[76px] px-5"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-easing="ease-in-out">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1236px]">
          <Text
            as="h1"
            className="text-[50px] mob:text-[35px] mob:mb-4 text-center mob:leading-[39px]"
            ref={textRef}>
            More than just a point-of-sale.
          </Text>
          <Text
            ref={subTextRef}
            as="h2"
            className="text-[40px] mob:text-[25px] mob:px-[14px] mob:leading-[35px] font-normal relative z-10 leading-[70px] mb-[52px] mt-1 mob:mb-[30px] text-center w-full max-w-[754px] mx-auto">
            Everything you need to run and grow your business, all in one place.
          </Text>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden items-center flex justify-center mb-[76px] mob:mb-[60px]"
        ref={wrapperRef}>
        <div
          className="relative w-full flex max-w-[1240px] xl:max-w-[1100px] mx-auto z-0 h-auto"
          ref={videoRef}>
          {/* Overlay */}
          <div className="absolute inset-0 mob:hidden bg-black opacity-50 z-0 pointer-events-none rounded-[40px]" />

          {/* Images */}
          <Image
            src={image1}
            alt="homeImage"
            width={310}
            className="border-r-[5px] border-[#FFFFFF]/30 rounded-l-[40px] mob:hidden"
          />
          <Image
            src={image2}
            alt="homeImage"
            width={310}
            className="border-r-[5px] border-[#FFFFFF]/30 mob:hidden"
          />
          <Image
            src={image3}
            alt="homeImage"
            width={310}
            className="border-r-[5px] border-[#FFFFFF]/30 mob:hidden"
          />
          <Image
            src={image4}
            alt="homeImage"
            width={310}
            className="rounded-r-[40px] mob:hidden"
          />

          <Image src={mobimage} alt="image" className="hidden mob:block" />
          {/* Animated Button - initially hidden, appears after text animation */}

          <div
            ref={buttonRef}
            className="absolute top-[55%] left-1/2 transform -translate-x-1/2 opacity-0 z-10 duration-500">
            <Link href="/pricing">
              <Button className="w-[166px] h-[58px] rounded-[15px] font-bold bg-secondary text-white text-[18px] font-space_grotesk">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
