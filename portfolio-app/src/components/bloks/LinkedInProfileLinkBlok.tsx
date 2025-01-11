import toAssetLocation from "../../scripts/imageConverter";
import { LinkedInProfileLinkStoryblok } from "../types/component-types-sb";
import "./css/LinkedInProfileLinkBlok.css";

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
      className="linked-in-container"
    >
      <img
        src={toAssetLocation("linked-in-logo.png")}
        loading="lazy"
        alt={blok.alt}
        className="linked-in-img"
      />
    </a>
  );
};

export default LinkedInProfileLinkBlok;
