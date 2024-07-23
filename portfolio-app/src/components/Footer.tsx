import React from "react";
import { GlobalFooterStoryblok } from "./types/component-types-sb";
import { SbBlokData, StoryblokComponent } from "@storyblok/react";

type FooterProps = {
  blok: GlobalFooterStoryblok;
};

const Footer: React.FC<FooterProps> = ({ blok }) => {
  return <footer>FOOTER</footer>;
};

export default Footer;
