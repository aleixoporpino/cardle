import { api } from './api';
import API_URL from './API_URL';

export const guess = (word, guessNumber) => {
  const url = API_URL.WORD.GUESS;
  return api.post(url, { word, guessNumber });
};
