// types.ts
import { SbBlokData } from "@storyblok/react";

export interface CardBlok extends SbBlokData {
  image_name: string;
  title: string;
  text: string;
  link_internal: string;
  link_text: string;
}

export interface GenericBlok extends SbBlokData {
  component: string;
  [key: string]: any;
}

export interface StoryContent {
  body: GenericBlok[];
}

export interface StoryData {
  content: StoryContent;
}
