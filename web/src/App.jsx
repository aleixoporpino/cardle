import './App.css';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Board from './components/Board';
import { useEffect, useState } from 'react';
import { getGame } from './api/wordApi';

function App() {
  const [game, setGame] = useState(null);
  useEffect(() => {
    getGame().then((response) => {
      localStorage.setItem('gameId', response.data.gameId);
      localStorage.setItem('gameEnd', response.data.gameEnd);
      setGame(response.data);
    });
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1abb99',
        disabled: '#1abb99',
      },
      secondary: {
        main: '#FFF',
        disabled: '#FFF',
      },
      warning: {
        main: '#ffa826',
        disabled: '#ffa826',
      },
      error: {
        main: '#f44336',
        disabled: '#f44336',
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ pt: 3, textAlign: 'center' }}>
        <Header />
        {game && <Board wordLength={game.wordLength} maxAttempts={5} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
