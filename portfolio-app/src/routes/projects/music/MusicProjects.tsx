import React from "react";

type MusicProjectsProps = {
  message: string;
};

const MusicProjects: React.FC<MusicProjectsProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default MusicProjects;
