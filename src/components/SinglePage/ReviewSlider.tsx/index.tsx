"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bg from "@/public/images/Nail-saloon/reviewbg.png";
import { industries } from "@/lib/constants/industries";
import Text from "@/components/ui/Text";

const ReviewSlider = ({ industryId }: { industryId: string }) => {
  const industry = industries.find((ind) => ind.id === industryId);
  const reviews = industry?.ReviewSliderContent ?? [];

  return (
    <div className="relative flex justify-start items-center pt-[84px] pb-[42px] mb-[76px] bg-cover bg-no-repeat">
      <Image
        src={bg}
        alt="background"
        className="absolute left-0 w-full h-full object-cover -z-10 "
      />

      <div className="w-full max-w-[1313px] mx-auto">
        <Swiper
          slidesPerView={1}
          loop={true}
        //   autoplay={{ delay: 4000 }}
        //   pagination={{ clickable: true }}
        //   navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full mx-auto "
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex mob:flex-col flex-row items-center justify-center gap-9 px-5 mx-auto">
                {/* Left image */}
                <div className="w-full max-w-1/2 flex justify-center md:justify-end">
                  <Image
                    src={review.image}
                    alt={`Reviewer ${index + 1}`}
                    className="rounded-md w-full max-w-[505px] h-auto object-cover shadow-md"
                  />
                </div>

                {/* Right content */}
                <div className="w-full max-w-[782px]">
                  <Text className="text-[20px] font-poppins mb-10 font-light">
                    {review.review}
                  </Text>
                  <div className="flex items-center gap-[23px]">
                    <div className="w-[94px] h-[94px] bg-[#EDEBE4] rounded-[8px] flex justify-center items-center">
                    <Image
                      src={review.signature}
                      alt="signature"
                      width={74}
                      height={74}
                      className=""
                    />
                    </div>
                    <div className="w-full max-w-[130px]">
                      <Text className="font-medium text-[20px] font-poppins mb-2">{review.name}</Text>
                      <Text className="text-[18px] font-light ">{review.addresss}</Text>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
