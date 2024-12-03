import { useState, useEffect } from "react";

const XS_BREAKPOINT = 576;
const SM_BREAKPOINT = 768;
const MD_BREAKPOINT = 992;
const LG_BREAKPOINT = 1200;
const XL_BREAKPOINT = 1400;

export type Breakpoint = "XS" | "SM" | "MD" | "LG" | "XL" | "XXL";

const toBreakpoint = (width: number): Breakpoint => {
  if (width <= XS_BREAKPOINT) return "XS";
  if (width <= SM_BREAKPOINT) return "SM";
  if (width <= MD_BREAKPOINT) return "MD";
  if (width <= LG_BREAKPOINT) return "LG";
  if (width <= XL_BREAKPOINT) return "XL";
  return "XXL";
};

const useBreakpoints = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    toBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(toBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Direkter Initialaufruf

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoints;
