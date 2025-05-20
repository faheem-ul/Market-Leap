import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import bg from "@/public/images/industry/Mask group.png";

const ReadyToSignup = () => {
  return (
    <div className="w-full relative min-h-[373px] overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src={bg}
        alt="bg"
        fill
        className=" z-0"
        priority
      />

      {/* Content container */}
      <div className="flex justify-center items-center h-full min-h-[373px] relative z-10">
        <div className="w-full max-w-[1313px] px-4 flex justify-between">
          <Text
            as="h1"
            className="text-[50px] text-white font-space_grotesk font-semibold"
          >
            <span className="text-secondary">Ready </span>
            To Sign Up?
          </Text>
          <div className="flex gap-[20px]">
          <Button className="w-[168px] rounded-[15px] h-[67px] bg-transparent font-bold text-[18px] border-2 border-white text-white">
          Get A Demo
          </Button>
          <Button className="w-[168px] rounded-[15px] h-[67px] bg-secondary font-bold text-[18px] text-white">
          Contact Us
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToSignup;
