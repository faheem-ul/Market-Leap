import marquee1 from "@/public/images/Nail-saloon/marquee1.png";
import marquee2 from "@/public/images/Nail-saloon/marquee2.png";
import calenderImage from "@/public/images/Nail-saloon/calender.png";
import payment from "@/public/images/Nail-saloon/take-payments.png";
import keep from "@/public/images/Nail-saloon/keep.png";
import turn from "@/public/images/Nail-saloon/turn.png";
import pen from "@/public/images/Nail-saloon/pen.svg";
import manage from "@/public/images/Nail-saloon/manage.svg";
import people from "@/public/images/Nail-saloon/people.svg";
import paymnet1svg from "@/public/images/Nail-saloon/payment1.svg";
import payment2svg from "@/public/images/Nail-saloon/payment2.svg";
import payment3svg from "@/public/images/Nail-saloon/payment3.svg";
import keep1svg from "@/public/images/Nail-saloon/keep1.svg";
import keep2svg from "@/public/images/Nail-saloon/keep2.svg";
import keep3svg from "@/public/images/Nail-saloon/keep3.svg"; 
import keep4svg from "@/public/images/Nail-saloon/keep4.svg";
import turn1 from "@/public/images/Nail-saloon/turn1.svg";
import turn2 from "@/public/images/Nail-saloon/turn2.svg";
import turn3 from "@/public/images/Nail-saloon/turn3.svg";
import review1image from "@/public/images/Nail-saloon/reviewimage.png" 
import signature1 from "@/public/images/Nail-saloon/signature1image.svg" 
import sectionimage from "@/public/images/Nail-saloon/image 22.png";
import grow from "@/public/images/Nail-saloon/image 23.png";
import add from "@/public/images/Nail-saloon/image 24.png";
import square1 from "@/public/images/Nail-saloon/square1.avif";
import square2 from "@/public/images/Nail-saloon/square2.avif";
import sqaure3 from "@/public/images/Nail-saloon/square3.avif";
import sqaure4 from "@/public/images/Nail-saloon/square4.avif";
import inspired1 from "@/public/images/Nail-saloon/getinspird1.png";
import inspired2 from "@/public/images/Nail-saloon/getinspired2.png";
import inspired3 from "@/public/images/Nail-saloon/getinspired3.png";
import inspired4 from "@/public/images/Nail-saloon/getinspured4.png";



