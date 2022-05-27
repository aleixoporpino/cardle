import GuessResult from '../enums/GuessResult';

export const getColor = (muiColor) => {
  if (muiColor === 'error') {
    return '#f44336';
  } else if (muiColor === 'warning') {
    return '#ffa826';
  } else if (muiColor === 'primary') {
    return '#1abb99';
  }
  return '#ffffff';
};

export const getTilesLetters = (tilesMatrix) => {
  return tilesMatrix[tilesMatrix.length - 1]
    .map((tile) => tile.letter)
    .toString()
    .split(',')
    .join('');
};

export const isAllTilesFilled = (tilesMatrix) => {
  return !tilesMatrix[tilesMatrix.length - 1].find((tile) => tile.letter === '');
};

export const isGuessCorrect = (tilesMatrix) => {
  return !tilesMatrix[tilesMatrix.length - 1].find((tile) => {
    return GuessResult[tile.result] !== GuessResult.CORRECT;
  });
};

export const hydrateResult = (tiles) => {
  return tiles.map((tile, index) => {
    return { ...tile, focus: index === 0, disabled: true };
  });
};

export const getAnswer = (tilesMatrix) => {
  const lastRowIndex = tilesMatrix.length - 1;
  const lastColumnIndex = tilesMatrix[lastRowIndex].length - 1;
  return tilesMatrix[lastRowIndex][lastColumnIndex].answer;
};
