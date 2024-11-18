import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/FaqBlok.css";
import { FAQElement } from "./FaqBlok";

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
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQEntry;
