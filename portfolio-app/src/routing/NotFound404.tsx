import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import React, { useEffect } from "react";
import useStoryblokStory from "../hooks/useStoryblokStory";
import { logStoryblokStoryOrBlock } from "../utils/logger";
import Loading from "../components/Loading";
import { SimpleLayoutStoryblok } from "../components/types/component-types-sb";
import LayoutWrapper from "../components/content_types/LayoutWrapper";

const slug = "not-found-404";

const NotFound404: React.FC = () => {
  const story = useStoryblokStory(slug);
  const content = story.content as SimpleLayoutStoryblok;

  useEffect(() => {
    logStoryblokStoryOrBlock(slug, story);
  }, [story]);

  if (!story || !content) {
    return <Loading />;
  }

  return (
    <LayoutWrapper blok={content}>
      {content.body?.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </LayoutWrapper>
  );
};

export default NotFound404;
