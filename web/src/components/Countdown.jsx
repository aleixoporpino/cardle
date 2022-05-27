import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import useInterval from '../hooks/useInterval';

const Countdown = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(null);
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;
  const twoDigits = (num) => String(num).padStart(2, '0');

  useEffect(() => {
    const gameEnd = localStorage.getItem('gameEnd');
    setSecondsRemaining(parseInt((new Date(gameEnd) - new Date()) / 1000));
  }, []);

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      }
    },
    secondsRemaining > 0 ? 1000 : null,
  );
  return (
    <Box sx={{ pt: 3 }}>
      <Typography sx={{ fontSize: 13 }}>
        {' '}
        NEXT CARDLE IN{' '}
        {`${twoDigits(hoursToDisplay)}:${twoDigits(minutesToDisplay)}:${twoDigits(
          secondsToDisplay,
        )}`}
      </Typography>
    </Box>
  );
};

export default Countdown;
