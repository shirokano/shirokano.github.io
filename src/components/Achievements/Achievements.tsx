import React, { useEffect, useRef, useState } from 'react';
import './Achievements.scss';
import { Grid } from '@mui/material';
import Projects from './Projects/Projects';
import Certs from './Certs/Certs';

function Achievments() {
  return (
    <>
      <br />
      <br />
      <br />
      <Grid container columns={13}>
        <Grid item xs={6.33}>
          <Projects />
        </Grid>
        <Grid item xs={0.33} />
        <Grid item xs={6.33}>
          <Certs />
        </Grid>
      </Grid>
    </>
  );
}

export default Achievments;
