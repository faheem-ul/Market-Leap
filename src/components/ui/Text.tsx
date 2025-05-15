import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-poppins text-[100px] font-bold leading-[100px] text-primary mob:text-[40px] mob:leading-[50px]",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-poppins text-[66px]  font-normal leading-[100px] text-primary mob:text-[40px] mob:leading-[50px]",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "font-space_grotesk text-[20px] font-normal leading-[17.95px] text-primary",
          className
        )}
        onClick={onClick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
