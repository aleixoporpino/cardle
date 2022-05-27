import React from 'react';
import Tile from './Tile';
import { Grid } from '@mui/material';

const TilesRow = ({ tilesValues, handleTileValueChange, handleKeyDown, columnIndex }) => {
  return (
    <Grid id='boardGrid' container sx={{ pb: 2 }}>
      <Tile
        key={`tile${columnIndex}0`}
        id={`tile${columnIndex}0`}
        rowIndex={0}
        onChange={(e) => handleTileValueChange(e, columnIndex, 0)}
        tile={tilesValues[columnIndex][0]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={tilesValues[columnIndex][0].disabled}
        tabIndex={columnIndex + 0}
      />
      <Tile
        key={`tile${columnIndex}1`}
        id={`tile${columnIndex}1`}
        rowIndex={1}
        onChange={(e) => handleTileValueChange(e, columnIndex, 1)}
        tile={tilesValues[columnIndex][1]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={tilesValues[columnIndex][1].disabled}
        tabIndex={columnIndex + 1}
      />
      <Tile
        key={`tile${columnIndex}2`}
        id={`tile${columnIndex}2`}
        rowIndex={2}
        onChange={(e) => handleTileValueChange(e, columnIndex, 2)}
        tile={tilesValues[columnIndex][2]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={tilesValues[columnIndex][2].disabled}
        tabIndex={columnIndex + 2}
      />
      <Tile
        key={`tile${columnIndex}3`}
        id={`tile${columnIndex}3`}
        rowIndex={3}
        onChange={(e) => handleTileValueChange(e, columnIndex, 3)}
        tile={tilesValues[columnIndex][3]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={tilesValues[columnIndex][3].disabled}
        tabIndex={columnIndex + 3}
      />
      <Tile
        key={`tile${columnIndex}4`}
        id={`tile${columnIndex}4`}
        rowIndex={4}
        onChange={(e) => handleTileValueChange(e, columnIndex, 4)}
        tile={tilesValues[columnIndex][4]}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={tilesValues[columnIndex][4].disabled}
        tabIndex={columnIndex + 4}
      />
    </Grid>
  );
};

export default TilesRow;
