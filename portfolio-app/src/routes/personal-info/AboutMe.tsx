import React from "react";

type AboutMeProps = {
  message: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default AboutMe;
