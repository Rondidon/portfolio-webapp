import React from "react";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="spinner-border color-light-grey" role="status" />
    </div>
  );
};

export default Loading;
