import storyblokSetup from "../setupStoryblok";

export const logStoryblokStoryOrBlock = (
  slugOrBlock: string,
  storyOrBlock: any
) => {
  if (!storyblokSetup.debugLogs) return;
  console.log("Storyblok content (" + slugOrBlock + ")", storyOrBlock);
};
