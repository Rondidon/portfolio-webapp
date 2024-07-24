import React from "react";
import { Link } from "react-router-dom";
import { TextLinkStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";

interface TextLinkBlokProps {
  blok: TextLinkStoryblok;
  isBrandText?: boolean;
}

const TextLinkBlok: React.FC<TextLinkBlokProps> = ({ blok, isBrandText }) => {
  return (
    <Link
      to={blok.disabled ? "#" : blok.slug}
      className={isBrandText ? "navbar-brand claim-green mx-2" : ""}
    >
      <SafeHtmlRenderer htmlContent={blok.text} />
    </Link>
  );
};

export default TextLinkBlok;
