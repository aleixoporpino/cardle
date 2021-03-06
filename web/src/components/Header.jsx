import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ pb: 4 }}>
      <Typography variant='h2' color='#1abb99' fontWeight='bold' letterSpacing={2}>
        CARDLE
      </Typography>
    </Box>
  );
};

export default Header;
