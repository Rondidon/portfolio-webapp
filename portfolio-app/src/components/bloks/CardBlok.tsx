import { storyblokEditable } from "@storyblok/react";
import React from "react";
import toAssetLocation from "../../scripts/imageConverter";
import { CardStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import InternalLinkBlok from "./InternalLinkBlok";
import "./css/CardBlok.css";

interface CardBlokProps {
  blok: CardStoryblok;
}

const CardBlok: React.FC<CardBlokProps> = ({ blok }) => {
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
      }}
      {...storyblokEditable(blok)}
    >
      <div className="card-default-body">
        {blok.image && (
          <img
            src={toAssetLocation(blok.image, "image")}
            className="card-default-img"
            alt={blok.title}
          />
        )}
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
