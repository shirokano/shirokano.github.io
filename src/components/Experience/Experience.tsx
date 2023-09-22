import React, { useState } from 'react';
import './Experience.scss';
import { Chip, Grid, Stack } from '@mui/material';
import Stepper from './utils/Stepper';
import { experience } from '../texts/experience';

function Experience() {
  const [isCurrentSelectedExperience, setIsCurrentSelectedExperience] = useState<number>(0);

  return (
    <div className={'experience'}>
      <Grid container spacing={4} sx={{ marginLeft: '25px' }}>
        <Grid item xs={12}>
          <div className="experience--section-title">{'EXPERIENCE'}</div>
          <span> </span>
        </Grid>
        <Grid item xs={0.5}>
          <Stepper setSelected={setIsCurrentSelectedExperience} />
        </Grid>
        <Grid item xs={8}>
          <Stack className="experience--position-title">
            {experience[isCurrentSelectedExperience].position_title}
          </Stack>
          <Stack className="experience--company-name">
            {experience[isCurrentSelectedExperience].company_name}
          </Stack>
          <Stack className="experience--dates">
            {experience[isCurrentSelectedExperience].dates}
          </Stack>
          <Stack className="experience--location">
            {experience[isCurrentSelectedExperience].location}
          </Stack>
          <Stack className="experience--highlights">
            {experience[isCurrentSelectedExperience].highlights.map(
              (highlight: string, index: number) => (
                <React.Fragment key={index}>
                  {'•	'}
                  {highlight}
                  <br />
                </React.Fragment>
              )
            )}
          </Stack>
        </Grid>
        <Grid item xs={2.5}>
          {experience[isCurrentSelectedExperience].technologies.map((tech, index) => {
            return <Chip label={tech} key={index} sx={{ margin: 0.2 }} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;
