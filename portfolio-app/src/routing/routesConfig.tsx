import { lazy } from "react";
import routesData from "./routesData";
import { RouteConfig } from "./types/routeConfig";

const BasicLayoutLoader = lazy(() => import("./BasicLayoutLoader"));

const routesConfig: RouteConfig[] = routesData.map((route) => ({
  path: route.path,
  element: <BasicLayoutLoader slug={route.slug} />,
}));

export default routesConfig;
