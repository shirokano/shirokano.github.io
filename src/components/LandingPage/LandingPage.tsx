import React, { useEffect, useState } from 'react';
import './LandingPage.scss'; // Import the SCSS file
import { Grid, Typography } from '@mui/material';
import Typewriter from './utils/Typewriter';
import ComputerMonitor from './utils/ComputerMonitor';
// import MatrixEffect from './utils/MatrixEffect';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  const heroText = ['Developer.', 'Student of life.', 'Humble.'];

  return (
    <>
      <div className="spacer" />
      <Grid container>
        <Grid item xs={6}>
          <div className="typing-block">
            <Typewriter textList={heroText} />
          </div>
          <div className="typing-block--subtext">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              paragraph
              sx={{ fontSize: '1.25rem', color: 'rgba(0, 0, 0, 0.8)' }}
            >
              I aspire to construct impactful projects and features within the product, embracing
              challenges as opportunities for growth. Equally significant to me is fostering a
              positive and enriching work culture.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* <div className={`fade-in ${isVisible ? 'active' : ''}`}> */}

          <div style={{ position: 'fixed' }}>
            <div className="computer-container">
              <img
                src="/images/ascii-art-computer.png"
                style={{ filter: 'contrast(500%) grayscale(100%)' }}
              />
              <div className="computer-screen">
                <ComputerMonitor />
              </div>
            </div>
          </div>
        </Grid>
        {/* <MatrixEffect /> */}
      </Grid>
    </>
  );
};

export default LandingPage;
