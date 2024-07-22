import React from "react";

type LoadingProps = {
  variant: "base" | "storyblok";
};

const Loading: React.FC<LoadingProps> = (props: LoadingProps): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {props.variant === "storyblok"
        ? "Lade Inhalte von Storyblok..."
        : "Lade Inhalte..."}
    </div>
  );
};

export default Loading;
