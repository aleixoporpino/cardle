import React, { useState } from 'react';
import { Box } from '@mui/material';
import { guess } from '../api/wordApi';
import TilesRow from './TilesRow';
import GuessResult from '../enums/GuessResult';
import ResultModal from './ResultModal';
import { getTilesLetters, isAllTilesFilled, isGuessCorrect } from '../utils/utils';

const Board = ({ maxRows }) => {
  const initialTiles = [
    { letter: '', result: GuessResult.INITIAL, focus: true },
    { letter: '', result: GuessResult.INITIAL, focus: false },
    { letter: '', result: GuessResult.INITIAL, focus: false },
    { letter: '', result: GuessResult.INITIAL, focus: false },
    { letter: '', result: GuessResult.INITIAL, focus: false },
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
          newTilesValues[tilesMatrix.length - 1] = response.data.result;

          if (isGuessCorrect(newTilesValues)) {
            setOpenResultModal(true);
            return;
          }

          // Less than max number of rows reached
          if (tilesMatrix.length < maxRows) {
            newTilesValues.push(initialTiles);
            setTilesMatrix(newTilesValues);
          }
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
          disabled={tilesMatrix.length - 1 !== index}
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
