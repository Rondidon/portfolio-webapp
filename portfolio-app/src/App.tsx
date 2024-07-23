import { BrowserRouter } from "react-router-dom";
import "./css/app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import useStoryblokStory from "./hooks/useStoryblokStory";
import {
  GlobalFooterStoryblok,
  GlobalHeaderStoryblok,
  PageStoryblok,
} from "./components/types/component-types-sb";
import { logStoryblokStory } from "./utils/logger";
import { useEffect } from "react";
import Loading from "./components/Loading";

const slug = "global-layout";

function App() {
  const story = useStoryblokStory(slug);

  useEffect(() => {
    logStoryblokStory(slug, story);
  }, [story]);

  if (!story || !story.content) {
    return <Loading variant="storyblok" />;
  }

  const content = story.content as PageStoryblok;

  const header = content.header[0] as GlobalHeaderStoryblok;
  const footer = content.footer[0] as GlobalFooterStoryblok;

  return (
    <div className="app">
      <BrowserRouter basename="/portfolio-webapp">
        <Header blok={header} />
        <Main />
        <Footer blok={footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
