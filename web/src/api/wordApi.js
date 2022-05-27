import { api } from './api';
import API_URL from './API_URL';

export const guess = (word, guessNumber) => {
  const url = API_URL.GUESS;
  const gameId = localStorage.getItem('gameId');
  return api.post(url, { gameId, word, guessNumber });
};

export const getGame = () => {
  const url = API_URL.GAME;
  return api.get(url);
};
