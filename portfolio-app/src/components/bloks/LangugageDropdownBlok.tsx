import React from "react";
import toAssetLocation from "../../scripts/imageConverter";
import { LanguageDropdownStoryblok } from "../types/component-types-sb";
import "./css/Dropdown.css";

interface LanguageDropdownProps {
  blok: LanguageDropdownStoryblok;
}

const LanguageDropdownBlok: React.FC<LanguageDropdownProps> = ({
  blok,
}): JSX.Element => {
  return (
    <div className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        title={blok.title}
      >
        {blok.title}
      </a>
      <ul className="dropdown-menu dropdown-fit-content">
        {blok.languages?.map((value, index) => (
          <li key={index}>
            <a className="dropdown-item dropdown-fit-content" href="#">
              <img
                src={toAssetLocation(
                  value === "0" ? "DE.svg" : "GB.svg",
                  "image"
                )}
                style={{ width: "16px", height: "16px" }}
                alt={value === "0" ? "DE" : "EN"}
              />
              <span style={{ marginLeft: "0.2em" }}>
                {value === "0" ? "DE" : "EN"}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdownBlok;
