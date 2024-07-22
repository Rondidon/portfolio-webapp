import React from "react";

type ContactProps = {
  message: string;
};

const Contact: React.FC<ContactProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Contact;
