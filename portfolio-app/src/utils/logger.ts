import storyblokSetup from "../setupStoryblok";

export const logStoryblokStory = (slug: string, story: any) => {
  if (!storyblokSetup.debugLogs) return;
  console.log("Storyblok story (" + slug + ")", story);
};
