import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  const imageBloks = blok.Images;

  return (
    <Carousel width={blok.width} dynamicHeight showStatus={false}>
      {imageBloks.map((blok: CarouselImageStoryblok) => (
        <div>
          <img src={toAssetLocation(blok.imageFile)} />
          <p className="legend legend-custom">{blok.label}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBlok;
