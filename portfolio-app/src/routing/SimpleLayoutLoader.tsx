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

  useEffect(() => {
    if (story) {
      setContent(story.content as SimpleLayoutStoryblok);
      logStoryblokStoryOrBlock(slug, story); // Log Story

      // Scrollen zu Anker, falls vorhanden
      const hash = routeLocation.hash;
      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      setContent(undefined);
    }
  }, [story, slug, routeLocation]);

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
