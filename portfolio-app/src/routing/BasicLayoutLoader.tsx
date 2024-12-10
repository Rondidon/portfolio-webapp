import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import LayoutWrapper from "../components/content_types/LayoutWrapper";
import Loading from "../components/Loading";
import { BasicLayoutStoryblok } from "../components/types/component-types-sb";
import useStoryblokStory from "../hooks/useStoryblokStory";
import { logStoryblokStoryOrBlock } from "../utils/logger";

interface BasicLayoutLoaderProps {
  slug: string;
}

const BasicLayoutLoader = ({ slug }: BasicLayoutLoaderProps) => {
  const story = useStoryblokStory(slug);
  const [content, setContent] = useState<BasicLayoutStoryblok | undefined>(
    undefined
  );
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const prevLocation = useRef(location);

  useEffect(() => {
    const isSamePath = prevLocation.current.pathname === location.pathname;

    if (!isSamePath) {
      setLoading(true);
    }
    window.scrollTo({ top: 0, behavior: "auto" });

    prevLocation.current = location;
  }, [location]);

  useEffect(() => {
    logStoryblokStoryOrBlock(slug, story);
  }, [story, slug]);

  useEffect(() => {
    if (story) {
      setContent(story.content as BasicLayoutStoryblok);
      setLoading(false);
    } else {
      setContent(undefined);
      setLoading(true);
    }
  }, [story]);

  useEffect(() => {
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

    if (!loading && content?.body) {
      maybeScrollToAnchor();
    }
  }, [loading, content, location.hash]);

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

export default BasicLayoutLoader;
