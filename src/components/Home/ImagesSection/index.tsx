"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Text from "@/components/ui/Text";
import image1 from "@/public/images/home/text-bg.png";
import image2 from "@/public/images/home/1-2.png";
import image3 from "@/public/images/home/2-1.png";
import image4 from "@/public/images/home/2-2.png";
import image5 from "@/public/images/home/3-1.png";
import image6 from "@/public/images/home/3-2.png";

gsap.registerPlugin(ScrollTrigger);

const GridLayout = () => {
  useEffect(() => {
    // Apply scaling effect to the left image (make it grow as you scroll up)
    gsap.fromTo(
      ".left-image", // Target the element with the class 'left-image'
      { scale: 1, }, // Start with normal size
      {
        scale: 1.2, // Scale up by 20%
        duration: 1.5,
        scrollTrigger: {
          trigger: ".left-image", 
          start: "top bottom", 
          end: "top center", 
          scrub: 1,
          // markers: true,
        },
      }
    );

    // Apply scaling effect to the "Overarching Value Prop." text block
    gsap.fromTo(
      ".value-prop", // Target the element with class 'value-prop'
      { scale: 1, }, // Start with normal size
      {
        scale: 1.2, // Scale up by 20%
        duration: 1.5,
        scrollTrigger: {
          trigger: ".value-prop",
          start: "top bottom", 
          end: "top 50%", 
          scrub: 1,
          // markers: true,
        },
      }
    );

    // Apply scaling effect to the "35% Increase" text
    gsap.fromTo(
      ".increase-text", // Target the "35% Increase" element
      { scale: 1, }, // Start with normal size
      {
        scale: 1.2, // Scale up by 20%
        duration: 1.5,
        scrollTrigger: {
          trigger: ".increase-text",
          start: "top bottom", 
          end: "top 70%", 
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <>

    {/* DEKSTOP VIEW */}
    <div className="overflow-hidden mob:hidden">
      <div
        className="grid mob:grid-cols-1 grid-cols-3 gap-x-3 gap-y-3 max-w-[1313px] mx-auto px-5 mb-[83px]"
      >
        {/* Blue box top-left */}
        <div className="text-white relative font-semibold mob:row-auto mob:col-auto row-start-1 col-start-1">
          <Image
            src={image1}
            alt="Workspace"
            layout="responsive"
            width={400}
            height={250}
            className="object-cover"
          />
          <Text
            as="h1"
            className="absolute bottom-0 left-0 w-full bg-black text-white bg-opacity-50 px-[33px] py-[27px] text-[30px] font-medium"
          >
            <span className="text-[36px] font-semibold">3x</span> <br />
            More Leads
          </Text>
        </div>

        {/* Left big image */}
        <div
          className=" rounded-lg overflow-hidden mob:row-auto mob:col-auto row-span-2 col-start-1 row-start-2 h-full"
        >
          <Image
            src={image2}
            alt="Workspace"
            layout="responsive"
            width={400}
            height={400}
            className="object-cover h-full w-full left-image"
          />
        </div>

        {/* Center image and text block */}
        <div className="flex flex-col space-y-3 col-start-2 row-start-1 row-span-3">
          <div className="relative rounded-lg overflow-hidden mob:h-[300px] min-h-[410px]">
            <Image src={image3} alt="Woman on Laptop" className="object-cover value-prop" />
          </div>
          <div className="border-[5px] border-black rounded-[20px] w-full relative font-medium overflow-hidden h-full">
            <Text className="text-[28px] font-semibold text-primary mt-[34px] px-[28px] mb-[21px] font-poppins">
              Overarching Value Prop.
            </Text>
            <Text className="font-light leading-custom-6 text-[15px] px-[30px] text-center z-[100]">
              Your business needs to do more than just take payments. Our platform
              is designed to help you operate at the highest level across
              marketing, customer engagement, and business operations.
            </Text>
            <Image
              src={image4}
              alt="Office Growth"
              layout="responsive"
              width={414}
              height={122}
              className="absolute bottom-[-20px] left-0 w-full h-[200px]"
            />
          </div>
        </div>

        {/* Top right image */}
        <div className="rounded-lg overflow-hidden mob:row-auto mob:col-auto row-start-1 col-start-3">
          <Image
            src={image5}
            alt="Office Growth"
            layout="responsive"
            width={400}
            height={400}
            className="object-cover h-full w-full value-prop"
          />
        </div>

        {/* Middle right image */}
        <div className="rounded-lg overflow-hidden mob:row-auto mob:col-auto row-start-2 col-start-3 h-full">
          <Image
            src={image6}
            alt="Laptop hands"
            layout="responsive"
            width={400}
            height={400}
            className="object-cover h-full w-full increase-text"
          />
        </div>

        {/* Blue box bottom-right */}
        <div className="overflow-hidden">
          <div className="relative font-semibold mob:row-auto mob:col-auto overflow-hidden row-start-3 col-start-3 h-full">
            <Image
              src={image1}
              alt="Workspace"
              layout="responsive"
              width={400}
              height={250}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 px-[25px] pb-[24px]">
              <Text
                as="h1"
                className="w-full bg-black text-white bg-opacity-50 leading-[110px] text-[30px] font-semibold"
              >
                35% Increase
              </Text>
              <Text className="font-poppins text-white text-[28px] mt-[-8px]">
                In Customer Engagement
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* MOBILE VIEW */}
<div className="mb-[70px] mob:block hidden">
<div
  className="flex flex-col px-5 gap-5"
>
  {/* Blue box top-left */}
  <div className="text-white relative font-semibold mob:row-auto mob:col-auto row-start-1 col-start-1">
    <Image
      src={image1}
      alt="Workspace"
      layout="responsive"
      width={400}
      height={250}
      className="object-cover"
    />
    <Text
      as="h1"
      className="absolute bottom-0 left-0 w-full bg-black text-white bg-opacity-50 px-[33px] py-[27px] text-[30px] font-medium"
    >
      <span className="text-[36px] font-semibold">3x</span> <br />
      More Leads
    </Text>
  </div>

  {/* Left big image */}
  <div
    className=" rounded-lg overflow-hidden mob:row-auto mob:col-auto row-span-2 col-start-1 row-start-2 h-full"
  >
    <Image
      src={image2}
      alt="Workspace"
      layout="responsive"
      width={400}
      height={400}
      className="object-cover h-full w-full"
    />
  </div>

  {/* Center image and text block */}
  <div className="flex flex-col gap-5">
    <div className="relative">
      <Image src={image3} alt="Woman on Laptop" className="object-cover" />
    </div>
    <div className="border-[5px] border-black rounded-[20px] w-full relative font-medium overflow-hidden h-full">
      <Text className="text-[28px] font-semibold text-primary mt-[34px] px-[28px] mb-[21px] font-poppins">
        Overarching Value Prop.
      </Text>
      <Text className="font-light leading-custom-6 text-[15px] px-[30px] text-center z-[100]">
        Your business needs to do more than just take payments. Our platform
        is designed to help you operate at the highest level across
        marketing, customer engagement, and business operations.
      </Text>
      <Image
        src={image4}
        alt="Office Growth"
        layout="responsive"
        width={414}
        height={122}
        className="absolute bottom-[-20px] left-0 w-full h-[200px]"
      />
    </div>
  </div>

  {/* Top right image */}
  <div className="rounded-lg overflow-hidden mob:row-auto mob:col-auto row-start-1 col-start-3">
    <Image
      src={image5}
      alt="Office Growth"
      layout="responsive"
      width={400}
      height={400}
      className="object-cover h-full w-full"
    />
  </div>

  {/* Middle right image */}
  <div className="rounded-lg overflow-hidden mob:row-auto mob:col-auto row-start-2 col-start-3 h-full">
    <Image
      src={image6}
      alt="Laptop hands"
      layout="responsive"
      width={400}
      height={400}
      className="object-cover h-full w-full"
    />
  </div>

  {/* Blue box bottom-right */}
  <div className="overflow-hidden">
    <div className="relative font-semibold mob:row-auto mob:col-auto overflow-hidden row-start-3 col-start-3 h-full">
      <Image
        src={image1}
        alt="Workspace"
        layout="responsive"
        width={400}
        height={250}
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 px-[25px] pb-[24px]">
        <Text
          as="h1"
          className="w-full bg-black text-white bg-opacity-50 leading-[110px] text-[30px] font-semibold"
        >
          35% Increase
        </Text>
        <Text className="font-poppins text-white text-[28px] mt-[-8px]">
          In Customer Engagement
        </Text>
      </div>
    </div>
  </div>
</div>
</div>
</>
  );
};

export default GridLayout;
