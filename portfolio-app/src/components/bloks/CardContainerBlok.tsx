import React from "react";
import {
  CardContainerStoryblok,
  CardStoryblok,
} from "../types/component-types-sb";
import CardBlok from "./CardBlok";

interface CardContainerBlokProps {
  blok: CardContainerStoryblok;
}

const CardContainerBlok: React.FC<CardContainerBlokProps> = ({ blok }) => {
  const columnAmount = parseInt(blok.columnAmount);
  const elements: CardStoryblok[] = blok.elements;
  const heading: string | undefined = blok.heading;
  const gap: string | undefined = blok.gap ? blok.gap + "em" : undefined;
  const width = blok.width;

  return (
    <div style={{ width: width }}>
      {heading && (
        <>
          <h2 style={{ gridColumn: `span ${columnAmount}` }}>{heading}</h2>
          <td className="td" />
        </>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: gap,
          justifyContent: "space-between",
        }}
      >
        {elements.map((element, index) => (
          <div
            key={index}
            style={{
              flex: `1 1 calc(${100 / columnAmount}% - ${gap})`,
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
