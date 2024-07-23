import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type LoadingProps = {
  variant: "base" | "storyblok";
};

const Loading: React.FC<LoadingProps> = ({ variant }): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div className="spinner-border color-light-grey" role="status" />
      <p className="color-dark-grey" style={{ marginTop: "20px" }}>
        {variant === "storyblok"
          ? "Inhalte werden von Storyblok geladen..."
          : "Inhalte werden geladen..."}
      </p>
    </div>
  );
};

export default Loading;
