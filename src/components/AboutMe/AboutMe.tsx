import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import './AboutMe.scss';

function AboutMe() {
  return (
    <div className="about-me">
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} className="about-me-section">
          <Card
            raised={false}
            sx={{
              display: 'flex',
              background: '#fefefb',
              // position: 'fixed',
              maxWidth: '640px'
              // textAlign: 'justify',
              // textJustify: 'inter-word'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <div className="experience--position-title">ABOUT ME</div>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {
                    "Born in Texas, raised in Germany, and grew up in California, I earned a Computer Science Bachelor's degree in Austin, TX, at St. Edward's University. As a Software Engineer, I excel in designing, developing, and implementing software applications, with expertise in the SDLC and addressing business and tech needs. In my free time, I explore various activities, including drawing, philosophy, running, travel, and engaging with diverse cultures."
                  }
                </Typography>
              </CardContent>
            </Box>
            <Stack justifyContent={'center'}>
              <CardMedia
                component="img"
                sx={{ width: 250, borderRadius: 50, marginRight: 5 }}
                image="/images/github-profile-pic.jpeg"
                alt="Image of me"
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
