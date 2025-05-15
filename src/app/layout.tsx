import type { Metadata } from "next";
import {Poppins, Space_Grotesk} from "next/font/google"


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space_grotesk", 
  weight: ["300", "400", "500", "600", "700"],
})

import AosProvider from "@/providers/Aos";

import "./globals.css";

export const metadata: Metadata = {
  title: "Market Leap",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${space_grotesk.variable}`}
      >
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
