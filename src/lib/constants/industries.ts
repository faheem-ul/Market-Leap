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
import clothingsection1image from "@/public/images/Retail/Clothing/Make-The-Most-1.png"
import clothingsection2image from "@/public/images/Retail/Clothing/Make-The-Most-2.avif"
import clothingsection3image from "@/public/images/Retail/Clothing/Make-The-Most-3.avif"
import clothingsection4image from "@/public/images/Retail/Clothing/Make-The-Most-4.avif";
import clothingreview from "@/public/images/Retail/Clothing/ReviewSliderContent-1.avif"
import gardensection1 from "@/public/images/Retail/Garden/makeTheMostSection1.avif"
import gardensection2 from "@/public/images/Retail/Garden/make-The-Most-Section2.avif"
import gardensection3 from "@/public/images/Retail/Garden/makeTheMostSection3.avif"
import gardenreview from "@/public/images/Retail/Garden/PD07277-XL-retail-testimonial-grelen.png"

export const industries = [
  {
    id: "nail-saloon",
    marqueeImages: [marquee1, marquee2],
    title: "Nail Salon Software That Puts You In Control ",
    label: "Nail salon",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },

  // barbershop

  {
    id: "barbershop",
    marqueeImages: [marquee1, marquee2],
    title: "Keep chairs turning with Marketleap",
    label: "Barbershop",
    makeTheMostSection: [
      {
        section1heading: "Savvy, standout scheduling",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Drag and drop, color code, and assign specific chairs and barbers to bookings within your calendar.",
          },
          {
            icon: manage,
            content:
              "Keep everyone in sync with automated confirmations and reminders. Let the AI-powered Marketleap Assistant handle rescheduling needs.",
          },
          {
            icon: people,
            content:
              "Maximize your barbers’ availability and cut down on booking gaps with waitlists.",
          },
          {
            icon: people,
            content:
              "Add as many barbers or shop managers to your calendars as you need. Sync their schedules across all of your locations.",
          },
        ],
      },

      {
        section2heading:
          "Take payments at your chair, front desk, or on the go",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Take payments using just your phone with Tap to Pay on iPhone and Tap to Pay on Android — no hardware required.",
          },
          {
            icon: payment2svg,
            content:
              "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          },
          {
            icon: payment3svg,
            content: "Access your funds instantly with Marketleap Checking.",
          },
        ],
      },
      {
        section3heading: "Keep your calendar full",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Create an online booking site to make it easy for loyal clients to book and rebook you anytime.",
          },
          {
            icon: keep2svg,
            content:
              "Show up where people are ready to schedule by adding a “book now” button to Instagram and Facebook profiles.",
          },
          {
            icon: keep3svg,
            content:
              "Get discovered and booked in one sweep on Marketleap Go, a free marketplace built for beauty businesses.",
          },
          {
            icon: keep4svg,
            content:
              "Dive deep into customer and business data so you can offer more of what your clients love.",
          },
        ],
      },
      {
        section4heading: "Create experiences that go the extra mile",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Build buzz with Marketleap Marketing. Easily create, send, and track automated or one-off email and text campaigns from one hub.",
          },
          {
            icon: turn2,
            content:
              "Ensure a consistent cut every time by tracking details like preferences and booking history in client profiles.",
          },
          {
            icon: turn3,
            content:
              "Reward and retain repeat clients with points and exclusive offers with Marketleap Loyalty.",
          },
          {
            icon: turn3,
            content:
              "Send every message in real time from one inbox with Marketleap Messages, your all-in-one hub for client conversations.",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "“Marketleap has made our lives easier and helped us run our business through three locations. It allows us to concentrate on what we are good at — that’s cutting hair.”",
        signature: signature1,
        name: "Beef’s Barbers",
        addresss: "Melbourne, VIC",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Control your cash flow",
        description:
          "Sync your payments, bank accounts, and more. Keep everything organized, access your money quickly, and fund what’s next with a loan.",
        image: sectionimage,
      },
      {
        heading: "Add new revenue streams",
        description:
          "Manage your inventory and sell beard balm, hair care products, and other retail items online with a customizable eCommerce website or in-store. Plus, secure revenue upfront by selling packages of services.",
        image: grow,
      },
      {
        heading: "Bring in more business",
        description:
          "Craft and send the right message with Marketleap Marketing. Expand your reach and keep clients coming back with effective email and text campaigns.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Marketleap Handheld",
        image: square1,
        constent:
          "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
      },
      {
        heading: "Marketleap Stand",
        image: square2,
        constent:
          "Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
      {
        heading: "Marketleap Register",
        image: sqaure3,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution",
      },
      {
        heading: "Marketleap Terminal",
        image: sqaure4,
        constent:
          "Take payments, print receipts, and much more on a compact, countertop device.",
      },
      {
        heading: "Marketleap Reader",
        image: sqaure4,
        constent:
          "Start selling in minutes with a bite-sized reader that plugs right in and never needs to be charged.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description: "Opening a Barbershop: The Complete Step-by-Step Guide",
      },
      {
        image: inspired2,
        // heading: "",
        description:
          "Booth Renters: Why You Should Consider Renting a Salon Booth",
      },
      {
        image: inspired3,
        // heading: "",
        description: "The Art of Balancing Regular and Walk-In Appointments",
      },
      {
        image: inspired4,
        // heading: "",
        description: "How to Make a Booking Website",
      },

      {
        image: inspired5,
        // heading: "",
        description: "5 Areas to Leverage Automation in the Beauty Industry ",
      },
      {
        image: inspired5,
        // heading: "",
        description: "3 Ways To Build a More Resilient Beauty Business",
      },
      {
        image: inspired5,
        // heading: "",
        description:
          "Dandies Barber & Beard Stylist – How This Barber Shop Used Marketleap Appointments to Achieve a 400% Surge in Sales",
      },
    ],
    faqData: [
      {
        title: "What is barbershop software and what does it do?",
        text: "Barbershop software is any software that helps barbershop owners and industry professionals with their day-to-day operations. Barbershop software often automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Marketleap to power my entire barbershop?",
        text: "Yes. Marketleap is a great solution for barbershop management.It includes front-of-house solutions, such as payment processing, automated marketing, and scheduling, as well as back-of-house solutions, such as payroll, staff management, and banking.",
      },
      {
        title: "What payment methods are supported by Marketleap POS?",
        text: "Marketleap works with any U.S.-issued and most internationally issued magstripe or chip cards bearing a Visa, Mastercard, American Express, Discover, JCB, or UnionPay logo. Marketleap also supports digital payments through wallets such as Apple Pay and Google Pay (including mobile wallet functionality). <br /><br /> With Marketleap, you can take payments from a mobile app or via hardware, making it easy to run your barbershop business whether you’re in a shop or on the go.",
      },

      {
        title: "How do I get started?",
        text: "Download the Marketleap POS app on iOS or Android, or create your account via your online web browser. Add your services, business details, and staff to get set up quickly. Then, log in to your Marketleap Appointments dashboard and create your customized booking site. Now you’re ready to take appointments. Follow a step-by-step guide here.",
      },
      {
        title: "How can I switch from my current booking solution?",
        text: "You can bulk your customer and inventory lists and quickly get up and running with Marketleap. If you currently use Squire, Acuity, Booker, Fresha, Vagaro, or another booking or salon software, Marketleap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Marketleap Online.",
      },
      {
        title: "How does Marketleap manage tipping for my barbers?",
        text: "Marketleap POS offers a variety of options for customers to select a tip for their barber. <br /><br /> In settings, you can configure a tipping screen that will be displayed for customers to select a tip after the payment has been processed. After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. This tip can be a percentage of the sale or a custom value, based on the preference of you and your barbers.",
      },
      {
        title: "Can I book appointments and collect payments from my website?",
        text: "Yes. Marketleap makes it easy for customers to book cuts and trims on your website. You can create a stand-alone website for booking or embed a booking widget or button on your existing site — both for free. <br /><br /> You can also require prepayment or collect a credit card on file to charge in the case of a no-show.",
      },
    ],
  },

  //beauty-salon

  {
    id: "beauty-salon",
    marqueeImages: [marquee1, marquee2],
    title: "The experience clients want, the software you need",
    label: "Beauty salon",
    makeTheMostSection: [
      {
        section1heading: "Seamless, standout scheduling",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Drag and drop, color code, and assign specific stations and team members to bookings within your calendar.",
          },
          {
            icon: manage,
            content:
              "Keep everyone in sync with automated confirmations and reminders. Let the AI-powered Marketleap Assistant handle rescheduling needs.",
          },
          {
            icon: people,
            content:
              "Protect your team’s time with cancellation and no-show policies.",
          },
          {
            icon: people,
            content:
              "Add as many nail techs, hairstylists, and shop managers to your calendars as you need and sync their schedules across multiple locations.",
          },
        ],
      },

      {
        section2heading: "Payments with polish",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Take payments using just your phone with Tap to Pay on iPhone and Tap to Pay on Android — no hardware required.",
          },
          {
            icon: payment2svg,
            content:
              "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          },
          {
            icon: payment3svg,
            content: "Access your funds instantly with Marketleap Checking.",
          },
        ],
      },
      {
        section3heading: "Bring in more business",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Create an online booking site to make it easy for loyal clients to book and rebook you anytime.",
          },
          {
            icon: keep2svg,
            content:
              "Show up where people are ready to schedule by adding a “book now” button to Instagram and Facebook profiles.",
          },
          {
            icon: keep3svg,
            content:
              "Maximize your team’s availability and cut down on booking gaps with waitlists.",
          },
          {
            icon: keep4svg,
            content:
              "Dive deep into customer and business data so you can offer more of what your clients love.",
          },
        ],
      },
      {
        section4heading: "Build a loyal client base",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Increase repeat visits with Marketleap Marketing. Easily create, send, and track automated or one-off email and text campaigns from one hub.",
          },
          {
            icon: turn2,
            content:
              "Reward and retain repeat clients with points and exclusive offers with Marketleap Loyalty.",
          },
          {
            icon: turn3,
            content:
              "Send every message in real time from one inbox with Marketleap Messages, your all-in-one hub for client conversations.",
          },
          {
            icon: turn3,
            content:
              "Personalize each client’s experience by tracking details like notes, birthdays, and booking history with customer profiles.",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "“Everything is automated through Marketleap, freeing up time to hire more talent, run marketing campaigns, and grow our business.”",
        addresss: "Louisville, KY",
        name: "",
        signature: "",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Control your cash flow",
        description:
          "Sync your payments, bank accounts, and more. Keep everything organized, access your money quickly, and fund what’s next with a loan.",
        image: sectionimage,
      },
      {
        heading: "Add new revenue streams",
        description:
          "Manage your inventory and sell beard balm, hair care products, and other retail items online with a customizable eCommerce website or in-store. Plus, secure revenue upfront by selling packages of services.",
        image: grow,
      },
      {
        heading: "Bring in more business",
        description:
          "Craft and send the right message with Marketleap Marketing. Expand your reach and keep clients coming back with effective email and text campaigns.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Marketleap Handheld",
        image: square1,
        constent:
          "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
      },
      {
        heading: "Marketleap Terminal",
        image: square2,
        constent:
          "Take payments and print receipts with a countertop device that flexes to your needs.",
      },
      {
        heading: "Marketleap Register",
        image: sqaure3,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution",
      },
      {
        heading: "Marketleap Reader",
        image: sqaure4,
        constent:
          "Start selling in minutes with a bite-sized reader that plugs right in and never needs to be charged.",
      },
      {
        heading: "Marketleap Stand",
        image: sqaure4,
        constent:
          "Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description: "Grow Your Brand With Chris Appleton",
      },
      {
        image: inspired2,
        // heading: "",
        description: "Here’s What Salon Pricing Looks Like Across the Country",
      },
      {
        image: inspired3,
        // heading: "",
        description: "How to Upskill Your Salon or Spa Staff",
      },
      {
        image: inspired4,
        // heading: "",
        description: "10 Ways to Attract New Clients to Your Salon",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "How to Use Data to Retain, Motivate, and Incentivize Your Salon Staff ",
      },
      {
        image: inspired5,
        // heading: "",
        description:
          "Leverage Your Salon Loyalty Program To Track Spending and Boost Profits",
      },
      {
        image: inspired5,
        // heading: "",
        description: "3 Ways To Build a More Resilient Beauty Business",
      },
    ],
    faqData: [
      {
        title: "What is barbershop software and what does it do?",
        text: "Barbershop software is any software that helps barbershop owners and industry professionals with their day-to-day operations. Barbershop software often automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Which businesses should use salon software?",
        text: "Any business that schedules appointments can use salon software. Hair salons, barbershops, nail salons, spas, and tattoo shops are examples of businesses that can benefit from a salon software solution.",
      },
      {
        title: "Is Marketleap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Marketleap has what you need. Whether that’s a hair salon, spa, tattoo parlor, or nail salon, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /><br /> Plus, the Marketleap ecosystem has a wide variety of tools to help you grow, such as Marketleap Marketing, Marketleap Gift Cards, Marketleap Banking, and more. <br /><br /> Want to learn more about how Marketleap can help your beauty business? Check out industry insights.",
      },

      {
        title: "How do I get started?",
        text: "Download the Marketleap POS app on iOS or Android, or create your account via your online web browser. Add your services, business details, and staff to get set up quickly. Then, log in to your Marketleap Appointments dashboard and create your customized booking site. Now you’re ready to take appointments. Follow a step-by-step guide here.",
      },
      {
        title: "How can I switch from my current booking solution?",
        text: "You can bulk your customer and inventory lists and quickly get up and running with Marketleap. If you currently use Squire, Acuity, Booker, Fresha, Vagaro, or another booking or salon software, Marketleap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Marketleap Online.",
      },
      {
        title: "How much will it cost to run my business with Marketleap?",
        text: "Marketleap Appointments has three flexible plans for beauty businesses of any size. Custom pricing is available for businesses that process more than $250K a year. You can learn more about our pricing plans here. <br /><br />   The in-person processing rate for the Marketleap Appointments Free plan is 2.6% + 15 cents for every tapped (mobile payment), dipped (chip card), and swiped (magstripe card) payment. When you subscribe to a paid plan, the in-person processing rate decreases to 2.5% + 10 cents.",
      },
    ],
  },

  //hair-salon

  {
    id: "hair-salon",
    marqueeImages: [marquee1, marquee2],
    title: "Software that does more than schedule haircuts.",
    label: "Hair salon",
    makeTheMostSection: [
      {
        section1heading: "Setup is simple",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Get started in minutes. Add your staff and services, set up your business, and start taking bookings instantly.",
          },
        ],
      },

      {
        section2heading: "Switch seamlessly",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Our experts will help you migrate your appointments and data to Marketleap with a personalized onboarding experience.",
          },
        ],
      },
      {
        section3heading: "Let clients book 24/7",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Customize a free booking website that never sleeps with Marketleap Online. Increase bookings with social media integrations.",
          },
        ],
      },
      {
        section4heading: "Client management",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Automatically create client profiles, send client notifications, and save notes on client preferences all in one place.",
          },
        ],
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Service smoothly with Plus",
        description:
          "For individuals or teams, our Plus plan helps you save time with automated email and text confirmations, Google calendar sync, no-show protection, and more.",
        image: sectionimage,
      },
      {
        heading: "Get full access with Premium",
        description:
          "Our most-flexible pricing plan, Premium is built for teams tackling complex operations. Utilize custom permission sets, tiered commissions, resource management, and more.",
        image: grow,
      },
      {
        heading: "Spread the word with Marketleap Marketing.",
        description:
          "Expand your business with Google Reviews and personalized, one-time and automated email and text campaigns that keep your customers engaged.",
        image: add,
      },

      {
        heading: "Manage your cash flow from one place with Banking.",
        description:
          "Sync your payments, banking accounts, and cash flow together seamlessly. Access your money quickly, organize your funds, and qualify for a business loan simply by running your business.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Talk to our Sales team",
        image: square1,
        constent:
          "Get help choosing the right products, or chat about eligibility for custom pricing.",
      },
      {
        heading: "Support Center",
        image: square2,
        constent:
          "Learn how to get the most out of Marketleap with helpful tips, articles, and videos.",
      },
      {
        heading: "FAQ",
        image: sqaure3,
        constent:
          "View additional information here or get in touch for further assistance.",
      },
    ],

    faqData: [
      {
        title: "How do I choose a salon software?",
        text: "Choosing the right salon software is a key decision for any hair salon owner. You’ll want to consider the unique features, compatibility, hardware, and pricing/fees associated with a particular salon offering as you shop for a solution.",
      },
      {
        title:
          "Why should professional stylists use the Marketleap hair salon solution?",
        text: "Marketleap Appointments is an all-in-one point of sale for professionals who are doing it all — from running a growing business and managing a team to offering a delightful experience for their clients with their craft. It saves stylists’ valuable time with a free online booking site that powers 24/7 scheduling. It supports a remarkable client experience as an integrated solution for accepting flexible payment options anywhere. It powers growth for businesses of all sizes with a robust team management offering that includes no-show protection, custom commissions, account access permissions, and advanced team performance reporting.",
      },
      {
        title: "Can I add Marketleap Appointments to my salon booking website?",
        text: "Marketleap Appointments is an easy way to add booking to your salon site.",
      },
    ],
  },

  //med-sap

 {
   id: "med-sap",
   marqueeImages: [marquee1, marquee2],
   title: "Med spa software for all touch points", 
   label:"Med spa",                                       
   makeTheMostSection: [
     {
       section1heading: "Sculpt your schedule",
       section1Image: calenderImage,
       section1Content: [
         {
           icon: pen,
           content:
             "Create an online booking site to make it easy for clients to book anytime.",
         },
         {
           icon: manage,
           content:
             "Show up where people are ready to schedule by adding a “book now” button to Instagram and Facebook profiles.",
         },
         {
           icon: people,
           content:
             "Book and stack multiple services, then knock them all out in one appointment.",
         },
         {
           icon: people,
           content:
             "Get discovered, booked, and rebooked on Marketleap Go, a free marketplace built for beauty businesses.",
         },
         
       ],
     },


     {
       section2heading: "Lock in the details ahead of time",
       section2Image: payment,
       section2Content: [
         {
           icon: paymnet1svg,
           content:
             "Send liability waivers or contracts with cancellation policies to take care of the paperwork in advance.",
         },
         {
           icon: payment2svg,
           content:
             "Assign specific rooms, equipment, or stations to bookings within your calendar so they never get double booked.",
         },
         {
           icon: payment3svg,
           content: "Automated reminders and confirmations keep everyone in sync while the AI-powered Marketleap Assistant manages any rescheduling needs.",
         },
         {
           icon: payment3svg,
           content: "Keep clients in the loop from confirmation to checkout with professional estimates, invoices, and automatic reminders.",
         },
           
       ],
     },
     {
       section3heading: "Provide stellar service every session",
       section3Image: keep,
       section3Content: [
         {
           icon: keep1svg,
           content:
             "Personalize each client’s experience by tracking details like notes, birthdays, and booking history with customer profiles.",
         },
         {
           icon: keep2svg,
           content:
             "Dive deep into customer and business data so you can offer more of what your clients love.",
         },
         {
           icon: keep3svg,
           content: "Send every message in real time from one inbox with Marketleap Messages, your all-in-one hub for client conversations.",
         },
         {
           icon: keep4svg,
           content:
             "Let clients pay over time with Cash App Afterpay. You get paid in full immediately, and they pay in four interest-free installments.",
         },
       ],
     },
     {
       section4heading: "Build a loyal client base",
       section4Image: turn,
       section4Content: [
         {
           icon: turn1,
           content:
             "Increase repeat visits with Marketleap Marketing. Easily create, send, and track automated or one-off email and text campaigns from one hub.",
         },
         {
           icon: turn2,
           content:
             "Transform pampering services into gift cards so current clients can share your business with family and friends.",
         },
         {
           icon: turn3,
           content:
             "Reward and retain repeat clients with points and exclusive offers with Marketleap Loyalty.",
         },
         {
           icon: turn3,
           content:
             "Easily import client lists from other med spa software to continue nurturing existing client relationships.",
         },
       ],
     },
   ],
   ReviewSliderContent: [
     {
       image: review1image,
       review:
         "“With Marketleap we have a solution that fits our growing business. We can add our customers’ purchased and paid-for information about their laser settings and treatment satisfaction. Once you have all that information in one place, you can build a formula for creating happy patients and a strong referral database.”,",  signature: signature1,
       name: "LaserAway",
       addresss: "Multilocation med spa",
       
     },
   
   ],


   everythinguouneedtoKnow: [
     {
       heading: "Control your cash flow",
       description:
         "Sync your payments, bank accounts, and more. Keep everything organized, access your money quickly, and fund what’s next with a loan.",
       image: sectionimage,
     },
     {
       heading: "Send invoices",
       description:
         "Share estimates, create contracts, and request and collect payments with Marketleap Invoices.",
       image: grow,
     },
     {
       heading: "Add new revenue streams",
       description:
         "Manage your inventory and sell eye masks, skincare essentials, and other retail items online with a customizable eCommerce website or in-store. Plus, secure revenue upfront by selling packages of services.",
       image: add,
     },
   
   ],
   hardwarethatsuits: [
     {
       heading: "Marketleap Handheld",
       image: square1,
       constent:
         "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
     },
     {
       heading: "Marketleap Terminal",
       image: square2,
       constent:
         "Take payments, print receipts, and much more on a compact, countertop device.",
     },
     {
       heading: "Marketleap Register",
       image: sqaure3,
       constent:
         "Run your entire business right out of the box with a fully integrated, two-screen solution.",
     },
     {
       heading: "Marketleap Stand",
       image: sqaure4,
       constent:
         "Simplify checkout in just one swivel with an iPad POS you already know how to use.",
     },
       {
       heading: "Marketleap Reader",
       image: sqaure4,
       constent:
         "Be ready for any sale, anywhere, with a super portable design that pairs with your device.",
     },
   ],
   getinspiredSection: [
     {
       image: inspired1,
       // heading: "",
       description:
         "5 Ways Salons and Spas Should Expand Their Offerings, According to Customers",
     },
     {
       image: inspired2,
       // heading: "",
       description: "How to Set Up a Loyalty Program that Works",
     },
     {
       image: inspired3,
       // heading: "",
       description: "Start Here: The Beginners Guide to MedSpa Finances",
     },
     {
       image: inspired4,
       // heading: "",
       description: "10 Ways to Attract New Clients to Your Salon",
     },


     {
       image: inspired5,
       // heading: "",
       description:
         "Tips for Upselling Your Salon Services",
     },
     {
       image: inspired5,
       // heading: "",
       description:
         "How to Upskill Your Salon or Spa Staff",
     },
     
     
     
   ],
   faqData: [
     {
       title:
         "What is barbershop software and what does it do?",
       text:
       "Barbershop software is any software that helps barbershop owners and industry professionals with their day-to-day operations. Barbershop software often automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
     },
     {
       title:
         "How does my business align with HIPAA compliance requirements?",
       text:
       "Marketleap provides HIPAA-compatible payments. Our secure online payment system protects you and your patients. For more information on HIPAA compatibility, visit our Support page."
     },
     {
       title:
         "Which businesses should use med spa software?",
       text:
       "Any business that schedules appointments can use med spa software. Med spas, aesthetic clinics, aesthetic medical clinics, and spas are examples of businesses that can benefit from a med spa software solution."
     },

     {
       title:
         "Is Marketleap right for my business?",
       text:
       "If your business requires a point of sale for booking, payments, and more, Marketleap has what you need. Whether that’s a med spa, day spa, or aesthetic clinic, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, invoicing, and payments so you can run your business seamlessly from one app."
     },
      {
       title:
         "How do I get started?",
       text:
       "Download the Marketleap POS app on iOS or Android, or create your account via your online web browser. Add your services, business details, and staff to get set up quickly. Then, log in to your Marketleap Appointments dashboard and create your customized booking site. Now you’re ready to take appointments. Follow a step-by-step guide here."
     },
     {
       title:
         "How can I switch from my current booking solution?",
       text:
       "You can bulk your customer and inventory lists and quickly get up and running with Marketleap. If you currently use Zenoti, Meevo, Vagaro, Boulevard, or another booking or salon software, Marketleap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Marketleap Online."
     },
     {
       title:
         "How much will it cost to run my business with Marketleap?",
       text:
       "Marketleap Appointments has three flexible plans for beauty businesses of any size. Custom pricing is available for businesses that process more than $250K a year. You can learn more about our pricing plans here."
     },
      
     
   ],
 },



  //tatoo-and-piercing

