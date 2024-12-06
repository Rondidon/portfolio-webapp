import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LayoutWrapper from "../components/content_types/LayoutWrapper";
import Loading from "../components/Loading";
import { SimpleLayoutStoryblok } from "../components/types/component-types-sb";
import useStoryblokStory from "../hooks/useStoryblokStory";
import { logStoryblokStoryOrBlock } from "../utils/logger";

interface StoryLoaderProps {
  slug: string;
}

const SimpleLayoutLoader = ({ slug }: StoryLoaderProps) => {
  const story = useStoryblokStory(slug);
  const [content, setContent] = useState<SimpleLayoutStoryblok | undefined>(
    undefined
  );
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const maybeScrollToAnchor = () => {
    const hash = location.hash;
    if (hash) {
      const elementId = hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    setLoading(true);
  }, [location]);

  useEffect(() => {
    logStoryblokStoryOrBlock(slug, story);
  }, [story, slug]);

  useEffect(() => {
    if (story) {
      setContent(story.content as SimpleLayoutStoryblok);
      setLoading(false);
    } else {
      setContent(undefined);
      setLoading(true);
    }
  }, [story]);

  useEffect(() => {
    if (!loading && content?.body) {
      window.scrollTo({ top: 0, behavior: "auto" });
      maybeScrollToAnchor();
    }
  }, [loading, content]);

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
