import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routesConfig from "../routing/routesConfig";
import { RouteConfig } from "../routing/types/routeConfig";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";
import { ImageStoryblok } from "./types/component-types-sb";

interface MainProps {
  scrollToTopBlok?: ImageStoryblok;
}

const Main = (props: MainProps): JSX.Element => {
  const BasicLayoutLoader = lazy(() => import("../routing/BasicLayoutLoader"));

  return (
    <main className="app-main container">
      <Suspense fallback={<Loading height={"100vh"} />}>
        <Routes>
          {routesConfig.map((route: RouteConfig, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={<BasicLayoutLoader slug={route.slug} />}
            />
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
