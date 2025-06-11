"use client";
import Link from "next/link";

import AccordionFAQ from "@/components/ui/AccordianFaq";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { industries } from "@/lib/constants/industries";

export default function SinglePageFAQ({ industryId }: { industryId: string }) {
  const industry = industries.find((industry) => industry.id === industryId);
  const faqData = industry?.faqData ?? [];

  //   const faqData = [
  //     {
  //       title:
  //         "How can Integration Social help me connect more deeply with my customers?",
  //       text: "Integration Social enables you to communicate with your customers on the platforms they use most, whether it's SMS, social media messengers, or other channels. By being present where your customers are, you can create more meaningful interactions and build stronger relationships. Our AI-driven responses and customizable automatons ensure that every message is personalized and timely, making your customers feel valued and understood.",
  //     },
  //     {
  //       title:
  //         "I'm overwhelmed by the idea of managing multiple communication channels. How can your software make this easier?",
  //       text: "Integration Social simplifies this by providing a unified dashboard where you can manage all your customer interactions from different channels (SMS, social media, email, etc.) in one single place. Our platform helps you streamline workflows, automate routine responses, and intelligently route inquiries, significantly reducing the complexity and making multi-channel management efficient and less stressful.",
  //     },
  //     {
  //       title:
  //         "Will this software really save me time and help me focus on my business?",
  //       text: "Absolutely. Integration Social is designed to automate repetitive communication tasks, such as answering frequently asked questions, sending follow-ups, or routing messages to the right team member. By handling these tasks efficiently, our software frees up significant time for you and your team, allowing you to concentrate on strategic initiatives, core business operations, and activities that drive growth.",
  //     },
  //     {
  //       title:
  //         "How does Integration Social ensure that my customers feel heard and valued?",
  //       text: "Our platform ensures customers feel heard and valued through several key features. Personalized messaging, powered by customer data and interaction history, makes every communication relevant. Timely responses, facilitated by automation and efficient workflows, show respect for their time. Furthermore, by engaging them on their preferred channels and providing consistent support, you demonstrate attentiveness and a customer-centric approach, fostering a sense of value.",
  //     },
  //     {
  //       title:
  //         "How can Integration Social improve my team's productivity and morale?",
  //       text: "Integration Social improves team productivity by centralizing communication tools, automating mundane tasks, and providing clear insights into customer interactions. This allows your team to handle more inquiries effectively and with less effort. When team members are equipped with tools that make their jobs easier and see the positive impact of their work on customer satisfaction, it naturally boosts their morale, engagement, and overall job satisfaction.",
  //     },
  //   ];

  return (
    <div className="mx-auto w-full flex flex-col items-center mb-[142px]">
      <Text
        as="h1"
        className="text-[60px] mt-[100px] mx-auto mb-[66px] mob:my-10">
        FAQ
      </Text>

      <AccordionFAQ sections={faqData} />
      <div className="flex justify-center items-center h-full relative z-10 w-full">
        <div className="w-full max-w-[1313px] px-4 flex justify-between items-center flex-wrap mob:justify-center gap-10">
          <Text
            as="h1"
            className="text-[65px] mob:text-[28px] text-black font-semibold">
            Try Square
          </Text>
          <div className="flex gap-[20px] mob:flex-col mob:w-full">
            <Link href="/pricing">
            <Button className="w-[168px] rounded-[15px] h-[69px] mob:w-full mob:max-w-full bg-transparent font-bold text-[18px] border-2 border-black text-black">
              Get A Demo
            </Button>
            </Link>
            <a
              href="tel:+14692105193"
              className=" font-poppins flex justify-center h-[67px] mob:w-full items-center bg-secondary px-2 rounded-[15px] text-white hover:text-gray-300 transition-colors">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+1 (469) 210-5193</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
