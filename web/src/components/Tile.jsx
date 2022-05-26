import React from 'react';
import { Grid, TextField } from '@mui/material';
import GuessResult from '../enums/GuessResult';

const Tile = ({ id, index, tile, onChange, onKeyDown, disabled }) => {
  const getTrueColor = (muiColor) => {
    if (muiColor === 'error') {
      return '#f44336';
    } else if (muiColor === 'warning') {
      return '#ffa826';
    } else if (muiColor === 'primary') {
      return '#1abb99';
    } else if (muiColor === 'secondary') {
      return '#ffffff';
    }
  };
  const tileColor = getTrueColor(GuessResult[tile.result] || tile.result);
  return (
    <Grid id={`tileBox${id}`} sx={{ px: 2 }} item>
      <TextField
        key={`textField${id}`}
        id={`textField${id}`}
        label=''
        variant='outlined'
        sx={{ width: 60 }}
        value={tile.letter}
        inputProps={{
          style: {
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: tileColor,
            borderColor: tileColor,
            WebkitTextFillColor: tileColor,
          },
        }}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        disabled={disabled}
        autoFocus={tile.focus}
        color={GuessResult[tile.result] || tile.result}
      />
    </Grid>
  );
};

export default Tile;
