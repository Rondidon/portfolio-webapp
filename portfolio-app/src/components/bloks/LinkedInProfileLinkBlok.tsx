import toAssetLocation from "../../scripts/imageConverter";
import { LinkedInProfileLinkStoryblok } from "../types/component-types-sb";

interface LinkedInProfileProps {
  blok: LinkedInProfileLinkStoryblok;
}

const LinkedInProfileLinkBlok: React.FC<LinkedInProfileProps> = ({
  blok,
}): JSX.Element => {
  return (
    <a
      title={blok.title}
      href={blok.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={toAssetLocation("In-Blue-26.png", "image")}
        alt={blok.alt}
        style={{ width: "26px", height: "26px" }}
      />
    </a>
  );
};

export default LinkedInProfileLinkBlok;
