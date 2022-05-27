import React, { useState } from 'react';
import { Box } from '@mui/material';
import { guess } from '../api/wordApi';
import TilesRow from './TilesRow';
import GuessResult from '../enums/GuessResult';
import ResultModal from './ResultModal';
import { getTilesLetters, hydrateResult, isAllTilesFilled, isGuessCorrect } from '../utils/utils';

const Board = ({ wordLength }) => {
  const initialTiles = [
    { letter: '', result: GuessResult.INITIAL, focus: true, disabled: false },
    { letter: '', result: GuessResult.INITIAL, focus: false, disabled: false },
    { letter: '', result: GuessResult.INITIAL, focus: false, disabled: false },
    { letter: '', result: GuessResult.INITIAL, focus: false, disabled: false },
    { letter: '', result: GuessResult.INITIAL, focus: false, disabled: false },
  ];
  const [tilesMatrix, setTilesMatrix] = useState([initialTiles]);
  const [openResultModal, setOpenResultModal] = useState(false);

  const handleTileValueChange = (e, columnIndex, rowIndex) => {
    let letter = e.target.value;
    if (letter.length > 1) {
      letter = Object.values(e.target.value)[1];
    }
    if (!/[^a-zA-Z]/.test(letter)) {
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
          } else if (tilesMatrix.length < wordLength) {
            newTilesValues.push(initialTiles);
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
        answer={'arise'}
        handleClose={() => setOpenResultModal(false)}
      />
    </Box>
  );
};

export default Board;
