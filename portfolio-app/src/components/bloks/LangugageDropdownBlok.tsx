import React from "react";
import toAssetLocation from "../../scripts/imageConverter";
import { LanguageDropdownStoryblok } from "../types/component-types-sb";
import "./css/LanguageDropdownBlok.css";

interface LanguageDropdownProps {
  blok: LanguageDropdownStoryblok;
}

const LanguageDropdownBlok: React.FC<LanguageDropdownProps> = ({
  blok,
}): JSX.Element => {
  return (
    <div className="nav-item dropdown">
      <button
        className="nav-link dropdown-toggle text-link"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        title={blok.title}
      >
        {blok.title}
      </button>
      <ul className="dropdown-menu dropdown-fit-content">
        {blok.languages?.map((value, index) => (
          <li key={index}>
            <button
              className="dropdown-item dropdown-fit-content"
              type="button"
            >
              <img
                src={toAssetLocation(value + ".svg")}
                loading="lazy"
                style={{ width: "16px", height: "16px" }}
                alt={blok.title}
              />
              <span style={{ marginLeft: "0.2em" }}>{value}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdownBlok;
