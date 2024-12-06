import { lazy } from "react";
import { RouteConfig } from "./types/routeConfig";

const BasicLayoutLoader = lazy(() => import("./BasicLayoutLoader"));

const routesConfig: RouteConfig[] = [
  { path: "/", element: <BasicLayoutLoader slug="/home" /> },
  { path: "/home", element: <BasicLayoutLoader slug="/home" /> },
  { path: "imprint", element: <BasicLayoutLoader slug="/imprint" /> },
  {
    path: "privacy-policy",
    element: <BasicLayoutLoader slug="/privacy-policy" />,
  },
  { path: "contact", element: <BasicLayoutLoader slug="/contact" /> },
  { path: "about-me", element: <BasicLayoutLoader slug="/about-me" /> },
  {
    path: "services-offered",
    element: <BasicLayoutLoader slug="/services-offered" />,
  },
  {
    path: "projects",
    element: <BasicLayoutLoader slug="/projects/overview" />,
  },
  {
    path: "projects/overview",
    element: <BasicLayoutLoader slug="/projects/overview" />,
  },
  {
    path: "projects/web/community-administration-review",
    element: (
      <BasicLayoutLoader slug="/projects/web/community-administration-review" />
    ),
  },
  {
    path: "projects/web/knuddels-landingpage",
    element: <BasicLayoutLoader slug="/projects/web/knuddels-landingpage" />,
  },
  {
    path: "projects/web/knuddels-registration",
    element: <BasicLayoutLoader slug="/projects/web/knuddels-registration" />,
  },
  {
    path: "projects/web/knuddels-community-elections",
    element: (
      <BasicLayoutLoader slug="/projects/web/knuddels-community-elections" />
    ),
  },
  {
    path: "projects/web/ecotrace-co2-viewer",
    element: <BasicLayoutLoader slug="projects/web/ecotrace-co2-viewer" />,
  },
  {
    path: "projects/web/portfolio-homepage",
    element: <BasicLayoutLoader slug="projects/web/portfolio-homepage" />,
  },
  {
    path: "projects/apps/voxie-voxel-viewer",
    element: <BasicLayoutLoader slug="projects/apps/voxie-voxel-viewer" />,
  },
  {
    path: "projects/apps/tournaware-tabletop-tournament-software",
    element: (
      <BasicLayoutLoader slug="projects/apps/tournaware-tabletop-tournament-software" />
    ),
  },
  {
    path: "projects/apps/quiz-game-maker",
    element: <BasicLayoutLoader slug="projects/apps/quiz-game-maker" />,
  },
  {
    path: "projects/games/inland-shipping-simulator-prototype",
    element: (
      <BasicLayoutLoader slug="projects/games/inland-shipping-simulator-prototype" />
    ),
  },
  {
    path: "projects/games/ferry-simulator-prototype",
    element: (
      <BasicLayoutLoader slug="projects/games/ferry-simulator-prototype" />
    ),
  },
  {
    path: "projects/games/tuning-garage-simulator",
    element: (
      <BasicLayoutLoader slug="projects/games/tuning-garage-simulator" />
    ),
  },
  {
    path: "projects/games/track-construction-simulator",
    element: (
      <BasicLayoutLoader slug="projects/games/track-construction-simulator" />
    ),
  },
  {
    path: "projects/games/sports-fishing-simulator-2013",
    element: (
      <BasicLayoutLoader slug="projects/games/sports-fishing-simulator-2013" />
    ),
  },
  {
    path: "projects/games/sports-fishing-simulator-2012",
    element: (
      <BasicLayoutLoader slug="projects/games/sports-fishing-simulator-2012" />
    ),
  },
  {
    path: "projects/games/adrenaline",
    element: <BasicLayoutLoader slug="projects/games/adrenaline" />,
  },
  {
    path: "projects/video",
    element: <BasicLayoutLoader slug="projects/video-projects" />,
  },
  {
    path: "projects/music",
    element: <BasicLayoutLoader slug="projects/music" />,
  },
  { path: "*", element: <BasicLayoutLoader slug="not-found-404" /> },
];

export default routesConfig;
