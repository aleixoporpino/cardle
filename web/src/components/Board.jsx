import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Tile from './Tile';
import { guess } from '../api/wordApi';

const Board = ({ sizeX, sizeY }) => {
  const [tilesValues, setTilesValues] = useState(['', '', '', '', '']);

  const handleTileValueChange = (e, index) => {
    const letter = Object.values(e.target.value)[1];
    if (!/[^a-zA-Z]/.test(letter)) {
      const newTilesValues = [...tilesValues];
      newTilesValues[index] = letter;
      setTilesValues(newTilesValues);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' || e.key === 'Enter') {
      console.log('Enter pressed');
      guess('test', 2).then((response) => console.log(response));
    }
  };
  return (
    <Grid id='boardGrid' container>
      <Tile
        index={0}
        onChange={(e) => handleTileValueChange(e, 0)}
        value={tilesValues[0]}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Tile
        index={1}
        onChange={(e) => handleTileValueChange(e, 1)}
        value={tilesValues[1]}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Tile
        index={2}
        onChange={(e) => handleTileValueChange(e, 2)}
        value={tilesValues[2]}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Tile
        index={3}
        onChange={(e) => handleTileValueChange(e, 3)}
        value={tilesValues[3]}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Tile
        index={4}
        onChange={(e) => handleTileValueChange(e, 4)}
        value={tilesValues[4]}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </Grid>
  );
};

export default Board;
