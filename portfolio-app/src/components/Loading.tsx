import React from "react";

type LoadingProps = {
  use100vh?: boolean;
};

const Loading: React.FC<LoadingProps> = ({ use100vh }): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: use100vh ? "100vh" : "",
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
