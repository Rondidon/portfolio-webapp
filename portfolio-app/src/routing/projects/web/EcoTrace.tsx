import React from "react";

type EcoTraceProps = {
  message: string;
};

const EcoTrace: React.FC<EcoTraceProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default EcoTrace;
