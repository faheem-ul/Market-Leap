import React from "react";
import Image from "next/image";

import ResubalePlanFile from "./ReusablePlan";
import Text from "@/components/ui/Text";

import bg from "@/public/images/Nail-saloon/plansbg.png";

const SinglePagePlans = () => {
  return (
    <div className="h-full w-full bg-black min-h-[1159px] px-5 pb-[70px]">
      <Image src={bg} alt="bg" className=" absolute h-[1059px] w-[98%] mob:h-auto mob:left-0 mob:w-full z-0" />
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text
            as="h1"
            className="text-[60px] text-center text-white mt-[69px] mb-[63px] relative z-10">
            Plans To Fit Every <br className="mob:hidden" />
            Business
          </Text>
          <div className="flex w-full justify-between items-center flex-wrap relative z-10">
            <ResubalePlanFile
              planType="Starter"
              PlanDescrip="Payment processing plus an online presence."
              inpersonValue="2.6% + $0.10"
              onlineValue="2.8% + $0.30"
              pricing="$10"
              pricingDescrip="/month"
              buttontext="Get Started"
              points={[
                "Payment processing",
                "AI website builder",
                "Basic SEO",
                "Online bookings",
                "24/7 support via text, phone, or email",
              ]}
            />

            {/* 2  */}
            <ResubalePlanFile
              planType="Standard"
              PlanDescrip="Payments, online presence, and 
basic automated marketing and 
customer communications."
              inpersonValue="2.5% + $0.10"
              onlineValue="2.7% + $0.30"
              pricing="$125"
              pricingDescrip="/month"
              buttontext="Start Free Trail"
              points={[
                "Everything in Starter",
                "Payment processing hardware discount",
                "Dedicated phone number for calls/texts",
                "Text and email marketing system",
                "Basic campaign automations",
                "Full automated business listing management",
                "Automated review management",
                "Standard SEO",
              ]}
            />

            {/* 3 */}
            <ResubalePlanFile
              planType="Growth"
              PlanDescrip="Full-service solution with advanced 
marketing, CRM, and everything done 
for you."
              inpersonValue="2.5% + $0.10"
              onlineValue="2.7% + $0.30"
              pricing="$229"
              pricingDescrip="/month"
              buttontext="Get Started"
              points={[
                "Everything in Standard",
                "Payment processing hardware discount",
                "Advanced SEO",
                "Advanced marketing automations",
                "Fully integrated CRM + customer management",
                "Advanced, full-service paid ad management",
                "Professionally designed website",
                "Fully automated social media management",
                "Lower processing rates",
              ]}
            />
            <ResubalePlanFile
              planType="Contact Us"
              PlanDescrip="Custom enterprise solution with 
dedicated support and lowest 
processing rates"
              mt="mt-[17px]"
              // inpersonValue="2.5% + $0.10"
              // onlineValue="2.7% + $0.30"
              // pricing="$229"
              inperonshow="hidden"
              buttontext="Contact Us"
              points={[
                "Everything in Growth",
                "Lowest processing rates",
                "Dedicated account manager",
                "Custom solutions",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePagePlans;
