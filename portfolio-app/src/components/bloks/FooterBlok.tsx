import React from "react";
import {
  GlobalFooterColumnStoryblok,
  GlobalFooterStoryblok,
  ImageStoryblok,
  TextLinkStoryblok,
} from "../types/component-types-sb";
import ImageBlok from "./ImageBlok";
import "./css/FooterBlok.css";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";
import TextLinkBlok from "./TextLinkBlok";
import { Link } from "react-router-dom";

type FooterProps = {
  blok: GlobalFooterStoryblok;
};

const Footer: React.FC<FooterProps> = ({ blok }) => {
  const logoBlok = blok.logo[0] as ImageStoryblok;

  return (
    <div className="footer-container">
      <footer className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <Link
              to={logoBlok.internal_slug ? logoBlok.internal_slug : "/"}
              className={
                "d-flex align-items-center gap-2 mb-3 logo-link-container text-decoration-none"
              }
            >
              <ImageBlok blok={logoBlok} />
              <span>
                <strong>RFA</strong>Kindler
              </span>
            </Link>
            {blok.description && (
              <SafeHtmlRenderer
                htmlContent={blok.description}
                className="footer-description-text"
              />
            )}
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
      </footer>
    </div>
  );
};

export default Footer;
