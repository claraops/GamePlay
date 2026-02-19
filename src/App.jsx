// App.jsx
import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import SearchBar from './components/SearchBar';
import { getgameData } from './services/gameAPI';
import './App.css';

function App() {
  const [allGames, setAllGames] = useState([]);     
  const [displayedGames, setDisplayedGames] = useState([]); 
  const [favorites, setFavorites] = useState([]);   
  const [selectedGenre, setSelectedGenre] = useState(''); 
  const [selectedPlatform, setSelectedPlatform] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedGame, setSelectedGame] = useState(null); 
  const [genres, setGenres] = useState([]);        
  const [platforms, setPlatforms] = useState([]);   
  const [loading, setLoading] = useState(true);     
  
  useEffect(() => {
    async function loadGames() {
      setLoading(true);
      const games = await getgameData();
      setAllGames(games);
      setDisplayedGames(games);
      
     
      if (games.length > 0) {
        const allGenres = [...new Set(games.map(game => game.genre))];
        const allPlatforms = [...new Set(games.map(game => game.platform))];
        
        setGenres(allGenres.filter(g => g && g !== ''));
        setPlatforms(allPlatforms.filter(p => p && p !== ''));
      }
      
      setLoading(false);
    }
    
    loadGames();
  }, []);

 
  useEffect(() => {
    let filtered = allGames;
    
    
    if (searchTerm) {
      filtered = filtered.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    
    if (selectedGenre) {
      filtered = filtered.filter(game => game.genre === selectedGenre);
    }
    
    
    if (selectedPlatform) {
      filtered = filtered.filter(game => game.platform === selectedPlatform);
    }
    
    setDisplayedGames(filtered);
  }, [searchTerm, selectedGenre, selectedPlatform, allGames]);

  
  const handleToggleFavorite = (gameTitle) => {
    setFavorites(prev => {
      if (prev.includes(gameTitle)) {
        return prev.filter(title => title !== gameTitle);
      }
      return [...prev, gameTitle];
    });
  };

  return (
    <div className="app-container">
      {/* En-tête */}
      <div className="header-section">
        <h1 className="app-title">GameMatch</h1>
        <p className="app-description">Trouvez votre prochain jeu préféré en quelques clics !</p>
      </div>

      {/* Barre de recherche */}
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Barre de filtres */}
      <FilterBar 
        genres={genres}
        platforms={platforms}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      {/* Section principale avec 2 colonnes */}
      <div className="main-layout">
        {/* Colonne de gauche : Liste des jeux */}
        <div className="games-section">
          <h2 className="section-title">
            Jeux disponibles {!loading && `(${displayedGames.length})`}
          </h2>
          {loading ? (
            <div className="loading">Chargement des jeux...</div>
          ) : (
            <GameList 
              games={displayedGames}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectGame={setSelectedGame}
              selectedGame={selectedGame}
            />
          )}
        </div>

        {/* Colonne de droite : Détails du jeu */}
        <div className="details-section">
          <h2 className="section-title">Détails du jeu</h2>
          <GameDetails game={selectedGame} />
        </div>
      </div>
    </div>
  );
}

export default App;