import React from "react";
import {
  CardContainerStoryblok,
  CardStoryblok,
  HeroStoryblok,
  SimpleContainerStoryblok,
  TextareaStoryblok,
} from "../types/component-types-sb";
import CardContainerBlok from "./CardContainerBlok";
import HeroBlok from "./HeroBlok";
import TextAreaBlok from "./TextAreaBlok";

interface SimpleContainerBlokProps {
  blok: SimpleContainerStoryblok;
}

// Type Guard für TextareaStoryblok
function isTextareaStoryblok(element: any): element is TextareaStoryblok {
  return (element as TextareaStoryblok).text !== undefined;
}

// Type Guard für CardContainerStoryblok
function isCardContainerStoryblok(
  element: any
): element is CardContainerStoryblok {
  return (element as CardContainerStoryblok).title !== undefined;
}

// Type Guard für HeroStoryblok
function isHeroStoryblok(element: any): element is HeroStoryblok {
  return (
    (element as HeroStoryblok).title !== undefined &&
    (element as HeroStoryblok).image !== undefined
  );
}

const SimpleContainerBlok: React.FC<SimpleContainerBlokProps> = ({ blok }) => {
  const columnAmount = parseInt(blok.columnAmount);
  const elements = blok.elements;
  const heading: string | undefined = blok.heading;
  const gap: string = blok.gap ? `${blok.gap}em` : "0";
  const width = blok.width || "100%"; // falls width undefined ist, Standard auf 100% setzen

  return (
    <div style={{ width: width, padding: gap }}>
      {heading && (
        <h2 style={{ gridColumn: `span ${columnAmount}` }}>{heading}</h2>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: width,
          gap: gap,
        }}
      >
        {elements.map(
          (
            element: TextareaStoryblok | CardContainerStoryblok | HeroStoryblok,
            index
          ) => {
            let content;

            // Type Guards verwenden, um den Typ des Elements zu bestimmen
            if (isTextareaStoryblok(element)) {
              content = <TextAreaBlok blok={element} />;
            } else if (isCardContainerStoryblok(element)) {
              content = <CardContainerBlok blok={element} />;
            } else if (isHeroStoryblok(element)) {
              content = <HeroBlok blok={element} isHeadingH1={false} />;
            } else {
              content = null; // für unbekannte Typen
            }

            return (
              <div
                key={index}
                style={{
                  flexDirection: "column",
                }}
              >
                {content !== null
                  ? content
                  : "undefined element in SimpleContainer"}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SimpleContainerBlok;
