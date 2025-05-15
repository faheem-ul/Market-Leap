import Image from "next/image";
import Text from "@/components/ui/Text";

import image1 from "@/public/images/home/text-bg.png";
import image2 from "@/public/images/home/1-2.png";
import image3 from "@/public/images/home/2-1.png";
import image4 from "@/public/images/home/2-2.png";
import image5 from "@/public/images/home/3-1.png";
import image6 from "@/public/images/home/3-2.png";

const GridLayout = () => {
  return (
    <div className="grid mob:grid-cols-1 grid-cols-3 gap-x-3 gap-y-3 max-w-[1313px] mx-auto px-5 mb-[83px]">
      {/* Blue box top-left */}
      <div className="text-white relative font-semibold mob:row-auto mob:col-auto row-start-1 col-start-1">
        <Image
          src={image1}
          alt="Workspace"
          layout="responsive"
          width={400}
          height={250}
          className="object-cover"
        />
        <Text
          as="h1"
          className="absolute bottom-0 left-0 w-full bg-black text-white bg-opacity-50 px-[33px] py-[27px] text-[30px] font-medium">
          <span className="text-[36px] font-semibold">3x</span> <br />
          More Leads
        </Text>
      </div>

      {/* Left big image */}
      <div className="rounded-lg overflow-hidden mob:row-auto mob:col-auto row-span-2 col-start-1 row-start-2 h-full">
        <Image
          src={image2}
          alt="Workspace"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Center image */}
      <div className="relative rounded-lg overflow-hidden mob:h-[300px] mob:row-auto mob:col-auto row-span-2 col-start-2 row-start-1">
        <Image
          src={image3}
          alt="Woman on Laptop"
          fill
          className="object-cover"
        />
      </div>

      {/* Text box */}
      <div className="border-[5px] border-black rounded-[20px] h-[242px] w-full relative font-medium text-sm mob:row-auto mob:col-auto row-start-3 col-start-2 overflow-hidden">
        <Text className="text-[28px] font-semibold text-primary mt-[34px] px-[30px] mb-[21px] font-poppins">
          Overarching Value Prop.
        </Text>
        <Text className="font-light leading-custom-6 text-[15px] px-[30px] text-center z-[100]">
          Your business needs to do more than just take payments. Our platform
          is designed to help you operate at the highest level across marketing,
          customer engagement, and business operations.
        </Text>
        <Image
          src={image4}
          alt="Office Growth"
          layout="responsive"
          width={414}
          height={152}
          className="absolute bottom-0 left-0 w-full"
        />
      </div>

      {/* Top right image */}
      <div className="rounded-lg overflow-hidden mob:row-auto mob:col-auto row-start-1 col-start-3">
        <Image
          src={image5}
          alt="Office Growth"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Middle right image */}
      <div className="rounded-lg overflow-hidden mob:row-auto mob:col-auto row-start-2 col-start-3 h-full">
        <Image
          src={image6}
          alt="Laptop hands"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Blue box bottom-right */}
      <div className=" relative  font-semibold mob:row-auto mob:col-auto row-start-3 col-start-3 h-full">
        <Image
          src={image1}
          alt="Workspace"
          layout="responsive"
          width={400}
          height={250}
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 px-[25px] pb-[24px]">
          <Text
            as="h1"
            className="w-full bg-black text-white bg-opacity-50 leading-[110px] text-[30px] font-semibold">
            35% Increase
          </Text>
          <Text className="font-poppins text-white text-[28px] mt-[-8px]">
            In Customer Engagement
          </Text>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
