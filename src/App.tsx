import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import NavBar from './components/AppBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import SectionDisplay from './components/common/SectionTypewriterDisplay';
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
  const [text, setText] = React.useState<string>('');

  const msg = 'This is a message';

  setTimeout(() => {
    setText(msg.slice(0, text.length + 1));
  }, 500);
  // clearTimeout(timeout);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <header className="App-header"></header>
          <NavBar />
          <div className="body-wrapper">
            <div data-testid="typing-block" className="typing-block">
              <span className="typing-line-1">
                {'Hello World!'}
                <br />
                {"I'm Simon,"}
                <br />
                {'a Software Engineer'}
              </span>
            </div>
            <div className="App-main-wrap">
              <div className="App-hero-section">
                <Grid className="App-hero-container">
                  <div className="App-hero-column">
                    <SectionDisplay />
                    <div className="Hero-msg">{'Hello World!'}</div>
                    <div className="Hero-msg--my-name">{'Code'}</div>
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
