// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import CardStoryblok from "./components/blocks/CardStoryblok";

storyblokInit({
  accessToken: "u2OrXZ1MorrJDKZKPTExHwtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    card: CardStoryblok,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
