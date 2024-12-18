import { useStoryblok } from "@storyblok/react";

const useStoryblokStory = (slug: string) => {
  const version: "draft" | "published" =
    (process.env.REACT_APP_STORYBLOK_VERSION as "draft" | "published") ||
    "draft";

  return useStoryblok(slug, { version: version });
};

export default useStoryblokStory;
