import { apiPlugin } from "@storyblok/react";
import CardBlok from "./components/bloks/CardBlok";

// setup
const accessToken = "u2OrXZ1MorrJDKZKPTExHwtt";
const region = "eu";
const version: "draft" | "published" = "draft";
const debugLogs = true;

// dynamic components
const components = {
  card: CardBlok,
};

const storyblokSetup = {
  accessToken: accessToken,
  use: [apiPlugin],
  apiOptions: {
    region: region,
  },
  components: components,
  version: version,
  debugLogs: debugLogs,
};

export default storyblokSetup;
