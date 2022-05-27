import React, { useState } from 'react';
import { Box } from '@mui/material';
import { guess } from '../api/wordApi';
import TilesRow from './TilesRow';
import GuessResult from '../enums/GuessResult';
import ResultModal from './ResultModal';
import { getTilesLetters, hydrateResult, isAllTilesFilled, isGuessCorrect } from '../utils/utils';

const Board = ({ wordLength, maxAttempts }) => {
  const initialTiles = Array.apply(null, Array(wordLength)).map((word, index) => {
    return { letter: '', result: GuessResult.INITIAL, focus: index === 0, disabled: false };
  });

  const [tilesMatrix, setTilesMatrix] = useState([initialTiles]);
  const [openResultModal, setOpenResultModal] = useState(false);

  const handleTileValueChange = (e, columnIndex, rowIndex) => {
    let letter = e.target.value;
    if (letter.length > 1) {
      letter = Object.values(e.target.value)[1];
    }
    if (!/[^a-zA-Z0-9]/.test(letter)) {
      const newTilesValues = [...tilesMatrix];
      newTilesValues[columnIndex][rowIndex].letter = letter;
      setTilesMatrix(newTilesValues);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' || e.key === 'Enter') {
      if (isAllTilesFilled(tilesMatrix)) {
        guess(getTilesLetters(tilesMatrix), tilesMatrix.length).then((response) => {
          const newTilesValues = [...tilesMatrix];
          newTilesValues[tilesMatrix.length - 1] = hydrateResult(response.data.result);

          if (isGuessCorrect(newTilesValues)) {
            setOpenResultModal(true);
          } else if (tilesMatrix.length < maxAttempts) {
            newTilesValues.push(initialTiles);
          } else {
            setOpenResultModal(true);
          }
          setTilesMatrix(newTilesValues);
        });
      }
    }
  };
  return (
    <Box>
      {tilesMatrix.map((result, index) => (
        <TilesRow
          key={`tilesRow${index}`}
          tilesValues={tilesMatrix}
          handleTileValueChange={handleTileValueChange}
          handleKeyDown={handleKeyDown}
          columnIndex={index}
        />
      ))}
      <ResultModal
        open={openResultModal}
        totalGuesses={tilesMatrix.length}
        tilesMatrix={tilesMatrix}
        handleClose={() => setOpenResultModal(false)}
      />
    </Box>
  );
};

export default Board;
