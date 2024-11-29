import { useEffect, useState } from "react";
import ImageBlok from "./bloks/ImageBlok";
import { ImageStoryblok } from "./types/component-types-sb";

interface ScrollToTopProps {
  scrollToTopBlok: ImageStoryblok;
}

const ScrollToTop = (props: ScrollToTopProps) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollToTopBottomOffset, setScrollToTopBottomOffset] = useState(20);

  // ScrollToTop visibility.
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerRect = footer?.getBoundingClientRect();

      // Sichtbarkeit des ScrollToTop-Buttons
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }

      // Footer-Überprüfung: Dynamischer Abstand, wenn Footer sichtbar ist
      if (footerRect) {
        if (footerRect.top < window.innerHeight && footerRect.bottom > 0) {
          // Footer ist teilweise im sichtbaren Bereich
          setScrollToTopBottomOffset(
            Math.max(window.innerHeight - footerRect.top + 40, 20)
          );
        } else {
          // Standardposition, wenn Footer nicht sichtbar ist
          setScrollToTopBottomOffset(20);
        }
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
        bottom: `${scrollToTopBottomOffset}px`,
      }}
    >
      <ImageBlok blok={props.scrollToTopBlok} onCallback={scrollToTop} />
    </div>
  );
};

export default ScrollToTop;
