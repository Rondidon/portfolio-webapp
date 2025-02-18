import { storyblokEditable } from "@storyblok/react";
import React from "react";
import {
  ButtonStoryblok,
  GlobalHeaderStoryblok,
  ImageStoryblok,
  LanguageDropdownStoryblok,
  LinkedInProfileLinkStoryblok,
  TextLinkStoryblok,
} from "../types/component-types-sb";
import ButtonBlok from "./ButtonBlok";
import "./css/HeaderBlok.css";
import ImageBlok from "./ImageBlok";
import LanguageDropdownBlok from "./LangugageDropdownBlok";
import LinkedInProfileLinkBlok from "./LinkedInProfileLinkBlok";
import TextLinkBlok from "./TextLinkBlok";
import useBreakpoint from "../../hooks/useBreakpoints";

interface GlobalHeaderStoryblokProps {
  blok: GlobalHeaderStoryblok;
}

const HeaderBlok: React.FC<GlobalHeaderStoryblokProps> = ({ blok }) => {
  const breakpoint = useBreakpoint();

  const brandLogoBlok = blok.logo.find(
    (blok): blok is ImageStoryblok => blok.component === "image"
  );

  const brandTextBlok = blok.logo.find(
    (blok): blok is TextLinkStoryblok => blok.component === "textLink"
  );

  function isButtonStoryblok(value: any): value is ButtonStoryblok {
    return value.component === "button";
  }

  function isLanguageDropdownStoryblok(
    value: any
  ): value is LanguageDropdownStoryblok {
    return value.component === "languageDropdown";
  }

  function isLinkedInProfileLinkStoryblok(
    value: any
  ): value is LinkedInProfileLinkStoryblok {
    return value.component === "LinkedInProfileLink";
  }

  const getContainerClassName = () => {
    switch (breakpoint) {
      case "XS":
      case "SM":
      case "MD":
        return "container-fluid";
      case "LG":
      case "XL":
      case "XXL":
        return "conainer-fluid container";
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg app-header"
      {...storyblokEditable(blok)}
    >
      <div className={getContainerClassName()}>
        <div className="logo-container">
          {brandLogoBlok && <ImageBlok blok={brandLogoBlok} />}
          {brandTextBlok && <TextLinkBlok blok={brandTextBlok} isBrandText />}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-lg-0 my-2 mb-lg-0 gap-2 gap-lg-0">
            {blok.leftContainer.map(
              (buttonBlok: ButtonStoryblok, index: number) => {
                return (
                  <li className="nav-item mx-1" key={index + "left"}>
                    <ButtonBlok blok={buttonBlok} />
                  </li>
                );
              }
            )}
          </ul>
          {blok.rightContainer && (
            <ul className="navbar-nav my-lg-0 my-2 mb-lg-0 gap-2 gap-lg-0">
              {blok.rightContainer.map((value, index) => (
                <li
                  key={index + "right"}
                  className="nav-item mx-1 d-flex align-items-center"
                >
                  {isButtonStoryblok(value) && <ButtonBlok blok={value} />}
                  {isLanguageDropdownStoryblok(value) && (
                    <LanguageDropdownBlok blok={value} />
                  )}
                  {isLinkedInProfileLinkStoryblok(value) && (
                    <LinkedInProfileLinkBlok blok={value} />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderBlok;
