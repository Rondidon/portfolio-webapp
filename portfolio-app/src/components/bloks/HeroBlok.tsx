import { storyblokEditable } from "@storyblok/react";
import React from "react";
import {
  ButtonStoryblok,
  HeroStoryblok,
  ImageStoryblok,
} from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import "./css/HeroBlok.css";
import ButtonBlok from "./ButtonBlok";
import ImageBlok from "./ImageBlok";

interface HeroBlokProps {
  blok: HeroStoryblok;
  isHeadingH1: boolean;
}

const HeroBlok: React.FC<HeroBlokProps> = ({ blok, isHeadingH1 }) => {
  const callToAction: ButtonStoryblok | undefined = blok.cta?.at(0);
  const image: ImageStoryblok | undefined = blok.image?.at(0);

  return (
    <div
      className={blok.variant === "primary" ? "hero-primary" : "hero-secondary"}
      {...storyblokEditable(blok)}
    >
      <div
        className="card-default-body h-100 d-flex flex-row gap-5 align-items-center"
        style={{ justifyContent: "space-between" }}
      >
        <div
          className="d-flex h-100 flex-column gap-3"
          style={{ justifyContent: "space-between" }}
        >
          <div className="d-flex flex-column gap-2 gap-lg-0">
            {image && (
              <div className="d-block d-lg-none align-self-center">
                <ImageBlok blok={image} />
              </div>
            )}
            {blok.heading && isHeadingH1 && (
              <h1 className="hero-heading text-lg-start text-center">
                {blok.heading}
              </h1>
            )}
            {blok.heading && !isHeadingH1 && (
              <h5 className="hero-heading text-lg-start text-center">
                {blok.heading}
              </h5>
            )}
          </div>
          {blok.text && (
            <SafeHtmlRenderer
              className="hero-text text-justify mb-0"
              htmlContent={blok.text}
            />
          )}
          {callToAction && (
            <p className="hero-cta-button-container">
              <ButtonBlok blok={callToAction} />
            </p>
          )}
          {!callToAction && <div />}
        </div>
        {image && (
          <div className="d-none d-lg-block">
            <ImageBlok blok={image} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBlok;
