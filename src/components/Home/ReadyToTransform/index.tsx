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
    // Animation setup when the component mounts
    gsap.fromTo(
      '.business-text', // Targeting the business text
      {
        opacity: 0,
        scale: 0.5, // Start small
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.business-text', // Trigger the animation when this element comes into view
          start: 'top 80%', // Start the animation when the top of the element is 80% from the top of the viewport
          end: 'bottom 20%', // End the animation when the bottom is 20% from the top of the viewport
          scrub: 1, // Sync the animation with the scroll
          markers: false, // Optional, you can remove this if you don't need markers for testing
        },
      }
    );

    gsap.fromTo(
      '.foreground-text', // Targeting the foreground text
      {
        opacity: 0,
        scale: 0.75, // Start smaller
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.foreground-text', // Trigger the animation for foreground text
          start: 'top 80%', // Start the animation when the top of the foreground text comes into the viewport
          end: 'bottom 20%', // End when the bottom of the foreground text reaches the 20% position
          scrub: 1, // Sync the animation with the scroll
          markers: false, // Optional, can be removed if not needed
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-[#004389] overflow-hidden">
      {/* The "Business" text behind the image */}
      <div
        className="absolute inset-0 flex justify-center top-[23%] left-[50px] z-10 pointer-events-none business-text"
      >
        <Text as="h1" className="text-[200px] text-white">
          Business
        </Text>
      </div>

      {/* Image on top of "Business" text */}
      <Image
        src={readyToTrans}
        alt="Building"
        className="relative z-0 w-full h-auto"
      />

      {/* Foreground content */}
      <div
        className="absolute inset-0 flex flex-col justify-start items-center z-20 mx-auto text-center px-4 pt-[168px] foreground-text"
      >
        <Text as="h1" className="text-[82px] font-semibold mb-2 text-white">
          Ready To Transform Your
        </Text>
        <Text className="text-[24px] mb-8 text-white">
          Join thousands of business owners who are growing faster <br /> and working smarter with Market Leap.
        </Text>
      </div>
    </div>
  );
};

export default ReadytoStart;
