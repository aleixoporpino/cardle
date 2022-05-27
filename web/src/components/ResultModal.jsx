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
import Countdown from './Countdown';
import { getAnswer, isGuessCorrect } from '../utils/utils';

const ResultModal = ({ open, handleClose, tilesMatrix, totalGuesses }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const won = isGuessCorrect(tilesMatrix);

  const printMatrixResult = () => {
    return tilesMatrix.map((row, index) => (
      <div key={index}>
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

  const title = won ? 'Congratulations!' : 'You lost!';
  const resultText = won
    ? `You won in ${totalGuesses} ${totalGuesses === 1 ? 'guess' : 'guesses'}`
    : 'The word was: ' + getAnswer(tilesMatrix);

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
        {title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center' }}>{printMatrixResult()}</Box>
        <DialogContentText sx={{ pt: 2 }}>{resultText}</DialogContentText>
        <Countdown />
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
