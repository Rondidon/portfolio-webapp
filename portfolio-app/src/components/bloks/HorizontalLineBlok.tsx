import { HorizontalLineStoryblok } from "../types/component-types-sb";

interface HorizontalLineBlokProps {
  blok: HorizontalLineStoryblok;
}

const HorizontalLineBlok: React.FC<HorizontalLineBlokProps> = ({
  blok,
}): JSX.Element => {
  const isAdjustedRight = blok.isAdjustedToRight
    ? blok.isAdjustedToRight
    : false;
  const my = blok.marginY;
  const thickness = blok.thickness ? blok.thickness + "px" : "2px";
  const width = blok.width ? blok.width + "%" : "100%";

  return (
    <td
      style={{
        height: thickness,
        width: width,
        marginTop: my,
        marginBottom: my,
        background: isAdjustedRight
          ? "linear-gradient(to left, #ccc, #ffffff)"
          : "linear-gradient(to right, #ccc, #ffffff)",
      }}
    />
  );
};

export default HorizontalLineBlok;