{
   id: "tatoo-and-piercing",
   marqueeImages: [marquee1, marquee2],
   title: "Tools that put your art first", 
   label:"Tattoo & piercing",                                       
   makeTheMostSection: [
     {
       section1heading: "Painless calendar management",
       section1Image: calenderImage,
       section1Content: [
         {
           icon: pen,
           content:
             "Drag and drop, color code, and assign specific stations and artists to bookings within your calendar.",
         },
         {
           icon: manage,
           content:
             "Maximize your artists’ limited time with cancellation and no-show policies and waitlists.",
         },
         {
           icon: people,
           content:
             "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage rescheduling. ",
         },
         {
           icon: people,
           content:
             "Add unlimited artists, apprentices, and shop managers to your calendars and sync them across multiple locations.",
         },
         
         
       ],
     },


     {
       section2heading: "Take payments at your station, front desk, or on the go",
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
           content: "Access your funds instantly with Marketleap Checking.",
         },
         
           
       ],
     },
     {
       section3heading: "Turn first-timers into clients for life",
       section3Image: keep,
       section3Content: [
         {
           icon: keep1svg,
           content:
             "Make it easy for clients to book and rebook you anytime and anywhere with an online booking site.",
         },
         {
           icon: keep2svg,
           content:
             "Add a Book Now button to your Instagram and Facebook profiles.",
         },
         {
           icon: keep3svg,
           content: "Get discovered and booked on Marketleap Go",
         },
         {
           icon: keep4svg,
           content:
             "Send automated and one-off email and text campaigns for flash-sheet sales, aftercare products, and more.",
         },
       ],
     },
     {
       section4heading: "Keep artists, apprentices, and shop managers on the same page",
       section4Image: turn,
       section4Content: [
         {
           icon: turn1,
           content:
             "Manage your team from the same platform you manage everything else.",
         },
         {
           icon: turn2,
           content:
             "Save time and avoid manual errors by automating your payroll.",
         },
         {
           icon: turn3,
           content:
             "Assign permissions based on roles and responsibilities.",
         },
        
       ],
     },
   ],
   ReviewSliderContent: [
     {
       image: review1image,
       review:
         "“Marketleap Appointments has been one of the most important tools we’ve implemented. It’s helped us maximize our availability and our staff’s time.”",
       signature: signature1,
       name: "Live By The Sword",
       addresss: "Brooklyn, NY",
       
     },
   
   ],


   everythinguouneedtoKnow: [
     {
       heading: "Bank through Marketleap",
       description:
         "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
       image: sectionimage,
     },
     {
       heading: "Grow your client base",
       description:
         "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
         image: sectionimage,
     },
     {
       heading: "Add new revenue streams",
       description:
         "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
       image: add,
     },
   
   ],
   hardwarethatsuits: [
     {
       heading: "Marketleap Handheld",
       image: square1,
       constent:
         "Power your day, manage appointments, and check out anywhere with a pocketable POS.",
     },
     {
       heading: "Marketleap Register",
       image: square2,
       constent:
         "A fast, secure register that looks great on your front desk.",
     },
     {
       heading: "Marketleap Stand",
       image: sqaure3,
       constent:
         "Turn your iPad into a powerful point of sale for your shop.",
     },
     {
       heading: "Marketleap Terminal",
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
         "How to Manage Multiple Locations for Your Salon",
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
       image: inspired5,
       // heading: "",
       description:
         "Cash vs. Credit: Which Should You Accept for Your Small Business?",
     },
     
     
     
     
   ],
   faqData: [
     {
       title:
         "What is barbershop software and what does it do?",
       text:
       "Barbershop software is any software that helps barbershop owners and industry professionals with their day-to-day operations. Barbershop software often automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments."
     },
     {
       title:
         "Can I use Marketleap to power my entire tattoo parlor?",
       text:
       "Yes! Marketleap tools and services extend beyond appointment scheduling. Our ecosystem is specifically designed to take care of front desk operations like client management and back-of-house tasks like inventory management, business reporting, and staff management."
     },
     {
       title:
         "Is Marketleap right for my business?",
       text:
       "If your business requires a point of sale for booking, payments, and more, Marketleap has what you need. Whether that’s a tattoo parlor or piercing shop, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app."
     },

     {
       title:
         "What payment methods are supported by Marketleap POS?",
       text:
       "Marketleap works with any U.S.-issued and most internationally issued magstripe or chip cards bearing a Visa, Mastercard, American Express, Discover, JCB, or UnionPay logo. Marketleap also supports digital wallets such as Apple Pay, Google Pay, and Samsung Pay."
     },
      {
       title:
         "How can I switch from my current booking solution?",
       text:
       "You can bulk your customer and inventory lists to get up and running quickly with Marketleap. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Marketleap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Marketleap Online."
     },
     {
       title:
         "How does Marketleap manage tipping for my Tattoo and piercing business?",
       text:
       "Marketleap offers a variety of options for customers to tip through the Marketleap Point of Sale app (iOS/Android) or Marketleap Online Store. <br /><br /> After enabling these settings, artists can display a separate tipping screen where customers can select a tip after the payment has been processed. During the checkout process, customers will be prompted to add a tip amount to their order."
     },
    
      
     
   ],
 },




  //clothing

  {
    id: "clothing", 
    marqueeImages: ["/images/Retail/Clothing/Marquee 1.avif", "/images/Retail/Clothing/Marquee 1.avif"],
    title: "Tech that fits right in to your apparel business ",
    label: "Clothing",
    makeTheMostSection: [
      {
        section1heading: "Take payments seamlessly",
        section1Image: clothingsection1image,
        section1Content: [
          {
            icon: pen,
            content:
              "Take secure payments however your customers prefer to pay.",
          },
          {
            icon: manage,
            content:
              "Get top-tier hardware that’s easy to use and looks great in your store.",
          },
          {
            icon: people,
            content:
              "Match your POS screens to your collection with custom item grids.",
          },
          {
            icon: people,
            content: "Offer easy returns and exchanges for any purchase.",
          },
        ],
      },

      {
        section2heading: "Keep inventory in check",
        section2Image: clothingsection2image,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Automatically sync inventory across locations and devices.",
          },
          {
            icon: payment2svg,
            content:
              "Stay stocked and ready with automatic alerts that let you know when it’s time to restock.",
          },
          {
            icon: payment3svg,
            content: "Send purchase orders and easily receive stock.",
          },
          {
            icon: payment3svg,
            content:
              "Use insights on sales trends, profit margins, and top-performing brands to make informed decisions.",
          },
        ],
      },
      {
        section3heading: "Reach online shoppers",
        section3Image: clothingsection3image,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Set up an online store or connect your existing site, and reach out to a specialist if you need help. ",
          },
          {
            icon: keep2svg,
            content:
              "Sync orders, inventory, and customer data across every sales channel.",
          },
          {
            icon: keep3svg,
            content:
              "Give customers added convenience to buy online and pick up in-store.",
          },
          {
            icon: keep4svg,
            content:
              "Sell on Instagram and Google Product listings by connecting your website.",
          },
        ],
      },
      {
        section4heading: "Keep customers coming back",
        section4Image: clothingsection4image,
        section4Content: [
          {
            icon: turn1,
            content:
              "Build customer profiles and track their preferences with every purchase they make.",
          },
          {
            icon: turn2,
            content:
              "Increase sales and cart sizes using automatic discounts and buy now, pay later with Cash App Afterpay.",
          },
          {
            icon: turn3,
            content:
              "Attract new customers with digital or physical gift cards.",
          },
          {
            icon: turn1,
            content:
              "Encourage repeat visits with Square Loyalty and keep customers engaged with Square Marketing.",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: clothingreview,
        review:
          "There was very minimal training impact to our businesses. Other platforms can be clunky and take days, and time is money. Square alleviated that problem.",
        signature: signature1,
        name: "Sun of the Desert",
        addresss: "Twentynine Palms, CA",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Square Loans1",
        description:
          "Get funding to make your next move with Square Loans. Get approved quickly and make easy payments based on your daily sales.",
        image: sectionimage,
      },
      {
        heading: "Square Checking",
        description:
          "Your Square sales are automatically (and immediately) ready to spend with your debit card, digitally or in person.",
        image: grow,
      },
      {
        heading: "Square Savings",
        description:
          "Set aside a percentage of your sales to plan for taxes, purchase new inventory, or anything else you need with Square Savings.",
        image: add,
      },
      {
        heading: "Square Staff",
        description:
          "Set up your team fast with easy onboarding, shift scheduling, custom access, and built-in payroll.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Square Register",
        image: square2,
        constent:
          "Get two displays in one piece of hardware — one screen for you and another where your customers can review their purchase and pay.",
      },
      {
        heading: "Square Handheld",
        image: square1,
        constent:
          "Run checkout anywhere, manage inventory, and do more with a pocketable POS.",
      },
      {
        heading: "Square Stand",
        image: sqaure3,
        constent:
          " Turn your iPad into a POS with a built-in card reader to make checkouts even easier.",
      },
      {
        heading: "Square Terminal",
        image: sqaure4,
        constent:
          "ake payments and print receipts with a countertop device that flexes to your needs.",
      },
    ],
    getinspiredSection: [
      {
        image: "/images/Retail/Clothing/getinspired9.avif",
        // heading: "",
        description: "The Future of Retail Report",
      },
      {
        image: "/images/Retail/Clothing/getinspired1.avif",
        // heading: "",
        description: "How to Increase Orders Through Your eCommerce Website",
      },
      {
        image: "/images/Retail/Clothing/getinspired2.avif",
        // heading: "",
        description:
          "11 Questions to Help Clothing Boutiques Track and Manage Inventory",
      },
      {
        image: "/images/Retail/Clothing/getinspired3.avif",
        // heading: "",
        description:
          " Dynamic and Smart Pricing Strategies for Your Retail Business",
      },

      {
        image: "/images/Retail/Clothing/getinspired4.avif",
        // heading: "",
        description:
          "Product Photography 101: How to Photograph Products for eCommerce",
      },
      {
        image: "/images/Retail/Clothing/getinspired5.avif",
        // heading: "",
        description: "How to Use Experiential Retail to Grow Foot Traffic",
      },

       {
        image: "/images/Retail/Clothing/getinspired6.avif",
        // heading: "",
        description: "How to Open a Pop-Up Shop",
      },
       {
        image: "/images/Retail/Clothing/getinspired7.avif",
        // heading: "",
        description: "6 Tactics Retailers Use to Enhance the In-Store Shopping Experience",
      },
       {
        image: "/images/Retail/Clothing/getinspired8.avif",
        // heading: "",
        description: "UPS Shares How to Ship Everything",
      },
    ],
    faqData: [
      {
        title: "How do I switch from my current solution?",
        text: "It’s easy and quick to sign up for Square. If you currently use Lightspeed Retail, Shopify POS, or another similar clothing store point-of-sale system, Square will likely fit your needs with an easy-to-use interface. Just select your plan, sign up, and import your inventory. <br /><br /> You can easily transfer your existing inventory with bulk intake importing. You can count on Square for transparent pricing and no long-term contracts. And if you need help, Market Leap Support is here for you.",
      },
      {
        title: "Can I upgrade my plan?",
        text: "You can upgrade your plan from Free to Plus by subscribing here. You’ll be able to utilize all existing features and you’ll only have to set up the added functionality included with your upgrade. After your 30-day free trial of the Plus plan, you’ll be given the option to pick your plan. If you don’t choose one, you’ll automatically be downgraded to the Free plan. <br /><br /> To upgrade to the Custom Premium plan, contact our sales team.",
      },
      {
        title: "Can I downgrade my plan?",
        text: "You can always downgrade your subscription from Plus to in your Dashboard. When you downgrade, you’ll see messaging in your Dashboard letting you know which features you’ll lose, like certain smart inventory management features, cross-location returns, and barcode label printing. You can see and compare plan features on our pricing page. <br /><br /> You can also pause your subscription at any time from your Dashboard. When you pause a subscription, you will not be billed. You can unpause at any time and your account will be ready for you without losing your past data.",
      },
    ],
  },

  //garden

  {
    id: "garden",
    marqueeImages: [marquee1, marquee2],
    title: "Tech that helps your business bloom",
    label: "Garden",
    makeTheMostSection: [
      {
        section1heading: "Take payments seamlessly",
        section1Image: gardensection1,
        section1Content: [
          {
            icon: pen,
            content:
              "Take secure payments from the counter, on the floor, or anywhere else that makes sense.",
          },
          {
            icon: manage,
            content:
              "Get top-tier hardware that lets customers pay how they want.",
          },
          {
            icon: people,
            content:
              "Quickly check out customers with a POS grid that you can customize to fit your workflow.",
          },
          {
            icon: people,
            content:
              "Expand your offerings by hosting events, workshops, or pop-ups with Marketleap Appointments.",
          },
        ],
      },

      {
        section2heading: "Stay on top of stock",
        section2Image: gardensection2,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Automatically sync inventory across locations and devices.",
          },
          {
            icon: payment2svg,
            content:
              "Stay stocked and ready with automatic alerts that let you know when it’s time to restock.",
          },
          {
            icon: payment3svg,
            content:
              "Send purchase orders and easily receive stock with bulk inventory intake.",
          },
          {
            icon: payment3svg,
            content:
              "Use insights on sales trends, profit margins, and top-performing plants and items to make informed decisions.",
          },
        ],
      },
      {
        section3heading: "Keep customers coming back",
        section3Image: gardensection3,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Build profiles for your customers and track their preferences with every purchase.",
          },
          {
            icon: keep2svg,
            content:
              "Increase sales and cart sizes using automatic discounts and buy now, pay later with Cash App Afterpay.",
          },
          {
            icon: keep3svg,
            content:
              "Attract new customers with digital or physical gift cards.",
          },
          {
            icon: keep4svg,
            content:
              "Encourage repeat visits with Marketleap Loyalty and keep customers engaged with Marketleap Marketing.",
          },
        ],
      },
      {
        section4heading: "Lead your team",
        section4Image: gardensection3,
        section4Content: [
          {
            icon: turn1,
            content: "Train your team in no time with an easy-to-learn POS.",
          },
          {
            icon: turn2,
            content:
              "Assign different roles, passcodes, and permissions for every type of employee.",
          },
          {
            icon: turn3,
            content:
              "Schedule shifts in advance and track time and availability.",
          },
          {
            icon: turn3,
            content:
              "Pay your employees based on timecard tracking and commission with Marketleap Payroll.",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        
        image: gardenreview,
        review:
          "“Because we're such a large company, having Marketleap organize all the items behind the scenes gives us the freedom to interact with our clients, help the local community, and continue to grow in the ways that we really want to.”",
        signature: signature1,
        name: "Market at Grelen",
        addresss: "Somerset, VA",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Market Leap Loans",
        description:
          "Get funding to make your next move with Marketleap Loans. Get approved quickly and make easy payments based on your daily sales.",
        image: sectionimage,
      },
      {
        heading: "Market Leap Checking",
        description:
          "Your Marketleap sales are automatically (and immediately) ready to spend with your debit card, digitally, or in person.",
        image: grow,
      },
      {
        heading: "Market Leap Savings",
        description:
          "Set aside a percentage of your sales to plan for taxes, purchase new inventory, or anything else you need with marketleap Savings.",
        image: add,
      },
      {
        heading: "Market Leap Online",
        description:
          "Reach customers where they shop by getting set up with Marketleap Online or by integrating your existing website. All order, customer, and inventory data will sync in real time, and you can offer in-store pickup.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Marketleap Terminal",
        image: square1,
        constent:
          "Sell where it makes sense for you with a compact, all-in-one device that also prints receipts.",
      },
      {
        heading: "Marketleap Register",
        image: square2,
        constent:
          "Run your entire business right out of the box with a fully integrated, two-screen solution.",
      },
      {
        heading: "Marketleap Stand",
        image: sqaure3,
        constent:
          "Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
      {
        heading: "Marketleap Reader",
        image: sqaure4,
        constent:
          "Be ready for any sale, anywhere, with a super portable design that pairs with your device.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description: "The Future of Retail Report",
      },
      {
        image: inspired2,
        // heading: "",
        description:
          "Virtual Workshops and Shipping Solutions Transformed The Juicy Leaf Plant Shop",
      },
      {
        image: inspired3,
        // heading: "",
        description: "5 Ways Retailers Can Bring More Traffic in Stores",
      },
      {
        image: inspired4,
        // heading: "",
        description:
          "What Is Conversational Commerce? Everything You Need to Know",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "Dynamic and Smart Pricing Strategies for Your Retail Business",
      },
    ],
    faqData: [
      {
        title: "How do I switch from my current solution?",
        text: "It’s simple and fast to sign up for Marketleap. If you currently use Lightspeed for Retail, Shopify POS, or another similar garden store point-of-sale system, Marketleap will likely fit your needs with an easy-to-use interface. Just select your plan, sign up, and import your inventory. You can easily transfer your existing inventory with bulk intake importing. You can count on Marketleap for transparent pricing and no long-term contracts. And if you need help, Marketleap Support is here for you.",
      },
      {
        title: "Can I upgrade my plan?",
        text: "You can upgrade your plan from Free to Plus by subscribing here. You’ll be able to utilize all existing features and you’ll only have to set up the added functionality included with your upgrade. After your 30-day free trial of the Plus plan, you’ll be given the option to pick your plan. If you don’t choose one, you’ll automatically be downgraded to the Free plan. To upgrade to the Custom Premium plan, contact our sales team.",
      },
      {
        title: "Can I downgrade my plan?",
        text: "You can always downgrade your subscription from Plus to in your Dashboard. When you downgrade, you’ll see messaging in your Dashboard letting you know which features you’ll lose, like certain smart inventory management features, cross-location returns, and barcode label printing. You can see and compare plan features on our pricing page. You can also pause your subscription at any time from your Dashboard. When you pause a subscription, you will not be billed. You can unpause at any time and your account will be ready for you without losing your past data.",
      },
    ],
  },

  //grocery
  {
    id: "grocery",
    marqueeImages: [marquee1, marquee2],
    title: "Must-have tools on every grocer’s list",
    label: "Grocery",
    makeTheMostSection: [
      {
        section1heading: "Speed through checkout",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Search, scan, or weigh items to ring up customers quickly. ",
          },
          {
            icon: manage,
            content:
              "Scan IDs to verify age for alcohol, cigarettes, and other age-restricted items.",
          },
          {
            icon: people,
            content: "Accept every major payment type on top-tier hardware.",
          },
          {
            icon: people,
            content:
              "Send orders to the kitchen when ringing up food and groceries in one transaction with Marketleap KDS.",
          },
          {
            icon: people,
            content:
              "Reach new customers by selling online and offering in-store grocery pickup.",
          },
        ],
      },

      {
        section2heading: "Stay on top of stock",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Easily track, order, and receive fresh stock with inventory syncing in real time.",
          },
          {
            icon: payment2svg,
            content:
              "Accurately track what’s on hand with full and cycle counts.",
          },
          {
            icon: payment3svg,
            content:
              "Get ahead of low stock with automatic alerts that let you know when it’s time to restock.",
          },
          {
            icon: payment3svg,
            content:
              "Use insights on sales trends, profit margins, and top-performing brands to make informed decisions.",
          },
        ],
      },
      {
        section3heading: "Lead your team",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content: "Quickly train your team with an intuitive POS.",
          },
          {
            icon: keep2svg,
            content:
              "Assign different roles, passcodes, and permissions for every type of employee.",
          },
          {
            icon: keep3svg,
            content:
              "Schedule shifts in advance and track time and availability.",
          },
          {
            icon: keep4svg,
            content:
              "Pay your employees based on timecard tracking and commission with Marketleap Payroll.",
          },
        ],
      },
      {
        section4heading: "Keep customers coming back",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content: "Reward guests for coming back with Marketleap Loyalty.",
          },
          {
            icon: turn2,
            content:
              "Keep customers updated on new products and offers with Marketleap Marketing.",
          },
          {
            icon: turn3,
            content:
              "Remember regulars with customer profiles that let you track their preferences.",
          },
          {
            icon: turn3,
            content:
              "Bring in new customers with digital or physical gift cards.",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "“As a grocer with multiple locations, Marketleap for Retail has been fantastic. The inventory management at a location level is absolutely critical … The ability to transfer inventory between locations is a tool we use constantly.”",
        signature: signature1,
        name: "The Epicurean Trader",
        addresss: "San Francisco, CA",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Marketleap Loans",
        description:
          "Get funding to make your next move with Marketleap Loans. Get approved quickly and make easy payments based on your daily sales.",
        image: sectionimage,
      },
      {
        heading: "Marketleap Checking",
        description:
          "Your Marketleap sales are automatically (and immediately) ready to spend with your debit card, digitally or in person.",
        image: grow,
      },
      {
        heading: "Marketleap Savings",
        description:
          "Set aside a percentage of your sales to plan for taxes, purchase new inventory, or anything else you need with Marketleap Savings.",
        image: add,
      },
      {
        heading: "Marketleap Online",
        description:
          "Get set up with Marketleap Online or integrate your existing website and offer in-store pickup. Orders, customer, and inventory data will sync in real-time.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Marketleap Register",
        image: square1,
        constent:
          "Get two displays in one piece of hardware — one screen for you and another where your customers can review their purchase and pay.",
      },
      {
        heading: "Marketleap Handheld",
        image: square2,
        constent:
          "Run checkout anywhere, manage inventory, and do more with a pocketable POS.",
      },
      {
        heading: "Marketleap Stand",
        image: sqaure3,
        constent:
          "Turn your iPad into a POS with a built-in card reader to make checkouts even easier.",
      },
      {
        heading: "Marketleap Terminal",
        image: sqaure4,
        constent:
          "Take payments and print receipts with a countertop device that flexes to your needs.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description: "The Future of Retail Report",
      },
      {
        image: inspired2,
        // heading: "",
        description: "How Technology Can Increase Revenue for Grocery Stores",
      },
      {
        image: inspired3,
        // heading: "",
        description: "12 Tips for Optimizing the Grocery Checkout Experience",
      },
      {
        image: inspired4,
        // heading: "",
        description: "6 Common Retail Problems Technology Can Help Solve",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "How to Improve Your Checkout Counter and Customer Experience",
      },
    ],
    faqData: [
      {
        title: "How do I switch from my current solution?",
        text: "It’s easy and quick to sign up for Marketleap. If you currently use Lightspeed Retail, Shopify POS, or another similar grocery store point-of-sale system, Marketleap will likely fit your needs with an easy-to-use interface. Just select your plan, sign up, and import your inventory. You can easily transfer your existing inventory with bulk intake importing. You can count on Marketleap for transparent pricing and no long-term contracts. And if you need help, Marketleap Support is here for you.",
      },
      {
        title: "Can I upgrade my plan?",
        text: "You can upgrade your plan from Free to Plus by subscribing here. You’ll be able to utilize all existing features and you’ll only have to set up the added functionality included with your upgrade. After your 30-day free trial of the Plus plan, you’ll be given the option to pick your plan. If you don’t choose one, you’ll automatically be downgraded to the Free plan. To upgrade to the Custom Premium plan, contact our sales team.",
      },
      {
        title: "Can I downgrade my plan?",
        text: "You can always downgrade your subscription from Plus to in your Dashboard. When you downgrade, you’ll see messaging in your Dashboard letting you know which features you’ll lose, like certain smart inventory management features, cross-location returns, and barcode label printing. You can see and compare plan features on our pricing page. You can also pause your subscription at any time from your Dashboard. When you pause a subscription, you will not be billed. You can unpause at any time and your account will be ready for you without losing your past data.",
      },
    ],
  },

  //home-and-gift

  {
    id: "home-and-gift",
    marqueeImages: [marquee1, marquee2],
    title: "Tech crafted for home goods",
    label: "Home & Gift",
    makeTheMostSection: [
      {
        section1heading: "Take payments seamlessly",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Take secure payments however your customers prefer to pay.",
          },
          {
            icon: manage,
            content:
              "Get top-tier hardware that’s easy to use and looks great in your store.",
          },
          {
            icon: people,
            content:
              "Match your POS screens to your collection with custom item grids.",
          },
          {
            icon: people,
            content: "Offer easy returns and exchanges for any purchase.",
          },
        ],
      },

      {
        section2heading: "Keep inventory in check",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Automatically sync inventory across locations and devices.",
          },
          {
            icon: payment2svg,
            content:
              "Stay stocked and ready with automatic alerts that let you know when it’s time to restock.",
          },
          {
            icon: payment3svg,
            content: "Send purchase orders and easily receive stock.",
          },
          {
            icon: payment3svg,
            content:
              "Use insights on sales trends, profit margins, and top-performing brands to make informed decisions.",
          },
        ],
      },
      {
        section3heading: "Reach online shoppers",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Set up an online store or connect your existing site, and reach out to a specialist if you need help.",
          },
          {
            icon: keep2svg,
            content:
              "Sync orders, inventory, and customer data across every sales channel.",
          },
          {
            icon: keep3svg,
            content:
              "Give customers added convenience to buy online and pick up in-store.",
          },
          {
            icon: keep4svg,
            content:
              "Sell on Instagram and Google Product listings by connecting your website.",
          },
        ],
      },
      {
        section4heading: "Keep customers coming back",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Build customer profiles and track their preferences with every purchase they make.",
          },
          {
            icon: turn2,
            content:
              "Increase sales and cart sizes using automatic discounts and buy now, pay later with Cash App Afterpay.",
          },
          {
            icon: turn3,
            content:
              "Attract new customers with digital or physical gift cards.",
          },
          {
            icon: turn3,
            content:
              "Encourage repeat visits with Marketleap Loyalty and keep customers engaged with Marketleap Marketing.",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "“I have to credit Marketleap Loyalty for really helping drive a lot of success for us. I think it’s quite easy and intuitive for people to sign up and to utilize their points. It feels very polished, and it’s exciting for people to see how many points they have.”",
        signature: signature1,
        name: "Phylum",
        addresss: "Palm Springs, CA",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Marketleap Loans",
        description:
          "Get funding to make your next move with Marketleap Loans. Get approved quickly and make easy payments based on your daily sales.",
        image: sectionimage,
      },
      {
        heading: "Marketleap Checking",
        description:
          "Your Marketleap sales are automatically (and immediately) ready to spend with your debit card, digitally or in person.",
        image: grow,
      },
      {
        heading: "Marketleap Savings",
        description:
          "Set aside a percentage of your sales to plan for taxes, purchase new inventory, or anything else you need with Marketleap Savings.",
        image: add,
      },
      {
        heading: "Marketleap Staff",
        description:
          "Set up your team fast with easy onboarding, shift scheduling, custom access, and built-in payroll.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Marketleap Register",
        image: square1,
        constent:
          "Get two displays in one piece of hardware — one screen for you and another where your customers can review their purchase and pay.",
      },
      {
        heading: "Marketleap Handheld",
        image: square2,
        constent:
          "Run checkout anywhere, manage inventory, and do more with a pocketable POS.",
      },
      {
        heading: "Marketleap Stand",
        image: sqaure3,
        constent:
          "Turn your iPad into a POS with a built-in card reader to make checkouts even easier.",
      },
      {
        heading: "Marketleap Terminal",
        image: sqaure4,
        constent:
          "Take payments and print receipts with a countertop device that flexes to your needs.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description: "The Future of Retail Report",
      },
      {
        image: inspired2,
        // heading: "",
        description:
          "How to Set up an Omnichannel Strategy for Home Decor Stores",
      },
      {
        image: inspired3,
        // heading: "",
        description:
          "Dynamic and Smart Pricing Strategies for Your Retail Business",
      },
      {
        image: inspired4,
        // heading: "",
        description:
          "Product Photography 101: How to Photograph Products for eCommerce",
      },

      {
        image: inspired5,
        // heading: "",
        description: "How to Use Experiential Retail to Grow Foot Traffic",
      },
      {
        image: inspired5,
        // heading: "",
        description: "5 Smart Ways to Reduce Your Store’s Packaging Footprint",
      },
      {
        image: inspired5,
        // heading: "",
        description: "UPS Shares How to Ship Everything",
      },
    ],
    faqData: [
      {
        title: "How do I switch from my current solution?",
        text: "It’s easy and quick to sign up for Marketleap. If you currently use Lightspeed Retail, Shopify POS, or another similar grocery store point-of-sale system, Marketleap will likely fit your needs with an easy-to-use interface. Just select your plan, sign up, and import your inventory. You can easily transfer your existing inventory with bulk intake importing. <br /> <br/> You can count on Marketleap for transparent pricing and no long-term contracts. And if you need help, Marketleap Support is here for you.",
      },
      {
        title: "Can I upgrade my plan?",
        text: "You can upgrade your plan from Free to Plus by subscribing here. You’ll be able to utilize all existing features and you’ll only have to set up the added functionality included with your upgrade. After your 30-day free trial of the Plus plan, you’ll be given the option to pick your plan. If you don’t choose one, you’ll automatically be downgraded to the Free plan. <br /> <br/>To upgrade to the Custom Premium plan, contact our sales team.",
      },
      {
        title: "Can I downgrade my plan?",
        text: "You can always downgrade your subscription from Plus to in your Dashboard. When you downgrade, you’ll see messaging in your Dashboard letting you know which features you’ll lose, like certain smart inventory management features, cross-location returns, and barcode label printing. You can see and compare plan features on our pricing page. <br /> <br/> You can also pause your subscription at any time from your Dashboard. When you pause a subscription, you will not be billed. You can unpause at any time and your account will be ready for you without losing your past data.",
      },
    ],
  },

  //wine-and-liquor

  {
    id: "wine-and-liquor",
    marqueeImages: [marquee1, marquee2],
    title: "Tools that pair perfectly with bottle shops",
    label: "Wine & Liquor",
    makeTheMostSection: [
      {
        section1heading: "Make checkout friendly",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Get top-tier hardware that’s easy to use and looks great in your store.",
          },
          {
            icon: manage,
            content: "Accept every major payment type.",
          },
          {
            icon: people,
            content: "Check out customers by scanning item barcodes.",
          },
          {
            icon: people,
            content: "Scan IDs to verify age when purchasing alcohol.",
          },
        ],
      },

      {
        section2heading: "Manage your inventory",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Keep your inventory counts accurate, even if you sell units in a different quantity than how they’re purchased.",
          },
          {
            icon: payment2svg,
            content:
              "Sync stock in real time across locations, channels, and inventory counts.",
          },
          {
            icon: payment3svg,
            content:
              "Create and send purchase orders, and set up automatic purchase orders for when stock is running low.",
          },
          {
            icon: payment3svg,
            content:
              "Use insights on sales trends, profit margins, and top-performing brands to make informed decisions.",
          },
        ],
      },
      {
        section3heading: "Become the neighborhood go-to",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Create community buzz with automatic discounts for specific items, categories, quantities, or timeframes.",
          },
          {
            icon: keep2svg,
            content:
              "Bring in new customers with digital or physical gift cards.",
          },
          {
            icon: keep3svg,
            content: "Reward guests for coming back with Marketleap Loyalty.",
          },
          {
            icon: keep4svg,
            content:
              "Keep customers updated on new products and offers with Marketleap Marketing.",
          },
        ],
      },
      {
        section4heading: "Sell where you want",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Reach new customers by setting up a website with Marketleap Online.",
          },
          {
            icon: turn2,
            content:
              "Showcase your catalog online so people can find what they are looking for.",
          },
          {
            icon: turn3,
            content: "Offer in-store pickup for online purchases.",
          },
          {
            icon: turn3,
            content:
              "Allow shipping in states where you’re legally allowed to.",
          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:
          "“Marketleap has streamlined most revenue sources, and we can see the report numbers for all of them combined or just locking in on one. It provides us with a simple way to analyze data and understand which revenue source is the most profitable.”",
        signature: signature1,
        name: "Printers Row Wine Shop",
        addresss: "Chicago, IL",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Marketleap Loans",
        description:
          "Get funding to make your next move with Marketleap Loans. Get approved quickly and make easy payments based on your daily sales.",
        image: sectionimage,
      },
      {
        heading: "Marketleap Checking",
        description:
          "Your Marketleap sales are automatically (and immediately) ready to spend with your debit card, digitally or in person.",
        image: grow,
      },
      {
        heading: "Marketleap Savings",
        description:
          "Set aside a percentage of your sales to plan for taxes, purchase new inventory, or anything else you need with Marketleap Savings.",
        image: add,
      },
      {
        heading: "Marketleap Staff",
        description:
          "Set up your team fast with easy onboarding, shift scheduling, custom access, and built-in payroll.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Marketleap Register",
        image: square1,
        constent:
          "Get two displays in one piece of hardware — one screen for you and another where your customers can review their purchase and pay.",
      },
      {
        heading: "Marketleap Handheld",
        image: square2,
        constent:
          "Run checkout anywhere, manage inventory, and do more with a pocketable POS.",
      },
      {
        heading: "Marketleap Stand",
        image: sqaure3,
        constent:
          "Turn your iPad into a POS with a built-in card reader to make checkouts even easier.",
      },
      {
        heading: "Marketleap Terminal",
        image: sqaure4,
        constent:
          "Take payments and print receipts with a countertop device that flexes to your needs.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description: "The Future of Retail Report",
      },
      {
        image: inspired2,
        // heading: "",
        description:
          "How to Build Customer Loyalty in Your Liquor or Wine Store",
      },
      {
        image: inspired3,
        // heading: "",
        description:
          "How Hi-Lo Liquor Market Builds Community and Brand Loyalists",
      },
      {
        image: inspired4,
        // heading: "",
        description: "6 Common Retail Problems Technology Can Help Solve",
      },

      {
        image: inspired5,
        // heading: "",
        description: "UPS Shares How to Ship Everything",
      },
      {
        image: inspired5,
        // heading: "",
        description:
          "How to Get a Liquor License (and Other Licenses You Should Think About)",
      },
    ],
    faqData: [
      {
        title: "How do I switch from my current solution?",
        text: "It’s easy and quick to sign up for Marketleap. If you currently use Lightspeed Retail, Shopify POS, or another similar grocery store point-of-sale system, Marketleap will likely fit your needs with an easy-to-use interface. Just select your plan, sign up, and import your inventory. You can easily transfer your existing inventory with bulk intake importing. <br /><br /> You can count on Marketleap for transparent pricing and no long-term contracts. And if you need help, Marketleap Support is here for you.",
      },
      {
        title: "Can I upgrade my Marketleap for Retail plan?",
        text: "You can upgrade your plan from Marketleap for Retail Free to Marketleap for Retail Plus by subscribing here. You’ll be able to utilize all existing features and you’ll only have to set up the added functionality included with your upgrade. After your 30-day free trial of the Marketleap for Retail Plus plan, you’ll be given the option to pick your plan. If you don’t choose one, you’ll automatically be downgraded to the Marketleap for Retail Free plan. <br /><br /> To upgrade to the Marketleap for Retail Custom Premium plan, contact our sales team.",
      },
      {
        title: "Can I downgrade my Marketleap for Retail plan?",
        text: "You can always downgrade your subscription from Plus to in your Dashboard. When you downgrade, you’ll see messaging in your Dashboard letting you know which features you’ll lose, like certain smart inventory management features, cross-location returns, and barcode label printing. You can see and compare plan features on our pricing page. <br /><br /> You can also pause your subscription at any time from your Dashboard. When you pause a subscription, you will not be billed. You can unpause at any time and your account will be ready for you without losing your past data.",
      },
    ],
  },

  //cbd

  {
    id: "cbd",
    marqueeImages: [marquee1, marquee2],
    title: "Sell CBD online and in-store to reach every customer.",
    label: "CBD",
    makeTheMostSection: [
      {
        section1heading: "Online",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Create a free online store with Square Online and seamlessly accept payments for your CBD products. Or sync our software with your current site."          },
          // {
          //   icon: manage,
          //   content:
          //     "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          // },
          // {
          //   icon: people,
          //   content:
          //     "Add unlimited tech calendars and sync them across multiple locations.",
          // },
        ],
      },

      {
        section2heading: "In your app",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Work with your developer to integrate Square payments into your mobile app and start accepting in-app payments.",
          },
          // {
          //   icon: payment2svg,
          //   content:
          //     "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          // },
          // {
          //   icon: payment3svg,
          //   content: "Access your funds instantly with Market Leap Checking.¹",
          // },
        ],
      },
      {
        section3heading: "In Person",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Easily accept card payments at your store or on the go with Square Point of Sale or Square for Retail.",
          },
          // {
          //   icon: keep2svg,
          //   content:
          //     "Add a Book Now button to your Instagram and Facebook profiles.",
          // },
          // {
          //   icon: keep3svg,
          //   content: "Get discovered and booked on Market Leap Go.",
          // },
          // {
          //   icon: keep4svg,
          //   content:
          //     "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          // },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: "",
        review: "",
        signature: "",
        name: "",
        addresss: "",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "PCI compliance supported",
        description:
          "As the merchant of record, our reputation is at stake as much as yours. We’re dedicated to protecting both our merchants and their customers.",
        image: sectionimage,
      },
      {
        heading: "Data security taken care of",
        description:
          "Our system is battle-tested every day, 24/7, to keep your data safe.",
        image: grow,
      },
      {
        heading: "Payment processing solutions at any scale",
        description:
          "Square processes millions of payments every day and handles the complexity of payments on your behalf, so you can rely on your cash flow coming in.",
        image: add,
      },
       {
        heading: "Payment risk minimized",
        description:
          "With our dedicated in-house team of data scientists and risk analysts, we work to keep you ahead of fraud. No extra fees — it’s all included in your rate.",
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
        image: "",
        // heading: "",
        description:
          "",
      },
      {
        image: "",
        // heading: "",
        description: "",
      },
      {
        image: "",
        // heading: "",
        description: "",
      },
      {
        image: "",
        // heading: "",
        description: "",
      },

      {
        image: "",
        // heading: "",
        description:
          "",
      },
      {
        image: "",
        // heading: "",
        description: "",
      },
    ],
    faqData: [
      {
        title: "What will my fees be?",
        text: "Our CBD Program fees are: <br /><br /> Online: 3.8% + 30¢ <br /> In Person: 3.5% + 10¢ <br /> Keyed in and Card on File: 4.4% + 15¢ <br /><br /> If you process over $250k in Sales per year or CBD is only a small portion of your overall sales, you may qualify for a custom rate. To understand how adding CBD products to your business may impact your pricing with Square, please request a quote. You can also learn more about our fees."
      },
      {
        title: "What CBD products am I allowed to sell?",
        text: "Square currently allows sellers in the CBD program to accept payments for hemp and hemp-derived CBD products that have less than, or equal to, 0.3% THC in most states within the United States. Learn more about selling CBD."
      },
      {
        title: "What types of information will you need for my application?",
        text: "Examples of information you will need to have on hand for your application include general information about your business, including but not limited to: <br /><br /> Transaction amounts <br /> Your refund policy <br /> Recent bank statements<br /> A description of your CBD products<br /> Online store and social media accounts <br /> A certificate of analysis confirming Delta 9-THC percentages for each item",
      },
      {
        title: "What is Square’s stance on medical claims associated with CBD?",
        text: "Our program is industry-leading, which means we must be extra diligent about ensuring we have a robust framework. We don’t allow any claims that your CBD products may be used to cure, treat, or aid conditions such as anxiety, inflammation, depression, PTSD, ADHD, cancer, or any other health conditions."
      },
      
    ],
  },

  //day-spa

  {
    id: "day-spa",
    marqueeImages: [marquee1, marquee2],
    title: "Scheduling made serene.",
    label: "Day spa",
    makeTheMostSection: [
      {
        section1heading: "Build a custom website with Square Online.",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Launch a user-friendly website that fits your brand. Increase visibility with built-in SEO tools, set up an online store, and give your clients the option to book appointments 24/7.",
          },
        
        ],
      },

      {
        section2heading: "Reach more clients with Square Marketing.",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Run targeted text or email campaigns in minutes, track your results live on Square Dashboard, and make updates as your business goals change.",
          },
         
        ],
      },
      {
        section3heading: "Drive business year-round with gift cards.",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Make it easy for your clients to treat the people in their lives. Square Gift Cards can be sold online or in-store, are reloadable, and can be customized to fit your brand.",
          },
          // {
          //   icon: keep2svg,
          //   content:
          //     "Add a Book Now button to your Instagram and Facebook profiles.",
          // },
          // {
          //   icon: keep3svg,
          //   content: "Get discovered and booked on Market Leap Go.",
          // },
          // {
          //   icon: keep4svg,
          //   content:
          //     "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          // },
        ],
      },
       {
        section4heading: "Simplify operations with Square Staff features.",
        section4Image: keep,
        section4Content: [
          {
            icon: keep1svg,
            content:
              "Manage your team from your POS with select Staff features and Square Advanced Access. In just a few clicks you can create custom permission sets and track your team’s activity.",
          },
          // {
          //   icon: keep2svg,
          //   content:
          //     "Add a Book Now button to your Instagram and Facebook profiles.",
          // },
          // {
          //   icon: keep3svg,
          //   content: "Get discovered and booked on Market Leap Go.",
          // },
          // {
          //   icon: keep4svg,
          //   content:
          //     "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          // },
        ],
      },
    
    ],
    ReviewSliderContent: [
      {
        image: "",
        review: "",
        signature: "",
        name: "",
        addresss: "",
      },
    ],

    everythinguouneedtoKnow: [
      // {
      //   heading: "Bank through Market Leap",
      //   description:
      //     "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
      //   image: sectionimage,
      // },
      // {
      //   heading: "Grow Your Client Base",
      //   description:
      //     "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
      //   image: grow,
      // },
      // {
      //   heading: "Add New Revenue Streams",
      //   description:
      //     "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
      //   image: add,
      // },
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
      // {
      //   image: inspired1,
      //   // heading: "",
      //   description:
      //     "How to Keep Salon Appointments on Schedule When You’re Busy",
      // },
      // {
      //   image: inspired2,
      //   // heading: "",
      //   description: "How to Optimize Your Bookings on Social Media",
      // },
      // {
      //   image: inspired3,
      //   // heading: "",
      //   description: "The Art of Balancing Regular and Walk-In Appointments",
      // },
      // {
      //   image: inspired4,
      //   // heading: "",
      //   description: "Which States Have the Most Expensive Manicures?",
      // },

      // {
      //   image: inspired5,
      //   // heading: "",
      //   description:
      //     "Salon Booking and Cancellation Policy Templates and Examples You Need",
      // },
      // {
      //   image: inspired6,
      //   // heading: "",
      //   description: "5 Reasons Your Salon Needs a Loyalty Program",
      // },
    ],
    faqData: [
      {
        title: "Can I use Market Leap Appointments to power my entire spa?",
        text:  "Yes. Market Leap is an excellent solution for streamlining spa operations. In addition to processing transactions and accepting multiple payment methods, spa owners can confidently track sales and inventory in real time. Square Appointments is an all-in-one POS for scheduling, client communications, and management. It also includes back-of-house solutions like staff management and a unified experience for workplace management tasks like payroll and team scheduling. <br /> <br /> For spa owners looking to power their entire business, consider other Square solutions such as Square Gift Cards, Square Marketing, Square Banking, and Square Online.",
      },
     
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "Market Leap works with any U.S.-issued and most internationally issued magstripe or chip cards bearing a Visa, Mastercard, American Express, Discover, JCB, or UnionPay logo. Square also supports digital payments through wallets such as Apple Pay and Google Pay (including Tap to Pay functionality). <br /> <br /> In addition to traditional payment methods, Square also offers Afterpay for customers looking to spend between $1 and $2,000 for purchases online via Square Online or in person via Square hardware.",
      },
      {
        title: "How does Market Leap manage tipping for my spa business?",
        text: "The Square POS offers a variety of options for customers to select a tip at their spa. <br /> <br /> In settings, you can configure a tipping screen that will be displayed for customers to select a tip after the payment has been processed. After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. This tip can be a percentage of the sale or a custom value, based on the preference of you and your employees."
      },
      {
        title: "Can I book appointments and collect payments from my website?",
        text: "Yes. Square Appointments allows customers to directly book appointments online. Create a stand-alone website for booking or embed a booking widget or button on your existing website — both for free. In addition to accepting bookings, you can also require prepayment or collect a credit card on file to charge in the case of a no-show, just pay processing fees."
      },
    ],
  },

  //fitness

  {
    id: "fitness",
    marqueeImages: [marquee1, marquee2],
    title: "Meet your hands-off scheduling solution.",
    label: "Fitness",
    makeTheMostSection: [
      {
        section1heading: "Grow your community with Square Marketing.",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Take the guesswork out of marketing with tools that plug into your POS. Run targeted text or email campaigns and track results live on your Square Dashboard.",
          },
          // {
          //   icon: manage,
          //   content:
          //     "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          // },
          // {
          //   icon: people,
          //   content:
          //     "Add unlimited tech calendars and sync them across multiple locations.",
          // },
        ],
      },

      {
        section2heading: "Retain clientele with Square Loyalty.",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Keep clients coming back with an easy-to-use loyalty program that’s built into your POS. Plus, track its impact from your Square Dashboard.",
          },
          // {
          //   icon: payment2svg,
          //   content:
          //     "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          // },
          // {
          //   icon: payment3svg,
          //   content: "Access your funds instantly with Market Leap Checking.¹",
          // },
        ],
      },
      {
        section3heading: "Pay your team with Square Payroll.",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Take advantage of full-service payroll software designed for small businesses. Instantly pay your team and set up automated tax filings with a single tool.",
          },
          // {
          //   icon: keep2svg,
          //   content:
          //     "Add a Book Now button to your Instagram and Facebook profiles.",
          // },
          // {
          //   icon: keep3svg,
          //   content: "Get discovered and booked on Market Leap Go.",
          // },
          // {
          //   icon: keep4svg,
          //   content:
          //     "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          // },
        ],
      },
      {
        section4heading: "Get paid faster with Square Invoices.",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Create, send, and schedule customized digital invoices from anywhere. Track unpaid invoices and get paid quickly with Apple Pay, Google Pay, or ACH Bank Transfer.",
          },
          // {
          //   icon: turn2,
          //   content:
          //     "Sell gift cards online and in person to reach even more customers. ",
          // },
          // {
          //   icon: turn3,
          //   content:
          //     "Drive repeat business with a loyalty program that rewards returning customers. ",
          // },
        ],
      },
    ],
    ReviewSliderContent: [
      // {
      //   image: review1image,
      //   review:
      //     "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
      //   signature: signature1,
      //   name: "Rachel Dang",
      //   addresss: "Urban Nail BoxSeattle, WA",
      // },
    ],

    everythinguouneedtoKnow: [
      // {
      //   heading: "Bank through Market Leap",
      //   description:
      //     "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
      //   image: sectionimage,
      // },
      // {
      //   heading: "Grow Your Client Base",
      //   description:
      //     "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
      //   image: grow,
      // },
      // {
      //   heading: "Add New Revenue Streams",
      //   description:
      //     "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
      //   image: add,
      // },
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
      // {
      //   image: inspired1,
      //   // heading: "",
      //   description:
      //     "How to Keep Salon Appointments on Schedule When You’re Busy",
      // },
      // {
      //   image: inspired2,
      //   // heading: "",
      //   description: "How to Optimize Your Bookings on Social Media",
      // },
      // {
      //   image: inspired3,
      //   // heading: "",
      //   description: "The Art of Balancing Regular and Walk-In Appointments",
      // },
      // {
      //   image: inspired4,
      //   // heading: "",
      //   description: "Which States Have the Most Expensive Manicures?",
      // },

      // {
      //   image: inspired5,
      //   // heading: "",
      //   description:
      //     "Salon Booking and Cancellation Policy Templates and Examples You Need",
      // },
      // {
      //   image: inspired6,
      //   // heading: "",
      //   description: "5 Reasons Your Salon Needs a Loyalty Program",
      // },
    ],
    faqData: [
      {
        title: "Can I use Square to handle in-store merchandise payments?",
        text: "Yes. In addition to processing bookings and sales of classes, Square Appointments allows your business to accept every major type of payment. Whether it’s magstripe, chip card, or Tap to Pay, you can confidently accept them all securely and efficiently with Square."
      },
      {
        title: "Can Square integrate with my existing business tools?",
        text: "Market Leap integrates seamlessly with popular apps for independent businesses. Quickly integrate your Wix site with Square payment processing, or link your QuickBooks account to your Square account to easily view appointments and class sales records."
      },
      // {
      //   title: "Is Market Leap right for my business?",
      //   text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      // },
      // {
      //   title: "What payment methods are supported by Market Leap POS?",
      //   text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      // },
      // {
      //   title: "How does Market Leap manage tipping for my nail technicians?",
      //   text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      // },
      // {
      //   title: "Can I book appointments and take payments from my website?",
      //   text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      // },
    ],
  },

  //health-care

  {
    id: "health-care",
    marqueeImages: [marquee1, marquee2],
    title: "Simplify your health care payments system.",
    label: "Healthcare",
    makeTheMostSection: [
      {
        section1heading: "Take payments easily.",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Square hardware is PCI-compliant right out of the box. You can accept all major payment types at checkout and access a variety of payment-related tools with a click of a button. ",
          },
          // {
          //   icon: manage,
          //   content:
          //     "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          // },
          // {
          //   icon: people,
          //   content:
          //     "Add unlimited tech calendars and sync them across multiple locations.",
          // },
        ],
      },

      {
        section2heading: "Check patients out quickly.",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Our hardware is designed with an interface that is intuitive for you and your team to use. Print receipts right on Square Terminal, or send them to patients via text or email.",
          },
          // {
          //   icon: payment2svg,
          //   content:
          //     "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          // },
          // {
          //   icon: payment3svg,
          //   content: "Access your funds instantly with Market Leap Checking.¹",
          // },
        ],
      },
      {
        section3heading: "Enjoy transparent pricing.",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "You only pay the processing fee of 2.6% + 15¢ when you take in-person credit card transactions, plus you have access to clear reporting right from your Square Dashboard.",
          },
          // {
          //   icon: keep2svg,
          //   content:
          //     "Add a Book Now button to your Instagram and Facebook profiles.",
          // },
          // {
          //   icon: keep3svg,
          //   content: "Get discovered and booked on Market Leap Go.",
          // },
          // {
          //   icon: keep4svg,
          //   content:
          //     "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          // },
        ],
      },
      {
        section4heading: "Accept HSA and FSA cards.",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Licensed health care providers can process HSA and FSA cards just like any other cards at the standard processing rate.",
          },
          // {
          //   icon: turn2,
          //   content:
          //     "Sell gift cards online and in person to reach even more customers. ",
          // },
          // {
          //   icon: turn3,
          //   content:
          //     "Drive repeat business with a loyalty program that rewards returning customers. ",
          // },
        ],
      },
        {
        section5heading: "HIPAA-compatible payments.",
        section5Image: turn,
        section5Content: [
          {
            icon: turn1,
            content:
              "Our secure online payment system protects you and your patients. For more information on HIPAA compatibility, visit our support page.",
          },
          // {
          //   icon: turn2,
          //   content:
          //     "Sell gift cards online and in person to reach even more customers. ",
          // },
          // {
          //   icon: turn3,
          //   content:
          //     "Drive repeat business with a loyalty program that rewards returning customers. ",
          // },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:"Square helps keep our cash flow steady and helps provide our patients with options for payments by using either credit cards or [ACH].”",
        signature: "",
        name: "Joey Colina",
        addresss: "Colina Dental Center",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Take in-person payments with Market Leap Terminal.",
        description:
          "Accept contactless, chip, Apple Pay, and Google Pay at the front desk with Square Terminal. An easy, compact solution for outpatient and clinic cashless payments or home-visit medical treatments.",
        image: sectionimage,
      },
      {
        heading: "Take remote payments with Market Leap Virtual Terminal. ",
        description:
          "Whether your patients are calling in or sending in their information via a secure online portal, you can process payments on the computer. You can also request payments via text, schedule recurring payments, and issue receipts. ",
        image: grow,
      },
      {
        heading: "Run your practice efficiently with Square Point of Sale.",
        description:
          "Square Point of Sale is a free point-of-sale app built to grow with your practice. In addition to accepting payments from patients, Square also offers retail and staffing features which can help you handle online orders and inventory, keep track of sales, and manage your employees.",
        image: add,
      },
       {
        heading: "Enjoy simple invoicing that gets you paid quickly.",
        description:"No more cumbersome work such as printing and mailing invoices. Square Invoices allows you to issue an invoice simply by entering the patient’s email address or phone number.",
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
          "Dentist Office",
      },
      {
        image: inspired2,
        // heading: "",
        description: "Optometrist",
      },
      {
        image: inspired3,
        // heading: "",
        description: "Dermatology",
      },
      {
        image: inspired4,
        // heading: "",
        description: "Health and Clinics",
      },
 {
        image: inspired4,
        // heading: "",
        description: "Dentist Office",
      },
     
    ],
    faqData: [
      {
        title: "Does Market Leap payment processing integrate with the tools I already use?",
        text: "From practice management systems to electronic medical record solutions, Market Leap works with apps for any need. Connect in just a few steps, sync your data, and manage apps right from your Market Leap Dashboard."
      },
      {
        title: "How long does it take to set up Market Leap?",
        text: "Getting set up to accept credit cards on Market Leap only takes a few minutes. You can start taking payments the same day without hardware or purchase hardware at one of our retail outlets."
      },
      {
        title: "Can I send invoices to patients through Market Leap Point of Sale software?",
        text: "Absolutely. It’s free to send unlimited invoices through Market Leap. They’re easy to track and you can set up automatic reminders so you don’t have to spend time tracking down patients."
      },
      {
        title: "What types of health care practices can use Market Leap POS?",
        text: "Optometrists, dentists, dermatologists, and health care clinics have all benefited from using Market Leap Point of Sale. Any health care practice that needs to take payments quickly and securely can use Square Point of Sale. "
      },
      {
        title: "What other Market Leap products can I use to help my practice run efficiently?",
        text: "Market Leap offers many products to help you run your practice, from Market Leap Appointments for making and managing appointments to Market Leap Payroll for paying your staff. You can also use Market Leap Staff to help you manage your whole team."
      },
      {
        title: "Is Market Leap HIPAA compliant?",
        text: "Market Leap is HIPAA compatible. For more information, please visit our support page."
      },
    ],
  },

  //cleaning

  {
    id: "cleaning",
    marqueeImages: [marquee1, marquee2],
    title: "The solution that keeps your cleaning business ahead of schedule",
    label: "Cleaning",
    makeTheMostSection: [
      {
        section1heading: "Simple scheduling software for cleaning businesses.",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Accept job bookings 24/7 with a free online booking site or embed a booking widget or button on your existing website.",
          },
           {
            icon: manage,
            content:
              "Manage your calendar, staff, and online bookings across multiple locations.",
          },
          {
            icon: manage,
            content:
              "Schedule recurring appointments for your regular clients from your Square Appointments Calendar, or from your Appointments app.",
          },
          {
            icon: people,
            content:
              "Protect against late cancellations and forgotten bookings with a customized cancellation policy and automatic reminders.",
          },
        ],
      },

      {
        section2heading: "Take secure payments on the go.",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Key in credit and debit cards directly from a job using your phone or computer.",
          },
          {
            icon: payment2svg,
            content:
            "Keep a card on file to hold appointments, require prepayment or charge cancellation fees."
          },
          {
            icon: payment3svg,
            content: "Send professional estimates and invoices with automatic customer reminders.",
          },
          {
            icon: payment3svg,
            content: "Receive your funds quickly with free next-business-day transfers to smooth out your cash flow.",
          },
        ],
      },
      {
        section3heading: "Strengthen customer relationships.",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Auto-create customer profiles every time someone books a cleaning service via Square Appointments.",
          },
          {
            icon: keep2svg,
            content:
              "Send automatic appointment reminders to customers via SMS and/or email.",
          },
          {
            icon: keep3svg,
            content: "Import customers in another database into Square Appointments.",
          },
          {
            icon: keep4svg,
            content:
              "Create and send contracts to establish clear service agreements with your customers.",
          },
        ],
      },
      {
        section4heading: "Empower your team members.",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Allow your employees to log in to view and manage their calendars themselves.",
          },
          {
            icon: turn2,
            content:
              "Assign different sets of permissions to different roles in your business.",
          },
          {
            icon: turn3,
            content:
              "Assign your team commission rates for services and sales.",
          },
           {
            icon: turn3,
            content:
              "Make better business decisions with real-time reports.",
          },
        ],
      },
      {
        section5heading: "Integrate with your favorite business software.",
        section5Image: turn,
        section5Content: [
          {
            icon: turn1,
            content:
              "Integrate with popular third-party apps like Xero, Quickbooks and JotForm to help with every aspect of your cleaning business.",
          },
          // {
          //   icon: turn2,
          //   content:
          //     "Assign different sets of permissions to different roles in your business.",
          // },
          // {
          //   icon: turn3,
          //   content:
          //     "Assign your team commission rates for services and sales.",
          // },
          //  {
          //   icon: turn3,
          //   content:
          //     "Make better business decisions with real-time reports.",
          // },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:"“We no longer have to play phone tag with customers! They just email us their enquiry, and we provide a link for them to schedule their appointment through Square. It’s efficient and 100% digital.”",
        signature: "",
        name: "Nanetta Rapuano",
        addresss: "Longhorn Grill Cleaning",
      },
    ],

    everythinguouneedtoKnow: [
      // {
      //   heading: "Bank through Market Leap",
      //   description:
      //     "Manage all of your shop’s finances — payments, business banking accounts, cash flow, and more — together in one place.",
      //   image: sectionimage,
      // },
      // {
      //   heading: "Grow Your Client Base",
      //   description:
      //     "Expand your shop’s reach and keep clients coming back with customized, automated email and text campaigns.",
      //   image: grow,
      // },
      // {
      //   heading: "Add New Revenue Streams",
      //   description:
      //     "Sell aftercare, merch, and other retail products online and in-store with inventory management and a customizable eCommerce site.",
      //   image: add,
      // },
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
      // {
      //   image: inspired1,
      //   // heading: "",
      //   description:
      //     "How to Keep Salon Appointments on Schedule When You’re Busy",
      // },
      // {
      //   image: inspired2,
      //   // heading: "",
      //   description: "How to Optimize Your Bookings on Social Media",
      // },
      // {
      //   image: inspired3,
      //   // heading: "",
      //   description: "The Art of Balancing Regular and Walk-In Appointments",
      // },
      // {
      //   image: inspired4,
      //   // heading: "",
      //   description: "Which States Have the Most Expensive Manicures?",
      // },

      // {
      //   image: inspired5,
      //   // heading: "",
      //   description:
      //     "Salon Booking and Cancellation Policy Templates and Examples You Need",
      // },
      // {
      //   image: inspired6,
      //   // heading: "",
      //   description: "5 Reasons Your Salon Needs a Loyalty Program",
      // },
    ],
    faqData: [
      {
        title: "What are the benefits of using Square Appointments for my cleaning business?",
        text: "Square Appointments has many benefits for cleaning businesses, including: <br /> <br /> Allow your customers to book 24/7, even when you’re not working.<br />Protect your time with late cancellation fees and prepayment protection.<br /> Accept bookings via Instagram, Facebook and Google.<br /> Reduce no-shows with automated reminders and confirmation SMS and/or emails.<br /> Strengthen customer relationships with customer profiles and notes.<br /> Manage your team and multiple locations.<br /> Manage your cleaning business from anywhere with the Square POS app.<br /> Flexible pricing to suit any business size.",
      },
      {
        title: "Can each employee have their own account profile for easy online scheduling with our clients?",
        text: "Yes, Square Appointments offers unlimited staff accounts for all plans. Your team members simply need to download the app and log in to their account."
      },
      {
        title: "Can I create and send cleaning service contracts with Square?",
        text: "Yes, to create and send contracts to your customers you can use Square Contracts. Choose one of Square’s predefined templates and customize it to meet your needs, or build an entirely new template from scratch for your business."
      },
      {
        title: "What types of cleaning services can use Square Appointments?",
        text: 
        "Square allows you to run your cleaning business and take payments from anywhere. Types of cleaning services that can use Square Appointments include: <br /><br /> Commercial cleaning<br /> Residential cleaning<br /> Disaster cleaning and restoration<br /> Janitorial and maintenance services for schools and large office spaces<br /> Laundry and dry cleaning services<br /> Green cleaning services<br /> Pressure washing services<br /> Medical cleaning for clinics and hospitals<br /> Sports cleaning for sports facilities<br /> Car and equipment cleaning services"
      },
      {
        title: "Can I still schedule customers who call or text to book an appointment?",
        text: "Yes, you can easily schedule appointments for customers that call your cleaning business. Simply create a new appointment in your Appointments calendar and confirm which customer notifications you’d like enabled.Your staff will also receive appointment reminders to make sure they show up on the booked day and time to perform the requested service."
      },
      {
        title: "Can I use Square Appointments if I have a very large team?",
        text: "Square Appointments offers unlimited staff accounts with all plans so you can add multiple team members to accept cleaning service appointments.",
      },
    ],
  },

  //contarcts-and-specialists

  {
    id: "contarctors-and-specialists",
    marqueeImages: [marquee1, marquee2],
    title: "Contractor software built for pros who build",
    label: "Contractors & specialists",
    makeTheMostSection: [
      {
        section1heading: "Get paid fast",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Take payments instantly, in the office or the field.",
          },
          {
            icon: manage,
            content: "Build customer trust with secure, professional payment methods."
          },
          {
            icon: people,
            content: "Offer flexible payment options via credit card, Apple Pay, Google Pay, Cash App Pay, Cash App Afterpay, or no-fee ACH transfers."
          },
           {
            icon: people,
            content: "Create and send invoices anywhere, any time."
          },
        ],
      },

      {
        section2heading: "Manage jobs from start to finish",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Allow customers to view your services and book with ease.",
          },
          {
            icon: payment2svg,
            content:"Auto-convert custom estimates into invoices and track every stage of a job."
          },
          {
            icon: payment3svg,
            content: "Schedule milestone-based payments or multiple payments on a single invoice for larger jobs.",
          },
          {
            icon: payment3svg,
            content: "Keep track of multiple projects, invoices, and scheduling — all in one place.",
          },
        ],
      },
      {
        section3heading: "Win more business",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content: "Create a professional website to drive traffic and generate customer reviews."
          },
          {
            icon: keep2svg,
            content:
              "Send text and email campaigns to highlight deals and more.",
          },
          {
            icon: keep3svg,
            content: "Automate invoicing and jobs for repeat customers to increase recurring revenue.",
          },
         
        ],
      },
      {
        section4heading: "Simplify your workflow",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Update customers in real time and keep all your correspondence in one place.",
          },
          {
            icon: turn2,
            content:
              "Track revenue, costs, payroll, and insights with Square Analytics.",
          },
          {
            icon: turn3,
            content:
              "Save time and protect your business with contract templates.",
          },
            {
            icon: turn3,
            content:
              "Auto-generate profiles after every transaction with Square Customer Directory and keep cards on file for future payments.",

          },
        ],
      },
    ],
    ReviewSliderContent: [
      {
        image: review1image,
        review:"“In our industry, sometimes when you’re in a rural area, people think they have to pay cash, but being able to use Square allows us to have more flexibility on the payments side.”",
        signature: signature1,
        name: "Calvin Valdovinos",
        addresss: "GDNC Nursery Desert Hot Springs, CA",
      },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Never miss a booking",
        description:
          "Let customers book online so you can manage your schedule with ease.",
        image: sectionimage,
      },
      {
        heading: "Manage your cash flow",
        description:
          "Get instant access to your money and manage it all from one place.",
        image: grow,
      },
      {
        heading: "Get discovered",
        description:
          "Create a professional, free site and bring in new leads.",
        image: add,
      },
    ],
    hardwarethatsuits: [
      {
        heading: "Square Reader for contactless and chip",
        image: square1,
        constent:
          "Be ready for any sale, anywhere, with a super portable design that pairs to your device.",
      },
      {
        heading: "Square Handheld",
        image: square2,
        constent:
          "Stay on the move with a pocketable POS that takes payments, interacts with clients, and more.",
      },
      {
        heading: "Square Terminal",
        image: sqaure3,
        constent:
          "A compact device that flexes to your needs with integrated payments and receipt printer.",
      },
      {
        heading: "Square Stand",
        image: sqaure4,
        constent:
          "Simplify checkout in just one swivel with an iPad POS you already know how to use.",
      },
       {
        heading: "Square Reader for magstripe",
        image: sqaure4,
        constent:
          "Start selling in minutes with a bite-sized reader that plugs right in and never needs to be charged.",
      },
    ],
    getinspiredSection: [
      {
        image: inspired1,
        // heading: "",
        description:
          "How G.E. Frisco Uses Payments To Meet a Wide Range of Its Customers’ Needs",
      },
      {
        image: inspired2,
        // heading: "",
        description: "How Can I Accept Credit Card Payments",
      },
      {
        image: inspired3,
        // heading: "",
        description: "Payment Links: What They Are and How To Use Them",
      },
      {
        image: inspired4,
        // heading: "",
        description: "Easily Sign Up for Square Checking and Payments in One Seamless Proces",
      },

      {
        image: inspired5,
        // heading: "",
        description:
          "How to Create an Invoice",
      },
      {
        image: inspired6,
        // heading: "",
        description: "How to Choose an Online Booking System",
      },
    ],
    faqData: [
      {
        title: "How much does Square cost?",
        text: "It’s free to sign up for a Square account, and you only pay for what you use. With many of our tools, you only pay the processing fee when you charge a payment."
      },
      {
        title: "Is Square invoicing secure?",
        text: "As the merchant of record, Square protects you and your customers by keeping payment data secure. From the moment your customer uses a credit card or enters their information, their payment data is kept encrypted. Security is engineered into Square hardware and software from the ground up, with end-to-end encryption, PCI DSS certified hardware, and fraud detection tools ensuring every transaction — online or in person — is protected. As the merchant of record, Square handles security, so you don’t have to worry about managing third-party vendors or additional security measures."
      },
      {
        title: "How does Square save contractor businesses time?",
        text: "From creating custom contracts to paying employees and sending estimates and invoices, there’s a lot of back-office work on top of providing contracting services. That’s why it’s important for contractor invoice software to integrate all sides of your business. The all-in-one Square system helps contracting businesses like yours streamline contractor estimates and invoices, giving you more time to focus on the job. Our software is packed with automated tools so you can invoice for repeat jobs, track payments in real time, reuse contracts and invoice templates, and send auto-reminders to customers. With Square, it’s easy to create one organized, integrated workflow.<br /> <br />The Square ecosystem offers everything general contractors need to run their businesses efficiently, from estimating and scheduling to invoicing and payment processing. With tools like Square Invoices, Square Appointments, and Square Team Management, you can manage projects from start to finish. Create estimates, schedule workers, track jobs in real time, and send invoices, all while accepting payments on-site or online. Plus, Square integrates with accounting software like QuickBooks and Xero, making back-office management seamless.",
      },
      {
        title: "When can I access my money?",
        text: "You can get instant access to your Square sales with Square Checking. Square Checking is great for contractor management because it gives you more control of your cash flow so you can provide better customer service and run your business efficiently. <br /> <br /> With Square, you can access funds as soon as the next business day or instantly with Square Checking. Fast payment processing ensures that you won’t have to wait long to access funds from completed jobs. With Square Checking, you can use a free Square debit card for expenses like purchasing materials or paying subcontractors. This gives you better control over your cash flow, which is critical for project-based businesses."
      },
      {
        title: "How long does it take to get started?",
        text: "It only takes a few minutes to set up your free Square account. Once you sign up, you can choose the right tools that fit your business based on the contracting services you provide. Square software keeps everything synced seamlessly with real-time tracking in one integrated system. If you’re currently using other contractor invoice software or accounting apps, you can quickly sync those tools with Square."
      },
      {
        title: "How do Square tools work together?",
        text: "Square Invoices provides an end-to-end solution for contractors. Whether you’re a contractor who specializes in masonry, window cleaning, roofing, or landscaping services, Square contract management software helps you stay organized and leave any paper-based systems behind. Square also syncs with the accounting software you already use, like QuickBooks and Xero."
      },
      {
        title: "Does Square have invoice templates?",
        text: "Yes. Square Invoices has free invoice templates for contractors that you can send to your customers in minutes. Once you download the template, it’s yours to customize any way you want. Fill in your business name, add your logo, and send when you’re ready."
      },
    ],
  },

  //landscaping-and-outdoors

  {
    id: "landscaping-and-outdoors",
    marqueeImages: [marquee1, marquee2],
    title: "Cut the hassle with smarter invoicing.",
    label: "Landscaping & outdoors",
    makeTheMostSection: [
      {
        section1heading: "Send a professional estimate.",
        section1Image: calenderImage,
        section1Content: [
          {
            icon: pen,
            content:
              "Send customers a professional landscaping estimate that you can quickly convert to an invoice with one click.",
          },
          // {
          //   icon: manage,
          //   content:
          //     "Spend less time managing bookings with automated confirmations and reminders and let the AI-powered automated messaging manage any rescheduling.",
          // },
          // {
          //   icon: people,
          //   content:
          //     "Add unlimited tech calendars and sync them across multiple locations.",
          // },
        ],
      },

      {
        section2heading: "Accept every kind of payment.",
        section2Image: payment,
        section2Content: [
          {
            icon: paymnet1svg,
            content:
              "Let customers pay exactly how they want, whether it's by credit card, debit card, Apple Pay, Google Pay, Cash App Pay, ACH bank transfer, or Afterpay - in person and online.",
          },
          // {
          //   icon: payment2svg,
          //   content:
          //     "Accept every major type of payment your clients prefer, whether that’s tap, chip, card on file, Apple Pay, Google Pay, Cash App Pay, or Cash App Afterpay.",
          // },
          // {
          //   icon: payment3svg,
          //   content: "Access your funds instantly with Market Leap Checking.¹",
          // },
        ],
      },
      {
        section3heading: "Track invoices from anywhere.",
        section3Image: keep,
        section3Content: [
          {
            icon: keep1svg,
            content:
              "Track all of your invoices in one place so you always know what's paid, unpaid, or past due.",
          },
          // {
          //   icon: keep2svg,
          //   content:
          //     "Add a Book Now button to your Instagram and Facebook profiles.",
          // },
          // {
          //   icon: keep3svg,
          //   content: "Get discovered and booked on Market Leap Go.",
          // },
          // {
          //   icon: keep4svg,
          //   content:
          //     "Maximize your techs’ limited time with cancellation and no-show policies and waitlists.",
          // },
        ],
      },
      {
        section4heading: "Follow up with auto-reminders.",
        section4Image: turn,
        section4Content: [
          {
            icon: turn1,
            content:
              "Automatically send payment reminders to your customers before, on, or after an invoice is due to get paid on time.",
          },
          // {
          //   icon: turn2,
          //   content:
          //     "Sell gift cards online and in person to reach even more customers. ",
          // },
          // {
          //   icon: turn3,
          //   content:
          //     "Drive repeat business with a loyalty program that rewards returning customers. ",
          // },
        ],
      },
    ],
    ReviewSliderContent: [
      // {
      //   image: review1image,
      //   review:
      //     "Market Leap has been on my side since day one operating as a one-woman show, and has supported me as my business has grown from one team member to 34. Having everything in one place has unlocked our power to grow so quickly.”",
      //   signature: signature1,
      //   name: "Rachel Dang",
      //   addresss: "Urban Nail BoxSeattle, WA",
      // },
    ],

    everythinguouneedtoKnow: [
      {
        heading: "Customize invoice fields.",
        description:
          "Customize your landscape invoice with additional details like your terms of service, cancellation policy, or any other personalized message for your customers.",
        image: sectionimage,
      },
      {
        heading: "Offer multiple estimate options.",
        description:
          "Send your customers multiple service options from one landscape estimate so you can include a range of options to win customers of all budgets.",
        image: grow,
      },
      {
        heading: "Split up payments.",
        description:
          "Keep your cash flow on track by splitting larger invoices into progress invoices that have a custom schedule of payments.",
        image: add,
      },
      {
        heading: "Go from estimate to invoice.",
        description:
          "Automatically convert accepted estimates into invoices to easily request payment from your customers.",
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
      // {
      //   image: inspired1,
      //   // heading: "",
      //   description:
      //     "How to Keep Salon Appointments on Schedule When You’re Busy",
      // },
      // {
      //   image: inspired2,
      //   // heading: "",
      //   description: "How to Optimize Your Bookings on Social Media",
      // },
      // {
      //   image: inspired3,
      //   // heading: "",
      //   description: "The Art of Balancing Regular and Walk-In Appointments",
      // },
      // {
      //   image: inspired4,
      //   // heading: "",
      //   description: "Which States Have the Most Expensive Manicures?",
      // },

      // {
      //   image: inspired5,
      //   // heading: "",
      //   description:
      //     "Salon Booking and Cancellation Policy Templates and Examples You Need",
      // },
      // {
      //   image: inspired6,
      //   // heading: "",
      //   description: "5 Reasons Your Salon Needs a Loyalty Program",
      // },
    ],
    faqData: [
      {
        title: "How long does it take to get started?",
        text: "It only takes a few minutes to set up your free Square account. Once you sign up, you can quickly create a landscape estimate or invoice with Square Invoices or choose one of the Square integrated products that fit your needs based on the landscaping services you provide. Square keeps everything synced with real-time tracking in one integrated system. If you’re currently using other landscape billing software or landscape invoice software, you can also sync those tools with Square."
      },
      {
        title: "How does Square save landscaping businesses time?",
        text: "From creating custom landscape contracts to paying employees and sending landscape estimates and invoices, there’s a lot of back-office work on top of providing landscaping services. That’s why it’s important for landscape invoice software to integrate all sides of your business. The Square all-in-one system helps landscape businesses like yours streamline estimates and invoices so you have more time to focus on the job. Unlike other landscaping software, Square is packed with automated tools that help you save time so you can quickly invoice repeat jobs, track payments in real time, reuse contracts and invoice templates, and send auto-reminders to customers. With Square, it’s easy to create one organized, integrated workflow."
      },
      {
        title: "How much does Square cost?",
        text: "It’s free to create a Square account, and you only pay for what you use. With many of our tools, you only pay the processing fee when you charge a payment."
      },
      {
        title: "Does Square have invoice templates?",
        text: "Yes, Square Invoices has free invoice templates for landscapers that you can send to your customers in minutes. Once you download the template, it’s yours to customize any way you want. Fill in your landscape business name, add your logo, and send when you’re ready."
      },
      {
        title: "When can I access my money?",
        text: "With Square Checking, you can get instant access to the money from your Square sales. Square Checking is great for landscaping businesses because it gives you more control over your cash flow, so you can run your business efficiently."
      },
      {
        title: "Is Square invoicing secure?",
        text: "As the merchant of record, our job is to protect you and your customers, which means your data is always secure. From the time your customer uses a credit card or enters their information into our solutions, their payment data is kept encrypted. Security is engineered into Square hardware and software from the ground up. It’s all designed and maintained by Square, so you don’t have to go through anybody else."
      },
       {
        title: "How do Square tools work together?",
        text: "Square provides an end-to-end solution for your business to create landscaping invoices, estimates, and contracts all in one software. Square helps you stay organized and leave any paper-based systems behind. Square also syncs with the accounting software you already use, like QuickBooks and Xero."
      },
    ],
  },

  //all-home-and-commercial

  {
    id: "all-home-and-commercial",
    marqueeImages: [marquee1, marquee2],
    title: "all home and commercial",
    label: "",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },

  //automative

  {
    id: "automative",
    marqueeImages: [marquee1, marquee2],
    title: "automative",
    label: "",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },

  //organizations-and-non-profits

  {
    id: "organizations-and-non-profits",
    marqueeImages: [marquee1, marquee2],
    title: "organizations and non-profits",
    label: "",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },

  //pet-services

  {
    id: "pet-services",
    marqueeImages: [marquee1, marquee2],
    title: "pet-services",
    label: "",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },

  //professional-services

  {
    id: "professional-services",
    marqueeImages: [marquee1, marquee2],
    title: "professional-services",
    label: "",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },

  //Recreation

  {
    id: "recreation",
    marqueeImages: [marquee1, marquee2],
    title: "recreation",
    label: "",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },

  //Transportation

  {
    id: "Transportation",
    marqueeImages: [marquee1, marquee2],
    title: "Transportation",
    label: "",
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
        title: "What is nail salon software and what does it do?",
        text: "Nail salon software is any software that helps owners and nail technicians with their day-to-day operations. Often, nail salon software automates and improves processes for booking and scheduling, communicating with customers, staff management, marketing, inventory management, and payments.",
      },
      {
        title: "Can I use Market Leap to power my entire nail salon?",
        text: "Yes. Market Leap tools and services extend beyond payments. Market Leap is an all-in-one point of sale that includes key features of nail salon software (such as scheduling, cancellation fees, and reporting). The Market Leap ecosystem is specifically designed to take care of front-desk operations, such as online booking and client management, and back-of-house tasks, such as payroll, checking, and team management. <br /> <br /> For nail salon owners looking to power their entire business, consider other Market Leap features for cash flow management, flexible loans, payroll, and a free eCommerce site.",
      },
      {
        title: "Is Market Leap right for my business?",
        text: "If your business requires a point of sale for booking, payments, and more, Market Leap has what you need. Whether that’s a nail salon or day spa, our solution makes it easy to integrate booking, eCommerce, scheduling, staff management, and payments so you can run your business seamlessly from one app. <br /> <br /> Plus, the Market Leap ecosystem has a variety of tools to help you grow, such as Market Leap Marketing, Market Leap Gift Cards, Market Leap Banking, and more. <br /> <br /> Want to learn more about how Market Leap can help your beauty business? Check out industry insights.",
      },
      {
        title: "What payment methods are supported by Market Leap POS?",
        text: "You can bulk your customer and inventory lists to Market Leap and get up and running quickly. If you currently use Acuity, Booker, Fresha, Vagaro, or another booking software or salon solution, Market Leap will likely fit more of your needs with our easy-to-use interface. If you already have a website, it’s easy to transfer your existing domain to Market Leap Online.",
      },
      {
        title: "How does Market Leap manage tipping for my nail technicians?",
        text: "Market Leap offers a variety of options for customers to select a tip for their nail technician through the Market Leap POS. <br /> <br /> After customizing the settings, a tipping screen will appear during the checkout process. The screen will prompt customers to add a tip to their service. <br /> <br /> Tips can be calculated as a set rate or a percentage of the transaction. Additionally, customers can turn on custom tipping, if preferable.",
      },
      {
        title: "Can I book appointments and take payments from my website?",
        text: "Yes. With Market Leap, you can create an online booking website for your nail salon business or embed a booking widget or button on your existing website. With these tools, customers can view availability by nail technician and book appointments easily online. You can also request that customers prepay or provide their credit card information when booking online to reduce no-shows.",
      },
    ],
  },
];
