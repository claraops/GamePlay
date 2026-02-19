// components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un jeu par nom..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <button 
          className="clear-search"
          onClick={() => setSearchTerm('')}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;