import './App.css';
import Tile from './components/Tile';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1abb99',
        contrastText: '#000',
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ pt: 3, textAlign: 'center' }}>
        <Header />
        <Board sizeX={2} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
