import React from 'react';
import './App.scss';
import NavBar from './components/AppBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typewriter from './components/common/Typewriter';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f2f0ed'
    },
    background: {
      default: '#f2f0ed'
    }
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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <header className="App-header"></header>
          <NavBar />
          <div className="body-wrapper">
            <Typewriter msg={['Hello World!', "I'm Simon,", 'a Software Engineer']} />
            <div className="App-main-wrap">
              <div className="App-hero-section">
                <Grid className="App-hero-container">
                  <div className="App-hero-column" data-testid="hello-world">
                    <div className="Hero-msg--my-name">{'Experience'}</div>
                  </div>
                </Grid>
              </div>
            </div>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
