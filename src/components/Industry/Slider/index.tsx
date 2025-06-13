"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";

import retail from "@/public/images/industry/retail.avif";
import beauty from "@/public/images/industry/beauty.avif";
import health from "@/public/images/industry/health.avif";
import commercial from "@/public/images/industry/commercial.avif";
import services from "@/public/images/industry/services.avif";
import backarrow from "@/public/images/industry/BACK-ARROW.svg";
import nextarrow from "@/public/images/industry/NEXT-ARROW.svg";

import RetailSlide from "./ReusableSlide";
import { Swiper as swiperTypes } from "swiper/types";

export default function IndustrySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<swiperTypes | null>(null);

  const slideLabels = [
    "Retail",
    "Beauty",
    "Health & Wellness",
    "Home & Commercial",
    "Services",
  ];

  const slideContents = [
    <RetailSlide
      key="retail1"
      image={retail}
      title="Retail"
      description=""
      categories={[
        "Clothing",
        "Garden",
        "Grocery",
        "Home & Gift",
        "Wine & Liquor",
        "All Retail",
      ]}
      buttonText=""
      buttonShow="hidden"
    />,
    <RetailSlide
      key="retail2"
      image={beauty}
      title="Beauty"
      description=""
      categories={[
        "Barbershop",
        "Beauty salon",
        "Hair salon",
        "Med spa",
        "Nail salon",
        "Tattoo & piercing",
        "All Beauty",
      ]}
      buttonText=""
      buttonShow="hidden"
    />,
    <RetailSlide
      key="retail3"
      image={health}
      title="Health & Wellness"
      description=""
      categories={["CBD", "Day spa", "Fitness", "Healthcare"]}
      buttonText="All Retail"
      buttonShow="hidden"
    />,
    <RetailSlide
      key="retail4"
      image={commercial}
      title="Home & Commercial"
      description=""
      categories={[
        "Cleaning",
        "Contractors & specialists",
        "Landscaping & outdoors",
        // "All Home & Commercial",
      ]}
      buttonShow="hidden"
      buttonText=""
    />,
    <RetailSlide
      key="retail5"
      image={services}
      title="Services"
      description=""
      categories={[
        "Automotive",
        "Organization & nonprofits ",
        "Pet services",
        "Professional services",
        "Recreation",
        "Transportation",
        "All services",
      ]}
      buttonShow="hidden"
      buttonText=""
    />,
  ];

  return (
    <div className="flex flex-col items-center pb-[117px] pt-10 w-full px-5 bg-[#000000]/5 mob:pb-[28px]">
      {/* Top Bar */}
      <div className="flex px-[28px] justify-between items-center mob:px-0 w-full max-w-[813px] rounded-[25px] mob:mb-0 mb-[22px] bg-secondary mob:bg-transparent mob:shadow-none h-[78px] bar-shadow">
        {slideLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`capitalize transition-all duration-700 font-space_grotesk ${
              activeIndex === index
                ? "text-white bg-black font-bold px-[15px] py-[10px] rounded-[15px]"
                : "text-[#FFFFFF] mob:hidden"
            }`}>
            {label}
          </button>
        ))}
        <div className="mob:flex gap-5 hidden">
        <div
          className="w-full flex max-w-[90px] gap-3 items-center">
          <div
            className="custom-prev-popular border border-black rounded-full h-[40px] w-[40px] flex justify-center items-center cursor-pointer"
            //   onClick={handleprevbtn}
          >
            <Image src={backarrow} alt="moveprevbtn1" />
          </div>
          <div
            className="custom-next-popular border border-black rounded-full h-[40px] w-[40px] flex justify-center items-center cursor-pointer"
            //   onClick={handleNextvbtn}
          >
            <Image src={nextarrow} alt="movenextbtn1" />
          </div>
        </div>
      </div>
      </div>

      
      {/* slider butttons */}
      <div className="flex gap-2 w-full max-w-[1313px] mob:hidden">
        <div className="w-full mt-8 flex max-w-[90px] ml-auto pb-5 gap-3 items-center">
          <div
            className="custom-prev-popular border border-black rounded-full h-[40px] w-[40px] flex justify-center items-center cursor-pointer"
            //   onClick={handleprevbtn}
          >
            <Image src={backarrow} alt="moveprevbtn1" />
          </div>
          <div
            className="custom-next-popular border border-black rounded-full h-[40px] w-[40px] flex justify-center items-center cursor-pointer"
            //   onClick={handleNextvbtn}
          >
            <Image src={nextarrow} alt="movenextbtn1" />
          </div>
        </div>
      </div>

     
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        // slidesPerView={2}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: ".custom-next-popular",
          prevEl: ".custom-prev-popular",
        }}
        // centeredSlides={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Keyboard, Navigation, Scrollbar]}
        className="w-full max-w-[1313px] h-[522px] mob:h-[699px] rounded-md p-6">
          
        {slideContents.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center mob:h-auto mob:mt-[30px]">
              {content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* slider butttons */}
   
    </div>
  );
}
