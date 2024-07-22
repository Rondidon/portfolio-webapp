import React from "react";

type VideoProjectsProps = {
  message: string;
};

const VideoProjects: React.FC<VideoProjectsProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default VideoProjects;
