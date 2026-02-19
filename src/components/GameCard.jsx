// components/GameCard.jsx
import React from 'react';

const GameCard = ({ game, isFavorite, onToggleFavorite }) => {
  if (!game) return null;

  return (
    <div className={`game-card ${isFavorite ? 'favorite' : ''}`}>
      {game.thumbnail && (
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="game-card-image"
        />
      )}
      
      <h3 className="game-card-title">{game.title}</h3>
      
      <div className="game-card-info">
        <p><strong>Genre:</strong> {game.genre}</p>
        <p><strong>Plateforme:</strong> {game.platform}</p>
        <p><strong>Date de sortie:</strong> {game.release_date}</p>
      </div>
      
      <button 
        className="favorite-button"
        onClick={() => onToggleFavorite(game.title)}
      >
        {isFavorite ? '★ Retirer des favoris' : '☆ Ajouter aux favoris'}
      </button>
    </div>
  );
};

export default GameCard;