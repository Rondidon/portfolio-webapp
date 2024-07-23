import {StoryblokStory} from 'storyblok-generate-ts'

export interface CardStoryblok {
  title?: string;
  text?: string;
  image?: string;
  internal_link?: InternalLinkStoryblok[];
  width?: string;
  center_text?: boolean;
  alternate_design?: boolean;
  _uid: string;
  component: "card";
  [k: string]: any;
}

export interface InternalLinkStoryblok {
  text: string;
  slug: string;
  disabled?: boolean;
  _uid: string;
  component: "internal_link";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (CardStoryblok | InternalLinkStoryblok | PageStoryblok | SimpleLayoutStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SimpleLayoutStoryblok {
  body?: (CardStoryblok | InternalLinkStoryblok | PageStoryblok | SimpleLayoutStoryblok)[];
  topMargin: string;
  centerElements?: boolean;
  _uid: string;
  component: "SimpleLayout";
  [k: string]: any;
}