export const industries = [
  {
    id: "industry-nail-saloon",
    marqueeImages: [marquee1, marquee2],
    title: "Nail Salon Software That Puts You In Control ",
    makeTheMostSection: [
      {
        section1heading: "Smooth Calendar Management",
        section1Image: calenderImage,
        section1Content: [
          { icon: pen, 
            content: "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar." 
        },
          {
            icon: manage,
            content: "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          },
          {
            icon: people,
            content: "Add unlimited tech calendars and sync them across multiple locations.",
          },
        ],
      },

      {
        section2heading: "Take payments At The Booth",
        section2Image: payment,
        section2Content: [
            { icon: paymnet1svg, 
                content: "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar." 
            },
              {
                icon: payment2svg,
                content: "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
              },
              {
                icon: payment3svg,
                content: "Add unlimited tech calendars and sync them across multiple locations.",
              },
        ],
      },
      {
        section3heading: "Keep Every Booth Booked And Busy",
        section3Image: keep,
        section3Content: [
            { icon: keep1svg, 
                content: "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. " 
            },
              {
                icon: keep2svg,
                content: "Add a Book Now button to your Instagram and Facebook profiles.",
              },
              {
                icon: keep3svg,
                content: "Get discovered and booked on Square Go.",
              },
              {
                icon: keep4svg,
                content: "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
              },
        ],
      },
      {
        section4heading: "Turn Walk-ins Into Regulars",
        section4Image: turn,
        section4Content: [
            { icon: turn1, 
                content: "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more." 
            },
              {
                icon: turn2,
                content: "Sell gift cards online and in person to reach even more customers. ",
              },
              {
                icon: turn3,
                content: "Drive repeat business with a loyalty program that rewards returning customers. ",
              },
        ],
      },
    ],
    ReviewSliderContent: [
      { image: review1image, 
        review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
        signature: signature1, 
        name: "Rachel Dang", 
        addresss: "Urban Nail BoxSeattle, WA" 
    },
    // { image: review1image, 
    //     review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
    //     signature: signature1, 
    //     name: "Rachel Dang", 
    //     addresss: "Urban Nail BoxSeattle, WA" 
    // },
    // { image: review1image, 
    //     review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
    //     signature: signature1, 
    //     name: "Rachel Dang", 
    //     addresss: "Urban Nail BoxSeattle, WA" 
    // },
    // { image: review1image, 
    //     review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
    //     signature: signature1, 
    //     name: "Rachel Dang", 
    //     addresss: "Urban Nail BoxSeattle, WA" 
    // },
    // { image: review1image, 
    //     review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
    //     signature: signature1, 
    //     name: "Rachel Dang", 
    //     addresss: "Urban Nail BoxSeattle, WA" 
    // },
    // { image: review1image, 
    //     review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
    //     signature: signature1, 
    //     name: "Rachel Dang", 
    //     addresss: "Urban Nail BoxSeattle, WA" 
    // },
    ],

    everythinguouneedtoKnow: [
        {
            heading:"Bank through Market Leap",
            description:"Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
            image:sectionimage
        },
        {
            heading:"Grow Your Client Base",
            description:"Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
            image:grow
        },
        {
            heading:"Add New Revenue Streams",
            description:"Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
            image:add
        }
    ],
    hardwarethatsuits: [
        {
        heading: "Square Handheld",
        image: square1,
        constent:"Power your day, manage appointments, and check out anywhere with a pocketable POS."

    },
    {
        heading: "Square Register",
        image: square2,
        constent:"Run your entire business right out of the box with a fully integrated, two-screen solution."

    },
    {
        heading: "Square Stand",
        image: sqaure3,
        constent:" Simplify checkout in just one swivel with an iPad POS you already know how to use."

    },
    {
        heading: " Square Terminal",
        image: sqaure4,
        constent:"Take payments, print receipts, and much more on a compact, countertop device."
    },
],
  getinspiredSection:[
    {
        image: inspired1,
        // heading: "",
        description: "How to Keep Salon Appointments on Schedule When You’re Busy",
    },
    {
        image: inspired2,
        // heading: "",
        description: "How to Build a Tattoo Shop Website",
    },
    {
        image: inspired3,
        // heading: "",
        description: "16 Tax Deductions for Salons",
    },
    {
        image: inspired4,
        // heading: "",
        description: "5 Areas to Leverage Automation in the Beauty Industry",
    },
    {
        image: inspired1,
        // heading: "",
        description: "How to Keep Salon Appointments on Schedule When You’re Busy",
    },
    {
        image: inspired2,
        // heading: "",
        description: "How to Build a Tattoo Shop Website",
    },
  ],
  faqData : [
    {
      title:
        "How can Integration Social help me connect more deeply with my customers?",
      text: "Integration Social enables you to communicate with your customers on the platforms they use most, whether it's SMS, social media messengers, or other channels. By being present where your customers are, you can create more meaningful interactions and build stronger relationships. Our AI-driven responses and customizable automatons ensure that every message is personalized and timely, making your customers feel valued and understood.",
    },
    {
      title:
        "I'm overwhelmed by the idea of managing multiple communication channels. How can your software make this easier?",
      text: "Integration Social simplifies this by providing a unified dashboard where you can manage all your customer interactions from different channels (SMS, social media, email, etc.) in one single place. Our platform helps you streamline workflows, automate routine responses, and intelligently route inquiries, significantly reducing the complexity and making multi-channel management efficient and less stressful.",
    },
    {
      title:
        "Will this software really save me time and help me focus on my business?",
      text: "Absolutely. Integration Social is designed to automate repetitive communication tasks, such as answering frequently asked questions, sending follow-ups, or routing messages to the right team member. By handling these tasks efficiently, our software frees up significant time for you and your team, allowing you to concentrate on strategic initiatives, core business operations, and activities that drive growth.",
    },
    {
      title:
        "How does Integration Social ensure that my customers feel heard and valued?",
      text: "Our platform ensures customers feel heard and valued through several key features. Personalized messaging, powered by customer data and interaction history, makes every communication relevant. Timely responses, facilitated by automation and efficient workflows, show respect for their time. Furthermore, by engaging them on their preferred channels and providing consistent support, you demonstrate attentiveness and a customer-centric approach, fostering a sense of value.",
    },
    {
      title:
        "How can Integration Social improve my team's productivity and morale?",
      text: "Integration Social improves team productivity by centralizing communication tools, automating mundane tasks, and providing clear insights into customer interactions. This allows your team to handle more inquiries effectively and with less effort. When team members are equipped with tools that make their jobs easier and see the positive impact of their work on customer satisfaction, it naturally boosts their morale, engagement, and overall job satisfaction.",
    },
  ]
  },
];
