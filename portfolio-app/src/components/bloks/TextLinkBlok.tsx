import React from "react";
import { Link } from "react-router-dom";
import { TextLinkStoryblok } from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import "./css/TextLinkBlok.css";

interface TextLinkBlokProps {
  blok: TextLinkStoryblok;
  isBrandText?: boolean;
}

const TextLinkBlok: React.FC<TextLinkBlokProps> = ({ blok, isBrandText }) => {
  return (
    <Link
      to={blok.disabled ? "#" : blok.slug}
      className={isBrandText ? "text-link-header-brand" : "text-link"}
    >
      <SafeHtmlRenderer htmlContent={blok.text} />
    </Link>
  );
};

export default TextLinkBlok;
