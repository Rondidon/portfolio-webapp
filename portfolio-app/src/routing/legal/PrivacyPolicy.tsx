import React from "react";

type PrivacyPolicyProps = {
  message: string;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default PrivacyPolicy;
