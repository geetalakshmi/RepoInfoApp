import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../myStyle.css';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by username..."
        value={searchInput}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>

    </div>
  );
};

export default SearchBar;
