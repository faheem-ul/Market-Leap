import Text from "@/components/ui/Text";
import React from "react";

const GrowWithoutHeading = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 mt-[76px] mob:my-10">
      <div className="w-full max-w-[1313px]">
        <Text
          as="h1"
          className="text-[100px] mob:text-[40px] mob:leading-[40px] leading-[100px] text-black w-full ">
          Grow <br />
          Without <br />
          <span className="text-secondary font-poppins text-[66px] leading-[0px] mob:text-[30px] mob:leading-[30px]">
            The Guesswork
          </span>
        </Text>
      </div>
    </div>
  );
};

export default GrowWithoutHeading;
