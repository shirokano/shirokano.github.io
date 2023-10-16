import React, { useState } from 'react';
import './Experience.scss';
import { Divider, Grid, Stack } from '@mui/material';
import { experience } from '../texts/experience';

function Experience() {
  // const [isCurrentSelectedExperience, setIsCurrentSelectedExperience] = useState<number>(0);

  return (
    <div className={'experience'}>
      <Grid container sx={{ marginLeft: '25px' }}>
        <Grid item xs={12}>
          <div className="experience--section-title">{'EXPERIENCE'}</div>
        </Grid>
        <Grid container xs={12}>
          {experience.map((exp, idx) => {
            return (
              <React.Fragment key={idx}>
                <Grid item xs={4}>
                  <Stack className="experience--position-title">{exp.position_title}</Stack>
                  <Stack className="experience--company-name">{exp.company_name}</Stack>
                  <Stack className="experience--dates">{exp.dates}</Stack>
                  <Stack className="experience--location">{exp.location}</Stack>
                </Grid>
                <Grid item xs={7}>
                  <Stack className="experience--highlights">
                    {exp.highlights.map((highlight: string, index: number) => (
                      <React.Fragment key={index}>
                        {'•	'}
                        {highlight}
                        <br />
                      </React.Fragment>
                    ))}
                  </Stack>
                  <br />
                  <Divider />
                  <br />
                </Grid>
                <Divider />
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;

{
  /* <Grid item xs={2.5}>
{exp.technologies.map((tech, index) => {
  return <Chip label={tech} key={index} sx={{ margin: 0.2 }} />;
})}
</Grid> */
}
