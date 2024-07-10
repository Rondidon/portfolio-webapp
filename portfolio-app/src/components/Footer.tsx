import React from "react";

type FooterProps = {
  message: string;
};

const Footer: React.FC<FooterProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Footer;
