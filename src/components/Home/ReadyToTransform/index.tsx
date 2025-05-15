import React from 'react';
import Image from 'next/image';
import Text from '@/components/ui/Text';
import readyToTrans from '@/public/images/home/ready-to-transofrm.png';

const ReadytoStart = () => {
  return (
    <div className="relative bg-[#004389] overflow-hidden">
      {/* The "Business" text behind the image */}
      <div className="absolute inset-0 flex justify-center top-[23%] left-[50px] z-0 pointer-events-none">
        <Text as="h1" className="text-[200px] text-white">
          Business
        </Text>
      </div>

      {/* Image on top of "Business" text */}
      <Image
        src={readyToTrans}
        alt="Building"
        className="relative z-10 w-full h-auto"
      />

      {/* Foreground content */}
      <div className="absolute inset-0 flex flex-col justify-start items-center z-20 mx-auto text-center px-4 pt-[168px]">
        <Text as='h1' className="text-[82px] font-semibold mb-2 text-white">
          Ready To Transform Your
        </Text>
        <Text className="text-[24px] mb-8 text-white">
          Join thousands of business owners who are growing faster <br /> and working smarter with Market Leap.
        </Text>
      </div>
    </div>
  );
};

export default ReadytoStart;
