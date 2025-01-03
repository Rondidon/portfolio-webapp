import React from "react";
import { Link } from "react-router-dom";
import { appPath } from "../../App";
import { ButtonStoryblok } from "../types/component-types-sb";
import "./css/ButtonBlok.css";

interface ButtonBlokProps {
  blok: ButtonStoryblok;
}

const getClassName = (
  variant: "primary" | "secondary" | "header" | "",
  disabled: boolean
) => {
  if (disabled) {
    return "btn btn-disabled";
  }
  if (variant === "secondary") {
    return "btn btn-secondary";
  }
  if (variant === "header") {
    return "btn btn-header";
  }
  return "btn btn-primary";
};

const ButtonBlok: React.FC<ButtonBlokProps> = ({ blok }) => {
  const variant = blok.variant;

  const styleClass = getClassName(
    variant,
    blok.disabled ? blok.disabled : false
  );

  if (blok.isExternalLink) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={blok.slug}
        className={styleClass}
        title={blok.title}
      >
        {blok.text}
      </a>
    );
  }

  if (blok.isDownloadLink) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={appPath + blok.slug}
        className={styleClass}
        title={blok.title}
      >
        {blok.text}
      </a>
    );
  }

  return (
    <Link
      title={blok.title}
      to={blok.disabled ? "#" : blok.slug}
      className={styleClass}
    >
      {blok.text}
    </Link>
  );
};

export default ButtonBlok;
