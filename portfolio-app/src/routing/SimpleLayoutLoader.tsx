import { useEffect, useState, useRef } from "react";
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
  const [isContentReady, setIsContentReady] = useState(false);
  const routeLocation = useLocation();
  const isBackNavigation = useRef(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const handlePopState = () => {
      isBackNavigation.current = true;
      setLoading(true);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (story) {
      logStoryblokStoryOrBlock(slug, story);
      setContent(story.content as SimpleLayoutStoryblok);
      setIsContentReady(true);
      setLoading(false);
    } else {
      setContent(undefined);
      setIsContentReady(false);
    }
  }, [story]);

  useEffect(() => {
    if (isContentReady && content?.body) {
      if (!isBackNavigation.current) {
        window.scrollTo({ top: 0, behavior: "auto" });
        maybeScrollToAnchor();
      } else {
        isBackNavigation.current = false;
      }
    }
  }, [isContentReady, content]);

  if (!content || loading) {
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
