import routesData from "./routesData";
import { RouteConfig } from "./types/routeConfig";

const routesConfig: RouteConfig[] = routesData.map((route) => ({
  path: route.path,
  slug: route.slug,
}));

export default routesConfig;
