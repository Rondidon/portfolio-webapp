import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import React, { useEffect } from "react";
import useStoryblokStory from "../hooks/useStoryblokStory";
import { logStoryblokStory } from "../utils/logger";
import Loading from "../components/Loading";

const slug = "notfound404";

const NotFound404: React.FC = () => {
  const story = useStoryblokStory(slug);

  useEffect(() => {
    logStoryblokStory(slug, story);
  }, [story]);

  if (!story || !story.content) {
    return <Loading variant="storyblok" />;
  }

  return (
    <div>
      {story.content.body.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default NotFound404;
