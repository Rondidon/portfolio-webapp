import { apiPlugin } from "@storyblok/react";
import CardBlok from "./components/bloks/CardBlok";
import HeroBlok from "./components/bloks/HeroBlok";
import CardContainerBlok from "./components/bloks/CardContainerBlok";
import SimpleContainerBlok from "./components/bloks/SimpleContainerBlok";
import ContentSectionBlok from "./components/bloks/ContentSectionBlok";
import HorizontalLineBlok from "./components/bloks/HorizontalLineBlok";
import CarouselBlok from "./components/bloks/CarouselBlok";
import FaqBlok from "./components/bloks/FaqBlok";
import ButtonBlok from "./components/bloks/ButtonBlok";
import ContactFormBlok from "./components/bloks/ContactFormBlok";

// setup
const accessToken = "u2OrXZ1MorrJDKZKPTExHwtt";
const region = "eu";
const version: "draft" | "published" = "draft";
const debugLogs = false;

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
  accessToken: accessToken,
  use: [apiPlugin],
  apiOptions: {
    region: region,
  },
  components: componentsWhitelist,
  version: version,
  debugLogs: debugLogs,
};

export default storyblokSetup;
