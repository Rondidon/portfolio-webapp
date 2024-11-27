import { useEffect } from "react";
import { SimpleLayoutStoryblok } from "../components/types/component-types-sb";
import useStoryblokStory from "../hooks/useStoryblokStory";
import { logStoryblokStoryOrBlock } from "../utils/logger";
import Loading from "../components/Loading";
import LayoutWrapper from "../components/content_types/LayoutWrapper";
import { SbBlokData, StoryblokComponent } from "@storyblok/react";

interface StoryLoaderProps {
  slug: string;
}

const SimpleLayoutLoader = (props: StoryLoaderProps) => {
  const story = useStoryblokStory(props.slug);
  const content = story?.content as SimpleLayoutStoryblok;

  useEffect(() => {
    if (story) {
      logStoryblokStoryOrBlock(props.slug, story);
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

export default SimpleLayoutLoader;
