import React from "react";
import { Link } from "react-router-dom";
import { ButtonStoryblok } from "../types/component-types-sb";
import "./css/ButtonBlok.css";

interface ButtonBlokProps {
  blok: ButtonStoryblok;
}

const ButtonBlok: React.FC<ButtonBlokProps> = ({ blok }) => {
  return (
    <Link
      to={blok.disabled ? "#" : blok.slug}
      className={
        blok.disabled ? "btn app-btn-primary disabled" : "btn app-btn-primary"
      }
    >
      {blok.text}
    </Link>
  );
};

export default ButtonBlok;
