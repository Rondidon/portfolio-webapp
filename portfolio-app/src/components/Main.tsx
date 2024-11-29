import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routesConfig from "../routing/routingConfig";
import { RouteConfig } from "../routing/types/routeConfig";
import Loading from "./Loading";
import { ImageStoryblok } from "./types/component-types-sb";
import ImageBlok from "./bloks/ImageBlok";

interface MainProps {
  scrollToTopBlok?: ImageStoryblok;
}

const Main = (props: MainProps): JSX.Element => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollToTopBottomOffset, setScrollToTopBottomOffset] = useState(20);

  // show loading screen on switching routes.
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100); // Simuliere eine Ladezeit
    return () => clearTimeout(timer);
  }, [location]);

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

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="app-main container">
      <Suspense fallback={<Loading />}>
        <Routes>
          {routesConfig.map((route: RouteConfig, index: number) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      {props.scrollToTopBlok && (
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
      )}
    </main>
  );
};

export default Main;
