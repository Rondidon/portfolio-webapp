import React from "react";

type TuningGarageSimulatorProps = {
  message: string;
};

const TuningGarageSimulator: React.FC<TuningGarageSimulatorProps> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default TuningGarageSimulator;
