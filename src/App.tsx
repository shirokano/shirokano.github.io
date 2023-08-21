import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import NavBar from './components/AppBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  palette: {
    primary: { main: '#1a1b1e' }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 50,
          minHeight: 48
        }
      }
    }
  }
});

function App() {
  const [text, setText] = React.useState<string>('');

  const msg = 'This is a message';

  setTimeout(() => {
    setText(msg.slice(0, text.length + 1));
  }, 500);
  // clearTimeout(timeout);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header"></header>
        <NavBar />
        <div className="App-main-wrap">
          <div className="App-hero-section">
            {text}
            <Grid className="App-hero-container">
              <div className="App-hero-column">
                <div className="Hero-msg">{'Hello World!'}</div>
                <div className="Hero-msg--my-name">{'Code'}</div>
              </div>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
