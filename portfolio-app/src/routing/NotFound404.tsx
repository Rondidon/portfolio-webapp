import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import React, { useEffect } from "react";
import useStoryblokStory from "../hooks/useStoryblokStory";
import { logStoryblokStoryOrBlock } from "../utils/logger";
import Loading from "../components/Loading";
import { SimpleLayoutStoryblok } from "../components/types/component-types-sb";

const slug = "not-found-404";

const NotFound404: React.FC = () => {
  const story = useStoryblokStory(slug);
  const content = story.content as SimpleLayoutStoryblok;

  useEffect(() => {
    logStoryblokStoryOrBlock(slug, story);
  }, [story]);

  if (!story || !content) {
    return <Loading />;
  }

  return (
    <div
      style={{
        marginTop: content.topMargin + "vh",
        justifyContent: content.centerElements ? "center" : "flex-start",
        display: "flex",
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {content.body?.map((blok: SbBlokData) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default NotFound404;
