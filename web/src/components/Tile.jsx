import React from 'react';
import { Grid, TextField } from '@mui/material';
import GuessResult from '../enums/GuessResult';
import { getColor } from '../utils/utils';

const Tile = ({ id, tile, onChange, onKeyDown, disabled }) => {
  const tileColor = getColor(GuessResult[tile.result] || tile.result);
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
