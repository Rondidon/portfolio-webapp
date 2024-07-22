import React from "react";

type VoxieProps = {
  message: string;
};

const Voxie: React.FC<VoxieProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Voxie;
