import { lazy } from "react";
import { RouteConfig } from "./types/routeConfig";

const SimpleLayoutLoader = lazy(() => import("./SimpleLayoutLoader"));

const routesConfig: RouteConfig[] = [
  { path: "/", element: <SimpleLayoutLoader slug="/home" /> },
  { path: "/home", element: <SimpleLayoutLoader slug="/home" /> },
  { path: "imprint", element: <SimpleLayoutLoader slug="/imprint" /> },
  {
    path: "privacy-policy",
    element: <SimpleLayoutLoader slug="/privacy-policy" />,
  },
  { path: "contact", element: <SimpleLayoutLoader slug="/contact" /> },
  { path: "about-me", element: <SimpleLayoutLoader slug="/about-me" /> },
  {
    path: "services-offered",
    element: <SimpleLayoutLoader slug="/services-offered" />,
  },
  {
    path: "projects",
    element: <SimpleLayoutLoader slug="/projects/overview" />,
  },
  {
    path: "projects/overview",
    element: <SimpleLayoutLoader slug="/projects/overview" />,
  },
  {
    path: "projects/web/community-administration-review",
    element: (
      <SimpleLayoutLoader slug="/projects/web/community-administration-review" />
    ),
  },
  {
    path: "projects/web/knuddels-landingpage",
    element: <SimpleLayoutLoader slug="/projects/web/knuddels-landingpage" />,
  },
  {
    path: "projects/web/knuddels-registration",
    element: <SimpleLayoutLoader slug="/projects/web/knuddels-registration" />,
  },
  {
    path: "projects/web/knuddels-community-elections",
    element: (
      <SimpleLayoutLoader slug="/projects/web/knuddels-community-elections" />
    ),
  },
  {
    path: "projects/web/ecotrace-co2-viewer",
    element: <SimpleLayoutLoader slug="projects/web/ecotrace-co2-viewer" />,
  },
  {
    path: "projects/web/portfolio-homepage",
    element: <SimpleLayoutLoader slug="projects/web/portfolio-homepage" />,
  },
  {
    path: "projects/apps/voxie-voxel-viewer",
    element: <SimpleLayoutLoader slug="projects/apps/voxie-voxel-viewer" />,
  },
  {
    path: "projects/apps/digital-volume-correlation",
    element: (
      <SimpleLayoutLoader slug="projects/apps/digital-volume-correlation" />
    ),
  },
  {
    path: "projects/apps/tournaware-tabletop-tournament-software",
    element: (
      <SimpleLayoutLoader slug="projects/apps/tournaware-tabletop-tournament-software" />
    ),
  },
  {
    path: "projects/apps/quiz-game-maker",
    element: <SimpleLayoutLoader slug="projects/apps/quiz-game-maker" />,
  },
  {
    path: "projects/games/inland-shipping-simulator-prototype",
    element: (
      <SimpleLayoutLoader slug="projects/games/inland-shipping-simulator-prototype" />
    ),
  },
  {
    path: "projects/games/ferry-simulator-prototype",
    element: (
      <SimpleLayoutLoader slug="projects/games/ferry-simulator-prototype" />
    ),
  },
  {
    path: "projects/games/tuning-garage-simulator",
    element: (
      <SimpleLayoutLoader slug="projects/games/tuning-garage-simulator" />
    ),
  },
  {
    path: "projects/games/track-construction-simulator",
    element: (
      <SimpleLayoutLoader slug="projects/games/track-construction-simulator" />
    ),
  },
  {
    path: "projects/games/sports-fishing-simulator-2013",
    element: (
      <SimpleLayoutLoader slug="projects/games/sports-fishing-simulator-2013" />
    ),
  },
  {
    path: "projects/games/sports-fishing-simulator-2012",
    element: (
      <SimpleLayoutLoader slug="projects/games/sports-fishing-simulator-2012" />
    ),
  },
  {
    path: "projects/games/adrenaline",
    element: <SimpleLayoutLoader slug="projects/games/adrenaline" />,
  },
  {
    path: "projects/video",
    element: <SimpleLayoutLoader slug="projects/video-projects" />,
  },
  {
    path: "projects/music",
    element: <SimpleLayoutLoader slug="projects/music" />,
  },
  { path: "*", element: <SimpleLayoutLoader slug="not-found-404" /> },
];

export default routesConfig;
