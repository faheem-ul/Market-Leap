import HomeHero from "@/components/Home/Hero";
import HomeMarquee from "@/components/Home/HomeMarquee";
import GridLayout from "@/components/Home/ImagesSection";
import RunYourBusiness from "@/components/Home/RunYourBusiness";
import GrowWithout from "@/components/Home/GrowWithout";
import ReadytoStart from "@/components/Home/ReadyToTransform";


export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeHero />
      <HomeMarquee />
      <GridLayout />
      <RunYourBusiness />
      <GrowWithout />
      <ReadytoStart/>
    </div>
  );
}
