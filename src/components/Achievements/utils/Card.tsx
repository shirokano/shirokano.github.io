import * as React from 'react';
import './Card.scss';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import { CardActionArea, Card as MuiCard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { achievements } from '../../texts/projects';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <MuiCard sx={{ display: 'flex', borderStyle: 'dashed' }} square={true} variant="outlined">
      <a className={'cards--link'} href={link} target="_blank" rel="noreferrer">
        <CardActionArea>
          <CardContent>
            <div className="cards--text-header">{title}</div>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </MuiCard>
  );
}
