import marquee1 from "@/public/images/Nail-saloon/marquee1.png";
import marquee2 from "@/public/images/Nail-saloon/marquee2.png";
import calenderImage from "@/public/images/Nail-saloon/calender.png";
import payment from "@/public/images/Nail-saloon/take-payments.png";
import keep from "@/public/images/Nail-saloon/keep.png";
import turn from "@/public/images/Nail-saloon/turn.png";
import pen from "@/public/images/Nail-saloon/pen.svg";
import manage from "@/public/images/Nail-saloon/manage.svg";
import people from "@/public/images/Nail-saloon/people.svg";
import review1image from "@/public/images/Nail-saloon/reviewimage.png" 
import signature1 from "@/public/images/Nail-saloon/signature1image.svg" 
import sectionimage from "@/public/images/Nail-saloon/image 22.png";
import grow from "@/public/images/Nail-saloon/image 23.png";
import add from "@/public/images/Nail-saloon/image 24.png";
import square1 from "@/public/images/Nail-saloon/square1.png";
import square2 from "@/public/images/Nail-saloon/square2.png";
import sqaure3 from "@/public/images/Nail-saloon/square3.png";
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
        section3heading: "Keep Every Booth Booked And Busy",
        section3Image: keep,
        section3Content: [
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
        section4heading: "Turn Walk-ins Into Regulars",
        section4Image: turn,
        section4Content: [
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
    ],
    ReviewSliderContent: [
      { image: review1image, 
        review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
        signature: signature1, 
        name: "Rachel Dang", 
        addresss: "Urban Nail BoxSeattle, WA" 
    },
    { image: review1image, 
        review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
        signature: signature1, 
        name: "Rachel Dang", 
        addresss: "Urban Nail BoxSeattle, WA" 
    },
    { image: review1image, 
        review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
        signature: signature1, 
        name: "Rachel Dang", 
        addresss: "Urban Nail BoxSeattle, WA" 
    },
    { image: review1image, 
        review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
        signature: signature1, 
        name: "Rachel Dang", 
        addresss: "Urban Nail BoxSeattle, WA" 
    },
    { image: review1image, 
        review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
        signature: signature1, 
        name: "Rachel Dang", 
        addresss: "Urban Nail BoxSeattle, WA" 
    },
    { image: review1image, 
        review: "“Square has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”", 
        signature: signature1, 
        name: "Rachel Dang", 
        addresss: "Urban Nail BoxSeattle, WA" 
    },
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
        heading: "Market Leap",
        image: square1,
        constent:""

    },
    {
        heading: "Market Leap",
        image: square2,
        constent:""

    },
    {
        heading: "Market Leap",
        image: sqaure3,
        constent:"Square Register is the first fully integrated point-of-sale system that lets you start selling right out of the box. This POS system is built to be faster, more powerful, and more reliable—no extra tablets or apps required."

    },
    {
        heading: "Market Leap",
        image: sqaure3,
        constent:"Square Register is the first fully integrated point-of-sale system that lets you start selling right out of the box. This POS system is built to be faster, more powerful, and more reliable—no extra tablets or apps required."

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
