import React from 'react';
import { Grid, TextField } from '@mui/material';

const Tile = ({ index, value, onChange, onKeyDown }) => {
  return (
    <Grid id={`tileBox${index}`} sx={{ px: 2 }} item>
      <TextField
        id={`textField${index}`}
        label=''
        variant='outlined'
        sx={{ width: 60 }}
        value={value}
        inputProps={{ style: { textTransform: 'uppercase', textAlign: 'center', fontSize: 18 } }}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </Grid>
  );
};

export default Tile;
