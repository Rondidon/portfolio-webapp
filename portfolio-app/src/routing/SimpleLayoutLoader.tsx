import { useEffect, useState } from "react";
import { SimpleLayoutStoryblok } from "../components/types/component-types-sb";
import useStoryblokStory from "../hooks/useStoryblokStory";
import { logStoryblokStoryOrBlock } from "../utils/logger";
import LayoutWrapper from "../components/content_types/LayoutWrapper";
import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";

interface StoryLoaderProps {
  slug: string;
}

const SimpleLayoutLoader = ({ slug }: StoryLoaderProps) => {
  const story = useStoryblokStory(slug);
  const [content, setContent] = useState<SimpleLayoutStoryblok | undefined>(
    undefined
  );
  const routeLocation = useLocation();

  const maybeScrollToAnchor = () => {
    const hash = routeLocation.hash;
    if (hash) {
      const elementId = hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Effekt, um den Content zu laden
  useEffect(() => {
    if (story) {
      setContent(story.content as SimpleLayoutStoryblok);
      logStoryblokStoryOrBlock(slug, story); // Log Story
    } else {
      setContent(undefined);
    }
  }, [story, slug]);

  // Effekt, um das Scrollen nach dem Laden des Contents zu handhaben
  useEffect(() => {
    if (content) {
      window.scrollTo({ top: 0, behavior: "auto" });
      maybeScrollToAnchor();
    }
  }, [content]);

  if (!content) {
    return <Loading />;
  }

  return (
    <LayoutWrapper blok={content}>
      {Array.isArray(content.body) &&
        content.body.map((blok: SbBlokData) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
    </LayoutWrapper>
  );
};

export default SimpleLayoutLoader;
