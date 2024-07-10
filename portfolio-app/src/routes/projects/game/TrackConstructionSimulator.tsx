import React from "react";

type TrackConstructionSimulatorProps = {
  message: string;
};

const TrackConstructionSimulator: React.FC<TrackConstructionSimulatorProps> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default TrackConstructionSimulator;
