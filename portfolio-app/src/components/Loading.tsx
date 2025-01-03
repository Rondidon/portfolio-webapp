import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-border spinner" role="status" />
    </div>
  );
};

export default Loading;
