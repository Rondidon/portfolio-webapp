import React from "react";

type AdrenalineProps = {
  message: string;
};

const Adrenaline: React.FC<AdrenalineProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Adrenaline;
