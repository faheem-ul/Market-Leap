import React, { useState, useRef } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import grow1 from "@/public/images/home/grow.png";
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const GrowWithoutMobSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);

  const labels = ["Marketing", "Reviews", "Local Market", "Never Lose Lead"];

  const handleClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index - 1); // Sync the swiper slide change with label click
  };

  const slideContents = [
    {
      title: "Empower Your Business with AI",
      description:
        "Use our built-in AI services to power your marketing, branding, customer engagement, pricing optimization, inventory management, and more.",
      buttonText: "Get Started",
    },
    {
      title: "Automate Customer Engagement",
      description:
        "Let AI handle routine interactions, FAQs, and proactive communication, freeing you to focus on growth.",
      buttonText: "Learn More",
    },
    {
      title: "Optimize with Insights",
      description:
        "Gain real-time analytics and data-driven suggestions to improve operations, sales, and retention.",
      buttonText: "Start Optimizing",
    },
    {
      title: "Never Miss a Lead",
      description:
        "Capture every opportunity with intelligent lead tracking and automated follow-ups.",
      buttonText: "Track Leads",
    },
  ];

  return (
    <div className="mob:flex hidden justify-center items-center w-full mob:px-5">
      <div className="w-full max-w-[1313px] flex flex-col items-center relative">
        {/* Top Bar */}
        <div className="flex flex-wrap justify-center gap-4 items-center w-full max-w-[1017px] rounded-[25px] mb-[22px] min-h-[78px] ">
          {labels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`capitalize transition-all duration-150 font-space_grotesk ${
                activeIndex === index + 1
                  ? "text-secondary underline text-[20px] font-bold font-poppins"
                  : "text-[#000000]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".custom-next-popular",
            prevEl: ".custom-prev-popular",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)} // Sync active index with swiper
          modules={[Navigation]}
          className="w-full max-w-[1313px] h-[601px] rounded-md p-6"
        >
          {slideContents.map((content, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-full flex flex-col items-center justify-center gap-4">
                  <Image
                    src={grow1}
                    alt="grow"
                    width={0}
                    height={0}
                    className="mx-auto"
                    priority
                  />
                  <Text
                    as="h2"
                    className="text-center mob:font-semibold mob:text-[26px] mob:leading-[30px] mob:my-3"
                  >
                    {content.title}
                  </Text>
                  <Text className="mb-4 mob:mb-6 mob:text-center text-base mob:text-lg">
                    {content.description}
                  </Text>
                  <Button className="bg-primary w-36 mob:w-40 mx-auto h-12 mob:h-14 font-bold rounded-[15px] text-white text-base mob:text-lg">
                    {content.buttonText}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Buttons */}
        <div className="flex gap-2 w-full max-w-[1313px]">
          <div className="w-full mt-8 flex max-w-[90px] ml-auto pb-5 gap-3 items-center">
            <div className="custom-prev-popular border border-black rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer">
              <Image width={20} height={20} src="/images/industry/BACK-ARROW.svg" alt="prev" />
            </div>
            <div className="custom-next-popular border border-black rounded-full h-[30px] w-[30px] flex justify-center items-center cursor-pointer">
              <Image width={20} height={20} src="/images/industry/NEXT-ARROW.svg" alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowWithoutMobSlider;
