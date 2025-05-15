import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        space_grotesk: ["var(--font-space_grotesk)"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #0E0E0E, #0A2C3B )",
      },
      colors: {
        "primary": "#000000",
        "secondary": "#0055FF",
        // accent: "#FFCC00",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        navsize: { max: "1180px" },
        tab: { max: "991px" },
        mob: { max: "768px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
