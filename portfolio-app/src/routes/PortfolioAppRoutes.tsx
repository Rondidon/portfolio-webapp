import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

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

const PortfolioAppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home message="Home" />} />
        <Route path="imprint" element={<Imprint message="imprint" />} />
        <Route
          path="privacy-policy"
          element={<PrivacyPolicy message="privacy policy" />}
        />
        <Route
          path="search-results"
          element={<SearchResults message="search results" />}
        />
        <Route path="contact" element={<Contact message="contact" />} />
        <Route path="about-me" element={<AboutMe message="about me" />} />
        <Route
          path="services-offered"
          element={<ServicesOffered message="services offered" />}
        />
        <Route
          path="projects"
          element={<ProjectOverview message="project overview" />}
        />
        <Route
          path="projects/web"
          element={<WebProjects message="web projects" />}
        />
        <Route
          path="projects/web/community-administration-review"
          element={
            <CommunityAdministrationReview message="community administration review" />
          }
        />
        <Route
          path="projects/web/knuddels-landingpage"
          element={<KnuddelsLandingPage message="knuddels landing page" />}
        />
        <Route
          path="projects/web/knuddels-registration"
          element={<KnuddelsRegistration message="knuddels registration" />}
        />
        <Route
          path="projects/web/knuddels-community-elections"
          element={
            <KnuddelsCommunityElections message="knuddels community elections" />
          }
        />
        <Route
          path="projects/web/ecotrace-co2-viewer"
          element={<EcoTrace message="ecotrace" />}
        />
        <Route
          path="projects/web/portfolio-homepage"
          element={<Portfolio message="portfolio" />}
        />
        <Route
          path="projects/apps"
          element={<AppProjects message="app projects" />}
        />
        <Route
          path="projects/apps/voxie-voxel-viewer"
          element={<Voxie message="voxie" />}
        />
        <Route
          path="projects/apps/digital-volume-correlation"
          element={<DigitalVolumeCorrelation message="dvc" />}
        />
        <Route
          path="projects/apps/tournaware-tabletop-tournament-software"
          element={<Tournaware message="tournaware" />}
        />
        <Route
          path="projects/apps/quiz-game-maker"
          element={<QuizGameMaker message="quiz game maker" />}
        />
        <Route
          path="projects/games"
          element={<GameProjects message="game projects" />}
        />
        <Route
          path="projects/games/inland-shipping-simulator-prototype"
          element={
            <InlandShippingSimulatorPrototype message="inland shipping sim" />
          }
        />
        <Route
          path="projects/games/ferry-simulator-prototype"
          element={<FerrySimulatorPrototype message="ferry sim" />}
        />
        <Route
          path="projects/games/tuning-garage-simulator"
          element={<TuningGarageSimulator message="tuning garage sim" />}
        />
        <Route
          path="projects/games/track-construction-simulator"
          element={
            <TrackConstructionSimulator message="track construction sim" />
          }
        />
        <Route
          path="projects/games/sports-fishing-simulator-2013"
          element={<SportFishingSimulator2013 message="sportfishingsim2013" />}
        />
        <Route
          path="projects/games/sports-fishing-simulator-2012"
          element={
            <SportFishingSimulator2012 message="sportfishingsimulator2012" />
          }
        />
        <Route
          path="projects/games/adrenaline"
          element={<Adrenaline message="Adrenaline" />}
        />
        <Route
          path="projects/video"
          element={<VideoProjects message="video projects" />}
        />
        <Route
          path="projects/music"
          element={<MusicProjects message="music projects" />}
        />
      </Routes>
    </Suspense>
  );
};

export default PortfolioAppRoutes;
