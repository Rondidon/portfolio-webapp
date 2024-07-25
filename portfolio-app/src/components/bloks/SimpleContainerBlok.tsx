import React from "react";
import { SimpleContainerStoryblok } from "../types/component-types-sb";

interface SimpleContainerBlokProps {
  blok: SimpleContainerStoryblok;
}

const SimpleContainerBlok: React.FC<SimpleContainerBlokProps> = ({ blok }) => {
  const columnAmount = parseInt(blok.columnAmount);
  const elements = blok.elements;
  const heading: string | undefined = blok.heading;
  const gap: string | undefined = blok.gap ? blok.gap + "em" : undefined;
  const width = blok.width;

  return (
    <div style={{ width: width, padding: gap }}>
      {heading && (
        <h2 style={{ gridColumn: `span ${columnAmount}` }}>{heading}</h2>
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
            Hello
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleContainerBlok;
