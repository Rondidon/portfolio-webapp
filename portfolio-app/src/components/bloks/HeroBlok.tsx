import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { ButtonStoryblok, HeroStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import "./css/HeroBlok.css";

interface HeroBlokProps {
  blok: HeroStoryblok;
}

const HeroBlok: React.FC<HeroBlokProps> = ({ blok }) => {
  const callToAction: ButtonStoryblok | undefined = blok.cta?.at(0);

  return (
    <div
      className={blok.variant === "primary" ? "hero-primary" : "hero-secondary"}
      {...storyblokEditable(blok)}
    >
      <div className="card-default-body">
        <h5 className="card-default-title">{blok.title}</h5>
        {blok.text && (
          <SafeHtmlRenderer
            className="card-default-text"
            htmlContent={blok.text}
          />
        )}
      </div>
    </div>
  );
};

export default HeroBlok;
