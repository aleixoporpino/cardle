import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GuessResult from '../enums/GuessResult';

const ResultModal = ({ open, handleClose, tilesMatrix, totalGuesses }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const printMatrixResult = () => {
    return tilesMatrix.map((row) => (
      <div>
        {row.map((tile) => {
          return GuessResult[tile.result] === GuessResult.CORRECT
            ? '🟩 \n'
            : GuessResult[tile.result] === GuessResult.WRONG_POSITION
            ? '🟨 \n'
            : '🟥 \n';
        })}
      </div>
    ));
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <DialogTitle id='responsive-dialog-title'>
        {handleClose ? (
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        {'Congratulations!'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center' }}>{printMatrixResult()}</Box>
        <DialogContentText sx={{ pt: 2 }}>
          You won in {totalGuesses} {`${totalGuesses === 1 ? 'guess' : 'guesses'}`}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

  /**
   * You lost!
   *
   * the answer was:
   * {answer}
   */
};

export default ResultModal;
