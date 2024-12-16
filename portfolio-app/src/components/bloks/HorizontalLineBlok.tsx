import useBreakpoints from "../../hooks/useBreakpoints";
import { HorizontalLineStoryblok } from "../types/component-types-sb";

interface HorizontalLineBlokProps {
  blok: HorizontalLineStoryblok;
}

const HorizontalLineBlok: React.FC<HorizontalLineBlokProps> = ({
  blok,
}): JSX.Element => {
  const breakpoint = useBreakpoints();
  const isAdjustedRight = blok.isAdjustedToRight
    ? blok.isAdjustedToRight
    : false;
  const my = blok.marginY;
  const thickness = blok.thickness ? blok.thickness + "px" : "2px";
  const width = blok.width ? blok.width + "%" : "100%";

  const calcBackground = (): string => {
    if (breakpoint === "XXL" || breakpoint === "LG" || breakpoint === "XL") {
      return isAdjustedRight
        ? "linear-gradient(to left, #d7e4e1, #ffffff)"
        : "linear-gradient(to right, #d7e4e1, #ffffff)";
    }
    return "radial-gradient(circle, #d7e4e1, #ffffff)";
  };

  return (
    <td
      style={{
        height: thickness,
        width: width,
        marginTop: my,
        marginBottom: my,
        background: calcBackground(),
      }}
    />
  );
};

export default HorizontalLineBlok;
