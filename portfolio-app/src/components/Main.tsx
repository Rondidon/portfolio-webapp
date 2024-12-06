import { Suspense } from "react";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import routesConfig from "../routing/routingConfig";
import { RouteConfig } from "../routing/types/routeConfig";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";
import { ImageStoryblok } from "./types/component-types-sb";

interface MainProps {
  scrollToTopBlok?: ImageStoryblok;
}

const Main = (props: MainProps): JSX.Element => {
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
