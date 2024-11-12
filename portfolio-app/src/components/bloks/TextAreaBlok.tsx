import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { TextareaStoryblok } from "../types/component-types-sb";
import "./css/TextAreaBlok.css";

interface TextAreaBlokProps {
  blok: TextareaStoryblok;
}

const TextAreaBlok: React.FC<TextAreaBlokProps> = ({ blok }) => {
  const { text, isFullWidth } = blok;

  return (
    <div
      className="text-area-blok"
      style={{
        width: isFullWidth ? "100%" : "auto",
        maxWidth: "100%", // Begrenze die Breite auf die Seitenbreite
        margin: "0 auto", // Zentriere den Inhalt
      }}
      {...storyblokEditable(blok)}
    >
      {render(text)}
    </div>
  );
};

export default TextAreaBlok;
