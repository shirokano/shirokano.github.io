import React, { ReactElement, useRef } from 'react';
import './Experience.scss';
import { Chip, Grid, Stack } from '@mui/material';

function Experience() {
  const technologies = [
    'React',
    'TypeScript',
    'JavaScript',
    'single-spa',
    'NodeJS',
    'Python',
    'NestJS',
    'Redux',
    'Redis',
    'Docker',
    'AWS ecosystem (CloudWatch, S3, Lambda)',
    'Jest',
    'Pytest',
    'Microservices',
    'SaaS',
    'Jira',
    'Postman API',
    'Datadog',
    'Scrum',
    'HTML',
    'SCSS',
    'MySQL',
    'Git',
    'GitHub Actions',
    'CI/CD',
    'TDD',
    'Confluence'
  ];

  return (
    <Grid container spacing={4} sx={{ marginLeft: '25px' }}>
      {/* <Box sx={{ ml: 5, mr: 5, mb: 5 }}> */}
      <Grid item xs={12}>
        <Stack className="experience">EXPERIENCE</Stack>
      </Grid>
      <Grid item xs={8}>
        <Stack className="experience--position-title">Software Engineer</Stack>
        <Stack className="experience--company-name">Built Technologies • Full-time</Stack>
        <Stack className="experience--dates">Nov 2022 - Jul 2023 • 9 mos</Stack>
        <Stack className="experience--location">Nashville, Tennessee, United States • Remote</Stack>
        <Stack className="experience--highlights">
          {' '}
          {
            '•	Worked at a fast-paced FinTech startup, engineering a new SaaS product feature involving real-time updates and data-driven insights, like risk alerts and project tracking, prompting >25% product upsell opportunity.'
          }
          <br />
          {
            '•	Executed full-stack software engineering tasks, encompassing the development of 5+ frontend web pages, 25+ app features, and corresponding backend services, bootstrapping projects from ground up.'
          }
          <br />
          {
            '•	Contributed to pre-release software testing efforts achieving test coverage of >90% of all project repositories, created CI/CD processes, and participated in approx. 4 code peer-reviews weekly.'
          }
          <br />
        </Stack>
      </Grid>

      <Grid item xs={3}>
        {technologies.map((tech, index) => {
          return <Chip label={tech} key={index} sx={{ margin: 0.2 }} />;
        })}
        {/* <Typewriter textList={['React', 'Typescript', 'Javascript', 'NodeJS', 'Python']} /> */}
      </Grid>
      {/* </Box> */}
    </Grid>
  );
}

export default Experience;
