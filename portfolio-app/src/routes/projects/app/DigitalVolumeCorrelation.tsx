import React from "react";

type DigitalVolumeCorrelationProps = {
  message: string;
};

const DigitalVolumeCorrelation: React.FC<DigitalVolumeCorrelationProps> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default DigitalVolumeCorrelation;
