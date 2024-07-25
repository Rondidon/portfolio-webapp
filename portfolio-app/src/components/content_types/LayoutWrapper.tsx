import React from "react";
import {
  SimpleLayoutStoryblok,
  PageStoryblok,
} from "../types/component-types-sb";
import "./css/simple-layout.css";

type LayoutWrapperProps = {
  blok: SimpleLayoutStoryblok | PageStoryblok;
  children: React.ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ blok, children }) => {
  if ("component" in blok) {
    switch (blok.component) {
      case "SimpleLayout":
        return (
          <div
            className={`simple-layout ${
              blok.centerElements ? "simple-layout-centered" : ""
            }`}
          >
            {children}
          </div>
        );
      case "page":
        return <div>{children}</div>;
      default:
        return null;
    }
  }
  return null;
};

export default LayoutWrapper;
