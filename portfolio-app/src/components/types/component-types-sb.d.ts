import {StoryblokStory} from 'storyblok-generate-ts'

export interface ButtonStoryblok {
  text: string;
  title?: string;
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
  internal_link?: ButtonStoryblok[];
  width?: string;
  center_text?: boolean;
  alternate_design?: boolean;
  height: "" | "fit_content" | "full";
  image?: ImageStoryblok[];
  _uid: string;
  component: "card";
  [k: string]: any;
}

export interface CardContainerStoryblok {
  heading?: string;
  columnAmount: string;
  gap?: string;
  width: string;
  elements: CardStoryblok[];
  _uid: string;
  component: "cardContainer";
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

export interface HeroStoryblok {
  heading?: string;
  text: string;
  cta?: ButtonStoryblok[];
  variant: "" | "primary" | "secondary";
  image?: ImageStoryblok[];
  _uid: string;
  component: "hero";
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
  height?: string;
  borderRadius?: string;
  external_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  showBorder?: boolean;
  withHoverEffect?: boolean;
  isSquareImage?: boolean;
  _uid: string;
  component: "image";
  [k: string]: any;
}

export interface LanguageDropdownStoryblok {
  title?: string;
  languages?: ("" | "DE" | "EN")[];
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

export interface SimpleContainerStoryblok {
  heading?: string;
  flexCol?: boolean;
  flexWrap?: boolean;
  width: string;
  elements: (TextareaStoryblok | CardContainerStoryblok | HeroStoryblok)[];
  _uid: string;
  component: "simpleContainer";
  [k: string]: any;
}

export interface SimpleLayoutStoryblok {
  body?: (
    | CardStoryblok
    | CardContainerStoryblok
    | HeroStoryblok
    | SimpleContainerStoryblok
    | TextLinkStoryblok
    | TextareaStoryblok
    | LinkedInProfileLinkStoryblok
    | LanguageDropdownStoryblok
    | ImageStoryblok
    | GlobalHeaderStoryblok
    | GlobalFooterColumnStoryblok
    | GlobalFooterStoryblok
    | ButtonStoryblok
  )[];
  topMargin?: string;
  centerElements?: boolean;
  _uid: string;
  component: "SimpleLayout";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface TextareaStoryblok {
  text: RichtextStoryblok;
  isFullWidth?: boolean;
  _uid: string;
  component: "textarea";
  [k: string]: any;
}

export interface TextLinkStoryblok {
  text: string;
  title?: string;
  slug?: string;
  external_url?: string;
  _uid: string;
  component: "textLink";
  [k: string]: any;
}
