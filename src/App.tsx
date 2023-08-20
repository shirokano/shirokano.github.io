import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import ProfileTopAppBar from './components/ProfileNavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  palette: {
    primary: { main: '#ffffff', contrastText: '#212121' }
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
        <ProfileTopAppBar />
        <header className="App-header"></header>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            learn react
          </a> */}
        <div className="App-main-wrap">
          <div className="App-hero-section">
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
