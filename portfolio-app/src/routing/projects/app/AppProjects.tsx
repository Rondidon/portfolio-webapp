import React from "react";

type AppProjectProps = {
  message: string;
};

const AppProjects: React.FC<AppProjectProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default AppProjects;
