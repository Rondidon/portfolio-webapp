import {StoryblokStory} from 'storyblok-generate-ts'

export interface ButtonStoryblok {
  text: string;
  slug: string;
  disabled?: boolean;
  useAlternateDesign?: boolean;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface CardStoryblok {
  title?: string;
  text?: string;
  image?: string;
  internal_link?: ButtonStoryblok[];
  width?: string;
  center_text?: boolean;
  alternate_design?: boolean;
  _uid: string;
  component: "card";
  [k: string]: any;
}

export interface GlobalFooterStoryblok {
  logo: ImageStoryblok[];
  claim?: string;
  description: string;
  columns?: GlobalFooterColumnStoryblok[];
  _uid: string;
  component: "globalFooter";
  [k: string]: any;
}

export interface GlobalFooterColumnStoryblok {
  title: string;
  links: TextLinkStoryblok[];
  _uid: string;
  component: "globalFooterColumn";
  [k: string]: any;
}

export interface GlobalHeaderStoryblok {
  logo: (ImageStoryblok | TextLinkStoryblok)[];
  leftContainer: ButtonStoryblok[];
  rightContainer?: (ButtonStoryblok | LanguageDropdownStoryblok | LinkedInProfileLinkStoryblok)[];
  _uid: string;
  component: "globalHeader";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface ImageStoryblok {
  image: string;
  alt: string;
  title?: string;
  internal_slug?: string;
  size?: string;
  borderRadius?: string;
  external_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  showBorder?: boolean;
  _uid: string;
  component: "image";
  [k: string]: any;
}

export interface LanguageDropdownStoryblok {
  title?: string;
  languages?: ("" | "0" | "1")[];
  _uid: string;
  component: "languageDropdown";
  [k: string]: any;
}

export interface LinkedInProfileLinkStoryblok {
  alt: string;
  title: string;
  url: string;
  _uid: string;
  component: "LinkedInProfileLink";
  [k: string]: any;
}

export interface PageStoryblok {
  header: GlobalHeaderStoryblok[];
  footer: GlobalFooterStoryblok[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SimpleLayoutStoryblok {
  body?: (
    | ButtonStoryblok
    | CardStoryblok
    | GlobalFooterStoryblok
    | GlobalFooterColumnStoryblok
    | GlobalHeaderStoryblok
    | ImageStoryblok
    | LanguageDropdownStoryblok
    | LinkedInProfileLinkStoryblok
    | PageStoryblok
    | SimpleLayoutStoryblok
    | TextLinkStoryblok
  )[];
  topMargin: string;
  centerElements?: boolean;
  _uid: string;
  component: "SimpleLayout";
  [k: string]: any;
}

export interface TextLinkStoryblok {
  text: string;
  title?: string;
  slug: string;
  _uid: string;
  component: "textLink";
  [k: string]: any;
}
