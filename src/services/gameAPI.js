// services/gameAPI.js
const BASE_URL = '/api';

// Récupérer tous les jeux
export async function getgameData() {
  try {
    const response = await fetch(`${BASE_URL}/games`);
    
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des jeux');
    }
    // La réponse de l'API est déjà un tableau de jeux, pas besoin d'accéder à une propriété spécifique
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur API:', error);
    return [];
  }
}

// Récupérer les détails d'un jeu par son ID
export async function getGameDetails(id) {
  try {
    const response = await fetch(`${BASE_URL}/game?id=${id}`);
    
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du jeu');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur API:', error);
    return null;
  }
}