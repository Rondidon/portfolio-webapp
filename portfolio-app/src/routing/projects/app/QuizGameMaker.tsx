import React from "react";

type QuizGameMakerProps = {
  message: string;
};

const QuizGameMaker: React.FC<QuizGameMakerProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default QuizGameMaker;
