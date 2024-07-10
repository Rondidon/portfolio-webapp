import React from "react";

type ImprintProps = {
  message: string;
};

const Imprint: React.FC<ImprintProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Imprint;
