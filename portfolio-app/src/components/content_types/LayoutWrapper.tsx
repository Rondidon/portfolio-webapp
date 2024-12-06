import React from "react";
import {
  BasicLayoutStoryblok,
  PageStoryblok,
} from "../types/component-types-sb";
import "./css/basic-layout.css";

type LayoutWrapperProps = {
  blok: BasicLayoutStoryblok | PageStoryblok;
  children: React.ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ blok, children }) => {
  if ("component" in blok) {
    switch (blok.component) {
      case "BasicLayout":
        return (
          <div
            className={`basic-layout ${
              blok.centerElements ? "basic-layout-centered" : ""
            }`}
          >
            {children}
          </div>
        );
      default:
        return null;
    }
  }
  return null;
};

export default LayoutWrapper;
