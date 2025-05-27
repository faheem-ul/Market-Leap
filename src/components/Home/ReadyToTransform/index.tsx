"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import Text from '@/components/ui/Text';
import readyToTrans from '@/public/images/home/ready-bg-transoform.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReadytoStart = () => {

  useEffect(() => {
    // Setup ScrollTrigger animation for #hero-heading (Business)
    gsap.fromTo(
      "#hero-heading", 
      {
        bottom: -200, 
      }, 
      {
        bottom: 0,  
        duration: 1,
        scrollTrigger: {
          trigger: "#hero-heading", 
          start: "top 100%", 
          end: "top center", 
          scrub: true, 
          // markers:true
        }
      }
    );

    // Animation for the 'Ready to transform your' text
    // gsap.fromTo(
    //   "#sub-heading", 
    //   {
    //     bottom: -200, 
    //   },
    //   {
    //     bottom: 0,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: "#sub-heading",
    //       start: "top 100%", 
    //       end: "top center", 
    //       scrub: true,
    //       markers: true
    //     }
    //   }
    // );

    // Animation for the 'Join thousands of business owners...' text
    // gsap.fromTo(
    //   "#sub-text", 
    //   {
    //     bottom: -200, 
    //   },
    //   {
    //     bottom: 0,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: "#sub-text",
    //       start: "top 100%", 
    //       end: "top center", 
    //       scrub: true,
    //       markers: true
    //     }
    //   }
    // );
  }, []);

  return (
    <section className="relative flex h-[1555px] w-full flex-col items-center justify-center overflow-x-hidden bg-primary mob:h-full mob:min-h-[947px]"
    >
      {/* Background Image */}
      <Image
        src={readyToTrans}
        alt="heroImage"
        fill
        className="absolute top-0 h-full w-full"
      />

      {/* Center Text */}
      <div className="z-10 mob:mt-[150px]  mob:flex mob:flex-col mob:items-center">
        <span className="block overflow-hidden">
          <span
            className="relative bottom-[-472px] mob:bottom-[-163px] duration-500 mob:flex mob:justify-center"
            id="hero-heading"
          >
            <Text as='h1' className="mx-auto text-center leading-[100%] text-[12vw] font-bold text-[#FCFCFC] ">
              Business
            </Text>
          </span>
        </span>
      
        {/* <span className="block overflow-hidden">
          <span
            className="relative bottom-[-572px] mob:bottom-[-163px] duration-500 mob:flex mob:justify-center"
            id="sub-heading"
          >
            <Text className='text-[82px] font-semibold text-white font-poppins leading-[100px]'>
              Ready To Transform Your
            </Text>
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            className="relative bottom-[-572px] mob:bottom-[-163px] duration-500 mob:flex mob:justify-center"
            id="sub-text"
          >
            <Text className='text-[24px] font-normal text-white w-full max-w-[691px] mx-auto'>
              Join thousands of business owners who are growing faster and working smarter with Market Leap.
            </Text>
          </span>
        </span> */}
      </div>
    </section>
  );
};

export default ReadytoStart;
