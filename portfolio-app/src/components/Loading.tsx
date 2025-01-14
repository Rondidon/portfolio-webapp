import React from "react";

interface LoadingProps {
  fullViewport?: boolean;
}

const Loading = (props: LoadingProps): JSX.Element => {
  return (
    <div
      className={
        props.fullViewport ? "spinner-container-100vh" : "spinner-container"
      }
    >
      <div className="spinner-border spinner" role="status" />
    </div>
  );
};

export default Loading;
