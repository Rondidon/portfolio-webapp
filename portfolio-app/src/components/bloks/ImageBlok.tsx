import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageStoryblok } from "../types/component-types-sb";
import "./css/ButtonBlok.css";
import toAssetLocation from "../../scripts/imageConverter";
import { logStoryblokStoryOrBlock } from "../../utils/logger";

interface ImageBlokProps {
  blok: ImageStoryblok;
}

const ImageBlok: React.FC<ImageBlokProps> = ({ blok }): JSX.Element => {
  useEffect(() => {
    logStoryblokStoryOrBlock("logo image block: ", blok);
  }, []);

  const imageComponent: JSX.Element = (
    <img
      src={toAssetLocation(blok.image, "image")}
      alt={blok.alt}
      title={blok.title}
      style={{
        height: blok.size ? blok.size + "px" : undefined,
        width: blok.size ? blok.size + "px" : undefined,
        borderRadius: blok.borderRadius ? blok.borderRadius + "em" : undefined,
        border: blok.showBorder ? "1px solid lightgrey" : undefined,
      }}
    />
  );

  if (blok.internal_slug) {
    return <Link to={blok.disabled ? "#" : blok.slug}>{imageComponent}</Link>;
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
