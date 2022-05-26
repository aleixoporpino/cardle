import React, { useState } from 'react';
import { Box } from '@mui/material';
import { guess } from '../api/wordApi';
import TilesRow from './TilesRow';
import GuessResult from '../enums/GuessResult';
import ResultModal from './ResultModal';

const Board = ({ maxRows }) => {
  const initialTiles = [
    { letter: '', result: GuessResult.INITIAL, focus: true },
    { letter: '', result: GuessResult.INITIAL, focus: false },
    { letter: '', result: GuessResult.INITIAL, focus: false },
    { letter: '', result: GuessResult.INITIAL, focus: false },
    { letter: '', result: GuessResult.INITIAL, focus: false },
  ];
  const [tilesValues, setTilesValues] = useState([initialTiles]);
  const [openResultModal, setOpenResultModal] = useState(false);

  const handleTileValueChange = (e, columnIndex, rowIndex) => {
    let letter = e.target.value;
    if (letter.length > 1) {
      letter = Object.values(e.target.value)[1];
    }
    if (!/[^a-zA-Z]/.test(letter)) {
      const newTilesValues = [...tilesValues];
      newTilesValues[columnIndex][rowIndex].letter = letter;
      setTilesValues(newTilesValues);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' || e.key === 'Enter') {
      console.log('Enter pressed');

      const isAllTilesFilled = !tilesValues.find((tiles) =>
        tiles.find((tile) => tile.letter === ''),
      );
      if (isAllTilesFilled) {
        guess('test', tilesValues.length).then((response) => {
          const newTilesValues = [...tilesValues];
          newTilesValues[tilesValues.length - 1] = response.data.result;
          //TODO: Check correctness
          if (tilesValues.length < maxRows) {
            newTilesValues.push(initialTiles);
          } else {
            setOpenResultModal(true);
            return;
          }
          setTilesValues(newTilesValues);
        });
      }
    }
  };
  return (
    <Box>
      {tilesValues.map((result, index) => (
        <TilesRow
          key={`tilesRow${index}`}
          tilesValues={tilesValues}
          handleTileValueChange={handleTileValueChange}
          handleKeyDown={handleKeyDown}
          columnIndex={index}
          disabled={tilesValues.length - 1 !== index}
        />
      ))}
      <ResultModal
        open={openResultModal}
        totalGuesses={tilesValues.length}
        answer={'arise'}
        handleClose={() => setOpenResultModal(false)}
      />
    </Box>
  );
};

export default Board;
