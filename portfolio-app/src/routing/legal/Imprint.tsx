import React, { useEffect } from "react";
import useStoryblokStory from "../../hooks/useStoryblokStory";
import { SimpleLayoutStoryblok } from "../../components/types/component-types-sb";
import { logStoryblokStoryOrBlock } from "../../utils/logger";
import Loading from "../../components/Loading";
import LayoutWrapper from "../../components/content_types/LayoutWrapper";
import { SbBlokData, StoryblokComponent } from "@storyblok/react";

const slug = "imprint";

type ImprintProps = {
  message: string;
};

const Imprint: React.FC<ImprintProps> = ({ message }) => {
  const story = useStoryblokStory(slug);
  const content = story?.content as SimpleLayoutStoryblok;

  useEffect(() => {
    if (story) {
      logStoryblokStoryOrBlock(slug, story);
    }
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

export default Imprint;
