import React from "react";
import { Link } from "react-router-dom";
import toAssetLocation from "../../scripts/imageConverter";
import { ImageStoryblok } from "../types/component-types-sb";
import "./css/ImageBlok.css";

interface ImageBlokProps {
  blok: ImageStoryblok;
  marginBottom?: number;
}

const ImageBlok: React.FC<ImageBlokProps> = ({
  blok,
  marginBottom,
}): JSX.Element => {
  const imageComponent: JSX.Element = (
    <img
      src={toAssetLocation(blok.image, "image")}
      alt={blok.alt}
      title={blok.title}
      className={blok.withHoverEffect ? "image-blok-with-hover" : ""}
      style={{
        marginBottom: marginBottom ? marginBottom + "em" : undefined,
        height: blok.size ? blok.size + "px" : undefined,
        width: blok.size ? blok.size + "px" : undefined,
        borderRadius: blok.borderRadius ? blok.borderRadius + "em" : undefined,
        border: blok.showBorder ? "1px solid lightgrey" : undefined,
      }}
    />
  );

  if (blok.internal_slug) {
    return (
      <Link to={blok.disabled ? "#" : blok.internal_slug}>
        {imageComponent}
      </Link>
    );
  }

  if (blok.external_link?.url) {
    return (
      <a href={blok.external_link.url} style={{ cursor: "pointer" }}>
        {imageComponent}
      </a>
    );
  }

  return imageComponent;
};

export default ImageBlok;
