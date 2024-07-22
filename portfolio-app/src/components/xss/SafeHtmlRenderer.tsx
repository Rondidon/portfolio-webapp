import React from "react";
import DOMPurify from "dompurify";

const SafeHtmlRenderer: React.FC<{
  htmlContent: string;
  className: string;
}> = ({ htmlContent, className }) => {
  return (
    <p
      className={className}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
    ></p>
  );
};

export default SafeHtmlRenderer;
