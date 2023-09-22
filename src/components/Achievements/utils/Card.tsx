import * as React from 'react';
import './Card.scss';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import { CardActionArea, Card as MuiCard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function Card() {
  // const theme = useTheme();

  return (
    <MuiCard sx={{ display: 'flex', borderStyle: 'dashed' }} square={true} variant="outlined">
      <CardActionArea>
        <CardContent>
          <div className="cards--text-header">BitCoin Terminal App</div>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <a href="url" className={'cards--link'}>
            BitCoin
          </a>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}
