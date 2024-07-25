import { BrowserRouter } from "react-router-dom";
import Footer from "./components/bloks/FooterBlok";
import Header from "./components/bloks/HeaderBlok";
import Main from "./components/Main";
import useStoryblokStory from "./hooks/useStoryblokStory";
import {
  GlobalFooterStoryblok,
  GlobalHeaderStoryblok,
  PageStoryblok,
} from "./components/types/component-types-sb";
import { logStoryblokStoryOrBlock } from "./utils/logger";
import { useEffect } from "react";
import Loading from "./components/Loading";
import "./App.css";

const slug = "global-layout";

function App() {
  const story = useStoryblokStory(slug);

  useEffect(() => {
    logStoryblokStoryOrBlock(slug, story);
  }, [story]);

  if (!story || !story.content) {
    return (
      <div className="app">
        <Loading use100vh />
      </div>
    );
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
