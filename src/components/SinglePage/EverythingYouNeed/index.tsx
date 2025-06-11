import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { industries } from "@/lib/constants/industries";

export default function EverythingYouNeed({ industryId }: { industryId: string }) {
  const industry = industries.find((industry) => industry.id === industryId);
  const items = industry?.everythinguouneedtoKnow ?? [];

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center px-5">
        <div className="w-full max-w-[1313px]">
          <Text as="h1" className="text-[60px] mob:text-[35px] text-center">
            Everything You Need To <br className="mob:hidden" />
            <span className="text-secondary"> Keep Things Growing</span>
          </Text>
        </div>
      </div>

      {items.map((item, index) => {
        const isEven = index % 2 === 1; 

        return (
          <div
            key={index}
            className={`w-full ${
              isEven ? "bg-[#F2F2F2]" : ""
            } py-[60px] mob:pb-0`}
          >
            <div
              className={`flex flex-wrap justify-between items-center px-5 w-full max-w-[1313px] mx-auto ${
                isEven ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-full max-w-[510px]">
                <Text as="h2" className="text-[45px] font-semibold mob:text-[30px] mob:leading-[35px]">
                  {item.heading}
                </Text>
                <Text className="mt-[21px] mb-[52px] text-[24px] mob:text-[20px] mob:leading-[22px] font-light">
                  {item.description}
                </Text>
                <Link href="/pricing">
                <Button className="w-[166px] h-[58px] rounded-[15px] text-[18px] font-bold">
                  Get Started
                </Button>
                </Link>
              </div>
              <Image
                src={item.image}
                alt={item.heading}
                className="my-[150px] mob:mt-10 mob:mb-[80px] animate-bounce"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
