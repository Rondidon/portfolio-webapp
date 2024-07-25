import React, { useEffect } from "react";
import { logStoryblokStoryOrBlock } from "../../utils/logger";
import { LanguageDropdownStoryblok } from "../types/component-types-sb";
import toAssetLocation from "../../scripts/imageConverter";
import "./css/Dropdown.css";

interface LanguageDropdownProps {
  blok: LanguageDropdownStoryblok;
}

const LanguageDropdownBlok: React.FC<LanguageDropdownProps> = ({
  blok,
}): JSX.Element => {
  return (
    <li className="nav-item dropdown">
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
        {blok.languages?.map((value, index) => {
          return (
            <li>
              <a className="dropdown-item dropdown-fit-content" href="#">
                {
                  <img
                    src={
                      value === "0"
                        ? toAssetLocation("DE.svg", "image")
                        : toAssetLocation("GB.svg", "image")
                    }
                    style={{ width: "16px", height: "16px" }}
                  ></img>
                }
                <span style={{ marginLeft: "0.2em" }}>
                  {value === "0" ? "DE" : "EN"}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default LanguageDropdownBlok;
