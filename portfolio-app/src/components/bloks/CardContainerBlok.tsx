import React from "react";
import {
  CardContainerHeadingStoryblok,
  CardContainerStoryblok,
  CardStoryblok,
} from "../types/component-types-sb";
import CardBlok from "./CardBlok";
import HorizontalLineBlok from "./HorizontalLineBlok";

interface CardContainerBlokProps {
  blok: CardContainerStoryblok;
}

const CardContainerBlok: React.FC<CardContainerBlokProps> = ({ blok }) => {
  const columnAmount = parseInt(blok.columnAmount);
  const elements: CardStoryblok[] = blok.elements;
  const headingBlok: CardContainerHeadingStoryblok | undefined = blok.heading
    ? blok.heading[0]
    : undefined;
  const gap: string | undefined = blok.gap ? blok.gap + "em" : undefined;
  const width = blok.width;
  const id = blok.anchorId;

  return (
    <div style={{ minWidth: width, justifyContent: "space-evenly" }} id={id}>
      {headingBlok && (
        <div className={"d-flex flex-column gap-0"}>
          <h2 style={{ gridColumn: `span ${columnAmount}` }}>
            {headingBlok.heading}
          </h2>
          {headingBlok.horizontalLine && (
            <HorizontalLineBlok blok={headingBlok.horizontalLine[0]} />
          )}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: gap,
          justifyContent: "space-evenly",
        }}
      >
        {elements.map((element, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              width: "100%",
              flex: `1 1 calc(${100 / columnAmount}% - ${gap})`,
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <CardBlok blok={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainerBlok;
