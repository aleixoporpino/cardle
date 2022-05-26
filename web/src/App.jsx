import './App.css';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Board from './components/Board';

function App() {
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
        <Board maxRows={5} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
