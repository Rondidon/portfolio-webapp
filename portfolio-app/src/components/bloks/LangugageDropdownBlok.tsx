import React, { useEffect } from "react";
import { logStoryblokStoryOrBlock } from "../../utils/logger";
import { LanguageDropdownStoryblok } from "../types/component-types-sb";
import "./css/DropdownBlok.css";

interface LanguageDropdownProps {
  blok: LanguageDropdownStoryblok;
}

const LanguageDropdownBlok: React.FC<LanguageDropdownProps> = ({
  blok,
}): JSX.Element => {
  useEffect(() => {
    logStoryblokStoryOrBlock("language dropdown blok: ", blok);
  }, []);

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </li>
  );
};

export default LanguageDropdownBlok;
