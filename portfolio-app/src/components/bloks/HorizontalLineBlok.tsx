import useBreakpoints from "../../hooks/useBreakpoints";
import getCSSVariable from "../../scripts/getCSSVariable";
import { HorizontalLineStoryblok } from "../types/component-types-sb";

interface HorizontalLineBlokProps {
  blok: HorizontalLineStoryblok;
}

const HorizontalLineBlok: React.FC<HorizontalLineBlokProps> = ({
  blok,
}): JSX.Element => {
  const breakpoint = useBreakpoints();
  const marginBottom = blok.marginBottom;
  const marginTop = blok.marginTop;
  const thickness = blok.thickness ? blok.thickness + "px" : "2px";
  const width = blok.width ? blok.width + "%" : "100%";

  const calcFromColor = (
    color: "" | "primary" | "secondary" | "monochrome"
  ): string => {
    switch (color) {
      case "":
      case "primary":
        return getCSSVariable("--primary-color-dark");
      case "secondary":
        return getCSSVariable("--secondary-color-dark");
      case "monochrome":
        return getCSSVariable("--grey-border");
      default:
        return "";
    }
  };

  const calcBackground = (): string => {
    const color = blok.color;
    const fromColor = calcFromColor(color);
    const toColor = getCSSVariable("--background-page");

    if (blok.adjustment !== "center") {
      const isAdjustedRight = blok.adjustment === "right";
      if (breakpoint === "XXL" || breakpoint === "LG" || breakpoint === "XL") {
        return isAdjustedRight
          ? `linear-gradient(to left, ${fromColor}, ${toColor})`
          : `linear-gradient(to right, ${fromColor}, ${toColor})`;
      }
    }

    return fromColor;
  };

  return (
    <div
      style={{
        height: thickness,
        width: width,
        marginBottom: marginBottom + "em",
        marginTop: marginTop + "em",
        background: calcBackground(),
      }}
    />
  );
};

export default HorizontalLineBlok;
