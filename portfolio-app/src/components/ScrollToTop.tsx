import { useEffect, useState } from "react";
import ImageBlok from "./bloks/ImageBlok";
import { ImageStoryblok } from "./types/component-types-sb";
import "./bloks/css/ScrollToTop.css";

interface ScrollToTopProps {
  scrollToTopBlok: ImageStoryblok;
}

const ScrollToTop = (props: ScrollToTopProps) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // ScrollToTop visibility.
  useEffect(() => {
    const handleScroll = () => {
      // Sichtbarkeit des ScrollToTop-Buttons
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={
        showScrollToTop
          ? "scrollToTopContainer visible"
          : "scrollToTopContainer"
      }
      style={{
        borderRadius: props.scrollToTopBlok?.borderRadius
          ? `${props.scrollToTopBlok.borderRadius}em`
          : "0em",
      }}
    >
      <ImageBlok blok={props.scrollToTopBlok} onCallback={scrollToTop} />
    </div>
  );
};

export default ScrollToTop;
