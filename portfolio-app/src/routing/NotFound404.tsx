import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import React from "react";
import LayoutWrapper from "../components/content_types/LayoutWrapper";
import Loading from "../components/Loading";
import { SimpleLayoutStoryblok } from "../components/types/component-types-sb";
import useStoryblokStory from "../hooks/useStoryblokStory";

const slug = "not-found-404";

const NotFound404: React.FC = () => {
  const story = useStoryblokStory(slug);
  const content = story.content as SimpleLayoutStoryblok;

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
