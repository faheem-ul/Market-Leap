import Text from "@/components/ui/Text";
import React from "react";

const GrowWithoutHeading = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 mt-[76px] mob:my-10">
      <div className="w-full max-w-[90vw]">
        <Text
          as="h1"
              className="text-[7vw] mb-[-84px] mob:mb-0 mob:text-[40px] mob:leading-[40px] leading-[7.5vw] text-black w-full ">
          Grow <br />
          Without <br />
          <span className="text-secondary font-poppins text-[4.7vw] leading-[0px] mob:text-[30px] mob:leading-[30px]">
            The Guesswork
          </span>
        </Text>
      </div>
    </div>
  );
};

export default GrowWithoutHeading;
