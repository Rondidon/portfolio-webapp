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
      className="card"
      style={{
        maxWidth: blok.width ? blok.width + "rem" : "18rem",
        minWidth: "4rem",
        textAlign: blok.center_text ? "center" : "start",
      }}
      {...storyblokEditable(blok)}
    >
      {blok.image && (
        <img
          src={toAssetLocation(blok.image, "image")}
          className="card-img-top card-blok-img"
          alt={blok.title}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{blok.title}</h5>
        {blok.text && (
          <SafeHtmlRenderer className="card-text" htmlContent={blok.text} />
        )}
        {blok.internal_link && blok.internal_link?.length > 0 && (
          <InternalLinkBlok blok={blok.internal_link[0]} />
        )}
      </div>
    </div>
  );
};

export default CardBlok;
