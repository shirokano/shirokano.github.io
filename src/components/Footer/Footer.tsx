import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Container
      maxWidth="lg"
      sx={{ zIndex: 2000, position: 'absolute', left: 0, bottom: 0, right: 0 }}
    >
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          display: 'flex',
          // mb: 2,
          paddingTop: 1
        }}
      >
        <Typography variant="caption" color="initial">
          ©2023 Simon Gohl. All Rights Reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          display: 'flex',
          my: 1
        }}
      >
        <Typography variant="caption" color="initial">
          Coded by{' '}
          <a href="https://github.com/gohls" target="_blank" rel="noreferrer">
            @gohls
          </a>
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
