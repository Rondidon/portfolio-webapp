import React from "react";
import { Link } from "react-router-dom";
import { ButtonStoryblok } from "../types/component-types-sb";
import "./css/ButtonBlok.css";
import { link } from "fs";
import { appPath } from "../../App";

interface ButtonBlokProps {
  blok: ButtonStoryblok;
  isNavButton?: boolean;
}

const getClassName = (
  useAlternativeDesign: boolean,
  disabled: boolean,
  isNavButton?: boolean
) => {
  if (isNavButton) {
    if (!useAlternativeDesign) {
      return disabled
        ? "btn app-btn-primary disabled w-100 w-lg-0"
        : "btn app-btn-primary w-100 w-lg-0";
    }
    return disabled
      ? "btn app-btn-secondary disabled w-100 w-lg-0"
      : "btn app-btn-secondary w-100 w-lg-0";
  }
  if (!useAlternativeDesign) {
    return disabled ? "btn app-btn-primary disabled" : "btn app-btn-primary";
  }
  return "btn app-btn-secondary";
};

const ButtonBlok: React.FC<ButtonBlokProps> = ({ blok, isNavButton }) => {
  const styleClass = getClassName(
    blok.useAlternateDesign ? blok.useAlternateDesign : false,
    blok.disabled ? blok.disabled : false,
    isNavButton ? isNavButton : false
  );

  if (blok.isDownloadLink) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={appPath + blok.slug}
        className={styleClass}
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
