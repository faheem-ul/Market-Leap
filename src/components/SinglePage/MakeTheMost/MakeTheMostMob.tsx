"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Text from "@/components/ui/Text";
import { industries } from "@/lib/constants/industries";

const MaketheMostSlider = ({ industryId }: { industryId: string }) => {
  const industry = industries.find((industry) => industry.id === industryId);
  const makeTheMost = industry?.makeTheMostSection ?? [];

  return (
    <div className="parent-div mt-10 hidden mob:block">
      <div className="swiper-main-div">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar]}
          className="mySwiper"
        >
          {makeTheMost.map((section, index) => {
            const imageKey = Object.keys(section).find((key) => key.includes("Image"));
            const headingKey = Object.keys(section).find((key) => key.includes("heading"));
            const contentKey = Object.keys(section).find((key) => key.includes("Content"));

            if (!imageKey || !headingKey || !contentKey) return null;

            const image = section[imageKey as keyof typeof section] as { src: string };
            const heading = section[headingKey as keyof typeof section] as string;
            const content = section[contentKey as keyof typeof section] as {
              icon: StaticImageData;
              content: string;
            }[];

            return (
              <SwiperSlide key={index}>
                <div className="px-5 outer-div mt-[200px]">
                    <Text className="text-[35px] font-semibold text-center mb-7 font-poppins">
                    Make The Most Of <span className="text-secondary"> Every Hour</span>
                        
                    </Text>
                  <Image
                    src={image.src}
                    width={424}
                    height={389}
                    alt="calendar"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <div className="w-full">
                    <Text
                      as="h1"
                      className="mob:text-[26px] font-semibold leading-[37px] mt-10"
                    >
                      {heading}
                    </Text>
                    <ul className="font-light text-[16px] mt-[15px] mb-[39px] space-y-2">
                      {content.map((item, i) => (
                        <div key={i}
                        className="flex items-center gap-2"
                        >
                            <Image src={item.icon} alt="icon" width={20} height={20} className="" />
                            {item.content}</div>
                      ))}
                    </ul>
                   
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center items-center pb-10">
          <div
            className="bg-secondary p-3 flex justify-center items-center rounded-full w-[40px] h-[40px] custom-prev"
          >
            <FaArrowLeft size={20} />
          </div>
          <div
            className="bg-secondary p-3 flex justify-center items-center rounded-full w-[40px] h-[40px] custom-next"
          >
            <FaArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaketheMostSlider;
