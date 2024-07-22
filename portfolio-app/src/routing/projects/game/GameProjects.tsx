import React from "react";

type GameProjectsProps = {
  message: string;
};

const GameProjects: React.FC<GameProjectsProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default GameProjects;
