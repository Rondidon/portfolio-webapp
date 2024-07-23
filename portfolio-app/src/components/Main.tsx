import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routesConfig from "../routing/routingConfig";
import Loading from "./Loading";
import { RouteConfig } from "../routing/types/routeConfig";

const Main: React.FC = () => {
  return (
    <main className={"app-main"}>
      <Suspense fallback={<Loading variant={"base"} />}>
        <Routes>
          {routesConfig.map((route: RouteConfig, index: number) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
