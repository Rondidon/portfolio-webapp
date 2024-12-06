import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/FaqBlok.css";
import { FAQElement } from "./FaqBlok";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";

interface FAQEntryBlokProps {
  toggleFAQ: (index: number) => void;
  index: number;
  faq: FAQElement;
  customKey: string; // Ersetzt das 'key'-Prop
}

const FAQEntry: React.FC<FAQEntryBlokProps> = ({
  toggleFAQ,
  index,
  faq,
  customKey,
}) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={customKey} // React verwendet 'key' hier nicht mehr
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        <SafeHtmlRenderer
          className="content-section-text"
          htmlContent={faq.question}
        />
      </div>
      <div className="faq-answer">
        <SafeHtmlRenderer
          className="content-section-text"
          htmlContent={faq.answer}
        />
      </div>
    </div>
  );
};

export default FAQEntry;
