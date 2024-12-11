import React, { useState } from "react";
import FAQEntry from "./FaqEntry";
import { FaqElementStoryblok, FaqStoryblok } from "../types/component-types-sb";
import "./css/FaqBlok.css";

interface FaqBlokProps {
  blok: FaqStoryblok;
}

export type FAQElement = {
  question: string;
  answer: string;
  open: boolean;
};

const FaqBlok: React.FC<FaqBlokProps> = ({ blok }) => {
  const faqElements = blok.elements.map(
    (element: FaqElementStoryblok, index: number) => ({
      question: element.question,
      answer: element.answer,
      open: index === 0,
    })
  );

  const [faqs, setFaqs] = useState(faqElements);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faqs px-0">
      {faqs.map((faq: FAQElement, index: number) => (
        <FAQEntry
          faq={faq}
          index={index}
          key={"faq-entry-" + index}
          toggleFAQ={toggleFAQ}
          customKey={"faq-entry-" + index}
        />
      ))}
    </div>
  );
};

export default FaqBlok;
