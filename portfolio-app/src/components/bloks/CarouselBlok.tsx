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

const getThumbWidth = (imageAmount: number, breakpoint: Breakpoint) => {
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

const CarouselBlok: React.FC<CarouselBlokProps> = ({ blok }) => {
  const imageBloks: CarouselImageStoryblok[] = blok.Images;
  const breakpoint: Breakpoint = useBreakpoints();
  const [thumbWidth, setThumbWidth] = useState(
    getThumbWidth(imageBloks.length, breakpoint)
  );

  useEffect(() => {
    const width = getThumbWidth(imageBloks.length, breakpoint);
    setThumbWidth(width);
  }, [breakpoint, imageBloks.length]);

  return (
    <Carousel
      showStatus={false}
      infiniteLoop
      showThumbs
      thumbWidth={thumbWidth}
      dynamicHeight
    >
      {imageBloks.map((blok: CarouselImageStoryblok) => (
        <div key={blok.imageFile} className="carousel-item-wrapper">
          <div className="image-container">
            <img src={toAssetLocation(blok.imageFile)} alt={blok.alt} />
            {blok.label && <p className="legend">{blok.label}</p>}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBlok;
