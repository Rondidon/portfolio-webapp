import React from "react";

type SportFishingSimulator2013Props = {
  message: string;
};

const SportFishingSimulator2013: React.FC<SportFishingSimulator2013Props> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default SportFishingSimulator2013;
