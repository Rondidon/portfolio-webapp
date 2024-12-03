import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routesConfig from "../routing/routingConfig";
import { RouteConfig } from "../routing/types/routeConfig";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";
import { ImageStoryblok } from "./types/component-types-sb";

interface MainProps {
  scrollToTopBlok?: ImageStoryblok;
}

const Main = (props: MainProps): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  // show loading screen on switching routes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

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
        <ScrollToTop scrollToTopBlok={props.scrollToTopBlok} />
      )}
    </main>
  );
};

export default Main;
