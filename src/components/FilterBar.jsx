// components/FilterBar.jsx
import React from 'react';

const FilterBar = ({ 
  genres, 
  platforms, 
  selectedGenre, 
  setSelectedGenre, 
  selectedPlatform, 
  setSelectedPlatform 
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="genre-select">Genre:</label>
        <select 
          id="genre-select"
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="filter-select"
        >
          <option value="">Tous les genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="platform-select">Plateforme:</label>
        <select 
          id="platform-select"
          value={selectedPlatform} 
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="filter-select"
        >
          <option value="">Toutes les plateformes</option>
          {platforms.map((platform) => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </select>
      </div>

      {/* Bouton pour réinitialiser les filtres */}
      {(selectedGenre || selectedPlatform) && (
        <button 
          className="reset-filters"
          onClick={() => {
            setSelectedGenre('');
            setSelectedPlatform('');
          }}
        >
          Réinitialiser
        </button>
      )}
    </div>
  );
};

export default FilterBar;