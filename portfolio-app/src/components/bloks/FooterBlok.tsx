import React from "react";
import {
  GlobalFooterColumnStoryblok,
  GlobalFooterStoryblok,
  ImageStoryblok,
  TextLinkStoryblok,
} from "../types/component-types-sb";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import ImageBlok from "./ImageBlok";
import TextLinkBlok from "./TextLinkBlok";
import "./css/FooterBlok.css";

type FooterProps = {
  blok: GlobalFooterStoryblok;
};

const Footer: React.FC<FooterProps> = ({ blok }) => {
  const logoBlok = blok.logo[0] as ImageStoryblok;

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <div className="d-flex align-items-center gap-3 mb-3">
              <ImageBlok blok={logoBlok} />
              {blok.description && (
                <SafeHtmlRenderer
                  htmlContent={blok.description}
                  className="footer-description-text"
                />
              )}
            </div>
            {blok.claim && (
              <p className="footer-copyright-text">&copy; 2024 {blok.claim}</p>
            )}
          </div>

          {blok.columns?.map(
            (value: GlobalFooterColumnStoryblok, index: number) => (
              <div className="col-12 col-md mb-3" key={index}>
                <h5 className="footer-column-header">{value.title}</h5>
                <ul className="nav flex-column">
                  {value.links.map((link: TextLinkStoryblok, index: number) => (
                    <li className="nav-item mb-2" key={index}>
                      <TextLinkBlok blok={link} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
