import React, { useState } from "react";
import { CarouselStoryblok } from "../types/component-types-sb";
import toAssetLocation from "../../scripts/imageConverter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselBlokProps {
  blok: CarouselStoryblok;
}

const CarouselBlok: React.FC<CarouselBlokProps> = ({ blok }) => {
  const { Images: imageBloks } = blok;

  return (
    <Carousel>
      <div>
        <img src={toAssetLocation("sportangeln-2012-1.webp")} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={toAssetLocation("sportangeln-2012-1.webp")} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={toAssetLocation("sportangeln-2012-1.webp")} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselBlok;
