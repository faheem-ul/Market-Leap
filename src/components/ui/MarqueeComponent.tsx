import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

interface Props {
  direction?: "left" | "right" | "up" | "down";
  children: React.ReactNode;
  className?: string;
}
const  MarqueeComponent: React.FC<Props> = ({
  direction,
  children,
  className,
}) => {
  return (
    <>
      <Marquee
        direction={direction}
        speed={120}
        className={cn("", className)}
      >
        {Array(25).fill(children)}
      </Marquee>
    </>
  );
};

export default MarqueeComponent;
