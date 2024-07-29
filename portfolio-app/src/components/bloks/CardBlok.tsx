import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { CardStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import InternalLinkBlok from "./ButtonBlok";
import "./css/CardBlok.css";
import ImageBlok from "./ImageBlok";

interface CardBlokProps {
  blok: CardStoryblok;
}

const CardBlok: React.FC<CardBlokProps> = ({ blok }) => {
  const height: "full" | "fit_content" | "" = blok.height;
  const image = blok.image?.at(0);

  return (
    <div
      className={
        blok.alternate_design
          ? "card-alternate-variant"
          : "card-default-variant"
      }
      style={{
        maxWidth: blok.width ? blok.width + "rem" : "18rem",
        textAlign: blok.center_text ? "center" : "start",
        height: height === "full" ? "100%" : "fit-content",
        justifyContent: height === "full" ? "space-between" : "unset",
      }}
      {...storyblokEditable(blok)}
    >
      <div className="card-default-body">
        {image && image.image && <ImageBlok blok={image} marginBottom={1} />}
        <h5 className="card-default-title">{blok.title}</h5>
        {blok.text && (
          <SafeHtmlRenderer
            className="card-default-text"
            htmlContent={blok.text}
          />
        )}
      </div>
      <div className="card-default-footer">
        {blok.internal_link && blok.internal_link?.length > 0 && (
          <InternalLinkBlok blok={blok.internal_link[0]} />
        )}
      </div>
    </div>
  );
};

export default CardBlok;
