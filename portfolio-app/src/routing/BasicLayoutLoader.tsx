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

  const locationRef = useRef(location);

  const scrollPositionHistory = useRef<Map<string, number>>(new Map());
  const locationChangeByPopState = useRef<boolean>(false);

  useEffect(() => {
    const isSamePath = locationRef.current.pathname === location.pathname; // locationRef is previous location at this point

    if (!isSamePath) {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    if (isSamePath) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    locationRef.current = location; // update location ref to current location
  }, [location]);

  useEffect(() => {
    logStoryblokStoryOrBlock(slug, story);
  }, [story, slug]);

  useEffect(() => {
    const saveScrollPosition = (event: MouseEvent) => {
      scrollPositionHistory.current.set(
        locationRef.current.pathname,
        window.scrollY
      );
    };

    window.addEventListener("mousedown", saveScrollPosition);
    return () => {
      window.removeEventListener("mousedown", saveScrollPosition);
    };
  }, [slug]);

  useEffect(() => {
    const restoreScrollPositon = () => {
      setTimeout(() => {
        const path = locationRef.current.pathname;
        const scrollY = scrollPositionHistory.current.get(path);
        window.scrollTo({ top: scrollY, behavior: "auto" });
        locationChangeByPopState.current = false;
      }, 1);
    };

    if (story) {
      setContent(story.content as BasicLayoutStoryblok);
      setLoading(false);
      if (locationChangeByPopState.current === true) {
        restoreScrollPositon();
      }
    } else {
      setContent(undefined);
      setLoading(true);
    }
  }, [story]);

  useEffect(() => {
    const onPopStateEvent = (event: PopStateEvent) => {
      locationChangeByPopState.current = true;
    };

    window.addEventListener("popstate", onPopStateEvent);
    return () => {
      window.removeEventListener("popstate", onPopStateEvent);
    };
  }, []);

  useEffect(() => {
    const maybeScrollToAnchor = () => {
      if (locationChangeByPopState.current === true) {
        return;
      }

      const hash = location.hash;
      if (hash) {
        const elementId = hash.replace("#", "");
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          const elementYPosition = element.getBoundingClientRect().y;
          scrollPositionHistory.current.set(
            locationRef.current.pathname,
            elementYPosition
          );
        }
      }
    };

    if (!loading && content?.body) {
      maybeScrollToAnchor();
    }
  }, [loading, content, location.hash]);

  if (!content || loading) {
    return <Loading height={"100vh"} />;
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
