import { useStoryblok } from "@storyblok/react";
import storyblokSetup from "../setupStoryblok";

const useStoryblokStory = (slug: string) => {
  return useStoryblok(slug, { version: storyblokSetup.version });
};

export default useStoryblokStory;
