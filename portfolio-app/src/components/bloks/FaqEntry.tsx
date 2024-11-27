import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/FaqBlok.css";
import { FAQElement } from "./FaqBlok";
import SafeHtmlRenderer from "../xss/SafeHtmlRenderer";

interface FAQEntryBlokProps {
  toggleFAQ: (index: number) => void;
  index: number;
  faq: FAQElement;
  key: string;
}

const FAQEntry: React.FC<FAQEntryBlokProps> = ({
  toggleFAQ,
  index,
  faq,
  key,
}) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
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
