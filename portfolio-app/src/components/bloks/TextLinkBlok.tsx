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
  const linkClassName = isBrandText ? "text-link-header-brand" : "text-link";

  if (blok.external_url) {
    return (
      <a
        href={blok.external_url}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        title={blok.title}
      >
        <SafeHtmlRenderer htmlContent={blok.text} />
      </a>
    );
  }

  return (
    <Link
      to={blok.disabled ? "#" : blok.slug ? blok.slug : ""}
      className={linkClassName}
      title={blok.title}
    >
      <SafeHtmlRenderer htmlContent={blok.text} />
    </Link>
  );
};

export default TextLinkBlok;
