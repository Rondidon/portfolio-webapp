import React from "react";

type TournawareProps = {
  message: string;
};

const Tournaware: React.FC<TournawareProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Tournaware;
