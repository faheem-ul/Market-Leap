"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";
import ResuableComponent from "./ReusableComponent";

import calenderImage from "@/public/images/Nail-saloon/calender.png";
import pen from "@/public/images/Nail-saloon/pen.svg";
import manage from "@/public/images/Nail-saloon/manage.svg";
import people from "@/public/images/Nail-saloon/people.svg";



gsap.registerPlugin(ScrollTrigger);
const MakeTheMost = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);

  useEffect(() => {
    // Animation for the first card
    gsap.to(cardRef1.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: cardRef1.current,
        start: "top top-=650px",
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
        start: "top top-=650px",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation for the third card
    gsap.to(cardRef3.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: cardRef3.current,
        start: "top top-=650px",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animation for the 4th card
    gsap.to(cardRef4.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef4.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="w-full h-full">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text
            as="h1"
            className="text-[60px] w-full max-w-[470px] my-[70px] text-center mx-auto">
            Make The Most Of <span className="text-secondary"> Every Hour</span>
          </Text>
        </div>
      </div>

      <div className="relative mob:hidden" id="what-we-do">
        <div
          ref={cardRef1}
          className="w-full min-h-screen flex items-center mob:overflow-hidden justify-center sticky top-[0px] text-accent ">
          <div className=" tab:h-[70%] mob:h-auto w-full mob:pb-[25px] rounded-[24px]">
            <ResuableComponent
              heading="Smooth Calendar Management"
              image={calenderImage}
              icons={[pen, manage, people]}
              background="bg-[#EDF6FE]"
              iconsDescription={[
                "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                "Add unlimited tech calendars and sync them across multiple locations.",
              ]}
            />
          </div>
        </div>

        <div
          ref={cardRef2}
          className="w-full min-h-screen flex items-center mob:overflow-hidden justify-center  sticky top-[0%]   mob:pt-[106px] ">
          <div className="h-full tab:h-[70%] mob:h-auto w-full mob:pb-[25px] rounded-t-[24px] rounded-b-[20px]">
            <ResuableComponent
              heading="Take payments At The Booth"
              image={calenderImage}
              icons={[pen, manage, people]}
              // background="bg-[#EDF6FE]"
              imageShow="hidden"
              iconsDescription={[
                "Take payments using just your phone no hardware needed.",
                "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay. ",
                "Access your funds instantly with Square Checking.",
              ]}
            />
          </div>
        </div>

        <div
          ref={cardRef3}
          className="w-full  min-h-screen flex items-center mob:overflow-hidden justify-center sticky top-[0%] tab:pt-[228px] mob:pt-[182px] ">
          <div className="h-full tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[25px] w-full rounded-t-[24px] rounded-b-[18px]">
            <ResuableComponent
              heading="Keep Every Booth Booked And Busy"
              image={calenderImage}
              icons={[pen, manage, people]}
              background="bg-[#EDF6FE]"
              iconsDescription={[
                "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                "Add a Book Now button to your Instagram and Facebook profiles.",
                "Get discovered and booked on",
                "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
              ]}
            />
          </div>
        </div>
        <div
          ref={cardRef4}
          className="w-full min-h-screen flex items-center mob:overflow-hidden justify-center sticky top-[0%] tab:pt-[228px] mob:pt-[182px] ">
          <div className="h-full tab:h-[80%] mob:min-h[80vh] mob:h-auto mob:pb-[25px] w-full rounded-t-[24px] rounded-b-[18px]">
            <ResuableComponent
              heading="Turn Walk-ins Into Regulars"
              image={calenderImage}
              icons={[pen, manage, people]}
              // background="bg-[#EDF6FE]"
              imageShow="hidden"
              iconsDescription={[
                "Send automated and one-off email and text campaigns for seasonal offers, retail products, and more. ",
                "Sell gift cards online and in person to reach even more customers. ",
                "Drive repeat business with a loyalty program that rewards returning customers. ",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeTheMost;
