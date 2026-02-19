// components/GameList.jsx
import React from 'react';

const GameList = ({ games, favorites, onToggleFavorite, onSelectGame, selectedGame }) => {
  if (!games || games.length === 0) {
    return (
      <div className="empty-state">
        <p>Aucun jeu trouvé</p>
        <p className="empty-subtitle">Essayez de modifier vos filtres</p>
      </div>
    );
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <div 
          key={game.id} 
          className={`game-item ${favorites.includes(game.title) ? 'favorite' : ''} ${selectedGame?.id === game.id ? 'selected' : ''}`}
          onClick={() => onSelectGame(game)}
        >
          <div className="game-item-header">
            <h3 className="game-title">{game.title}</h3>
            {game.thumbnail && (
              <img src={game.thumbnail} alt={game.title} className="game-thumbnail" />
            )}
          </div>
          <div className="game-info">
            <p><span className="info-label">Genre:</span> {game.genre}</p>
            <p><span className="info-label">Plateforme:</span> {game.platform}</p>
            <p><span className="info-label">Date:</span> {game.release_date}</p>
          </div>
          <button 
            className="favorite-btn"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(game.title);
            }}
          >
            {favorites.includes(game.title) ? '★ Retirer des favoris' : '☆ Ajouter aux favoris'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GameList;