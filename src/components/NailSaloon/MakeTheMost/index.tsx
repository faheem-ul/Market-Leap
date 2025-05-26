"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Text from "@/components/ui/Text";
import ResuableComponent from "./ReusableComponent";

import calenderImage from "@/public/images/Nail-saloon/calender.png";
import payment from "@/public/images/Nail-saloon/take-payments.png";
import keep from "@/public/images/Nail-saloon/keep.png";
import turn from "@/public/images/Nail-saloon/turn.png";
import pen from "@/public/images/Nail-saloon/pen.svg";
import manage from "@/public/images/Nail-saloon/manage.svg";
import people from "@/public/images/Nail-saloon/people.svg";

gsap.registerPlugin(ScrollTrigger);

const MakeTheMost = () => {
  // Individual refs for each section
  const sectionRef1 = useRef<HTMLDivElement | null>(null);
  const sectionRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef3 = useRef<HTMLDivElement | null>(null);
  const sectionRef4 = useRef<HTMLDivElement | null>(null);

  // Individual refs for each image
  const imageRef1 = useRef<HTMLImageElement | null>(null);
  const imageRef2 = useRef<HTMLImageElement | null>(null);
  const imageRef3 = useRef<HTMLImageElement | null>(null);
  const imageRef4 = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Set initial opacity for the first image
    if (imageRef1.current) {
      gsap.set(imageRef1.current, { opacity: 1 });
    }

    // Helper function to apply content animations for a section
    const animateSectionContent = (section: HTMLDivElement | null) => {
      if (!section) return;

      const content = section.querySelector(".content");
      if (content) {
        gsap.to(content, {
          opacity: 0,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: () => {
              const viewportHeight = window.innerHeight;
              const sectionRect = section.getBoundingClientRect();
              const sectionCenter = sectionRect.top + sectionRect.height / 2;
              const viewportCenter = viewportHeight / 2;
              const distanceFromCenter = Math.abs(viewportCenter - sectionCenter);
              const maxDistance = viewportHeight / 2;
              const opacity = 1 - distanceFromCenter / maxDistance;
              gsap.set(content, { opacity: Math.max(0, Math.min(1, opacity)) });
            },
          },
        });
      }
    };

    // Helper function to animate image transitions when section content opacity reaches 1
    const animateImage = (
      section: HTMLDivElement | null,
      image: HTMLImageElement | null,
      prevImage: HTMLImageElement | null
    ) => {
      if (!section || !image) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        onEnter: () => {
          gsap.to(image, { opacity: 1, duration: 0.5, overwrite: "auto" });
          if (prevImage) {
            gsap.to(prevImage, { opacity: 0, duration: 0.5, overwrite: "auto" });
          }
        },
        onLeaveBack: () => {
          gsap.to(image, { opacity: 0, duration: 0.5, overwrite: "auto" });
          if (prevImage) {
            gsap.to(prevImage, { opacity: 1, duration: 0.5, overwrite: "auto" });
          }
        },
      });
    };

    // Animate last image with upward movement starting after content fully visible
    // const animateImageFour = (
    //   section: HTMLDivElement | null,
    //   image: HTMLImageElement | null,
    //   prevImage: HTMLImageElement | null
    // ) => {
    //   if (!section || !image) return;

    //   // Fade in/out images on section enter/leave
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: "top top",
    //     end: "bottom 20%",
    //     onEnter: () => {
    //       gsap.to(image, { opacity: 1, duration: 0.5, overwrite: "auto" });
    //       if (prevImage) {
    //         gsap.to(prevImage, { opacity: 0, duration: 0.5, overwrite: "auto" });
    //       }
    //     },
    //     onLeaveBack: () => {
    //       gsap.to(image, { opacity: 0, y: "0px", duration: 0.5, overwrite: "auto" });
    //       if (prevImage) {
    //         gsap.to(prevImage, { opacity: 1, duration: 0.5, overwrite: "auto" });
    //       }
    //     },
    //   });

    //   // Upward movement starts when section center hits viewport center (opacity=1)
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: "center center",
    //     end: "bottom top",
    //     scrub: true,
    //     onUpdate: (self) => {
    //       // Move image from y=0 to y=-100px proportional to scroll progress
    //       gsap.to(image, {
    //         y: -100 * self.progress,
    //         ease: "none",
    //         overwrite: "auto",
    //       });
    //     },
    //     // markers: true,
    //   });
    // };

    // Animate content opacity for all sections
    animateSectionContent(sectionRef1.current);
    animateSectionContent(sectionRef2.current);
    animateSectionContent(sectionRef3.current);
    animateSectionContent(sectionRef4.current);

    // Animate images for sections 2 and 3
    animateImage(sectionRef2.current, imageRef2.current, imageRef1.current);
    animateImage(sectionRef3.current, imageRef3.current, imageRef2.current);
    animateImage(sectionRef4.current, imageRef4.current, imageRef3.current);

    // Animate last image with upward movement
    // animateImageFour(sectionRef4.current, imageRef4.current, imageRef3.current);
  }, []);

  return (
    <div className="w-full h-full relative mb-[500px]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text
            as="h1"
            className="text-[60px] w-full max-w-[470px] my-[70px] text-center mx-auto"
          >
            Make The Most Of <span className="text-secondary"> Every Hour</span>
          </Text>
        </div>
      </div>

      <div className="relative">
        {/* Fixed image container */}
        <div className="sticky top-[26%] left-1/2 transform -translate-x-1/2 w-[424px] h-[auto] pointer-events-none z-0">
          <img
            ref={imageRef1}
            src={calenderImage.src}
            alt="background-1"
            className="absolute left-0 w-full transition-opacity duration-500"
            style={{ willChange: "opacity" }}
          />
          <img
            ref={imageRef2}
            src={payment.src}
            alt="background-2"
            className="absolute left-0 w-full opacity-0 transition-opacity duration-500"
            style={{ willChange: "opacity" }}
          />
          <img
            ref={imageRef3}
            src={keep.src}
            alt="background-3"
            className="absolute left-0 w-full opacity-0 transition-opacity duration-500"
            style={{ willChange: "opacity" }}
          />
          <img
            ref={imageRef4}
            src={turn.src}
            alt="background-4"
            className="absolute left-0 w-full opacity-0 transition-opacity duration-500"
            style={{ willChange: "opacity" }}
          />
        </div>

        <div className="relative mob:hidden max-w-[1313px] mx-auto" id="what-we-do">
          {/* Section 1 */}
          <div
            ref={sectionRef1}
            className="w-full flex items-center justify-center py-[160px]"
          >
            <div className="content w-full max-w-[1313px] px-5">
              <ResuableComponent
                heading="Smooth Calendar Management"
                icons={[pen, manage, people]}
                iconsDescription={[
                  "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                  "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                  "Add unlimited tech calendars and sync them across multiple locations.",
                ]}
                noImage={true}
              />
            </div>
          </div>

          {/* Section 2 */}
          <div
            ref={sectionRef2}
            className="w-full flex items-center justify-center py-[160px]"
          >
            <div className="content w-full max-w-[1313px] px-5">
              <ResuableComponent
                heading="Take payments At The Booth"
                icons={[pen, manage, people]}
                iconsDescription={[
                  "Take payments using just your phone no hardware needed.",
                  "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                  "Access your funds instantly with Square Checking.",
                ]}
                noImage={true}
              />
            </div>
          </div>

          {/* Section 3 */}
          <div
            ref={sectionRef3}
            className="w-full flex items-center justify-center py-[160px]"
          >
            <div className="content w-full max-w-[1313px] px-5">
              <ResuableComponent
                heading="Keep Every Booth Booked And Busy"
                icons={[pen, manage, people]}
                iconsDescription={[
                  "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site.",
                  "Add a Book Now button to your Instagram and Facebook profiles.",
                  "Get discovered and booked on",
                  "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                ]}
                noImage={true}
              />
            </div>
          </div>

          {/* Section 4 */}
          <div
            ref={sectionRef4}
            className="w-full flex items-center justify-center py-[160px]"
          >
            <div className="content w-full max-w-[1313px] px-5">
              <ResuableComponent
                heading="Turn Walk-ins Into Regulars"
                icons={[pen, manage, people]}
                iconsDescription={[
                  "Send automated and one-off email and text campaigns for seasonal offers, retail products, and more.",
                  "Sell gift cards online and in person to reach even more customers.",
                  "Drive repeat business with a loyalty program that rewards returning customers.",
                ]}
                noImage={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeTheMost;