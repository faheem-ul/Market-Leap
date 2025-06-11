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
import review1image from "@/public/images/Nail-saloon/reviewimage.png";
import signature1 from "@/public/images/Nail-saloon/signature1image.svg";
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
import inspired5 from "@/public/images/Nail-saloon/inspired5.avif";
import inspired6 from "@/public/images/Nail-saloon/inspired6.avif";

export const industries = [
  {
    id: "nail-saloon",
    marqueeImages: [marquee1, marquee2],
    title: "Nail Salon Software That Puts You In Control ",
    label:"Nail salon",
    makeTheMostSection: [
      {
        section1heading: "Smooth Calendar Management",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
          },
          {
            icon: manage,
            content:
              "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          },
          {
            icon: people,
            content:
              "Add unlimited tech calendars and sync them across multiple locations.",
          },
        ],
      },

      {
        section2heading: "Take payments At The Booth",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Take payments using just your phone — no hardware needed.",
          },
          {
            icon: payment2svg,
            content:
              "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          },
          {
            icon: payment3svg,
            content: "Access your funds instantly with Market Leap Checking.¹",
          },
        ],
      },
      {
        section3heading: "Keep Every Booth Booked And Busy",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
          },
          {
            icon: keep2svg,
            content:
              "Add a Book Now button to your Instagram and Facebook profiles.",
          },
          {
            icon: keep3svg,
            content: "Get discovered and booked on Market Leap Go.",
          },
          {
            icon: keep4svg,
            content:
              "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          },
        ],
      },
      {
        section4heading: "Turn Walk-ins Into Regulars",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
          },
          {
            icon: turn2,
            content:
              "Sell gift cards online and in person to reach even more customers. ",
          },
          {
            icon: turn3,
            content:
              "Drive repeat business with a loyalty program that rewards returning customers. ",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
        signature: signature1,
        name: "Rachel Dang",
        addresss: "Urban Nail BoxSeattle, WA",
      },
     
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Bank through Market Leap",
        description:
          "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
        image: sectionimage,
      },
      {
        heading: "Grow Your Client Base",
        description:
          "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
        image: grow,
      },
      {
        heading: "Add New Revenue Streams",
        description:
          "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Market Leap Handheld",
        image: square1,
        constent:
          "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
      },
      {
        heading: "Market Leap Register",
        image: square2,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution.",
      },
      {
        heading: "Market Leap Stand",
        image: sqaure3,
        constent:
          " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
      {
        heading: "Market Leap Terminal",
        image: sqaure4,
        constent:
          "Take payments, print receipts, and much more on a compact, countertop device.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description:
          "How to Keep Salon Appointments on Schedule When You’re Busy",
      },
      {
        image: inspired2,
        // heading: "",
        description: "How to Optimize Your Bookings on Social Media",
      },
      {
        image: inspired3,
        // heading: "",
        description: "The Art of Balancing Regular and Walk-In Appointments",
      },
      {
        image: inspired4,
        // heading: "",
        description: "Which States Have the Most Expensive Manicures?",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "Salon Booking and Cancellation Policy Templates and Examples You Need",
      },
      {
        image: inspired6,
        // heading: "",
        description: "5 Reasons Your Salon Needs a Loyalty Program",
      },
    ],
    faqData: [
      {
        title:
          "What is nail salon software and what does it do?",
        text: 
        "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
      },
      {
        title:
          "Can I use Market Leap to power my entire nail salon?",
        text: 
        "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
      },
      {
        title:
          "Is Market Leap right for my business?",
        text: 
        "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
      },
      {
        title:
          "What payment methods are supported by Market Leap POS?",
        text: 
        "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
      },
      {
        title:
          "How does Market Leap manage tipping for my nail technicians?",
        text: 
        "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
      },
      {
        title:
          "Can I book appointments and take payments from my website?",
        text: 
        "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
      },
    ],
  },

  // barbershop

  {
    id: "barber-shop",
    marqueeImages: [marquee1, marquee2],
    title: "Barber Shop",
    label:"Barbershop ",
    makeTheMostSection: [
      {
        section1heading: "Smooth Calendar Management",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
          },
          {
            icon: manage,
            content:
              "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          },
          {
            icon: people,
            content:
              "Add unlimited tech calendars and sync them across multiple locations.",
          },
        ],
      },

      {
        section2heading: "Take payments At The Booth",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Take payments using just your phone — no hardware needed.",
          },
          {
            icon: payment2svg,
            content:
              "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          },
          {
            icon: payment3svg,
            content: "Access your funds instantly with Market Leap Checking.¹",
          },
        ],
      },
      {
        section3heading: "Keep Every Booth Booked And Busy",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
          },
          {
            icon: keep2svg,
            content:
              "Add a Book Now button to your Instagram and Facebook profiles.",
          },
          {
            icon: keep3svg,
            content: "Get discovered and booked on Market Leap Go.",
          },
          {
            icon: keep4svg,
            content:
              "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          },
        ],
      },
      {
        section4heading: "Turn Walk-ins Into Regulars",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
          },
          {
            icon: turn2,
            content:
              "Sell gift cards online and in person to reach even more customers. ",
          },
          {
            icon: turn3,
            content:
              "Drive repeat business with a loyalty program that rewards returning customers. ",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
        signature: signature1,
        name: "Rachel Dang",
        addresss: "Urban Nail BoxSeattle, WA",
      },
     
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Bank through Market Leap",
        description:
          "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
        image: sectionimage,
      },
      {
        heading: "Grow Your Client Base",
        description:
          "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
        image: grow,
      },
      {
        heading: "Add New Revenue Streams",
        description:
          "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Market Leap Handheld",
        image: square1,
        constent:
          "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
      },
      {
        heading: "Market Leap Register",
        image: square2,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution.",
      },
      {
        heading: "Market Leap Stand",
        image: sqaure3,
        constent:
          " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
      {
        heading: "Market Leap Terminal",
        image: sqaure4,
        constent:
          "Take payments, print receipts, and much more on a compact, countertop device.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description:
          "How to Keep Salon Appointments on Schedule When You’re Busy",
      },
      {
        image: inspired2,
        // heading: "",
        description: "How to Optimize Your Bookings on Social Media",
      },
      {
        image: inspired3,
        // heading: "",
        description: "The Art of Balancing Regular and Walk-In Appointments",
      },
      {
        image: inspired4,
        // heading: "",
        description: "Which States Have the Most Expensive Manicures?",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "Salon Booking and Cancellation Policy Templates and Examples You Need",
      },
      {
        image: inspired6,
        // heading: "",
        description: "5 Reasons Your Salon Needs a Loyalty Program",
      },
    ],
    faqData: [
      {
        title:
          "What is nail salon software and what does it do?",
        text: 
        "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
      },
      {
        title:
          "Can I use Market Leap to power my entire nail salon?",
        text: 
        "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
      },
      {
        title:
          "Is Market Leap right for my business?",
        text: 
        "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
      },
      {
        title:
          "What payment methods are supported by Market Leap POS?",
        text: 
        "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
      },
      {
        title:
          "How does Market Leap manage tipping for my nail technicians?",
        text: 
        "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
      },
      {
        title:
          "Can I book appointments and take payments from my website?",
        text: 
        "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
      },
    ],
  },

  //beauty-salon

  {
    id: "beauty-salon",
    marqueeImages: [marquee1, marquee2],
    title: "beauty salon",
    label:"Beauty salon",
    makeTheMostSection: [
      {
        section1heading: "Smooth Calendar Management",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
          },
          {
            icon: manage,
            content:
              "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          },
          {
            icon: people,
            content:
              "Add unlimited tech calendars and sync them across multiple locations.",
          },
        ],
      },

      {
        section2heading: "Take payments At The Booth",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Take payments using just your phone — no hardware needed.",
          },
          {
            icon: payment2svg,
            content:
              "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          },
          {
            icon: payment3svg,
            content: "Access your funds instantly with Market Leap Checking.¹",
          },
        ],
      },
      {
        section3heading: "Keep Every Booth Booked And Busy",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
          },
          {
            icon: keep2svg,
            content:
              "Add a Book Now button to your Instagram and Facebook profiles.",
          },
          {
            icon: keep3svg,
            content: "Get discovered and booked on Market Leap Go.",
          },
          {
            icon: keep4svg,
            content:
              "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          },
        ],
      },
      {
        section4heading: "Turn Walk-ins Into Regulars",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
          },
          {
            icon: turn2,
            content:
              "Sell gift cards online and in person to reach even more customers. ",
          },
          {
            icon: turn3,
            content:
              "Drive repeat business with a loyalty program that rewards returning customers. ",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
        signature: signature1,
        name: "Rachel Dang",
        addresss: "Urban Nail BoxSeattle, WA",
      },
     
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Bank through Market Leap",
        description:
          "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
        image: sectionimage,
      },
      {
        heading: "Grow Your Client Base",
        description:
          "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
        image: grow,
      },
      {
        heading: "Add New Revenue Streams",
        description:
          "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Market Leap Handheld",
        image: square1,
        constent:
          "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
      },
      {
        heading: "Market Leap Register",
        image: square2,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution.",
      },
      {
        heading: "Market Leap Stand",
        image: sqaure3,
        constent:
          " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
      {
        heading: "Market Leap Terminal",
        image: sqaure4,
        constent:
          "Take payments, print receipts, and much more on a compact, countertop device.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description:
          "How to Keep Salon Appointments on Schedule When You’re Busy",
      },
      {
        image: inspired2,
        // heading: "",
        description: "How to Optimize Your Bookings on Social Media",
      },
      {
        image: inspired3,
        // heading: "",
        description: "The Art of Balancing Regular and Walk-In Appointments",
      },
      {
        image: inspired4,
        // heading: "",
        description: "Which States Have the Most Expensive Manicures?",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "Salon Booking and Cancellation Policy Templates and Examples You Need",
      },
      {
        image: inspired6,
        // heading: "",
        description: "5 Reasons Your Salon Needs a Loyalty Program",
      },
    ],
    faqData: [
      {
        title:
          "What is nail salon software and what does it do?",
        text: 
        "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
      },
      {
        title:
          "Can I use Market Leap to power my entire nail salon?",
        text: 
        "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
      },
      {
        title:
          "Is Market Leap right for my business?",
        text: 
        "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
      },
      {
        title:
          "What payment methods are supported by Market Leap POS?",
        text: 
        "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
      },
      {
        title:
          "How does Market Leap manage tipping for my nail technicians?",
        text: 
        "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
      },
      {
        title:
          "Can I book appointments and take payments from my website?",
        text: 
        "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
      },
    ],
  },

  //hair-salon

   {
    id: "hair-salon",
    marqueeImages: [marquee1, marquee2],
    title: "hair salon",
    label:"",
    makeTheMostSection: [
      {
        section1heading: "Smooth Calendar Management",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
          },
          {
            icon: manage,
            content:
              "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          },
          {
            icon: people,
            content:
              "Add unlimited tech calendars and sync them across multiple locations.",
          },
        ],
      },

      {
        section2heading: "Take payments At The Booth",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Take payments using just your phone — no hardware needed.",
          },
          {
            icon: payment2svg,
            content:
              "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          },
          {
            icon: payment3svg,
            content: "Access your funds instantly with Market Leap Checking.¹",
          },
        ],
      },
      {
        section3heading: "Keep Every Booth Booked And Busy",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
          },
          {
            icon: keep2svg,
            content:
              "Add a Book Now button to your Instagram and Facebook profiles.",
          },
          {
            icon: keep3svg,
            content: "Get discovered and booked on Market Leap Go.",
          },
          {
            icon: keep4svg,
            content:
              "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          },
        ],
      },
      {
        section4heading: "Turn Walk-ins Into Regulars",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
          },
          {
            icon: turn2,
            content:
              "Sell gift cards online and in person to reach even more customers. ",
          },
          {
            icon: turn3,
            content:
              "Drive repeat business with a loyalty program that rewards returning customers. ",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
        signature: signature1,
        name: "Rachel Dang",
        addresss: "Urban Nail BoxSeattle, WA",
      },
     
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Bank through Market Leap",
        description:
          "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
        image: sectionimage,
      },
      {
        heading: "Grow Your Client Base",
        description:
          "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
        image: grow,
      },
      {
        heading: "Add New Revenue Streams",
        description:
          "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Market Leap Handheld",
        image: square1,
        constent:
          "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
      },
      {
        heading: "Market Leap Register",
        image: square2,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution.",
      },
      {
        heading: "Market Leap Stand",
        image: sqaure3,
        constent:
          " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
      {
        heading: "Market Leap Terminal",
        image: sqaure4,
        constent:
          "Take payments, print receipts, and much more on a compact, countertop device.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description:
          "How to Keep Salon Appointments on Schedule When You’re Busy",
      },
      {
        image: inspired2,
        // heading: "",
        description: "How to Optimize Your Bookings on Social Media",
      },
      {
        image: inspired3,
        // heading: "",
        description: "The Art of Balancing Regular and Walk-In Appointments",
      },
      {
        image: inspired4,
        // heading: "",
        description: "Which States Have the Most Expensive Manicures?",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "Salon Booking and Cancellation Policy Templates and Examples You Need",
      },
      {
        image: inspired6,
        // heading: "",
        description: "5 Reasons Your Salon Needs a Loyalty Program",
      },
    ],
    faqData: [
      {
        title:
          "What is nail salon software and what does it do?",
        text: 
        "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
      },
      {
        title:
          "Can I use Market Leap to power my entire nail salon?",
        text: 
        "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
      },
      {
        title:
          "Is Market Leap right for my business?",
        text: 
        "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
      },
      {
        title:
          "What payment methods are supported by Market Leap POS?",
        text: 
        "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
      },
      {
        title:
          "How does Market Leap manage tipping for my nail technicians?",
        text: 
        "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
      },
      {
        title:
          "Can I book appointments and take payments from my website?",
        text: 
        "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
      },
    ],
  },

   //med-sap

   {
    id: "med-spa",
    marqueeImages: [marquee1, marquee2],
    title: "med-spa",
    label:"",
    makeTheMostSection: [
      {
        section1heading: "Smooth Calendar Management",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
          },
          {
            icon: manage,
            content:
              "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          },
          {
            icon: people,
            content:
              "Add unlimited tech calendars and sync them across multiple locations.",
          },
        ],
      },

      {
        section2heading: "Take payments At The Booth",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Take payments using just your phone — no hardware needed.",
          },
          {
            icon: payment2svg,
            content:
              "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          },
          {
            icon: payment3svg,
            content: "Access your funds instantly with Market Leap Checking.¹",
          },
        ],
      },
      {
        section3heading: "Keep Every Booth Booked And Busy",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
          },
          {
            icon: keep2svg,
            content:
              "Add a Book Now button to your Instagram and Facebook profiles.",
          },
          {
            icon: keep3svg,
            content: "Get discovered and booked on Market Leap Go.",
          },
          {
            icon: keep4svg,
            content:
              "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          },
        ],
      },
      {
        section4heading: "Turn Walk-ins Into Regulars",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
          },
          {
            icon: turn2,
            content:
              "Sell gift cards online and in person to reach even more customers. ",
          },
          {
            icon: turn3,
            content:
              "Drive repeat business with a loyalty program that rewards returning customers. ",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
        signature: signature1,
        name: "Rachel Dang",
        addresss: "Urban Nail BoxSeattle, WA",
      },
     
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Bank through Market Leap",
        description:
          "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
        image: sectionimage,
      },
      {
        heading: "Grow Your Client Base",
        description:
          "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
        image: grow,
      },
      {
        heading: "Add New Revenue Streams",
        description:
          "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Market Leap Handheld",
        image: square1,
        constent:
          "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
      },
      {
        heading: "Market Leap Register",
        image: square2,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution.",
      },
      {
        heading: "Market Leap Stand",
        image: sqaure3,
        constent:
          " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
      {
        heading: "Market Leap Terminal",
        image: sqaure4,
        constent:
          "Take payments, print receipts, and much more on a compact, countertop device.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description:
          "How to Keep Salon Appointments on Schedule When You’re Busy",
      },
      {
        image: inspired2,
        // heading: "",
        description: "How to Optimize Your Bookings on Social Media",
      },
      {
        image: inspired3,
        // heading: "",
        description: "The Art of Balancing Regular and Walk-In Appointments",
      },
      {
        image: inspired4,
        // heading: "",
        description: "Which States Have the Most Expensive Manicures?",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "Salon Booking and Cancellation Policy Templates and Examples You Need",
      },
      {
        image: inspired6,
        // heading: "",
        description: "5 Reasons Your Salon Needs a Loyalty Program",
      },
    ],
    faqData: [
      {
        title:
          "What is nail salon software and what does it do?",
        text: 
        "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
      },
      {
        title:
          "Can I use Market Leap to power my entire nail salon?",
        text: 
        "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
      },
      {
        title:
          "Is Market Leap right for my business?",
        text: 
        "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
      },
      {
        title:
          "What payment methods are supported by Market Leap POS?",
        text: 
        "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
      },
      {
        title:
          "How does Market Leap manage tipping for my nail technicians?",
        text: 
        "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
      },
      {
        title:
          "Can I book appointments and take payments from my website?",
        text: 
        "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
      },
    ],
  },

    //tatoo-and-piercing

    {
      id: "tatoo-and-piercing",
      marqueeImages: [marquee1, marquee2],
      title: "tatoo and piercing",
      label:"",
      makeTheMostSection: [
        {
          section1heading: "Smooth Calendar Management",
          section1Image: calenderImage,
          section1Content: [
            {
              icon: pen,
              content:
                "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
            },
            {
              icon: manage,
              content:
                "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
            },
            {
              icon: people,
              content:
                "Add unlimited tech calendars and sync them across multiple locations.",
            },
          ],
        },
  
        {
          section2heading: "Take payments At The Booth",
          section2Image: payment,
          section2Content: [
            {
              icon: paymnet1svg,
              content:
                "Take payments using just your phone — no hardware needed.",
            },
            {
              icon: payment2svg,
              content:
                "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
            },
            {
              icon: payment3svg,
              content: "Access your funds instantly with Market Leap Checking.¹",
            },
          ],
        },
        {
          section3heading: "Keep Every Booth Booked And Busy",
          section3Image: keep,
          section3Content: [
            {
              icon: keep1svg,
              content:
                "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
            },
            {
              icon: keep2svg,
              content:
                "Add a Book Now button to your Instagram and Facebook profiles.",
            },
            {
              icon: keep3svg,
              content: "Get discovered and booked on Market Leap Go.",
            },
            {
              icon: keep4svg,
              content:
                "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
            },
          ],
        },
        {
          section4heading: "Turn Walk-ins Into Regulars",
          section4Image: turn,
          section4Content: [
            {
              icon: turn1,
              content:
                "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
            },
            {
              icon: turn2,
              content:
                "Sell gift cards online and in person to reach even more customers. ",
            },
            {
              icon: turn3,
              content:
                "Drive repeat business with a loyalty program that rewards returning customers. ",
            },
          ],
        },
      ],
      ReviewSliderContent: [
        {
          image: review1image,
          review:
            "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
          signature: signature1,
          name: "Rachel Dang",
          addresss: "Urban Nail BoxSeattle, WA",
        },
       
      ],
  
      everythinguouneedtoKnow: [
        {
          heading: "Bank through Market Leap",
          description:
            "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
          image: sectionimage,
        },
        {
          heading: "Grow Your Client Base",
          description:
            "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
          image: grow,
        },
        {
          heading: "Add New Revenue Streams",
          description:
            "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
          image: add,
        },
      ],
      hardwarethatsuits: [
        {
          heading: "Market Leap Handheld",
          image: square1,
          constent:
            "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
        },
        {
          heading: "Market Leap Register",
          image: square2,
          constent:
            "Run your entire business right out of the box with a fully integrated, two-screen solution.",
        },
        {
          heading: "Market Leap Stand",
          image: sqaure3,
          constent:
            " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
        },
        {
          heading: "Market Leap Terminal",
          image: sqaure4,
          constent:
            "Take payments, print receipts, and much more on a compact, countertop device.",
        },
      ],
      getinspiredSection: [
        {
          image: inspired1,
          // heading: "",
          description:
            "How to Keep Salon Appointments on Schedule When You’re Busy",
        },
        {
          image: inspired2,
          // heading: "",
          description: "How to Optimize Your Bookings on Social Media",
        },
        {
          image: inspired3,
          // heading: "",
          description: "The Art of Balancing Regular and Walk-In Appointments",
        },
        {
          image: inspired4,
          // heading: "",
          description: "Which States Have the Most Expensive Manicures?",
        },
  
        {
          image: inspired5,
          // heading: "",
          description:
            "Salon Booking and Cancellation Policy Templates and Examples You Need",
        },
        {
          image: inspired6,
          // heading: "",
          description: "5 Reasons Your Salon Needs a Loyalty Program",
        },
      ],
      faqData: [
        {
          title:
            "What is nail salon software and what does it do?",
          text: 
          "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
        },
        {
          title:
            "Can I use Market Leap to power my entire nail salon?",
          text: 
          "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
        },
        {
          title:
            "Is Market Leap right for my business?",
          text: 
          "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
        },
        {
          title:
            "What payment methods are supported by Market Leap POS?",
          text: 
          "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
        },
        {
          title:
            "How does Market Leap manage tipping for my nail technicians?",
          text: 
          "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
        },
        {
          title:
            "Can I book appointments and take payments from my website?",
          text: 
          "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
        },
      ],
    },

    //clothing

    {
      id: "clothing",
      marqueeImages: [marquee1, marquee2],
      title: "clothing",
      label:"",
      makeTheMostSection: [
        {
          section1heading: "Smooth Calendar Management",
          section1Image: calenderImage,
          section1Content: [
            {
              icon: pen,
              content:
                "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
            },
            {
              icon: manage,
              content:
                "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
            },
            {
              icon: people,
              content:
                "Add unlimited tech calendars and sync them across multiple locations.",
            },
          ],
        },
  
        {
          section2heading: "Take payments At The Booth",
          section2Image: payment,
          section2Content: [
            {
              icon: paymnet1svg,
              content:
                "Take payments using just your phone — no hardware needed.",
            },
            {
              icon: payment2svg,
              content:
                "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
            },
            {
              icon: payment3svg,
              content: "Access your funds instantly with Market Leap Checking.¹",
            },
          ],
        },
        {
          section3heading: "Keep Every Booth Booked And Busy",
          section3Image: keep,
          section3Content: [
            {
              icon: keep1svg,
              content:
                "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
            },
            {
              icon: keep2svg,
              content:
                "Add a Book Now button to your Instagram and Facebook profiles.",
            },
            {
              icon: keep3svg,
              content: "Get discovered and booked on Market Leap Go.",
            },
            {
              icon: keep4svg,
              content:
                "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
            },
          ],
        },
        {
          section4heading: "Turn Walk-ins Into Regulars",
          section4Image: turn,
          section4Content: [
            {
              icon: turn1,
              content:
                "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
            },
            {
              icon: turn2,
              content:
                "Sell gift cards online and in person to reach even more customers. ",
            },
            {
              icon: turn3,
              content:
                "Drive repeat business with a loyalty program that rewards returning customers. ",
            },
          ],
        },
      ],
      ReviewSliderContent: [
        {
          image: review1image,
          review:
            "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
          signature: signature1,
          name: "Rachel Dang",
          addresss: "Urban Nail BoxSeattle, WA",
        },
       
      ],
  
      everythinguouneedtoKnow: [
        {
          heading: "Bank through Market Leap",
          description:
            "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
          image: sectionimage,
        },
        {
          heading: "Grow Your Client Base",
          description:
            "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
          image: grow,
        },
        {
          heading: "Add New Revenue Streams",
          description:
            "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
          image: add,
        },
      ],
      hardwarethatsuits: [
        {
          heading: "Market Leap Handheld",
          image: square1,
          constent:
            "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
        },
        {
          heading: "Market Leap Register",
          image: square2,
          constent:
            "Run your entire business right out of the box with a fully integrated, two-screen solution.",
        },
        {
          heading: "Market Leap Stand",
          image: sqaure3,
          constent:
            " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
        },
        {
          heading: "Market Leap Terminal",
          image: sqaure4,
          constent:
            "Take payments, print receipts, and much more on a compact, countertop device.",
        },
      ],
      getinspiredSection: [
        {
          image: inspired1,
          // heading: "",
          description:
            "How to Keep Salon Appointments on Schedule When You’re Busy",
        },
        {
          image: inspired2,
          // heading: "",
          description: "How to Optimize Your Bookings on Social Media",
        },
        {
          image: inspired3,
          // heading: "",
          description: "The Art of Balancing Regular and Walk-In Appointments",
        },
        {
          image: inspired4,
          // heading: "",
          description: "Which States Have the Most Expensive Manicures?",
        },
  
        {
          image: inspired5,
          // heading: "",
          description:
            "Salon Booking and Cancellation Policy Templates and Examples You Need",
        },
        {
          image: inspired6,
          // heading: "",
          description: "5 Reasons Your Salon Needs a Loyalty Program",
        },
      ],
      faqData: [
        {
          title:
            "What is nail salon software and what does it do?",
          text: 
          "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
        },
        {
          title:
            "Can I use Market Leap to power my entire nail salon?",
          text: 
          "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
        },
        {
          title:
            "Is Market Leap right for my business?",
          text: 
          "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
        },
        {
          title:
            "What payment methods are supported by Market Leap POS?",
          text: 
          "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
        },
        {
          title:
            "How does Market Leap manage tipping for my nail technicians?",
          text: 
          "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
        },
        {
          title:
            "Can I book appointments and take payments from my website?",
          text: 
          "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
        },
      ],
    },

     //garden
    
     {
      id: "garden",
      marqueeImages: [marquee1, marquee2],
      title: "clothing",
      label:"",
      makeTheMostSection: [
        {
          section1heading: "Smooth Calendar Management",
          section1Image: calenderImage,
          section1Content: [
            {
              icon: pen,
              content:
                "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
            },
            {
              icon: manage,
              content:
                "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
            },
            {
              icon: people,
              content:
                "Add unlimited tech calendars and sync them across multiple locations.",
            },
          ],
        },
  
        {
          section2heading: "Take payments At The Booth",
          section2Image: payment,
          section2Content: [
            {
              icon: paymnet1svg,
              content:
                "Take payments using just your phone — no hardware needed.",
            },
            {
              icon: payment2svg,
              content:
                "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
            },
            {
              icon: payment3svg,
              content: "Access your funds instantly with Market Leap Checking.¹",
            },
          ],
        },
        {
          section3heading: "Keep Every Booth Booked And Busy",
          section3Image: keep,
          section3Content: [
            {
              icon: keep1svg,
              content:
                "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
            },
            {
              icon: keep2svg,
              content:
                "Add a Book Now button to your Instagram and Facebook profiles.",
            },
            {
              icon: keep3svg,
              content: "Get discovered and booked on Market Leap Go.",
            },
            {
              icon: keep4svg,
              content:
                "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
            },
          ],
        },
        {
          section4heading: "Turn Walk-ins Into Regulars",
          section4Image: turn,
          section4Content: [
            {
              icon: turn1,
              content:
                "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
            },
            {
              icon: turn2,
              content:
                "Sell gift cards online and in person to reach even more customers. ",
            },
            {
              icon: turn3,
              content:
                "Drive repeat business with a loyalty program that rewards returning customers. ",
            },
          ],
        },
      ],
      ReviewSliderContent: [
        {
          image: review1image,
          review:
            "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
          signature: signature1,
          name: "Rachel Dang",
          addresss: "Urban Nail BoxSeattle, WA",
        },
       
      ],
  
      everythinguouneedtoKnow: [
        {
          heading: "Bank through Market Leap",
          description:
            "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
          image: sectionimage,
        },
        {
          heading: "Grow Your Client Base",
          description:
            "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
          image: grow,
        },
        {
          heading: "Add New Revenue Streams",
          description:
            "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
          image: add,
        },
      ],
      hardwarethatsuits: [
        {
          heading: "Market Leap Handheld",
          image: square1,
          constent:
            "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
        },
        {
          heading: "Market Leap Register",
          image: square2,
          constent:
            "Run your entire business right out of the box with a fully integrated, two-screen solution.",
        },
        {
          heading: "Market Leap Stand",
          image: sqaure3,
          constent:
            " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
        },
        {
          heading: "Market Leap Terminal",
          image: sqaure4,
          constent:
            "Take payments, print receipts, and much more on a compact, countertop device.",
        },
      ],
      getinspiredSection: [
        {
          image: inspired1,
          // heading: "",
          description:
            "How to Keep Salon Appointments on Schedule When You’re Busy",
        },
        {
          image: inspired2,
          // heading: "",
          description: "How to Optimize Your Bookings on Social Media",
        },
        {
          image: inspired3,
          // heading: "",
          description: "The Art of Balancing Regular and Walk-In Appointments",
        },
        {
          image: inspired4,
          // heading: "",
          description: "Which States Have the Most Expensive Manicures?",
        },
  
        {
          image: inspired5,
          // heading: "",
          description:
            "Salon Booking and Cancellation Policy Templates and Examples You Need",
        },
        {
          image: inspired6,
          // heading: "",
          description: "5 Reasons Your Salon Needs a Loyalty Program",
        },
      ],
      faqData: [
        {
          title:
            "What is nail salon software and what does it do?",
          text: 
          "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
        },
        {
          title:
            "Can I use Market Leap to power my entire nail salon?",
          text: 
          "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
        },
        {
          title:
            "Is Market Leap right for my business?",
          text: 
          "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
        },
        {
          title:
            "What payment methods are supported by Market Leap POS?",
          text: 
          "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
        },
        {
          title:
            "How does Market Leap manage tipping for my nail technicians?",
          text: 
          "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
        },
        {
          title:
            "Can I book appointments and take payments from my website?",
          text: 
          "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
        },
      ],
    },

    //grocery
    
     {
      id: "grocery",
      marqueeImages: [marquee1, marquee2],
      title: "grocery",
      label:"",
      makeTheMostSection: [
        {
          section1heading: "Smooth Calendar Management",
          section1Image: calenderImage,
          section1Content: [
            {
              icon: pen,
              content:
                "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
            },
            {
              icon: manage,
              content:
                "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
            },
            {
              icon: people,
              content:
                "Add unlimited tech calendars and sync them across multiple locations.",
            },
          ],
        },
  
        {
          section2heading: "Take payments At The Booth",
          section2Image: payment,
          section2Content: [
            {
              icon: paymnet1svg,
              content:
                "Take payments using just your phone — no hardware needed.",
            },
            {
              icon: payment2svg,
              content:
                "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
            },
            {
              icon: payment3svg,
              content: "Access your funds instantly with Market Leap Checking.¹",
            },
          ],
        },
        {
          section3heading: "Keep Every Booth Booked And Busy",
          section3Image: keep,
          section3Content: [
            {
              icon: keep1svg,
              content:
                "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
            },
            {
              icon: keep2svg,
              content:
                "Add a Book Now button to your Instagram and Facebook profiles.",
            },
            {
              icon: keep3svg,
              content: "Get discovered and booked on Market Leap Go.",
            },
            {
              icon: keep4svg,
              content:
                "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
            },
          ],
        },
        {
          section4heading: "Turn Walk-ins Into Regulars",
          section4Image: turn,
          section4Content: [
            {
              icon: turn1,
              content:
                "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
            },
            {
              icon: turn2,
              content:
                "Sell gift cards online and in person to reach even more customers. ",
            },
            {
              icon: turn3,
              content:
                "Drive repeat business with a loyalty program that rewards returning customers. ",
            },
          ],
        },
      ],
      ReviewSliderContent: [
        {
          image: review1image,
          review:
            "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
          signature: signature1,
          name: "Rachel Dang",
          addresss: "Urban Nail BoxSeattle, WA",
        },
       
      ],
  
      everythinguouneedtoKnow: [
        {
          heading: "Bank through Market Leap",
          description:
            "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
          image: sectionimage,
        },
        {
          heading: "Grow Your Client Base",
          description:
            "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
          image: grow,
        },
        {
          heading: "Add New Revenue Streams",
          description:
            "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
          image: add,
        },
      ],
      hardwarethatsuits: [
        {
          heading: "Market Leap Handheld",
          image: square1,
          constent:
            "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
        },
        {
          heading: "Market Leap Register",
          image: square2,
          constent:
            "Run your entire business right out of the box with a fully integrated, two-screen solution.",
        },
        {
          heading: "Market Leap Stand",
          image: sqaure3,
          constent:
            " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
        },
        {
          heading: "Market Leap Terminal",
          image: sqaure4,
          constent:
            "Take payments, print receipts, and much more on a compact, countertop device.",
        },
      ],
      getinspiredSection: [
        {
          image: inspired1,
          // heading: "",
          description:
            "How to Keep Salon Appointments on Schedule When You’re Busy",
        },
        {
          image: inspired2,
          // heading: "",
          description: "How to Optimize Your Bookings on Social Media",
        },
        {
          image: inspired3,
          // heading: "",
          description: "The Art of Balancing Regular and Walk-In Appointments",
        },
        {
          image: inspired4,
          // heading: "",
          description: "Which States Have the Most Expensive Manicures?",
        },
  
        {
          image: inspired5,
          // heading: "",
          description:
            "Salon Booking and Cancellation Policy Templates and Examples You Need",
        },
        {
          image: inspired6,
          // heading: "",
          description: "5 Reasons Your Salon Needs a Loyalty Program",
        },
      ],
      faqData: [
        {
          title:
            "What is nail salon software and what does it do?",
          text: 
          "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
        },
        {
          title:
            "Can I use Market Leap to power my entire nail salon?",
          text: 
          "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
        },
        {
          title:
            "Is Market Leap right for my business?",
          text: 
          "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
        },
        {
          title:
            "What payment methods are supported by Market Leap POS?",
          text: 
          "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
        },
        {
          title:
            "How does Market Leap manage tipping for my nail technicians?",
          text: 
          "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
        },
        {
          title:
            "Can I book appointments and take payments from my website?",
          text: 
          "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
        },
      ],
    },

     //home-and-gift
    
     {
      id: "home-and-gift",
      marqueeImages: [marquee1, marquee2],
      title: "home and gift",
      label:"",
      makeTheMostSection: [
        {
          section1heading: "Smooth Calendar Management",
          section1Image: calenderImage,
          section1Content: [
            {
              icon: pen,
              content:
                "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
            },
            {
              icon: manage,
              content:
                "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
            },
            {
              icon: people,
              content:
                "Add unlimited tech calendars and sync them across multiple locations.",
            },
          ],
        },
  
        {
          section2heading: "Take payments At The Booth",
          section2Image: payment,
          section2Content: [
            {
              icon: paymnet1svg,
              content:
                "Take payments using just your phone — no hardware needed.",
            },
            {
              icon: payment2svg,
              content:
                "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
            },
            {
              icon: payment3svg,
              content: "Access your funds instantly with Market Leap Checking.¹",
            },
          ],
        },
        {
          section3heading: "Keep Every Booth Booked And Busy",
          section3Image: keep,
          section3Content: [
            {
              icon: keep1svg,
              content:
                "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
            },
            {
              icon: keep2svg,
              content:
                "Add a Book Now button to your Instagram and Facebook profiles.",
            },
            {
              icon: keep3svg,
              content: "Get discovered and booked on Market Leap Go.",
            },
            {
              icon: keep4svg,
              content:
                "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
            },
          ],
        },
        {
          section4heading: "Turn Walk-ins Into Regulars",
          section4Image: turn,
          section4Content: [
            {
              icon: turn1,
              content:
                "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
            },
            {
              icon: turn2,
              content:
                "Sell gift cards online and in person to reach even more customers. ",
            },
            {
              icon: turn3,
              content:
                "Drive repeat business with a loyalty program that rewards returning customers. ",
            },
          ],
        },
      ],
      ReviewSliderContent: [
        {
          image: review1image,
          review:
            "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
          signature: signature1,
          name: "Rachel Dang",
          addresss: "Urban Nail BoxSeattle, WA",
        },
       
      ],
  
      everythinguouneedtoKnow: [
        {
          heading: "Bank through Market Leap",
          description:
            "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
          image: sectionimage,
        },
        {
          heading: "Grow Your Client Base",
          description:
            "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
          image: grow,
        },
        {
          heading: "Add New Revenue Streams",
          description:
            "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
          image: add,
        },
      ],
      hardwarethatsuits: [
        {
          heading: "Market Leap Handheld",
          image: square1,
          constent:
            "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
        },
        {
          heading: "Market Leap Register",
          image: square2,
          constent:
            "Run your entire business right out of the box with a fully integrated, two-screen solution.",
        },
        {
          heading: "Market Leap Stand",
          image: sqaure3,
          constent:
            " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
        },
        {
          heading: "Market Leap Terminal",
          image: sqaure4,
          constent:
            "Take payments, print receipts, and much more on a compact, countertop device.",
        },
      ],
      getinspiredSection: [
        {
          image: inspired1,
          // heading: "",
          description:
            "How to Keep Salon Appointments on Schedule When You’re Busy",
        },
        {
          image: inspired2,
          // heading: "",
          description: "How to Optimize Your Bookings on Social Media",
        },
        {
          image: inspired3,
          // heading: "",
          description: "The Art of Balancing Regular and Walk-In Appointments",
        },
        {
          image: inspired4,
          // heading: "",
          description: "Which States Have the Most Expensive Manicures?",
        },
  
        {
          image: inspired5,
          // heading: "",
          description:
            "Salon Booking and Cancellation Policy Templates and Examples You Need",
        },
        {
          image: inspired6,
          // heading: "",
          description: "5 Reasons Your Salon Needs a Loyalty Program",
        },
      ],
      faqData: [
        {
          title:
            "What is nail salon software and what does it do?",
          text: 
          "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
        },
        {
          title:
            "Can I use Market Leap to power my entire nail salon?",
          text: 
          "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
        },
        {
          title:
            "Is Market Leap right for my business?",
          text: 
          "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
        },
        {
          title:
            "What payment methods are supported by Market Leap POS?",
          text: 
          "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
        },
        {
          title:
            "How does Market Leap manage tipping for my nail technicians?",
          text: 
          "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
        },
        {
          title:
            "Can I book appointments and take payments from my website?",
          text: 
          "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
        },
      ],
    },


      //wine-and-liquor
    
      {
        id: "wine-and-liquor",
        marqueeImages: [marquee1, marquee2],
        title: "wine and liquor",
        label:"",
        makeTheMostSection: [
          {
            section1heading: "Smooth Calendar Management",
            section1Image: calenderImage,
            section1Content: [
              {
                icon: pen,
                content:
                  "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
              },
              {
                icon: manage,
                content:
                  "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
              },
              {
                icon: people,
                content:
                  "Add unlimited tech calendars and sync them across multiple locations.",
              },
            ],
          },
    
          {
            section2heading: "Take payments At The Booth",
            section2Image: payment,
            section2Content: [
              {
                icon: paymnet1svg,
                content:
                  "Take payments using just your phone — no hardware needed.",
              },
              {
                icon: payment2svg,
                content:
                  "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
              },
              {
                icon: payment3svg,
                content: "Access your funds instantly with Market Leap Checking.¹",
              },
            ],
          },
          {
            section3heading: "Keep Every Booth Booked And Busy",
            section3Image: keep,
            section3Content: [
              {
                icon: keep1svg,
                content:
                  "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
              },
              {
                icon: keep2svg,
                content:
                  "Add a Book Now button to your Instagram and Facebook profiles.",
              },
              {
                icon: keep3svg,
                content: "Get discovered and booked on Market Leap Go.",
              },
              {
                icon: keep4svg,
                content:
                  "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
              },
            ],
          },
          {
            section4heading: "Turn Walk-ins Into Regulars",
            section4Image: turn,
            section4Content: [
              {
                icon: turn1,
                content:
                  "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
              },
              {
                icon: turn2,
                content:
                  "Sell gift cards online and in person to reach even more customers. ",
              },
              {
                icon: turn3,
                content:
                  "Drive repeat business with a loyalty program that rewards returning customers. ",
              },
            ],
          },
        ],
        ReviewSliderContent: [
          {
            image: review1image,
            review:
              "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
            signature: signature1,
            name: "Rachel Dang",
            addresss: "Urban Nail BoxSeattle, WA",
          },
         
        ],
    
        everythinguouneedtoKnow: [
          {
            heading: "Bank through Market Leap",
            description:
              "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
            image: sectionimage,
          },
          {
            heading: "Grow Your Client Base",
            description:
              "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
            image: grow,
          },
          {
            heading: "Add New Revenue Streams",
            description:
              "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
            image: add,
          },
        ],
        hardwarethatsuits: [
          {
            heading: "Market Leap Handheld",
            image: square1,
            constent:
              "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
          },
          {
            heading: "Market Leap Register",
            image: square2,
            constent:
              "Run your entire business right out of the box with a fully integrated, two-screen solution.",
          },
          {
            heading: "Market Leap Stand",
            image: sqaure3,
            constent:
              " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
          },
          {
            heading: "Market Leap Terminal",
            image: sqaure4,
            constent:
              "Take payments, print receipts, and much more on a compact, countertop device.",
          },
        ],
        getinspiredSection: [
          {
            image: inspired1,
            // heading: "",
            description:
              "How to Keep Salon Appointments on Schedule When You’re Busy",
          },
          {
            image: inspired2,
            // heading: "",
            description: "How to Optimize Your Bookings on Social Media",
          },
          {
            image: inspired3,
            // heading: "",
            description: "The Art of Balancing Regular and Walk-In Appointments",
          },
          {
            image: inspired4,
            // heading: "",
            description: "Which States Have the Most Expensive Manicures?",
          },
    
          {
            image: inspired5,
            // heading: "",
            description:
              "Salon Booking and Cancellation Policy Templates and Examples You Need",
          },
          {
            image: inspired6,
            // heading: "",
            description: "5 Reasons Your Salon Needs a Loyalty Program",
          },
        ],
        faqData: [
          {
            title:
              "What is nail salon software and what does it do?",
            text: 
            "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
          },
          {
            title:
              "Can I use Market Leap to power my entire nail salon?",
            text: 
            "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
          },
          {
            title:
              "Is Market Leap right for my business?",
            text: 
            "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
          },
          {
            title:
              "What payment methods are supported by Market Leap POS?",
            text: 
            "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
          },
          {
            title:
              "How does Market Leap manage tipping for my nail technicians?",
            text: 
            "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
          },
          {
            title:
              "Can I book appointments and take payments from my website?",
            text: 
            "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
          },
        ],
      },

      //cbd
    
      {
        id: "cbd",
        marqueeImages: [marquee1, marquee2],
        title: "CBD",
        label:"",
        makeTheMostSection: [
          {
            section1heading: "Smooth Calendar Management",
            section1Image: calenderImage,
            section1Content: [
              {
                icon: pen,
                content:
                  "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
              },
              {
                icon: manage,
                content:
                  "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
              },
              {
                icon: people,
                content:
                  "Add unlimited tech calendars and sync them across multiple locations.",
              },
            ],
          },
    
          {
            section2heading: "Take payments At The Booth",
            section2Image: payment,
            section2Content: [
              {
                icon: paymnet1svg,
                content:
                  "Take payments using just your phone — no hardware needed.",
              },
              {
                icon: payment2svg,
                content:
                  "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
              },
              {
                icon: payment3svg,
                content: "Access your funds instantly with Market Leap Checking.¹",
              },
            ],
          },
          {
            section3heading: "Keep Every Booth Booked And Busy",
            section3Image: keep,
            section3Content: [
              {
                icon: keep1svg,
                content:
                  "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
              },
              {
                icon: keep2svg,
                content:
                  "Add a Book Now button to your Instagram and Facebook profiles.",
              },
              {
                icon: keep3svg,
                content: "Get discovered and booked on Market Leap Go.",
              },
              {
                icon: keep4svg,
                content:
                  "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
              },
            ],
          },
          {
            section4heading: "Turn Walk-ins Into Regulars",
            section4Image: turn,
            section4Content: [
              {
                icon: turn1,
                content:
                  "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
              },
              {
                icon: turn2,
                content:
                  "Sell gift cards online and in person to reach even more customers. ",
              },
              {
                icon: turn3,
                content:
                  "Drive repeat business with a loyalty program that rewards returning customers. ",
              },
            ],
          },
        ],
        ReviewSliderContent: [
          {
            image: review1image,
            review:
              "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
            signature: signature1,
            name: "Rachel Dang",
            addresss: "Urban Nail BoxSeattle, WA",
          },
         
        ],
    
        everythinguouneedtoKnow: [
          {
            heading: "Bank through Market Leap",
            description:
              "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
            image: sectionimage,
          },
          {
            heading: "Grow Your Client Base",
            description:
              "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
            image: grow,
          },
          {
            heading: "Add New Revenue Streams",
            description:
              "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
            image: add,
          },
        ],
        hardwarethatsuits: [
          {
            heading: "Market Leap Handheld",
            image: square1,
            constent:
              "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
          },
          {
            heading: "Market Leap Register",
            image: square2,
            constent:
              "Run your entire business right out of the box with a fully integrated, two-screen solution.",
          },
          {
            heading: "Market Leap Stand",
            image: sqaure3,
            constent:
              " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
          },
          {
            heading: "Market Leap Terminal",
            image: sqaure4,
            constent:
              "Take payments, print receipts, and much more on a compact, countertop device.",
          },
        ],
        getinspiredSection: [
          {
            image: inspired1,
            // heading: "",
            description:
              "How to Keep Salon Appointments on Schedule When You’re Busy",
          },
          {
            image: inspired2,
            // heading: "",
            description: "How to Optimize Your Bookings on Social Media",
          },
          {
            image: inspired3,
            // heading: "",
            description: "The Art of Balancing Regular and Walk-In Appointments",
          },
          {
            image: inspired4,
            // heading: "",
            description: "Which States Have the Most Expensive Manicures?",
          },
    
          {
            image: inspired5,
            // heading: "",
            description:
              "Salon Booking and Cancellation Policy Templates and Examples You Need",
          },
          {
            image: inspired6,
            // heading: "",
            description: "5 Reasons Your Salon Needs a Loyalty Program",
          },
        ],
        faqData: [
          {
            title:
              "What is nail salon software and what does it do?",
            text: 
            "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
          },
          {
            title:
              "Can I use Market Leap to power my entire nail salon?",
            text: 
            "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
          },
          {
            title:
              "Is Market Leap right for my business?",
            text: 
            "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
          },
          {
            title:
              "What payment methods are supported by Market Leap POS?",
            text: 
            "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
          },
          {
            title:
              "How does Market Leap manage tipping for my nail technicians?",
            text: 
            "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
          },
          {
            title:
              "Can I book appointments and take payments from my website?",
            text: 
            "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
          },
        ],
      },


      //day-spa

      {
        id: "day-spa",
        marqueeImages: [marquee1, marquee2],
        title: "day spa",
        label:"",
        makeTheMostSection: [
          {
            section1heading: "Smooth Calendar Management",
            section1Image: calenderImage,
            section1Content: [
              {
                icon: pen,
                content:
                  "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
              },
              {
                icon: manage,
                content:
                  "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
              },
              {
                icon: people,
                content:
                  "Add unlimited tech calendars and sync them across multiple locations.",
              },
            ],
          },
    
          {
            section2heading: "Take payments At The Booth",
            section2Image: payment,
            section2Content: [
              {
                icon: paymnet1svg,
                content:
                  "Take payments using just your phone — no hardware needed.",
              },
              {
                icon: payment2svg,
                content:
                  "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
              },
              {
                icon: payment3svg,
                content: "Access your funds instantly with Market Leap Checking.¹",
              },
            ],
          },
          {
            section3heading: "Keep Every Booth Booked And Busy",
            section3Image: keep,
            section3Content: [
              {
                icon: keep1svg,
                content:
                  "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
              },
              {
                icon: keep2svg,
                content:
                  "Add a Book Now button to your Instagram and Facebook profiles.",
              },
              {
                icon: keep3svg,
                content: "Get discovered and booked on Market Leap Go.",
              },
              {
                icon: keep4svg,
                content:
                  "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
              },
            ],
          },
          {
            section4heading: "Turn Walk-ins Into Regulars",
            section4Image: turn,
            section4Content: [
              {
                icon: turn1,
                content:
                  "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
              },
              {
                icon: turn2,
                content:
                  "Sell gift cards online and in person to reach even more customers. ",
              },
              {
                icon: turn3,
                content:
                  "Drive repeat business with a loyalty program that rewards returning customers. ",
              },
            ],
          },
        ],
        ReviewSliderContent: [
          {
            image: review1image,
            review:
              "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
            signature: signature1,
            name: "Rachel Dang",
            addresss: "Urban Nail BoxSeattle, WA",
          },
         
        ],
    
        everythinguouneedtoKnow: [
          {
            heading: "Bank through Market Leap",
            description:
              "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
            image: sectionimage,
          },
          {
            heading: "Grow Your Client Base",
            description:
              "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
            image: grow,
          },
          {
            heading: "Add New Revenue Streams",
            description:
              "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
            image: add,
          },
        ],
        hardwarethatsuits: [
          {
            heading: "Market Leap Handheld",
            image: square1,
            constent:
              "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
          },
          {
            heading: "Market Leap Register",
            image: square2,
            constent:
              "Run your entire business right out of the box with a fully integrated, two-screen solution.",
          },
          {
            heading: "Market Leap Stand",
            image: sqaure3,
            constent:
              " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
          },
          {
            heading: "Market Leap Terminal",
            image: sqaure4,
            constent:
              "Take payments, print receipts, and much more on a compact, countertop device.",
          },
        ],
        getinspiredSection: [
          {
            image: inspired1,
            // heading: "",
            description:
              "How to Keep Salon Appointments on Schedule When You’re Busy",
          },
          {
            image: inspired2,
            // heading: "",
            description: "How to Optimize Your Bookings on Social Media",
          },
          {
            image: inspired3,
            // heading: "",
            description: "The Art of Balancing Regular and Walk-In Appointments",
          },
          {
            image: inspired4,
            // heading: "",
            description: "Which States Have the Most Expensive Manicures?",
          },
    
          {
            image: inspired5,
            // heading: "",
            description:
              "Salon Booking and Cancellation Policy Templates and Examples You Need",
          },
          {
            image: inspired6,
            // heading: "",
            description: "5 Reasons Your Salon Needs a Loyalty Program",
          },
        ],
        faqData: [
          {
            title:
              "What is nail salon software and what does it do?",
            text: 
            "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
          },
          {
            title:
              "Can I use Market Leap to power my entire nail salon?",
            text: 
            "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
          },
          {
            title:
              "Is Market Leap right for my business?",
            text: 
            "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
          },
          {
            title:
              "What payment methods are supported by Market Leap POS?",
            text: 
            "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
          },
          {
            title:
              "How does Market Leap manage tipping for my nail technicians?",
            text: 
            "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
          },
          {
            title:
              "Can I book appointments and take payments from my website?",
            text: 
            "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
          },
        ],
      },

       //fitness

       {
        id: "fitness",
        marqueeImages: [marquee1, marquee2],
        title: "fitness",
        label:"",
        makeTheMostSection: [
          {
            section1heading: "Smooth Calendar Management",
            section1Image: calenderImage,
            section1Content: [
              {
                icon: pen,
                content:
                  "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
              },
              {
                icon: manage,
                content:
                  "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
              },
              {
                icon: people,
                content:
                  "Add unlimited tech calendars and sync them across multiple locations.",
              },
            ],
          },
    
          {
            section2heading: "Take payments At The Booth",
            section2Image: payment,
            section2Content: [
              {
                icon: paymnet1svg,
                content:
                  "Take payments using just your phone — no hardware needed.",
              },
              {
                icon: payment2svg,
                content:
                  "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
              },
              {
                icon: payment3svg,
                content: "Access your funds instantly with Market Leap Checking.¹",
              },
            ],
          },
          {
            section3heading: "Keep Every Booth Booked And Busy",
            section3Image: keep,
            section3Content: [
              {
                icon: keep1svg,
                content:
                  "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
              },
              {
                icon: keep2svg,
                content:
                  "Add a Book Now button to your Instagram and Facebook profiles.",
              },
              {
                icon: keep3svg,
                content: "Get discovered and booked on Market Leap Go.",
              },
              {
                icon: keep4svg,
                content:
                  "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
              },
            ],
          },
          {
            section4heading: "Turn Walk-ins Into Regulars",
            section4Image: turn,
            section4Content: [
              {
                icon: turn1,
                content:
                  "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
              },
              {
                icon: turn2,
                content:
                  "Sell gift cards online and in person to reach even more customers. ",
              },
              {
                icon: turn3,
                content:
                  "Drive repeat business with a loyalty program that rewards returning customers. ",
              },
            ],
          },
        ],
        ReviewSliderContent: [
          {
            image: review1image,
            review:
              "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
            signature: signature1,
            name: "Rachel Dang",
            addresss: "Urban Nail BoxSeattle, WA",
          },
         
        ],
    
        everythinguouneedtoKnow: [
          {
            heading: "Bank through Market Leap",
            description:
              "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
            image: sectionimage,
          },
          {
            heading: "Grow Your Client Base",
            description:
              "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
            image: grow,
          },
          {
            heading: "Add New Revenue Streams",
            description:
              "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
            image: add,
          },
        ],
        hardwarethatsuits: [
          {
            heading: "Market Leap Handheld",
            image: square1,
            constent:
              "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
          },
          {
            heading: "Market Leap Register",
            image: square2,
            constent:
              "Run your entire business right out of the box with a fully integrated, two-screen solution.",
          },
          {
            heading: "Market Leap Stand",
            image: sqaure3,
            constent:
              " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
          },
          {
            heading: "Market Leap Terminal",
            image: sqaure4,
            constent:
              "Take payments, print receipts, and much more on a compact, countertop device.",
          },
        ],
        getinspiredSection: [
          {
            image: inspired1,
            // heading: "",
            description:
              "How to Keep Salon Appointments on Schedule When You’re Busy",
          },
          {
            image: inspired2,
            // heading: "",
            description: "How to Optimize Your Bookings on Social Media",
          },
          {
            image: inspired3,
            // heading: "",
            description: "The Art of Balancing Regular and Walk-In Appointments",
          },
          {
            image: inspired4,
            // heading: "",
            description: "Which States Have the Most Expensive Manicures?",
          },
    
          {
            image: inspired5,
            // heading: "",
            description:
              "Salon Booking and Cancellation Policy Templates and Examples You Need",
          },
          {
            image: inspired6,
            // heading: "",
            description: "5 Reasons Your Salon Needs a Loyalty Program",
          },
        ],
        faqData: [
          {
            title:
              "What is nail salon software and what does it do?",
            text: 
            "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
          },
          {
            title:
              "Can I use Market Leap to power my entire nail salon?",
            text: 
            "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
          },
          {
            title:
              "Is Market Leap right for my business?",
            text: 
            "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
          },
          {
            title:
              "What payment methods are supported by Market Leap POS?",
            text: 
            "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
          },
          {
            title:
              "How does Market Leap manage tipping for my nail technicians?",
            text: 
            "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
          },
          {
            title:
              "Can I book appointments and take payments from my website?",
            text: 
            "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
          },
        ],
      },


        //health-care

        {
          id: "health-care",
          marqueeImages: [marquee1, marquee2],
          title: "health care",
          label:"",
          makeTheMostSection: [
            {
              section1heading: "Smooth Calendar Management",
              section1Image: calenderImage,
              section1Content: [
                {
                  icon: pen,
                  content:
                    "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                },
                {
                  icon: manage,
                  content:
                    "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                },
                {
                  icon: people,
                  content:
                    "Add unlimited tech calendars and sync them across multiple locations.",
                },
              ],
            },
      
            {
              section2heading: "Take payments At The Booth",
              section2Image: payment,
              section2Content: [
                {
                  icon: paymnet1svg,
                  content:
                    "Take payments using just your phone — no hardware needed.",
                },
                {
                  icon: payment2svg,
                  content:
                    "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                },
                {
                  icon: payment3svg,
                  content: "Access your funds instantly with Market Leap Checking.¹",
                },
              ],
            },
            {
              section3heading: "Keep Every Booth Booked And Busy",
              section3Image: keep,
              section3Content: [
                {
                  icon: keep1svg,
                  content:
                    "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                },
                {
                  icon: keep2svg,
                  content:
                    "Add a Book Now button to your Instagram and Facebook profiles.",
                },
                {
                  icon: keep3svg,
                  content: "Get discovered and booked on Market Leap Go.",
                },
                {
                  icon: keep4svg,
                  content:
                    "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                },
              ],
            },
            {
              section4heading: "Turn Walk-ins Into Regulars",
              section4Image: turn,
              section4Content: [
                {
                  icon: turn1,
                  content:
                    "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                },
                {
                  icon: turn2,
                  content:
                    "Sell gift cards online and in person to reach even more customers. ",
                },
                {
                  icon: turn3,
                  content:
                    "Drive repeat business with a loyalty program that rewards returning customers. ",
                },
              ],
            },
          ],
          ReviewSliderContent: [
            {
              image: review1image,
              review:
                "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
              signature: signature1,
              name: "Rachel Dang",
              addresss: "Urban Nail BoxSeattle, WA",
            },
           
          ],
      
          everythinguouneedtoKnow: [
            {
              heading: "Bank through Market Leap",
              description:
                "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
              image: sectionimage,
            },
            {
              heading: "Grow Your Client Base",
              description:
                "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
              image: grow,
            },
            {
              heading: "Add New Revenue Streams",
              description:
                "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
              image: add,
            },
          ],
          hardwarethatsuits: [
            {
              heading: "Market Leap Handheld",
              image: square1,
              constent:
                "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
            },
            {
              heading: "Market Leap Register",
              image: square2,
              constent:
                "Run your entire business right out of the box with a fully integrated, two-screen solution.",
            },
            {
              heading: "Market Leap Stand",
              image: sqaure3,
              constent:
                " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
            },
            {
              heading: "Market Leap Terminal",
              image: sqaure4,
              constent:
                "Take payments, print receipts, and much more on a compact, countertop device.",
            },
          ],
          getinspiredSection: [
            {
              image: inspired1,
              // heading: "",
              description:
                "How to Keep Salon Appointments on Schedule When You’re Busy",
            },
            {
              image: inspired2,
              // heading: "",
              description: "How to Optimize Your Bookings on Social Media",
            },
            {
              image: inspired3,
              // heading: "",
              description: "The Art of Balancing Regular and Walk-In Appointments",
            },
            {
              image: inspired4,
              // heading: "",
              description: "Which States Have the Most Expensive Manicures?",
            },
      
            {
              image: inspired5,
              // heading: "",
              description:
                "Salon Booking and Cancellation Policy Templates and Examples You Need",
            },
            {
              image: inspired6,
              // heading: "",
              description: "5 Reasons Your Salon Needs a Loyalty Program",
            },
          ],
          faqData: [
            {
              title:
                "What is nail salon software and what does it do?",
              text: 
              "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
            },
            {
              title:
                "Can I use Market Leap to power my entire nail salon?",
              text: 
              "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
            },
            {
              title:
                "Is Market Leap right for my business?",
              text: 
              "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
            },
            {
              title:
                "What payment methods are supported by Market Leap POS?",
              text: 
              "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
            },
            {
              title:
                "How does Market Leap manage tipping for my nail technicians?",
              text: 
              "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
            },
            {
              title:
                "Can I book appointments and take payments from my website?",
              text: 
              "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
            },
          ],
        },

         //cleaning

         {
          id: "cleaning",
          marqueeImages: [marquee1, marquee2],
          title: "cleaning",
          label:"",
          makeTheMostSection: [
            {
              section1heading: "Smooth Calendar Management",
              section1Image: calenderImage,
              section1Content: [
                {
                  icon: pen,
                  content:
                    "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                },
                {
                  icon: manage,
                  content:
                    "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                },
                {
                  icon: people,
                  content:
                    "Add unlimited tech calendars and sync them across multiple locations.",
                },
              ],
            },
      
            {
              section2heading: "Take payments At The Booth",
              section2Image: payment,
              section2Content: [
                {
                  icon: paymnet1svg,
                  content:
                    "Take payments using just your phone — no hardware needed.",
                },
                {
                  icon: payment2svg,
                  content:
                    "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                },
                {
                  icon: payment3svg,
                  content: "Access your funds instantly with Market Leap Checking.¹",
                },
              ],
            },
            {
              section3heading: "Keep Every Booth Booked And Busy",
              section3Image: keep,
              section3Content: [
                {
                  icon: keep1svg,
                  content:
                    "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                },
                {
                  icon: keep2svg,
                  content:
                    "Add a Book Now button to your Instagram and Facebook profiles.",
                },
                {
                  icon: keep3svg,
                  content: "Get discovered and booked on Market Leap Go.",
                },
                {
                  icon: keep4svg,
                  content:
                    "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                },
              ],
            },
            {
              section4heading: "Turn Walk-ins Into Regulars",
              section4Image: turn,
              section4Content: [
                {
                  icon: turn1,
                  content:
                    "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                },
                {
                  icon: turn2,
                  content:
                    "Sell gift cards online and in person to reach even more customers. ",
                },
                {
                  icon: turn3,
                  content:
                    "Drive repeat business with a loyalty program that rewards returning customers. ",
                },
              ],
            },
          ],
          ReviewSliderContent: [
            {
              image: review1image,
              review:
                "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
              signature: signature1,
              name: "Rachel Dang",
              addresss: "Urban Nail BoxSeattle, WA",
            },
           
          ],
      
          everythinguouneedtoKnow: [
            {
              heading: "Bank through Market Leap",
              description:
                "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
              image: sectionimage,
            },
            {
              heading: "Grow Your Client Base",
              description:
                "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
              image: grow,
            },
            {
              heading: "Add New Revenue Streams",
              description:
                "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
              image: add,
            },
          ],
          hardwarethatsuits: [
            {
              heading: "Market Leap Handheld",
              image: square1,
              constent:
                "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
            },
            {
              heading: "Market Leap Register",
              image: square2,
              constent:
                "Run your entire business right out of the box with a fully integrated, two-screen solution.",
            },
            {
              heading: "Market Leap Stand",
              image: sqaure3,
              constent:
                " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
            },
            {
              heading: "Market Leap Terminal",
              image: sqaure4,
              constent:
                "Take payments, print receipts, and much more on a compact, countertop device.",
            },
          ],
          getinspiredSection: [
            {
              image: inspired1,
              // heading: "",
              description:
                "How to Keep Salon Appointments on Schedule When You’re Busy",
            },
            {
              image: inspired2,
              // heading: "",
              description: "How to Optimize Your Bookings on Social Media",
            },
            {
              image: inspired3,
              // heading: "",
              description: "The Art of Balancing Regular and Walk-In Appointments",
            },
            {
              image: inspired4,
              // heading: "",
              description: "Which States Have the Most Expensive Manicures?",
            },
      
            {
              image: inspired5,
              // heading: "",
              description:
                "Salon Booking and Cancellation Policy Templates and Examples You Need",
            },
            {
              image: inspired6,
              // heading: "",
              description: "5 Reasons Your Salon Needs a Loyalty Program",
            },
          ],
          faqData: [
            {
              title:
                "What is nail salon software and what does it do?",
              text: 
              "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
            },
            {
              title:
                "Can I use Market Leap to power my entire nail salon?",
              text: 
              "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
            },
            {
              title:
                "Is Market Leap right for my business?",
              text: 
              "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
            },
            {
              title:
                "What payment methods are supported by Market Leap POS?",
              text: 
              "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
            },
            {
              title:
                "How does Market Leap manage tipping for my nail technicians?",
              text: 
              "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
            },
            {
              title:
                "Can I book appointments and take payments from my website?",
              text: 
              "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
            },
          ],
        },

          //contarcts-and-specialists

          {
            id: "contarctors-and-specialists",
            marqueeImages: [marquee1, marquee2],
            title: "contarctors and specialists",
            label:"",
            makeTheMostSection: [
              {
                section1heading: "Smooth Calendar Management",
                section1Image: calenderImage,
                section1Content: [
                  {
                    icon: pen,
                    content:
                      "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                  },
                  {
                    icon: manage,
                    content:
                      "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                  },
                  {
                    icon: people,
                    content:
                      "Add unlimited tech calendars and sync them across multiple locations.",
                  },
                ],
              },
        
              {
                section2heading: "Take payments At The Booth",
                section2Image: payment,
                section2Content: [
                  {
                    icon: paymnet1svg,
                    content:
                      "Take payments using just your phone — no hardware needed.",
                  },
                  {
                    icon: payment2svg,
                    content:
                      "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                  },
                  {
                    icon: payment3svg,
                    content: "Access your funds instantly with Market Leap Checking.¹",
                  },
                ],
              },
              {
                section3heading: "Keep Every Booth Booked And Busy",
                section3Image: keep,
                section3Content: [
                  {
                    icon: keep1svg,
                    content:
                      "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                  },
                  {
                    icon: keep2svg,
                    content:
                      "Add a Book Now button to your Instagram and Facebook profiles.",
                  },
                  {
                    icon: keep3svg,
                    content: "Get discovered and booked on Market Leap Go.",
                  },
                  {
                    icon: keep4svg,
                    content:
                      "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                  },
                ],
              },
              {
                section4heading: "Turn Walk-ins Into Regulars",
                section4Image: turn,
                section4Content: [
                  {
                    icon: turn1,
                    content:
                      "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                  },
                  {
                    icon: turn2,
                    content:
                      "Sell gift cards online and in person to reach even more customers. ",
                  },
                  {
                    icon: turn3,
                    content:
                      "Drive repeat business with a loyalty program that rewards returning customers. ",
                  },
                ],
              },
            ],
            ReviewSliderContent: [
              {
                image: review1image,
                review:
                  "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                signature: signature1,
                name: "Rachel Dang",
                addresss: "Urban Nail BoxSeattle, WA",
              },
             
            ],
        
            everythinguouneedtoKnow: [
              {
                heading: "Bank through Market Leap",
                description:
                  "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                image: sectionimage,
              },
              {
                heading: "Grow Your Client Base",
                description:
                  "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                image: grow,
              },
              {
                heading: "Add New Revenue Streams",
                description:
                  "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                image: add,
              },
            ],
            hardwarethatsuits: [
              {
                heading: "Market Leap Handheld",
                image: square1,
                constent:
                  "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
              },
              {
                heading: "Market Leap Register",
                image: square2,
                constent:
                  "Run your entire business right out of the box with a fully integrated, two-screen solution.",
              },
              {
                heading: "Market Leap Stand",
                image: sqaure3,
                constent:
                  " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
              },
              {
                heading: "Market Leap Terminal",
                image: sqaure4,
                constent:
                  "Take payments, print receipts, and much more on a compact, countertop device.",
              },
            ],
            getinspiredSection: [
              {
                image: inspired1,
                // heading: "",
                description:
                  "How to Keep Salon Appointments on Schedule When You’re Busy",
              },
              {
                image: inspired2,
                // heading: "",
                description: "How to Optimize Your Bookings on Social Media",
              },
              {
                image: inspired3,
                // heading: "",
                description: "The Art of Balancing Regular and Walk-In Appointments",
              },
              {
                image: inspired4,
                // heading: "",
                description: "Which States Have the Most Expensive Manicures?",
              },
        
              {
                image: inspired5,
                // heading: "",
                description:
                  "Salon Booking and Cancellation Policy Templates and Examples You Need",
              },
              {
                image: inspired6,
                // heading: "",
                description: "5 Reasons Your Salon Needs a Loyalty Program",
              },
            ],
            faqData: [
              {
                title:
                  "What is nail salon software and what does it do?",
                text: 
                "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
              },
              {
                title:
                  "Can I use Market Leap to power my entire nail salon?",
                text: 
                "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
              },
              {
                title:
                  "Is Market Leap right for my business?",
                text: 
                "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
              },
              {
                title:
                  "What payment methods are supported by Market Leap POS?",
                text: 
                "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
              },
              {
                title:
                  "How does Market Leap manage tipping for my nail technicians?",
                text: 
                "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
              },
              {
                title:
                  "Can I book appointments and take payments from my website?",
                text: 
                "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
              },
            ],
          },

            //landscaping-and-outdoors

            {
              id: "landscaping-and-outdoors",
              marqueeImages: [marquee1, marquee2],
              title: "landscaping and outdoors",
              label:"",
              makeTheMostSection: [
                {
                  section1heading: "Smooth Calendar Management",
                  section1Image: calenderImage,
                  section1Content: [
                    {
                      icon: pen,
                      content:
                        "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                    },
                    {
                      icon: manage,
                      content:
                        "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                    },
                    {
                      icon: people,
                      content:
                        "Add unlimited tech calendars and sync them across multiple locations.",
                    },
                  ],
                },
          
                {
                  section2heading: "Take payments At The Booth",
                  section2Image: payment,
                  section2Content: [
                    {
                      icon: paymnet1svg,
                      content:
                        "Take payments using just your phone — no hardware needed.",
                    },
                    {
                      icon: payment2svg,
                      content:
                        "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                    },
                    {
                      icon: payment3svg,
                      content: "Access your funds instantly with Market Leap Checking.¹",
                    },
                  ],
                },
                {
                  section3heading: "Keep Every Booth Booked And Busy",
                  section3Image: keep,
                  section3Content: [
                    {
                      icon: keep1svg,
                      content:
                        "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                    },
                    {
                      icon: keep2svg,
                      content:
                        "Add a Book Now button to your Instagram and Facebook profiles.",
                    },
                    {
                      icon: keep3svg,
                      content: "Get discovered and booked on Market Leap Go.",
                    },
                    {
                      icon: keep4svg,
                      content:
                        "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                    },
                  ],
                },
                {
                  section4heading: "Turn Walk-ins Into Regulars",
                  section4Image: turn,
                  section4Content: [
                    {
                      icon: turn1,
                      content:
                        "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                    },
                    {
                      icon: turn2,
                      content:
                        "Sell gift cards online and in person to reach even more customers. ",
                    },
                    {
                      icon: turn3,
                      content:
                        "Drive repeat business with a loyalty program that rewards returning customers. ",
                    },
                  ],
                },
              ],
              ReviewSliderContent: [
                {
                  image: review1image,
                  review:
                    "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                  signature: signature1,
                  name: "Rachel Dang",
                  addresss: "Urban Nail BoxSeattle, WA",
                },
               
              ],
          
              everythinguouneedtoKnow: [
                {
                  heading: "Bank through Market Leap",
                  description:
                    "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                  image: sectionimage,
                },
                {
                  heading: "Grow Your Client Base",
                  description:
                    "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                  image: grow,
                },
                {
                  heading: "Add New Revenue Streams",
                  description:
                    "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                  image: add,
                },
              ],
              hardwarethatsuits: [
                {
                  heading: "Market Leap Handheld",
                  image: square1,
                  constent:
                    "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                },
                {
                  heading: "Market Leap Register",
                  image: square2,
                  constent:
                    "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                },
                {
                  heading: "Market Leap Stand",
                  image: sqaure3,
                  constent:
                    " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                },
                {
                  heading: "Market Leap Terminal",
                  image: sqaure4,
                  constent:
                    "Take payments, print receipts, and much more on a compact, countertop device.",
                },
              ],
              getinspiredSection: [
                {
                  image: inspired1,
                  // heading: "",
                  description:
                    "How to Keep Salon Appointments on Schedule When You’re Busy",
                },
                {
                  image: inspired2,
                  // heading: "",
                  description: "How to Optimize Your Bookings on Social Media",
                },
                {
                  image: inspired3,
                  // heading: "",
                  description: "The Art of Balancing Regular and Walk-In Appointments",
                },
                {
                  image: inspired4,
                  // heading: "",
                  description: "Which States Have the Most Expensive Manicures?",
                },
          
                {
                  image: inspired5,
                  // heading: "",
                  description:
                    "Salon Booking and Cancellation Policy Templates and Examples You Need",
                },
                {
                  image: inspired6,
                  // heading: "",
                  description: "5 Reasons Your Salon Needs a Loyalty Program",
                },
              ],
              faqData: [
                {
                  title:
                    "What is nail salon software and what does it do?",
                  text: 
                  "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                },
                {
                  title:
                    "Can I use Market Leap to power my entire nail salon?",
                  text: 
                  "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                },
                {
                  title:
                    "Is Market Leap right for my business?",
                  text: 
                  "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                },
                {
                  title:
                    "What payment methods are supported by Market Leap POS?",
                  text: 
                  "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                },
                {
                  title:
                    "How does Market Leap manage tipping for my nail technicians?",
                  text: 
                  "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                },
                {
                  title:
                    "Can I book appointments and take payments from my website?",
                  text: 
                  "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                },
              ],
            },

            //all-home-and-commercial

            {
              id: "all-home-and-commercial",
              marqueeImages: [marquee1, marquee2],
              title: "all home and commercial",
              label:"",
              makeTheMostSection: [
                {
                  section1heading: "Smooth Calendar Management",
                  section1Image: calenderImage,
                  section1Content: [
                    {
                      icon: pen,
                      content:
                        "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                    },
                    {
                      icon: manage,
                      content:
                        "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                    },
                    {
                      icon: people,
                      content:
                        "Add unlimited tech calendars and sync them across multiple locations.",
                    },
                  ],
                },
          
                {
                  section2heading: "Take payments At The Booth",
                  section2Image: payment,
                  section2Content: [
                    {
                      icon: paymnet1svg,
                      content:
                        "Take payments using just your phone — no hardware needed.",
                    },
                    {
                      icon: payment2svg,
                      content:
                        "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                    },
                    {
                      icon: payment3svg,
                      content: "Access your funds instantly with Market Leap Checking.¹",
                    },
                  ],
                },
                {
                  section3heading: "Keep Every Booth Booked And Busy",
                  section3Image: keep,
                  section3Content: [
                    {
                      icon: keep1svg,
                      content:
                        "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                    },
                    {
                      icon: keep2svg,
                      content:
                        "Add a Book Now button to your Instagram and Facebook profiles.",
                    },
                    {
                      icon: keep3svg,
                      content: "Get discovered and booked on Market Leap Go.",
                    },
                    {
                      icon: keep4svg,
                      content:
                        "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                    },
                  ],
                },
                {
                  section4heading: "Turn Walk-ins Into Regulars",
                  section4Image: turn,
                  section4Content: [
                    {
                      icon: turn1,
                      content:
                        "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                    },
                    {
                      icon: turn2,
                      content:
                        "Sell gift cards online and in person to reach even more customers. ",
                    },
                    {
                      icon: turn3,
                      content:
                        "Drive repeat business with a loyalty program that rewards returning customers. ",
                    },
                  ],
                },
              ],
              ReviewSliderContent: [
                {
                  image: review1image,
                  review:
                    "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                  signature: signature1,
                  name: "Rachel Dang",
                  addresss: "Urban Nail BoxSeattle, WA",
                },
               
              ],
          
              everythinguouneedtoKnow: [
                {
                  heading: "Bank through Market Leap",
                  description:
                    "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                  image: sectionimage,
                },
                {
                  heading: "Grow Your Client Base",
                  description:
                    "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                  image: grow,
                },
                {
                  heading: "Add New Revenue Streams",
                  description:
                    "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                  image: add,
                },
              ],
              hardwarethatsuits: [
                {
                  heading: "Market Leap Handheld",
                  image: square1,
                  constent:
                    "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                },
                {
                  heading: "Market Leap Register",
                  image: square2,
                  constent:
                    "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                },
                {
                  heading: "Market Leap Stand",
                  image: sqaure3,
                  constent:
                    " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                },
                {
                  heading: "Market Leap Terminal",
                  image: sqaure4,
                  constent:
                    "Take payments, print receipts, and much more on a compact, countertop device.",
                },
              ],
              getinspiredSection: [
                {
                  image: inspired1,
                  // heading: "",
                  description:
                    "How to Keep Salon Appointments on Schedule When You’re Busy",
                },
                {
                  image: inspired2,
                  // heading: "",
                  description: "How to Optimize Your Bookings on Social Media",
                },
                {
                  image: inspired3,
                  // heading: "",
                  description: "The Art of Balancing Regular and Walk-In Appointments",
                },
                {
                  image: inspired4,
                  // heading: "",
                  description: "Which States Have the Most Expensive Manicures?",
                },
          
                {
                  image: inspired5,
                  // heading: "",
                  description:
                    "Salon Booking and Cancellation Policy Templates and Examples You Need",
                },
                {
                  image: inspired6,
                  // heading: "",
                  description: "5 Reasons Your Salon Needs a Loyalty Program",
                },
              ],
              faqData: [
                {
                  title:
                    "What is nail salon software and what does it do?",
                  text: 
                  "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                },
                {
                  title:
                    "Can I use Market Leap to power my entire nail salon?",
                  text: 
                  "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                },
                {
                  title:
                    "Is Market Leap right for my business?",
                  text: 
                  "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                },
                {
                  title:
                    "What payment methods are supported by Market Leap POS?",
                  text: 
                  "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                },
                {
                  title:
                    "How does Market Leap manage tipping for my nail technicians?",
                  text: 
                  "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                },
                {
                  title:
                    "Can I book appointments and take payments from my website?",
                  text: 
                  "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                },
              ],
            },

            //automative

            {
              id: "automative",
              marqueeImages: [marquee1, marquee2],
              title: "automative",
              label:"",
              makeTheMostSection: [
                {
                  section1heading: "Smooth Calendar Management",
                  section1Image: calenderImage,
                  section1Content: [
                    {
                      icon: pen,
                      content:
                        "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                    },
                    {
                      icon: manage,
                      content:
                        "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                    },
                    {
                      icon: people,
                      content:
                        "Add unlimited tech calendars and sync them across multiple locations.",
                    },
                  ],
                },
          
                {
                  section2heading: "Take payments At The Booth",
                  section2Image: payment,
                  section2Content: [
                    {
                      icon: paymnet1svg,
                      content:
                        "Take payments using just your phone — no hardware needed.",
                    },
                    {
                      icon: payment2svg,
                      content:
                        "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                    },
                    {
                      icon: payment3svg,
                      content: "Access your funds instantly with Market Leap Checking.¹",
                    },
                  ],
                },
                {
                  section3heading: "Keep Every Booth Booked And Busy",
                  section3Image: keep,
                  section3Content: [
                    {
                      icon: keep1svg,
                      content:
                        "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                    },
                    {
                      icon: keep2svg,
                      content:
                        "Add a Book Now button to your Instagram and Facebook profiles.",
                    },
                    {
                      icon: keep3svg,
                      content: "Get discovered and booked on Market Leap Go.",
                    },
                    {
                      icon: keep4svg,
                      content:
                        "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                    },
                  ],
                },
                {
                  section4heading: "Turn Walk-ins Into Regulars",
                  section4Image: turn,
                  section4Content: [
                    {
                      icon: turn1,
                      content:
                        "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                    },
                    {
                      icon: turn2,
                      content:
                        "Sell gift cards online and in person to reach even more customers. ",
                    },
                    {
                      icon: turn3,
                      content:
                        "Drive repeat business with a loyalty program that rewards returning customers. ",
                    },
                  ],
                },
              ],
              ReviewSliderContent: [
                {
                  image: review1image,
                  review:
                    "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                  signature: signature1,
                  name: "Rachel Dang",
                  addresss: "Urban Nail BoxSeattle, WA",
                },
               
              ],
          
              everythinguouneedtoKnow: [
                {
                  heading: "Bank through Market Leap",
                  description:
                    "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                  image: sectionimage,
                },
                {
                  heading: "Grow Your Client Base",
                  description:
                    "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                  image: grow,
                },
                {
                  heading: "Add New Revenue Streams",
                  description:
                    "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                  image: add,
                },
              ],
              hardwarethatsuits: [
                {
                  heading: "Market Leap Handheld",
                  image: square1,
                  constent:
                    "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                },
                {
                  heading: "Market Leap Register",
                  image: square2,
                  constent:
                    "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                },
                {
                  heading: "Market Leap Stand",
                  image: sqaure3,
                  constent:
                    " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                },
                {
                  heading: "Market Leap Terminal",
                  image: sqaure4,
                  constent:
                    "Take payments, print receipts, and much more on a compact, countertop device.",
                },
              ],
              getinspiredSection: [
                {
                  image: inspired1,
                  // heading: "",
                  description:
                    "How to Keep Salon Appointments on Schedule When You’re Busy",
                },
                {
                  image: inspired2,
                  // heading: "",
                  description: "How to Optimize Your Bookings on Social Media",
                },
                {
                  image: inspired3,
                  // heading: "",
                  description: "The Art of Balancing Regular and Walk-In Appointments",
                },
                {
                  image: inspired4,
                  // heading: "",
                  description: "Which States Have the Most Expensive Manicures?",
                },
          
                {
                  image: inspired5,
                  // heading: "",
                  description:
                    "Salon Booking and Cancellation Policy Templates and Examples You Need",
                },
                {
                  image: inspired6,
                  // heading: "",
                  description: "5 Reasons Your Salon Needs a Loyalty Program",
                },
              ],
              faqData: [
                {
                  title:
                    "What is nail salon software and what does it do?",
                  text: 
                  "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                },
                {
                  title:
                    "Can I use Market Leap to power my entire nail salon?",
                  text: 
                  "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                },
                {
                  title:
                    "Is Market Leap right for my business?",
                  text: 
                  "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                },
                {
                  title:
                    "What payment methods are supported by Market Leap POS?",
                  text: 
                  "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                },
                {
                  title:
                    "How does Market Leap manage tipping for my nail technicians?",
                  text: 
                  "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                },
                {
                  title:
                    "Can I book appointments and take payments from my website?",
                  text: 
                  "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                },
              ],
            },

              //organizations-and-non-profits

              {
                id: "organizations-and-non-profits",
                marqueeImages: [marquee1, marquee2],
                title: "organizations and non-profits",
                label:"",
                makeTheMostSection: [
                  {
                    section1heading: "Smooth Calendar Management",
                    section1Image: calenderImage,
                    section1Content: [
                      {
                        icon: pen,
                        content:
                          "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                      },
                      {
                        icon: manage,
                        content:
                          "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                      },
                      {
                        icon: people,
                        content:
                          "Add unlimited tech calendars and sync them across multiple locations.",
                      },
                    ],
                  },
            
                  {
                    section2heading: "Take payments At The Booth",
                    section2Image: payment,
                    section2Content: [
                      {
                        icon: paymnet1svg,
                        content:
                          "Take payments using just your phone — no hardware needed.",
                      },
                      {
                        icon: payment2svg,
                        content:
                          "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                      },
                      {
                        icon: payment3svg,
                        content: "Access your funds instantly with Market Leap Checking.¹",
                      },
                    ],
                  },
                  {
                    section3heading: "Keep Every Booth Booked And Busy",
                    section3Image: keep,
                    section3Content: [
                      {
                        icon: keep1svg,
                        content:
                          "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                      },
                      {
                        icon: keep2svg,
                        content:
                          "Add a Book Now button to your Instagram and Facebook profiles.",
                      },
                      {
                        icon: keep3svg,
                        content: "Get discovered and booked on Market Leap Go.",
                      },
                      {
                        icon: keep4svg,
                        content:
                          "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                      },
                    ],
                  },
                  {
                    section4heading: "Turn Walk-ins Into Regulars",
                    section4Image: turn,
                    section4Content: [
                      {
                        icon: turn1,
                        content:
                          "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                      },
                      {
                        icon: turn2,
                        content:
                          "Sell gift cards online and in person to reach even more customers. ",
                      },
                      {
                        icon: turn3,
                        content:
                          "Drive repeat business with a loyalty program that rewards returning customers. ",
                      },
                    ],
                  },
                ],
                ReviewSliderContent: [
                  {
                    image: review1image,
                    review:
                      "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                    signature: signature1,
                    name: "Rachel Dang",
                    addresss: "Urban Nail BoxSeattle, WA",
                  },
                 
                ],
            
                everythinguouneedtoKnow: [
                  {
                    heading: "Bank through Market Leap",
                    description:
                      "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                    image: sectionimage,
                  },
                  {
                    heading: "Grow Your Client Base",
                    description:
                      "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                    image: grow,
                  },
                  {
                    heading: "Add New Revenue Streams",
                    description:
                      "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                    image: add,
                  },
                ],
                hardwarethatsuits: [
                  {
                    heading: "Market Leap Handheld",
                    image: square1,
                    constent:
                      "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                  },
                  {
                    heading: "Market Leap Register",
                    image: square2,
                    constent:
                      "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                  },
                  {
                    heading: "Market Leap Stand",
                    image: sqaure3,
                    constent:
                      " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                  },
                  {
                    heading: "Market Leap Terminal",
                    image: sqaure4,
                    constent:
                      "Take payments, print receipts, and much more on a compact, countertop device.",
                  },
                ],
                getinspiredSection: [
                  {
                    image: inspired1,
                    // heading: "",
                    description:
                      "How to Keep Salon Appointments on Schedule When You’re Busy",
                  },
                  {
                    image: inspired2,
                    // heading: "",
                    description: "How to Optimize Your Bookings on Social Media",
                  },
                  {
                    image: inspired3,
                    // heading: "",
                    description: "The Art of Balancing Regular and Walk-In Appointments",
                  },
                  {
                    image: inspired4,
                    // heading: "",
                    description: "Which States Have the Most Expensive Manicures?",
                  },
            
                  {
                    image: inspired5,
                    // heading: "",
                    description:
                      "Salon Booking and Cancellation Policy Templates and Examples You Need",
                  },
                  {
                    image: inspired6,
                    // heading: "",
                    description: "5 Reasons Your Salon Needs a Loyalty Program",
                  },
                ],
                faqData: [
                  {
                    title:
                      "What is nail salon software and what does it do?",
                    text: 
                    "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                  },
                  {
                    title:
                      "Can I use Market Leap to power my entire nail salon?",
                    text: 
                    "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                  },
                  {
                    title:
                      "Is Market Leap right for my business?",
                    text: 
                    "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                  },
                  {
                    title:
                      "What payment methods are supported by Market Leap POS?",
                    text: 
                    "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                  },
                  {
                    title:
                      "How does Market Leap manage tipping for my nail technicians?",
                    text: 
                    "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                  },
                  {
                    title:
                      "Can I book appointments and take payments from my website?",
                    text: 
                    "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                  },
                ],
              },

               //pet-services

               {
                id: "pet-services",
                marqueeImages: [marquee1, marquee2],
                title: "pet-services",
                label:"",
                makeTheMostSection: [
                  {
                    section1heading: "Smooth Calendar Management",
                    section1Image: calenderImage,
                    section1Content: [
                      {
                        icon: pen,
                        content:
                          "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                      },
                      {
                        icon: manage,
                        content:
                          "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                      },
                      {
                        icon: people,
                        content:
                          "Add unlimited tech calendars and sync them across multiple locations.",
                      },
                    ],
                  },
            
                  {
                    section2heading: "Take payments At The Booth",
                    section2Image: payment,
                    section2Content: [
                      {
                        icon: paymnet1svg,
                        content:
                          "Take payments using just your phone — no hardware needed.",
                      },
                      {
                        icon: payment2svg,
                        content:
                          "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                      },
                      {
                        icon: payment3svg,
                        content: "Access your funds instantly with Market Leap Checking.¹",
                      },
                    ],
                  },
                  {
                    section3heading: "Keep Every Booth Booked And Busy",
                    section3Image: keep,
                    section3Content: [
                      {
                        icon: keep1svg,
                        content:
                          "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                      },
                      {
                        icon: keep2svg,
                        content:
                          "Add a Book Now button to your Instagram and Facebook profiles.",
                      },
                      {
                        icon: keep3svg,
                        content: "Get discovered and booked on Market Leap Go.",
                      },
                      {
                        icon: keep4svg,
                        content:
                          "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                      },
                    ],
                  },
                  {
                    section4heading: "Turn Walk-ins Into Regulars",
                    section4Image: turn,
                    section4Content: [
                      {
                        icon: turn1,
                        content:
                          "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                      },
                      {
                        icon: turn2,
                        content:
                          "Sell gift cards online and in person to reach even more customers. ",
                      },
                      {
                        icon: turn3,
                        content:
                          "Drive repeat business with a loyalty program that rewards returning customers. ",
                      },
                    ],
                  },
                ],
                ReviewSliderContent: [
                  {
                    image: review1image,
                    review:
                      "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                    signature: signature1,
                    name: "Rachel Dang",
                    addresss: "Urban Nail BoxSeattle, WA",
                  },
                 
                ],
            
                everythinguouneedtoKnow: [
                  {
                    heading: "Bank through Market Leap",
                    description:
                      "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                    image: sectionimage,
                  },
                  {
                    heading: "Grow Your Client Base",
                    description:
                      "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                    image: grow,
                  },
                  {
                    heading: "Add New Revenue Streams",
                    description:
                      "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                    image: add,
                  },
                ],
                hardwarethatsuits: [
                  {
                    heading: "Market Leap Handheld",
                    image: square1,
                    constent:
                      "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                  },
                  {
                    heading: "Market Leap Register",
                    image: square2,
                    constent:
                      "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                  },
                  {
                    heading: "Market Leap Stand",
                    image: sqaure3,
                    constent:
                      " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                  },
                  {
                    heading: "Market Leap Terminal",
                    image: sqaure4,
                    constent:
                      "Take payments, print receipts, and much more on a compact, countertop device.",
                  },
                ],
                getinspiredSection: [
                  {
                    image: inspired1,
                    // heading: "",
                    description:
                      "How to Keep Salon Appointments on Schedule When You’re Busy",
                  },
                  {
                    image: inspired2,
                    // heading: "",
                    description: "How to Optimize Your Bookings on Social Media",
                  },
                  {
                    image: inspired3,
                    // heading: "",
                    description: "The Art of Balancing Regular and Walk-In Appointments",
                  },
                  {
                    image: inspired4,
                    // heading: "",
                    description: "Which States Have the Most Expensive Manicures?",
                  },
            
                  {
                    image: inspired5,
                    // heading: "",
                    description:
                      "Salon Booking and Cancellation Policy Templates and Examples You Need",
                  },
                  {
                    image: inspired6,
                    // heading: "",
                    description: "5 Reasons Your Salon Needs a Loyalty Program",
                  },
                ],
                faqData: [
                  {
                    title:
                      "What is nail salon software and what does it do?",
                    text: 
                    "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                  },
                  {
                    title:
                      "Can I use Market Leap to power my entire nail salon?",
                    text: 
                    "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                  },
                  {
                    title:
                      "Is Market Leap right for my business?",
                    text: 
                    "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                  },
                  {
                    title:
                      "What payment methods are supported by Market Leap POS?",
                    text: 
                    "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                  },
                  {
                    title:
                      "How does Market Leap manage tipping for my nail technicians?",
                    text: 
                    "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                  },
                  {
                    title:
                      "Can I book appointments and take payments from my website?",
                    text: 
                    "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                  },
                ],
              },

              //professional-services

              {
                id: "professional-services",
                marqueeImages: [marquee1, marquee2],
                title: "professional-services",
                label:"",
                makeTheMostSection: [
                  {
                    section1heading: "Smooth Calendar Management",
                    section1Image: calenderImage,
                    section1Content: [
                      {
                        icon: pen,
                        content:
                          "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                      },
                      {
                        icon: manage,
                        content:
                          "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                      },
                      {
                        icon: people,
                        content:
                          "Add unlimited tech calendars and sync them across multiple locations.",
                      },
                    ],
                  },
            
                  {
                    section2heading: "Take payments At The Booth",
                    section2Image: payment,
                    section2Content: [
                      {
                        icon: paymnet1svg,
                        content:
                          "Take payments using just your phone — no hardware needed.",
                      },
                      {
                        icon: payment2svg,
                        content:
                          "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                      },
                      {
                        icon: payment3svg,
                        content: "Access your funds instantly with Market Leap Checking.¹",
                      },
                    ],
                  },
                  {
                    section3heading: "Keep Every Booth Booked And Busy",
                    section3Image: keep,
                    section3Content: [
                      {
                        icon: keep1svg,
                        content:
                          "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                      },
                      {
                        icon: keep2svg,
                        content:
                          "Add a Book Now button to your Instagram and Facebook profiles.",
                      },
                      {
                        icon: keep3svg,
                        content: "Get discovered and booked on Market Leap Go.",
                      },
                      {
                        icon: keep4svg,
                        content:
                          "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                      },
                    ],
                  },
                  {
                    section4heading: "Turn Walk-ins Into Regulars",
                    section4Image: turn,
                    section4Content: [
                      {
                        icon: turn1,
                        content:
                          "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                      },
                      {
                        icon: turn2,
                        content:
                          "Sell gift cards online and in person to reach even more customers. ",
                      },
                      {
                        icon: turn3,
                        content:
                          "Drive repeat business with a loyalty program that rewards returning customers. ",
                      },
                    ],
                  },
                ],
                ReviewSliderContent: [
                  {
                    image: review1image,
                    review:
                      "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                    signature: signature1,
                    name: "Rachel Dang",
                    addresss: "Urban Nail BoxSeattle, WA",
                  },
                 
                ],
            
                everythinguouneedtoKnow: [
                  {
                    heading: "Bank through Market Leap",
                    description:
                      "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                    image: sectionimage,
                  },
                  {
                    heading: "Grow Your Client Base",
                    description:
                      "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                    image: grow,
                  },
                  {
                    heading: "Add New Revenue Streams",
                    description:
                      "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                    image: add,
                  },
                ],
                hardwarethatsuits: [
                  {
                    heading: "Market Leap Handheld",
                    image: square1,
                    constent:
                      "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                  },
                  {
                    heading: "Market Leap Register",
                    image: square2,
                    constent:
                      "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                  },
                  {
                    heading: "Market Leap Stand",
                    image: sqaure3,
                    constent:
                      " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                  },
                  {
                    heading: "Market Leap Terminal",
                    image: sqaure4,
                    constent:
                      "Take payments, print receipts, and much more on a compact, countertop device.",
                  },
                ],
                getinspiredSection: [
                  {
                    image: inspired1,
                    // heading: "",
                    description:
                      "How to Keep Salon Appointments on Schedule When You’re Busy",
                  },
                  {
                    image: inspired2,
                    // heading: "",
                    description: "How to Optimize Your Bookings on Social Media",
                  },
                  {
                    image: inspired3,
                    // heading: "",
                    description: "The Art of Balancing Regular and Walk-In Appointments",
                  },
                  {
                    image: inspired4,
                    // heading: "",
                    description: "Which States Have the Most Expensive Manicures?",
                  },
            
                  {
                    image: inspired5,
                    // heading: "",
                    description:
                      "Salon Booking and Cancellation Policy Templates and Examples You Need",
                  },
                  {
                    image: inspired6,
                    // heading: "",
                    description: "5 Reasons Your Salon Needs a Loyalty Program",
                  },
                ],
                faqData: [
                  {
                    title:
                      "What is nail salon software and what does it do?",
                    text: 
                    "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                  },
                  {
                    title:
                      "Can I use Market Leap to power my entire nail salon?",
                    text: 
                    "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                  },
                  {
                    title:
                      "Is Market Leap right for my business?",
                    text: 
                    "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                  },
                  {
                    title:
                      "What payment methods are supported by Market Leap POS?",
                    text: 
                    "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                  },
                  {
                    title:
                      "How does Market Leap manage tipping for my nail technicians?",
                    text: 
                    "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                  },
                  {
                    title:
                      "Can I book appointments and take payments from my website?",
                    text: 
                    "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                  },
                ],
              },


               //Recreation

               {
                id: "recreation",
                marqueeImages: [marquee1, marquee2],
                title: "recreation",
                label:"",
                makeTheMostSection: [
                  {
                    section1heading: "Smooth Calendar Management",
                    section1Image: calenderImage,
                    section1Content: [
                      {
                        icon: pen,
                        content:
                          "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                      },
                      {
                        icon: manage,
                        content:
                          "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                      },
                      {
                        icon: people,
                        content:
                          "Add unlimited tech calendars and sync them across multiple locations.",
                      },
                    ],
                  },
            
                  {
                    section2heading: "Take payments At The Booth",
                    section2Image: payment,
                    section2Content: [
                      {
                        icon: paymnet1svg,
                        content:
                          "Take payments using just your phone — no hardware needed.",
                      },
                      {
                        icon: payment2svg,
                        content:
                          "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                      },
                      {
                        icon: payment3svg,
                        content: "Access your funds instantly with Market Leap Checking.¹",
                      },
                    ],
                  },
                  {
                    section3heading: "Keep Every Booth Booked And Busy",
                    section3Image: keep,
                    section3Content: [
                      {
                        icon: keep1svg,
                        content:
                          "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                      },
                      {
                        icon: keep2svg,
                        content:
                          "Add a Book Now button to your Instagram and Facebook profiles.",
                      },
                      {
                        icon: keep3svg,
                        content: "Get discovered and booked on Market Leap Go.",
                      },
                      {
                        icon: keep4svg,
                        content:
                          "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                      },
                    ],
                  },
                  {
                    section4heading: "Turn Walk-ins Into Regulars",
                    section4Image: turn,
                    section4Content: [
                      {
                        icon: turn1,
                        content:
                          "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                      },
                      {
                        icon: turn2,
                        content:
                          "Sell gift cards online and in person to reach even more customers. ",
                      },
                      {
                        icon: turn3,
                        content:
                          "Drive repeat business with a loyalty program that rewards returning customers. ",
                      },
                    ],
                  },
                ],
                ReviewSliderContent: [
                  {
                    image: review1image,
                    review:
                      "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                    signature: signature1,
                    name: "Rachel Dang",
                    addresss: "Urban Nail BoxSeattle, WA",
                  },
                 
                ],
            
                everythinguouneedtoKnow: [
                  {
                    heading: "Bank through Market Leap",
                    description:
                      "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                    image: sectionimage,
                  },
                  {
                    heading: "Grow Your Client Base",
                    description:
                      "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                    image: grow,
                  },
                  {
                    heading: "Add New Revenue Streams",
                    description:
                      "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                    image: add,
                  },
                ],
                hardwarethatsuits: [
                  {
                    heading: "Market Leap Handheld",
                    image: square1,
                    constent:
                      "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                  },
                  {
                    heading: "Market Leap Register",
                    image: square2,
                    constent:
                      "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                  },
                  {
                    heading: "Market Leap Stand",
                    image: sqaure3,
                    constent:
                      " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                  },
                  {
                    heading: "Market Leap Terminal",
                    image: sqaure4,
                    constent:
                      "Take payments, print receipts, and much more on a compact, countertop device.",
                  },
                ],
                getinspiredSection: [
                  {
                    image: inspired1,
                    // heading: "",
                    description:
                      "How to Keep Salon Appointments on Schedule When You’re Busy",
                  },
                  {
                    image: inspired2,
                    // heading: "",
                    description: "How to Optimize Your Bookings on Social Media",
                  },
                  {
                    image: inspired3,
                    // heading: "",
                    description: "The Art of Balancing Regular and Walk-In Appointments",
                  },
                  {
                    image: inspired4,
                    // heading: "",
                    description: "Which States Have the Most Expensive Manicures?",
                  },
            
                  {
                    image: inspired5,
                    // heading: "",
                    description:
                      "Salon Booking and Cancellation Policy Templates and Examples You Need",
                  },
                  {
                    image: inspired6,
                    // heading: "",
                    description: "5 Reasons Your Salon Needs a Loyalty Program",
                  },
                ],
                faqData: [
                  {
                    title:
                      "What is nail salon software and what does it do?",
                    text: 
                    "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                  },
                  {
                    title:
                      "Can I use Market Leap to power my entire nail salon?",
                    text: 
                    "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                  },
                  {
                    title:
                      "Is Market Leap right for my business?",
                    text: 
                    "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                  },
                  {
                    title:
                      "What payment methods are supported by Market Leap POS?",
                    text: 
                    "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                  },
                  {
                    title:
                      "How does Market Leap manage tipping for my nail technicians?",
                    text: 
                    "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                  },
                  {
                    title:
                      "Can I book appointments and take payments from my website?",
                    text: 
                    "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                  },
                ],
              },

                //Transportation

                {
                  id: "Transportation",
                  marqueeImages: [marquee1, marquee2],
                  title: "Transportation",
                  label:"",
                  makeTheMostSection: [
                    {
                      section1heading: "Smooth Calendar Management",
                      section1Image: calenderImage,
                      section1Content: [
                        {
                          icon: pen,
                          content:
                            "Drag and drop, color code, and assign specific booths, resources, and techs to bookings within your calendar.",
                        },
                        {
                          icon: manage,
                          content:
                            "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
                        },
                        {
                          icon: people,
                          content:
                            "Add unlimited tech calendars and sync them across multiple locations.",
                        },
                      ],
                    },
              
                    {
                      section2heading: "Take payments At The Booth",
                      section2Image: payment,
                      section2Content: [
                        {
                          icon: paymnet1svg,
                          content:
                            "Take payments using just your phone — no hardware needed.",
                        },
                        {
                          icon: payment2svg,
                          content:
                            "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
                        },
                        {
                          icon: payment3svg,
                          content: "Access your funds instantly with Market Leap Checking.¹",
                        },
                      ],
                    },
                    {
                      section3heading: "Keep Every Booth Booked And Busy",
                      section3Image: keep,
                      section3Content: [
                        {
                          icon: keep1svg,
                          content:
                            "Make it easy for clients to book and rebook you anytime from anywhere with an online booking site. ",
                        },
                        {
                          icon: keep2svg,
                          content:
                            "Add a Book Now button to your Instagram and Facebook profiles.",
                        },
                        {
                          icon: keep3svg,
                          content: "Get discovered and booked on Market Leap Go.",
                        },
                        {
                          icon: keep4svg,
                          content:
                            "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
                        },
                      ],
                    },
                    {
                      section4heading: "Turn Walk-ins Into Regulars",
                      section4Image: turn,
                      section4Content: [
                        {
                          icon: turn1,
                          content:
                            "Send automated² and one-off email and text campaigns for seasonal offers, retail products, and more.",
                        },
                        {
                          icon: turn2,
                          content:
                            "Sell gift cards online and in person to reach even more customers. ",
                        },
                        {
                          icon: turn3,
                          content:
                            "Drive repeat business with a loyalty program that rewards returning customers. ",
                        },
                      ],
                    },
                  ],
                  ReviewSliderContent: [
                    {
                      image: review1image,
                      review:
                        "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
                      signature: signature1,
                      name: "Rachel Dang",
                      addresss: "Urban Nail BoxSeattle, WA",
                    },
                   
                  ],
              
                  everythinguouneedtoKnow: [
                    {
                      heading: "Bank through Market Leap",
                      description:
                        "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
                      image: sectionimage,
                    },
                    {
                      heading: "Grow Your Client Base",
                      description:
                        "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
                      image: grow,
                    },
                    {
                      heading: "Add New Revenue Streams",
                      description:
                        "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
                      image: add,
                    },
                  ],
                  hardwarethatsuits: [
                    {
                      heading: "Market Leap Handheld",
                      image: square1,
                      constent:
                        "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
                    },
                    {
                      heading: "Market Leap Register",
                      image: square2,
                      constent:
                        "Run your entire business right out of the box with a fully integrated, two-screen solution.",
                    },
                    {
                      heading: "Market Leap Stand",
                      image: sqaure3,
                      constent:
                        " Simplify checkout in just one swivel with an iPad POS you already know how to use.",
                    },
                    {
                      heading: "Market Leap Terminal",
                      image: sqaure4,
                      constent:
                        "Take payments, print receipts, and much more on a compact, countertop device.",
                    },
                  ],
                  getinspiredSection: [
                    {
                      image: inspired1,
                      // heading: "",
                      description:
                        "How to Keep Salon Appointments on Schedule When You’re Busy",
                    },
                    {
                      image: inspired2,
                      // heading: "",
                      description: "How to Optimize Your Bookings on Social Media",
                    },
                    {
                      image: inspired3,
                      // heading: "",
                      description: "The Art of Balancing Regular and Walk-In Appointments",
                    },
                    {
                      image: inspired4,
                      // heading: "",
                      description: "Which States Have the Most Expensive Manicures?",
                    },
              
                    {
                      image: inspired5,
                      // heading: "",
                      description:
                        "Salon Booking and Cancellation Policy Templates and Examples You Need",
                    },
                    {
                      image: inspired6,
                      // heading: "",
                      description: "5 Reasons Your Salon Needs a Loyalty Program",
                    },
                  ],
                  faqData: [
                    {
                      title:
                        "What is nail salon software and what does it do?",
                      text: 
                      "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
                    },
                    {
                      title:
                        "Can I use Market Leap to power my entire nail salon?",
                      text: 
                      "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site."
                    },
                    {
                      title:
                        "Is Market Leap right for my business?",
                      text: 
                      "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights."
                    },
                    {
                      title:
                        "What payment methods are supported by Market Leap POS?",
                      text: 
                      "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online."
                    },
                    {
                      title:
                        "How does Market Leap manage tipping for my nail technicians?",
                      text: 
                      "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable."
                    },
                    {
                      title:
                        "Can I book appointments and take payments from my website?",
                      text: 
                      "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows."
                    },
                  ],
                },
];
