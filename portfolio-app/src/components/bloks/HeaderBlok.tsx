import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { CardStoryblok } from "../types/component-types-sb";

interface HeaderStoryblokProps {
  blok: CardStoryblok;
}

const HeaderBlok: React.FC<HeaderStoryblokProps> = ({ blok }) => {
  return (
    <div className="app-header" {...storyblokEditable(blok)}>
      HEADER
    </div>
  );
};

export default HeaderBlok;
