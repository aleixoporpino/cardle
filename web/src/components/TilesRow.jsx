import React from 'react';
import Tile from './Tile';
import { Grid } from '@mui/material';

const TilesRow = ({ tilesValues, handleTileValueChange, handleKeyDown, columnIndex }) => {
  const tiles = [];
  for (let i = 0; i < tilesValues[columnIndex].length; i++) {
    tiles.push(
      <Tile
        key={`tile${columnIndex}${i}`}
        id={`tile${columnIndex}${i}`}
        rowIndex={i}
        onChange={(e) => handleTileValueChange(e, columnIndex, i)}
        tile={tilesValues[columnIndex][i]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={tilesValues[columnIndex][i].disabled}
        tabIndex={columnIndex + i}
      />,
    );
  }
  return (
    <Grid id='boardGrid' container sx={{ pb: 2 }} justifyContent={'center'}>
      {tiles}
    </Grid>
  );
};

export default TilesRow;
