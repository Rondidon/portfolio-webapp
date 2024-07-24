import { lazy } from "react";
import { RouteConfig } from "./types/routeConfig";

const Home = lazy(() => import("./Home"));
const Imprint = lazy(() => import("./legal/Imprint"));
const PrivacyPolicy = lazy(() => import("./legal/PrivacyPolicy"));
const SearchResults = lazy(() => import("./search-results/SearchResults"));
const Contact = lazy(() => import("./personal-info/Contact"));
const AboutMe = lazy(() => import("./personal-info/AboutMe"));
const ServicesOffered = lazy(() => import("./personal-info/ServicesOffered"));
const ProjectOverview = lazy(() => import("./projects/ProjectOverview"));
const WebProjects = lazy(() => import("./projects/web/WebProjects"));
const CommunityAdministrationReview = lazy(
  () => import("./projects/web/CommunityAdministrationReview")
);
const KnuddelsLandingPage = lazy(
  () => import("./projects/web/KnuddelsLandingPage")
);
const KnuddelsRegistration = lazy(
  () => import("./projects/web/KnuddelsRegistration")
);
const KnuddelsCommunityElections = lazy(
  () => import("./projects/web/KnuddelsCommunityElections")
);
const EcoTrace = lazy(() => import("./projects/web/EcoTrace"));
const Portfolio = lazy(() => import("./projects/web/Portfolio"));
const AppProjects = lazy(() => import("./projects/app/AppProjects"));
const Voxie = lazy(() => import("./projects/app/Voxie"));
const DigitalVolumeCorrelation = lazy(
  () => import("./projects/app/DigitalVolumeCorrelation")
);
const Tournaware = lazy(() => import("./projects/app/Tournaware"));
const QuizGameMaker = lazy(() => import("./projects/app/QuizGameMaker"));
const GameProjects = lazy(() => import("./projects/game/GameProjects"));
const InlandShippingSimulatorPrototype = lazy(
  () => import("./projects/game/InlandShippingSimulatorPrototype")
);
const FerrySimulatorPrototype = lazy(
  () => import("./projects/game/FerrySimulatorPrototype")
);
const TuningGarageSimulator = lazy(
  () => import("./projects/game/TuningGarageSimulator")
);
const TrackConstructionSimulator = lazy(
  () => import("./projects/game/TrackConstructionSimulator")
);
const SportFishingSimulator2013 = lazy(
  () => import("./projects/game/SportFishingSimulator2013")
);
const SportFishingSimulator2012 = lazy(
  () => import("./projects/game/SportFishingSimulator2012")
);
const Adrenaline = lazy(() => import("./projects/game/Adrenaline"));
const VideoProjects = lazy(() => import("./projects/video/VideoProjects"));
const MusicProjects = lazy(() => import("./projects/music/MusicProjects"));
const NotFound404 = lazy(() => import("./NotFound404"));

const routesConfig: RouteConfig[] = [
  { path: "/", element: <Home message="Home" /> },
  { path: "/home", element: <Home message="Home" /> },
  { path: "imprint", element: <Imprint message="imprint" /> },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy message="privacy policy" />,
  },
  {
    path: "search-results",
    element: <SearchResults message="search results" />,
  },
  { path: "contact", element: <Contact message="contact" /> },
  { path: "about-me", element: <AboutMe message="about me" /> },
  {
    path: "services-offered",
    element: <ServicesOffered message="services offered" />,
  },
  { path: "projects", element: <ProjectOverview message="project overview" /> },
  { path: "projects/web", element: <WebProjects message="web projects" /> },
  {
    path: "projects/web/community-administration-review",
    element: (
      <CommunityAdministrationReview message="community administration review" />
    ),
  },
  {
    path: "projects/web/knuddels-landingpage",
    element: <KnuddelsLandingPage message="knuddels landing page" />,
  },
  {
    path: "projects/web/knuddels-registration",
    element: <KnuddelsRegistration message="knuddels registration" />,
  },
  {
    path: "projects/web/knuddels-community-elections",
    element: (
      <KnuddelsCommunityElections message="knuddels community elections" />
    ),
  },
  {
    path: "projects/web/ecotrace-co2-viewer",
    element: <EcoTrace message="ecotrace" />,
  },
  {
    path: "projects/web/portfolio-homepage",
    element: <Portfolio message="portfolio" />,
  },
  { path: "projects/apps", element: <AppProjects message="app projects" /> },
  {
    path: "projects/apps/voxie-voxel-viewer",
    element: <Voxie message="voxie" />,
  },
  {
    path: "projects/apps/digital-volume-correlation",
    element: <DigitalVolumeCorrelation message="dvc" />,
  },
  {
    path: "projects/apps/tournaware-tabletop-tournament-software",
    element: <Tournaware message="tournaware" />,
  },
  {
    path: "projects/apps/quiz-game-maker",
    element: <QuizGameMaker message="quiz game maker" />,
  },
  { path: "projects/games", element: <GameProjects message="game projects" /> },
  {
    path: "projects/games/inland-shipping-simulator-prototype",
    element: <InlandShippingSimulatorPrototype message="inland shipping sim" />,
  },
  {
    path: "projects/games/ferry-simulator-prototype",
    element: <FerrySimulatorPrototype message="ferry sim" />,
  },
  {
    path: "projects/games/tuning-garage-simulator",
    element: <TuningGarageSimulator message="tuning garage sim" />,
  },
  {
    path: "projects/games/track-construction-simulator",
    element: <TrackConstructionSimulator message="track construction sim" />,
  },
  {
    path: "projects/games/sports-fishing-simulator-2013",
    element: <SportFishingSimulator2013 message="sportfishingsim2013" />,
  },
  {
    path: "projects/games/sports-fishing-simulator-2012",
    element: <SportFishingSimulator2012 message="sportfishingsimulator2012" />,
  },
  {
    path: "projects/games/adrenaline",
    element: <Adrenaline message="Adrenaline" />,
  },
  {
    path: "projects/video",
    element: <VideoProjects message="video projects" />,
  },
  {
    path: "projects/music",
    element: <MusicProjects message="music projects" />,
  },
  { path: "*", element: <NotFound404 /> },
];

export default routesConfig;
