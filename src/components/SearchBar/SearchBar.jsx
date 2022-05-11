import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search functionality
  const search = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  // handle Search functionality
  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="SearchBar" onSubmit={search}>
      <input
        onChange={handleTermChange}
        placeholder="Enter A Song, Album, or Artist"
      />
      <button type="submit" className="SearchButton">
        SEARCH
      </button>
    </form>
  );
};

export default SearchBar;
