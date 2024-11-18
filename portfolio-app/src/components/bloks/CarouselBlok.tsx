import React, { useState } from "react";
import {
  CarouselImageStoryblok,
  CarouselStoryblok,
} from "../types/component-types-sb";
import toAssetLocation from "../../scripts/imageConverter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
          <p
            className="legend"
            style={{
              backgroundColor: "#eee",
              border: "2px solid darkgray",
              color: "black",
              fontSize: "16px",
              borderRadius: "3em",
            }}
          >
            {blok.label}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBlok;
