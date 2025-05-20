"use client";
import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ReusableCard from "./ReusableCard";

import square1 from "@/public/images/Nail-saloon/square1.png";
import square2 from "@/public/images/Nail-saloon/square2.png";
import sqaure3 from "@/public/images/Nail-saloon/square3.png";

gsap.registerPlugin(ScrollTrigger);

const CardsStackSection = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

  useEffect(() => {
    // Animation for the first card
    gsap.to(cardRef1.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: cardRef1.current,
        start: "top top-=400px",
        end: "bottom top",
        // markers: true,
        scrub: true,
      },
    });

    // Animation for the second card
    gsap.to(cardRef2.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: cardRef2.current,
        start: "top top-=400px",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation for the third card
    gsap.to(cardRef3.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef3.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="relative bg-[#F2F2F2] mob:hidden" id="what-we-do">
        <div
          ref={cardRef1}
          className="bg-[#F2F2F2] w-full min-h-screen flex items-center mob:overflow-hidden justify-center  sticky top-[0px] text-accent ">
          <div className=" tab:h-[70%] mob:h-auto w-full mob:pb-[25px] rounded-[24px]">
            <ReusableCard
              heading="Square Terminal"
              image={square1}
              Description="Square Register is the first fully integrated point-of-sale system that lets 
you start selling right out of the box. This POS system is built to be faster, 
more powerful, and more reliable—no extra tablets or apps required."
            />
          </div>
        </div>

        <div
          ref={cardRef2}
          className="w-full bg-[#F2F2F2] min-h-screen flex items-center mob:overflow-hidden justify-center  sticky top-[0%]   mob:pt-[106px] ">
          <div className="h-full tab:h-[70%] mob:h-auto w-full mob:pb-[25px] rounded-t-[24px] rounded-b-[20px]">
            <ReusableCard
              heading="Square Terminal"
              image={square2}
              Description="Square Register is the first fully integrated point-of-sale system that lets 
you start selling right out of the box. This POS system is built to be faster, 
more powerful, and more reliable—no extra tablets or apps required."
            />
          </div>
        </div>

        <div
          ref={cardRef3}
          className="w-full bg-[#F2F2F2]  min-h-screen flex items-center mob:overflow-hidden justify-center sticky top-[0%] tab:pt-[228px] mob:pt-[182px] ">
          <div className="h-full tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[25px] w-full rounded-t-[24px] rounded-b-[18px]">
            <ReusableCard
              heading="Square Terminal"
              image={sqaure3}
              Description="Square Register is the first fully integrated point-of-sale system that lets 
you start selling right out of the box. This POS system is built to be faster, 
more powerful, and more reliable—no extra tablets or apps required."
            />
          </div>
        </div>
      </div>

      {/* mob  */}
      <div className=" mob:px-[20px] relative mob:block hidden">
        <div className="  w-full flex items-center mob:overflow-hidden justify-center  top-[0px] text-accent ">
          <div className="  mob:h-auto w-full mob:pb-[25px] rounded-[24px]">
            <ReusableCard
              heading="Square Terminal"
              image={square1}
              Description="Square Register is the first fully integrated point-of-sale system that lets 
you start selling right out of the box. This POS system is built to be faster, 
more powerful, and more reliable—no extra tablets or apps required."
            />
          </div>
        </div>

        <div className="w-full   flex items-center mob:overflow-hidden justify-center    mob:pt-[0px] ">
          <div className="h-full  mob:h-auto w-full mob:pb-[0px] rounded-t-[24px] rounded-b-[20px]">
            <ReusableCard
              heading="Square Terminal"
              image={square1}
              Description="Square Register is the first fully integrated point-of-sale system that lets 
you start selling right out of the box. This POS system is built to be faster, 
more powerful, and more reliable—no extra tablets or apps required."
            />
          </div>
        </div>

        <div className="w-full   flex items-center mob:overflow-hidden justify-center tab:pt-[228px] mob:pt-[0px] ">
          <div className="h-full tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[0px] w-full rounded-t-[24px] rounded-b-[18px]">
            <ReusableCard
              heading="Square Terminal"
              image={square1}
              Description="Square Register is the first fully integrated point-of-sale system that lets 
you start selling right out of the box. This POS system is built to be faster, 
more powerful, and more reliable—no extra tablets or apps required."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsStackSection;
