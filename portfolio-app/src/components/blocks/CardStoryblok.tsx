import { storyblokEditable } from "@storyblok/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import toAssetLocation from "../../scripts/imageConverter";
import { CardBlok } from "../../types";

interface CardStoryblokProps {
  blok: CardBlok;
}

const CardStoryblok: React.FC<CardStoryblokProps> = ({ blok }) => {
  useEffect(() => {
    console.log("blok:", blok);
  }, []);
  return (
    <div
      className="card"
      style={{ width: "18rem" }}
      {...storyblokEditable(blok)}
    >
      <img
        src={toAssetLocation(blok.image_name, "image")}
        className="card-img-top"
        alt={blok.title}
      />
      <div className="card-body">
        <h5 className="card-title">{blok.title}</h5>
        <p className="card-text">{blok.text}</p>
        <Link to={blok.link_internal} className="btn btn-primary">
          {blok.link_text}
        </Link>
      </div>
    </div>
  );
};

export default CardStoryblok;
