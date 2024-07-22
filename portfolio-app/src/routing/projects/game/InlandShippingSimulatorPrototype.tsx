import React from "react";

type InlandShippingSimulatorProps = {
  message: string;
};

const InlandShippingSimulator: React.FC<InlandShippingSimulatorProps> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default InlandShippingSimulator;
