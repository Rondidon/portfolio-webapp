import {StoryblokStory} from 'storyblok-generate-ts'

export interface BasicLayoutStoryblok {
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
    | ContentSectionStoryblok
    | HorizontalLineStoryblok
    | CarouselImageStoryblok
    | CarouselStoryblok
    | FaqStoryblok
    | ContactFormStoryblok
  )[];
  topMargin?: string;
  centerElements?: boolean;
  _uid: string;
  component: "BasicLayout";
  [k: string]: any;
}

export interface ButtonStoryblok {
  text: string;
  title?: string;
  slug: string;
  variant: "" | "primary" | "secondary" | "header" | "monochrome";
  disabled?: boolean;
  isDownloadLink?: boolean;
  isExternalLink?: boolean;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface CardStoryblok {
  title?: string;
  subtitle?: string;
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
  heading?: CardContainerHeadingStoryblok[];
  anchorId?: string;
  columnAmount: string;
  gap?: string;
  width: string;
  elements: CardStoryblok[];
  _uid: string;
  component: "cardContainer";
  [k: string]: any;
}

export interface CardContainerHeadingStoryblok {
  heading: string;
  horizontalLine: HorizontalLineStoryblok[];
  _uid: string;
  component: "cardContainerHeading";
  [k: string]: any;
}

export interface CarouselStoryblok {
  Images: CarouselImageStoryblok[];
  _uid: string;
  component: "carousel";
  [k: string]: any;
}

export interface CarouselImageStoryblok {
  label?: string;
  imageFile: string;
  alt: string;
  _uid: string;
  component: "CarouselImage";
  [k: string]: any;
}

export interface ContactFormStoryblok {
  header: string;
  nameInput: ContactFormEntryStoryblok[];
  emailAddressInput: ContactFormEntryStoryblok[];
  telInput: ContactFormEntryStoryblok[];
  subjectInput: ContactFormEntryStoryblok[];
  messageInput: ContactFormEntryStoryblok[];
  submitButtonText: string;
  submitButtonSpinningText: string;
  submitButtonTitle: string;
  requiredNotice: string;
  successMessage: string;
  errorMessage: string;
  ccLabel: string;
  showCcOption?: boolean;
  _uid: string;
  component: "contactForm";
  [k: string]: any;
}

export interface ContactFormEntryStoryblok {
  placeholder: string;
  title: string;
  maxLength: string;
  isRequired?: boolean;
  _uid: string;
  component: "ContactFormEntry";
  [k: string]: any;
}

export interface ContentSectionStoryblok {
  callToAction?: ButtonStoryblok[];
  image?: ImageStoryblok[];
  isRightAdjusted?: boolean;
  heading?: string;
  useAlternateHeadingDesign?: boolean;
  text?: string;
  _uid: string;
  component: "contentSection";
  [k: string]: any;
}

export interface FaqStoryblok {
  elements: FaqElementStoryblok[];
  _uid: string;
  component: "faq";
  [k: string]: any;
}

export interface FaqElementStoryblok {
  question: string;
  answer: string;
  _uid: string;
  component: "faqElement";
  [k: string]: any;
}

export interface GlobalFooterStoryblok {
  logo: ImageStoryblok[];
  copyright: string;
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
  subHeading?: string;
  text: string;
  cta?: ButtonStoryblok[];
  variant: "" | "primary" | "secondary";
  image?: ImageStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface HorizontalLineStoryblok {
  width: string;
  marginTop?: string;
  marginBottom?: string;
  thickness?: string;
  color: "" | "primary" | "secondary" | "monochrome";
  adjustment?: "" | "left" | "right" | "center";
  _uid: string;
  component: "horizontalLine";
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
  margin?: string;
  triggerCallbackFunctionOnClick?: boolean;
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
  scrollToTop?: ImageStoryblok[];
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
  elements: (TextareaStoryblok | CardContainerStoryblok | HeroStoryblok | HorizontalLineStoryblok)[];
  _uid: string;
  component: "simpleContainer";
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
