import Image from "next/image";

import DesktopNav from "@/components/NailSaloon/Hero/Navbar";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import MarqueeComponent from "@/components/ui/MarqueeComponent";
import { industries } from "@/lib/constants/industries";

import bg from "@/public/images/Nail-saloon/bg.png";

export default function SinglePageHero({ industryId }: { industryId: string }) {
    return (
        <div className="w-full h-full relative mob:mt-[-130px] z-10" >
        <Image src={bg} alt="bg" className=" absolute flex justify-center items-center h-[1260px] -z-10"/>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <DesktopNav/>
        <div className="w-full h-full max-w-[1313px] mt-[201px] mob:mt-[180px] px-5">
          <Text
            as="h1"
            className="w-full max-w-[634px] mob:text-[30px] mx-auto text-center text-[50px] mb-[35px]">
           {
            industries.find(industry => industry.id === industryId)?.title 
           }
          </Text>
          <Button className="w-[166px] h-[58px] rounded-[15px] mx-auto text-white bg-secondary text-[18px] font-bold mb-[107px]">
            Contact Us
          </Button>

        </div>
      </div>
          <MarqueeComponent direction="left" className="mb-[26px]">
            <div className="flex items-center ml-[30px] justify-center gap-[30px] mob:gap-[70px] mob:ml-[70px]">
              {/* {images.map((logo, index) => (
                <Image
                  src={logo}
                  alt="image"
                  key={index}
                  width={300}
                  //   height={60}
                  //   className="object-cover"
                />
              ))} */}
                {industries.find(industry => industry.id === industryId)?.marqueeImages.map((image, index) => (
                    <Image
                    src={image}
                    alt={`Marquee Image ${index + 1}`}
                    key={index}
                    width={300}
                    />
                ))}
            </div>
          </MarqueeComponent>
    </div>
    );
  }