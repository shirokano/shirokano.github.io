import React, { useEffect, useState } from 'react';
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
  const strings = ['Hello World!', "I'm Simon,", 'a Software Engineer'];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetterIndex < strings[currentStringIndex].length) {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
          setCurrentLetterIndex(0);
        }, 1000); // Pause before next string
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentStringIndex, currentLetterIndex]);

  const currentString = strings[currentStringIndex];
  const typedText = currentString.substring(0, currentLetterIndex);
  const lastCharacter = typedText.charAt(typedText.length - 1);
  const remainingText = typedText.slice(0, -1);

  // clearTimeout(timeout);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <header className="App-header"></header>
          <NavBar />
          <div className="body-wrapper">
            <div data-testid="typing-block" className="typing-block">
              <div className="typewriter">
                {remainingText}
                <span className="fading-letter">{lastCharacter}</span>
                <span className="underscore">_</span>
              </div>
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
