import { api } from './api';
import API_URL from './API_URL';

export const guess = (word, guessNumber) => {
  const url = API_URL.WORD.GUESS;
  console.log(word, guessNumber);
  return api.post(url, { gameId: 'game_1', word, guessNumber });
};
