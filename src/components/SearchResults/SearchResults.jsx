import React, { useState } from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

const SearchResults = ({ searchResults, onAdd }) => {
  const [isRemoval, setIsRemoval] = useState(false);

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={searchResults}
        onAdd={onAdd}
        isRemoval={isRemoval}
      />
    </div>
  );
};

export default SearchResults;
