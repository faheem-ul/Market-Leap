// src/app/industry/[id]/page.tsx

import React from "react";
import SinglePageHero from "@/components/SinglePage/Hero";
import SecondSection from "@/components/SinglePage/MakeTheMost";
import MaketheMostSlider from "@/components/SinglePage/MakeTheMost/MakeTheMostMob";
import EverythingYouNeed from "@/components/SinglePage/EverythingYouNeed";
import ReviewSlider from "@/components/SinglePage/ReviewSlider.tsx";
import SinglePagePlans from "@/components/SinglePage/Pricing";
import CardsStackSection from "@/components/SinglePage/HardWare";
import GetInspiredSlider from "@/components/SinglePage/GetInspired";
import SinglePageFAQ from "@/components/SinglePage/Faq";
// import ImageReveal from "@/components/SinglePage/ImageReveal";

type Params = Promise<{ id: string }>;

// export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
//     const { id } = await params;
//     return {
//       title: `Industry Page: ${id}`,
//       description: `Explore insights and details for the ${id} industry.`,
//     };
//   }

const IndustryPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return (
    <main>
      <SinglePageHero industryId={id} />
      {/* <ImageReveal  /> */}
      <SecondSection industryId={id} />
      <MaketheMostSlider industryId={id} />
      <ReviewSlider industryId={id} />
      <EverythingYouNeed industryId={id} />
      <SinglePagePlans />
      <CardsStackSection industryId={id} />
      <GetInspiredSlider industryId={id} />
      <SinglePageFAQ industryId={id} />
    </main>
  );
};

export default IndustryPage;
