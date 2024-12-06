import { Suspense } from "react";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import "./App.css";
import Footer from "./components/bloks/FooterBlok";
import Header from "./components/bloks/HeaderBlok";
import Loading from "./components/Loading";
import Main from "./components/Main";
import {
  GlobalFooterStoryblok,
  GlobalHeaderStoryblok,
  ImageStoryblok,
  PageStoryblok,
} from "./components/types/component-types-sb";
import useStoryblokStory from "./hooks/useStoryblokStory";

const slug = "global-layout";
const basename = "/portfolio-webapp";
export const appPath = `${window.location.origin}${basename}`;

function App() {
  const story = useStoryblokStory(slug);

  if (!story || !story.content) {
    return (
      <div className="app">
        <Loading />
      </div>
    );
  }

  const content = story.content as PageStoryblok;
  const header = content.header[0] as GlobalHeaderStoryblok;
  const footer = content.footer[0] as GlobalFooterStoryblok;
  const scrollToTopImage: ImageStoryblok | undefined = content.scrollToTop
    ? content.scrollToTop[0]
    : undefined;

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <BrowserRouter basename={basename}>
          <Header blok={header} />
          <Main scrollToTopBlok={scrollToTopImage} />
          <Footer blok={footer} />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
