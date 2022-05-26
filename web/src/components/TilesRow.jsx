import React from 'react';
import Tile from './Tile';
import { Grid } from '@mui/material';

const TilesRow = ({ tilesValues, handleTileValueChange, handleKeyDown, columnIndex, disabled }) => {
  return (
    <Grid id='boardGrid' container sx={{ pb: 2 }}>
      <Tile
        key={`tile${columnIndex}0`}
        id={`tile${columnIndex}0`}
        rowIndex={0}
        onChange={(e) => handleTileValueChange(e, columnIndex, 0)}
        tile={tilesValues[columnIndex][0]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={disabled}
        autofocus
      />
      <Tile
        key={`tile${columnIndex}1`}
        id={`tile${columnIndex}1`}
        rowIndex={1}
        onChange={(e) => handleTileValueChange(e, columnIndex, 1)}
        tile={tilesValues[columnIndex][1]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={disabled}
      />
      <Tile
        key={`tile${columnIndex}2`}
        id={`tile${columnIndex}2`}
        rowIndex={2}
        onChange={(e) => handleTileValueChange(e, columnIndex, 2)}
        tile={tilesValues[columnIndex][2]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={disabled}
      />
      <Tile
        key={`tile${columnIndex}3`}
        id={`tile${columnIndex}3`}
        rowIndex={3}
        onChange={(e) => handleTileValueChange(e, columnIndex, 3)}
        tile={tilesValues[columnIndex][3]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={disabled}
      />
      <Tile
        key={`tile${columnIndex}4`}
        id={`tile${columnIndex}4`}
        rowIndex={4}
        onChange={(e) => handleTileValueChange(e, columnIndex, 4)}
        tile={tilesValues[columnIndex][4]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={disabled}
      />
    </Grid>
  );
};

export default TilesRow;
