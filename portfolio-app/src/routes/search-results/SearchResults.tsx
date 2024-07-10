import React from "react";

type SearchResultsProps = {
  message: string;
};

const SearchResults: React.FC<SearchResultsProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default SearchResults;
