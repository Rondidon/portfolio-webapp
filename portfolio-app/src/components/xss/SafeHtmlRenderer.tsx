import React from "react";
import DOMPurify from "dompurify";

const SafeHtmlRenderer: React.FC<{
  htmlContent: string;
  className?: string;
  href?: string;
}> = ({ htmlContent, className, href }) => {
  if (href) {
    return (
      <a
        className={className}
        href={href}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
      ></a>
    );
  }
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
    ></span>
  );
};

export default SafeHtmlRenderer;
