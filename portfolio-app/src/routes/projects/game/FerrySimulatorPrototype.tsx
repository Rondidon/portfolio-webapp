import React from "react";

type FerrySimulatorProps = {
  message: string;
};

const FerrySimulator: React.FC<FerrySimulatorProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default FerrySimulator;
