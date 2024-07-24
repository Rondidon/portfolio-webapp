import { storyblokEditable } from "@storyblok/react";
import React from "react";
import ButtonBlok from "./bloks/ButtonBlok";
import ImageBlok from "./bloks/ImageBlok";
import {
  ButtonStoryblok,
  GlobalHeaderStoryblok,
  ImageStoryblok,
  TextLinkStoryblok,
} from "./types/component-types-sb";
import SafeHtmlRenderer from "./xss/SafeHtmlRenderer";
import TextLinkBlok from "./bloks/TextLinkBlok";

interface GlobalHeaderStoryblokProps {
  blok: GlobalHeaderStoryblok;
}

const HeaderBlok: React.FC<GlobalHeaderStoryblokProps> = ({ blok }) => {
  const brandLogoBlok = blok.logo.find(
    (blok): blok is ImageStoryblok => blok.component === "image"
  );

  const brandTextBlok = blok.logo.find(
    (blok): blok is TextLinkStoryblok => blok.component === "textLink"
  );

  return (
    <nav
      className="navbar navbar-expand-lg app-header"
      {...storyblokEditable(blok)}
    >
      <div className="container-fluid">
        {brandLogoBlok && <ImageBlok blok={brandLogoBlok} />}
        {brandTextBlok && <TextLinkBlok blok={brandTextBlok} isBrandText />}
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
            {blok.leftContainer.map((value: ButtonStoryblok, index: number) => {
              return (
                <li className="nav-item mx-1">
                  <ButtonBlok blok={value} isNavButton />
                </li>
              );
            })}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBlok;
