import React from 'react';
import './App.scss';
import MenuBar from './components/MenuBar/MenuBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Page from './components/common/Page';
import Experience from './components/Experience/Experience';
import LandingPage from './components/LandingPage/LandingPage';
import Achievments from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefb'
    },
    background: {
      default: '#fefefb'
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
// const HERO_TEXT = ['Developer.', 'Student of life.', 'Humble.'];
// const SUB_TEXT = [
//   'I aspire to construct impactful projects and features within the product, embracing challenges as',
//   'opportunities for growth. Equally significant to me is fostering a positive and enriching work culture.'
// ];

function App() {
  return (
    <div className="layout" data-testid="main">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <MenuBar />
          <Page>
            <LandingPage />
          </Page>
          <Page>
            <AboutMe />
          </Page>
          <Page>
            <div className="experience">
              <Experience />
            </div>
          </Page>
          <Page>
            <div className="projects">
              <Achievments />
            </div>
          </Page>
          {/* <Page>
            <pre>
              <code>{`
███████ ██ ███    ███  ██████  ███    ██     ██████   ██████  ██   ██ ██      
██      ██ ████  ████ ██    ██ ████   ██    ██       ██    ██ ██   ██ ██      
███████ ██ ██ ████ ██ ██    ██ ██ ██  ██    ██   ███ ██    ██ ███████ ██      
     ██ ██ ██  ██  ██ ██    ██ ██  ██ ██    ██    ██ ██    ██ ██   ██ ██      
███████ ██ ██      ██  ██████  ██   ████ ██  ██████   ██████  ██   ██ ███████ 
`}</code>
            </pre>
          </Page> */}
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
