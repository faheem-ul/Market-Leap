import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import grow1 from "@/public/images/home/grow.png";
import circle from "@/public/images//home/circle.png"
const GrowWithout = () => {
  return (
    <div className="flex justify-center items-center w-full h-full px-5">
      <div className="w-full max-w-[1313px] flex justify-center items-center">
        <div className="flex items-center justify-center xl:flex-col gap-[126px]">
          <div>
            <Text
              as="h1"
              className="text-[66px] leading-[100px] w-full max-w-[517px] mb-[66px]">
              Grow <span className="text-[100px]">Without</span>{" "}
              <span className="text-secondary">The Guesswork</span>
            </Text>
            <div className="bg-secondary rounded-[20px] w-full max-w-[784px] h-[108px] px-[47px] flex justify-between items-center mb-[66px]">
              <Text className="font-semibold text-white px-[21px] py-[13px] bg-black rounded-[15px]">
                Marketing
              </Text>
              <Text className="font-semibold text-[#fff]/80">
                Reviews
              </Text>
              <Text className="font-semibold text-[#fff]/80">
                Local Market
              </Text>
              <Text className="font-semibold text-[#fff]/80">
                Never Lose Lead
              </Text>
            </div>
            <Image src={grow1} alt="grow" width={555} />
            <Text as="h2" className="text-[36px] mb-[13px]">
              Empower Your Business with AI
            </Text>
            <Text className="mb-[48px] text-[20px] text-center">
              As you scale, use our built-in AI services to power your
              marketing, branding, customer engagement, pricing optimization,
              inventory management, and more. Stand out from the rest and build
              your business on your terms.
            </Text>
            <Button className="bg-primary w-[166px] font-space_grotesk mx-auto h-[58px] font-bold rounded-[15px] text-white text-[18px]">
              Get Started
            </Button>
          </div>
          <div>
            <Image src={circle} alt="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowWithout;
