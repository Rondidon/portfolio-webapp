import React from "react";

type SportFishingSimulator2012Props = {
  message: string;
};

const SportFishingSimulator2012: React.FC<SportFishingSimulator2012Props> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default SportFishingSimulator2012;
