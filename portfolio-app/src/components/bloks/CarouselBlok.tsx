import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useBreakpoints, { Breakpoint } from "../../hooks/useBreakpoints";
import toAssetLocation from "../../scripts/imageConverter";
import {
  CarouselImageStoryblok,
  CarouselStoryblok,
} from "../types/component-types-sb";
import "./css/CarouselBlok.css";

interface CarouselBlokProps {
  blok: CarouselStoryblok;
}

const CarouselBlok: React.FC<CarouselBlokProps> = ({ blok }) => {
  const imageBloks: CarouselImageStoryblok[] = blok.Images;
  const breakpoint: Breakpoint = useBreakpoints();

  const getThumbWidth = (imageAmount: number) => {
    const widths: Record<Breakpoint, number> = {
      XS: 32,
      SM: 42,
      MD: 54,
      LG: 64,
      XL: 74,
      XXL: 84,
    };
    if (imageAmount > 4) {
      return widths[breakpoint];
    } else {
      return widths[breakpoint] * 1.25;
    }
  };

  const [thumbWidth, setThumbWidth] = useState(
    getThumbWidth(imageBloks.length)
  );

  useEffect(() => {
    const width = getThumbWidth(imageBloks.length);
    setThumbWidth(width);
  }, [breakpoint, imageBloks.length]);

  return (
    <Carousel
      dynamicHeight
      showStatus={false}
      autoPlay
      infiniteLoop
      showThumbs
      thumbWidth={thumbWidth} // Breite der Vorschaubilder
    >
      {imageBloks.map((blok: CarouselImageStoryblok) => (
        <div>
          <img src={toAssetLocation(blok.imageFile)} />
          {blok.label && <p className="legend legend-custom">{blok.label}</p>}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBlok;
