import { storyblokEditable } from "@storyblok/react";
import React from "react";
import {
  ButtonStoryblok,
  ContentSectionStoryblok,
  ImageStoryblok,
} from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import ButtonBlok from "./ButtonBlok";
import "./css/ContentSectionBlok.css";
import ImageBlok from "./ImageBlok";

interface ContentSectionBlokProps {
  blok: ContentSectionStoryblok;
}

const ContentSectionBlok: React.FC<ContentSectionBlokProps> = ({ blok }) => {
  const callToAction: ButtonStoryblok | undefined = blok.callToAction?.at(0);
  const image: ImageStoryblok | undefined = blok.image?.at(0);
  const isRightAdjusted: boolean | undefined = blok.isRightAdjusted
    ? blok.isRightAdjusted
    : false;
  const heading: string | undefined = blok.heading;
  const text: string | undefined = blok.text;
  const isAlternateHeadingDesign = blok.useAlternateHeadingDesign
    ? blok.useAlternateHeadingDesign
    : false;

  return (
    <div
      className={
        isRightAdjusted
          ? "content-section-flipped text-lg-end text-center"
          : "content-section text-lg-start text-center"
      }
      {...storyblokEditable(blok)}
    >
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column gap-3 justify-content-center">
          {image && (
            <div className="d-block d-lg-none">
              <ImageBlok blok={image} />
            </div>
          )}
          {heading && (
            <h5>
              <SafeHtmlRenderer
                className={
                  isAlternateHeadingDesign
                    ? "content-section-heading-alternate"
                    : "content-section-heading"
                }
                htmlContent={heading}
              />
            </h5>
          )}
          {text && (
            <SafeHtmlRenderer
              className={
                isRightAdjusted
                  ? "mb-0 content-section-text text-lg-end"
                  : "mb-0 content-section-text text-lg-start"
              }
              htmlContent={text}
            />
          )}
        </div>
        {callToAction && (
          <p className="mb-0">
            <ButtonBlok blok={callToAction} />
          </p>
        )}
      </div>
      {image && (
        <div className="d-none d-lg-block">
          <ImageBlok blok={image} />
        </div>
      )}
    </div>
  );
};

export default ContentSectionBlok;
