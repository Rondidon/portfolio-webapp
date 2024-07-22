import { apiPlugin, useStoryblok } from "@storyblok/react";
import CardStoryblok from "./components/blocks/CardStoryblok";

// setup
const accessToken = "u2OrXZ1MorrJDKZKPTExHwtt";
const region = "eu";
const version: "draft" | "published" = "draft";

// dynamic components
const components = {
  card: CardStoryblok,
};

const storyblokSetup = {
  accessToken: accessToken,
  use: [apiPlugin],
  apiOptions: {
    region: region,
  },
  components: components,
  version: version,
};

export default storyblokSetup;
