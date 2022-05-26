import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const ResultModal = ({ open, handleClose, answer, totalGuesses }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
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
        {'You won!'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>You won in {totalGuesses} guesses</DialogContentText>
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
