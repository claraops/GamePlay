// components/GameDetails.jsx
import React from 'react';

const GameDetails = ({ game }) => {
  if (!game) {
    return (
      <div className="game-details empty-details">
        <p className="no-selection">👈 Sélectionnez un jeu pour voir ses détails</p>
      </div>
    );
  }

  return (
    <div className="game-details">
      {game.thumbnail && (
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="game-detail-image"
        />
      )}
      
      <h2 className="detail-title">{game.title}</h2>
      
      <div className="detail-info">
        <p><strong>Genre:</strong> {game.genre}</p>
        <p><strong>Plateforme:</strong> {game.platform}</p>
        <p><strong>Éditeur:</strong> {game.publisher || 'Non spécifié'}</p>
        <p><strong>Développeur:</strong> {game.developer || 'Non spécifié'}</p>
        <p><strong>Date de sortie:</strong> {game.release_date}</p>
      </div>
      
      <div className="detail-description">
        <h3>Description</h3>
        <p>{game.short_description || game.description || 'Aucune description disponible'}</p>
      </div>
      
      {game.game_url && (
        <a 
          href={game.game_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="game-link"
        >
          🎮 Jouer maintenant
        </a>
      )}
      
      {game.minimum_system_requirements && (
        <div className="system-requirements">
          <h3>Configuration minimale</h3>
          <p><strong>OS:</strong> {game.minimum_system_requirements.os}</p>
          <p><strong>Processeur:</strong> {game.minimum_system_requirements.processor}</p>
          <p><strong>Mémoire:</strong> {game.minimum_system_requirements.memory}</p>
          <p><strong>Graphiques:</strong> {game.minimum_system_requirements.graphics}</p>
          <p><strong>Stockage:</strong> {game.minimum_system_requirements.storage}</p>
        </div>
      )}
    </div>
  );
};

export default GameDetails;