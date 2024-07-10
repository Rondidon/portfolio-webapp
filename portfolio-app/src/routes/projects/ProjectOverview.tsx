import React from "react";

type ProjectOverviewProps = {
  message: string;
};

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ProjectOverview;
