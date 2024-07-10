import React, { useEffect } from "react";
import { SbBlokData, StoryblokComponent, useStoryblok } from "@storyblok/react";

const NotFound404: React.FC = () => {
  const story = useStoryblok("notfound404", { version: "draft" });

  useEffect(() => {
    console.log("Story data:", story);
  }, [story]);

  if (!story || !story.content) {
    return <div>Loading content from Storyblok...</div>;
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
