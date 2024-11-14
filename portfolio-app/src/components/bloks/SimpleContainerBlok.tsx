import React from "react";
import {
  CardContainerStoryblok,
  ContentSectionStoryblok,
  HeroStoryblok,
  HorizontalLineStoryblok,
  SimpleContainerStoryblok,
  TextareaStoryblok,
} from "../types/component-types-sb";
import CardContainerBlok from "./CardContainerBlok";
import HeroBlok from "./HeroBlok";
import TextAreaBlok from "./TextAreaBlok";
import ContentSectionBlok from "./ContentSectionBlok";
import HorizontalLineBlok from "./HorizontalLineBlok";

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
  return (
    (element as CardContainerStoryblok).component.toLowerCase() ===
    "cardcontainer"
  );
}

// Type Guard für HeroStoryblok
function isHeroStoryblok(element: any): element is HeroStoryblok {
  return (element as HeroStoryblok).component.toLowerCase() === "hero";
}

// Type Guard für ContentSection
function isContentSectionStoryblok(
  element: any
): element is ContentSectionStoryblok {
  return (
    (element as ContentSectionStoryblok).component.toLowerCase() ===
    "contentsection"
  );
}

// Type Guard für HorizontalLine
function isHorizontalLineStoryblok(
  element: any
): element is HorizontalLineStoryblok {
  return (
    (element as HorizontalLineStoryblok).component.toLowerCase() ===
    "horizontalline"
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
            element:
              | TextareaStoryblok
              | CardContainerStoryblok
              | HeroStoryblok
              | HorizontalLineStoryblok,
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
            } else if (isContentSectionStoryblok(element)) {
              content = <ContentSectionBlok blok={element} />;
            } else if (isHorizontalLineStoryblok(element)) {
              content = <HorizontalLineBlok blok={element} />;
            } else {
              content = undefined;
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
