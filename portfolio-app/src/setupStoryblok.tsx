import { apiPlugin } from "@storyblok/react";
import ButtonBlok from "./components/bloks/ButtonBlok";
import CardBlok from "./components/bloks/CardBlok";
import CardContainerBlok from "./components/bloks/CardContainerBlok";
import CarouselBlok from "./components/bloks/CarouselBlok";
import ContactFormBlok from "./components/bloks/ContactFormBlok";
import ContentSectionBlok from "./components/bloks/ContentSectionBlok";
import FaqBlok from "./components/bloks/FaqBlok";
import HeroBlok from "./components/bloks/HeroBlok";
import HorizontalLineBlok from "./components/bloks/HorizontalLineBlok";
import SimpleContainerBlok from "./components/bloks/SimpleContainerBlok";

// dynamic configuration
const accessToken =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN_PUBLISHED
    : process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN_DRAFT;

const region = process.env.REACT_APP_STORYBLOK_REGION || "eu";
const version = process.env.REACT_APP_STORYBLOK_VERSION || "draft";
const debugLogs = process.env.REACT_APP_DEBUG_LOGS === "true" || false;

if (debugLogs) {
  console.log(`NODE ENV: ${process.env.NODE_ENV}\n`);
  console.log(`Frontend URL: ${process.env.REACT_APP_FRONTEND_DOMAIN}\n`);
  console.log(`Backend URL: ${process.env.REACT_APP_BACKEND_DOMAIN}\n`);
  console.log(`Backend URL: ${process.env.REACT_APP_BACKEND_DOMAIN}\n`);
  console.log(`Token: ${accessToken?.substring(0, 5)}...\n`);
}

// dynamic components
const componentsWhitelist = {
  card: CardBlok,
  hero: HeroBlok,
  button: ButtonBlok,
  contentSection: ContentSectionBlok,
  cardContainer: CardContainerBlok,
  simpleContainer: SimpleContainerBlok,
  horizontalLine: HorizontalLineBlok,
  carousel: CarouselBlok,
  faq: FaqBlok,
  contactForm: ContactFormBlok,
};

const storyblokSetup = {
  accessToken,
  use: [apiPlugin],
  apiOptions: {
    region,
  },
  components: componentsWhitelist,
  version,
  debugLogs,
};

export default storyblokSetup;
