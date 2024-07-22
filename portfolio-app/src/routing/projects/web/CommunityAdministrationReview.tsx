import React from "react";

type CommunityAdministrationReviewProps = {
  message: string;
};

const CommunityAdministrationReview: React.FC<
  CommunityAdministrationReviewProps
> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default CommunityAdministrationReview;
