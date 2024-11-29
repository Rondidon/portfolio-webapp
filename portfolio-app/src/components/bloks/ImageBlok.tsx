import React from "react";
import { Link } from "react-router-dom";
import toAssetLocation from "../../scripts/imageConverter";
import { ImageStoryblok } from "../types/component-types-sb";
import "./css/ImageBlok.css";

interface ImageBlokProps {
  blok: ImageStoryblok;
  marginBottom?: number;
  onCallback?: () => void;
}

const calculateMarginBottom = (
  m: string | undefined,
  mb: number | undefined
): string | undefined => {
  if (m) {
    return m + "em";
  }
  if (mb) {
    return mb + "em";
  }
  return undefined;
};

const ImageBlok: React.FC<ImageBlokProps> = ({
  blok,
  marginBottom,
  onCallback,
}): JSX.Element => {
  const maybeTriggerCallback = () => {
    if (blok.triggerCallbackFunctionOnClick && onCallback) {
      onCallback();
    }
  };

  const height: string | undefined = blok.height + "px";
  const margin = blok.margin;
  const imageComponent: JSX.Element = (
    <img
      src={toAssetLocation(blok.image)}
      alt={blok.alt}
      title={blok.title}
      className={blok.withHoverEffect ? "image-blok-with-hover" : ""}
      style={{
        margin: margin ? margin + "em" : undefined,
        marginBottom: calculateMarginBottom(margin, marginBottom),
        height: height,
        width: blok.isSquareImage ? height : undefined,
        borderRadius: blok.borderRadius ? blok.borderRadius + "em" : undefined,
        border: blok.showBorder ? "2px solid lightgrey" : undefined,
      }}
      onClick={maybeTriggerCallback}
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
