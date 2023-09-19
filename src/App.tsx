import React from 'react';
import './App.scss';
import MenuBar from './components/MenuBar/MenuBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typewriter from './components/common/Typewriter';
import { CssBaseline } from '@mui/material';
import Page from './components/common/Page';

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

// Each element is put on a newline
const HERO_TEXT = ['Developer.', 'Student of life.', 'Humble.'];
const SUB_TEXT = [
  'I aspire to construct impactful projects and features within the product, embracing challenges as',
  'opportunities for growth. Equally significant to me is fostering a positive and enriching work culture.'
];

function App() {
  return (
    <div data-testid="main">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <MenuBar />
          <Page>
            <>
              <Typewriter textList={HERO_TEXT} />
              {/* <LookingFor textList={SUB_TEXT} /> */}
            </>
          </Page>
          <Page>
            <div style={{ backgroundColor: 'green', height: '100vh', paddingTop: 50 }}>
              Whatever
            </div>
          </Page>
          <Page>
            <div style={{ backgroundColor: 'blue', height: '100vh', paddingTop: 50 }}>This</div>
          </Page>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
