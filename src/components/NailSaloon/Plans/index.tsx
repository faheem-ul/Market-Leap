import React from "react";
import Image from "next/image";

import ResubalePlanFle from "./ResubalePlanFle";
import Text from "@/components/ui/Text";


import bg from "@/public/images/Nail-saloon/plansbg.png"

const Plans = () => {
  return (
    <div className="h-full w-full bg-black min-h-[1059px] px-5">
         <Image src={bg} alt='bg' className=' absolute h-[1059px] w-[98%]'/>
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">

            <Text as="h1" className="text-[60px] text-center text-white mt-[91px] mb-[119px]">
            Plans To Fit Every <br  className="mob:hidden"/> 
            Business
            </Text>
            <div className="flex w-full justify-between items-center flex-wrap">
          <ResubalePlanFle
            planType="Free"
            PlanDescrip="The basics to run your own business while staying ahead of schedule."
            pricing="$4.5"
            pricingDescrip="a single payment"
            buttontext="Sign Up For Free"
            points={[
              "Unlimited staff accounts",
              "Custom booking website and social media integrations",
              "Integrated payments",
              "Automatic text and email reminders",
            ]}
          />
          <ResubalePlanFle
            planType="Plus"
            PlanDescrip="More advanced features for growing teams that offer top-notch service."
            pricing="$9.95"
            pricingDescrip="/month"
            buttontext="Start Free Trail"
            points={[
              "Unlimited staff accounts",
              "Custom booking website and social media integrations",
              "Integrated payments",
              "Automatic text and email reminders",
              "Automated  "
            ]}
          />
          <ResubalePlanFle
            planType="Free"
            PlanDescrip="A complete plan that meets complex booking and staff management needs."
            pricing="$30.5"
            pricingDescrip="/month"
            buttontext="Start Free Trail"
            points={[
              "Unlimited staff accounts",
              "Custom booking website and social media integrations",
              "Integrated payments",
              "Automatic text and email reminders",
              "Automated contracts",
              "Marketplace app for beauty and personal care discovery"

            ]}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
