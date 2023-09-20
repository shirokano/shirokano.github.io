import React, { useState, useEffect, useRef } from 'react';
import './LandingPage.scss'; // Import the SCSS file
import { Grid } from '@mui/material';
import Typewriter from '../common/Typewriter';

const LandingPage = () => {
  const heroText = ['Developer.', 'Student of life.', 'Humble.'];

  return (
    <Grid container>
      <Grid item xs={6}>
        <div className="typing-block">
          <Typewriter textList={heroText} />
        </div>
        <p className="typing-block--subtext">
          I aspire to construct impactful projects and features within the product, embracing
          challenges as opportunities for growth. Equally significant to me is fostering a positive
          and enriching work culture.
        </p>
      </Grid>
      <Grid item xs={6}>
        <div className="image-container">
          {/* <div className="circle"></div> */}
          {/* <img src="/images/me.png" alt="Picture of me" className="overlay-image" /> */}
        </div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
