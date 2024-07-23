import React from "react";
import { Link } from "react-router-dom";
import { InternalLinkStoryblok } from "../types/component-types-sb";

interface InternalLinkProps {
  blok: InternalLinkStoryblok;
}

const InternalLinkBlok: React.FC<InternalLinkProps> = ({ blok }) => {
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

export default InternalLinkBlok;
