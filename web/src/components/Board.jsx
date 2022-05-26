import React, { useState } from 'react';
import { Box } from '@mui/material';
import { guess } from '../api/wordApi';
import TilesRow from './TilesRow';
import GuessResult from '../enums/GuessResult';

const Board = ({ maxRows }) => {
  const initialTiles = [
    { letter: '', result: GuessResult.INITIAL },
    { letter: '', result: GuessResult.INITIAL },
    { letter: '', result: GuessResult.INITIAL },
    { letter: '', result: GuessResult.INITIAL },
    { letter: '', result: GuessResult.INITIAL },
  ];
  const [tilesValues, setTilesValues] = useState([initialTiles]);

  const [guessNumber, setGuessNumber] = useState(1);
  const [guessResult, setGuessResult] = useState({});

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
      guess('test', tilesValues.length).then((response) => {
        // setGuessResult(response.data)
        console.log(response.data);
        const newTilesValues = [...tilesValues];
        newTilesValues[tilesValues.length - 1] = response.data.result;
        //TODO: Prevent user to send empty tiles
        //TODO: Check if everything is correct
        if (tilesValues.length < maxRows) {
          newTilesValues.push(initialTiles);
        }
        setTilesValues(newTilesValues);
      });
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
    </Box>
  );
};

export default Board;
