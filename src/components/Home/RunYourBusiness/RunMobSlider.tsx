import Image from "next/image"; 
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Text from "@/components/ui/Text";

// import movenextbtn from "@/public/images/home/right-arrow-slider.svg";
// import moveprevbtn from "@/public/images/home/left-arrow-slider.svg";
import arrow from "@/public/images/home/right-arrow.svg";
import calenderImage from "@/public/images/Nail-saloon/calender.png";
// import { useState } from "react";

const RunMobSlider = () => {
  // const [activeIndex, setActiveIndex] = useState(2);

  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div className="parent-div mt-10 hidden mob:block">
      <div className="swiper-main-div">
       

        <Swiper
          // onSlideChange={handleSlideChange}
          slidesPerView={1}
          // activeIndex={activeIndex}
          initialSlide={1}
          spaceBetween={70}
        //   centeredSlides={true}
          // slidesPerGroupSkip={3}
          // scrollbar={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",

            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar]}
          className="mySwiper mob:block hidden">
          <SwiperSlide>
            <div className="px-5 outer-div">
              <Image
                src={calenderImage}
                // width={424}
                alt="calendar"
                className=""
              />
              <div className="w-full">
                <Text
                  as="h1"
                  className="mob:text-[30px] font-semibold leading-[37px] mt-10">
                  Branding and Experience
                </Text>
                <Text className="font-light text-[18px] mt-[15px] mb-[39px]">
                  Use our flagship point of sale and business growth software.
                  Create and own your brand from the start - and let our
                  software do the heavy lifting to help you stand out.
                </Text>
                <button>
                  <div className="flex gap-3 justify-center items-center">
                    <Text className="text-[18px] font-normal">Get Started</Text>
                    <Image src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="px-5 outer-div">
              <Image
                src={calenderImage}
                // width={424}
                alt="calendar"
                className=""
              />
              <div className="w-full">
                <Text
                  as="h1"
                  className="mob:text-[30px] font-semibold leading-[37px] mt-10">
                  Branding and Experience
                </Text>
                <Text className="font-light text-[18px] mt-[15px] mb-[39px]">
                  Use our flagship point of sale and business growth software.
                  Create and own your brand from the start - and let our
                  software do the heavy lifting to help you stand out.
                </Text>
                <button>
                  <div className="flex gap-3 justify-center items-center">
                    <Text className="text-[18px] font-normal">Get Started</Text>
                    <Image src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="px-5 outer-div">
              <Image
                src={calenderImage}
                // width={424}
                alt="calendar"
                className=""
              />
              <div className="w-full">
                <Text
                  as="h1"
                  className="mob:text-[30px] font-semibold leading-[37px] mt-10">
                  Branding and Experience
                </Text>
                <Text className="font-light text-[18px] mt-[15px] mb-[39px]">
                  Use our flagship point of sale and business growth software.
                  Create and own your brand from the start - and let our
                  software do the heavy lifting to help you stand out.
                </Text>
                <button>
                  <div className="flex gap-3 justify-center items-center">
                    <Text className="text-[18px] font-normal">Get Started</Text>
                    <Image src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex gap-3 justify-center items-center mt-10 pb-10">
        <div className="bg-secondary p-3 flex justify-center items-center rounded-full w-[40px] h-[40px] custom-prev"
        onClick={handleprevbtn}>
        <FaArrowLeft size={30} />
        </div>
        <div className="bg-secondary p-3 flex justify-center items-center rounded-full w-[40px] h-[40px] custom-next" onClick={handleNextvbtn}>
        <FaArrowRight size={30} />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default RunMobSlider;
