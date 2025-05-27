import React from "react";

import ResubalePlanFle from "@/components/NailSaloon/Plans/ResubalePlanFle";
import Text from "@/components/ui/Text";

const Plans = () => {
  return (
    <div className="h-full w-full min-h-[1059px] px-5 mb-[81px]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full max-w-[1313px]">
          <Text
            as="h1"
            className="text-[60px] text-center text-balck mt-[81px] mb-[9px]">
            Plans for every stage
          </Text>
          <Text className="text-[24px] mob:text-[20px] font-light text-center mb-[76px] mob:my-10">
            Simple pricing that grows with your business. No contracts, no
            hidden fees. Cancel anytime.
          </Text>
          <div className="flex w-full justify-between items-center flex-wrap xl:justify-center xl:gap-[20px]">
            <ResubalePlanFle
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
            <ResubalePlanFle
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
            <ResubalePlanFle
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
            <ResubalePlanFle
              planType="Contact Us"
              PlanDescrip="Custom enterprise solution with 
dedicated support and lowest 
processing rates"
              // inpersonValue="2.5% + $0.10"
              // onlineValue="2.7% + $0.30"
              // pricing="$229"
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

export default Plans;
