"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { industries } from "@/lib/constants/industries";
import Text from "@/components/ui/Text";

const GetInspiredSlider = ({ industryId }: { industryId: string }) => {
  const industry = industries.find((ind) => ind.id === industryId);
  const getinspired = industry?.getinspiredSection ?? [];

  return (
    <div className="relative flex flex-col justify-start items-center mob:mb-10 mb-[76px] bg-cover bg-no-repeat">
    <Text as="h1" className="font-semibold my-[65px] text-[60px]">
    Get Inspired
    </Text>

      <div className="w-full max-w-full mx-auto">
        <Swiper
        //   slidesPerView={4}
          loop={true}
        //   autoplay={{ delay: 4000 }}
        //   pagination={{ clickable: true }}
        //   navigation={true}
        breakpoints={{
           
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            
            1280: {
              slidesPerView: 4,
              spaceBetween: 150,
            },
          }}
        centeredSlides={true}
        spaceBetween={150}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full mx-auto "
        >
          {getinspired.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="w-[395px] mob:w-full mob:px-5 mx-auto">
                {/* Left image */}
                <div className=" mob:w-full mob:mx-auto">
                  <Image
                    src={post.image.inspired1
                    }
                    alt={`post ${index + 1}`}
                    width={365}
                    height={372}
                    className="rounded-md w-full max-w-[365px] mob:max-w-full h-auto object-cover"
                  />
                   <div className="">
                  <Text className="text-[18px] font-semibold mt-[38px] text-center text-black">
                    {post.description}
                  </Text>
                
                </div>
                </div>

                {/* Right content */}
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GetInspiredSlider;
