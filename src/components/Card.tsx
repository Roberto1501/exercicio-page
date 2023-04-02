/* eslint-disable linebreak-style */
/* eslint-disable indent */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImgMediaCardProps from '../types/ImgMediaCardProps';
import { Grid } from '@mui/material';

interface ImgCard {
  dados: ImgMediaCardProps[];
}

const ImgMediaCard: React.FC<ImgCard> = ({ dados }) => {
  console.log(dados);
  return (
    <React.Fragment>
      <Grid
        container
        lg={8}
        style={{
          justifyContent: 'center',
          display: 'flex'
        }}
      >
        {dados.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Card sx={{ maxWidth: 345, marginRight: '3%' }}>
                <CardMedia component="img" height="140" image={item.imagem} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </React.Fragment>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ImgMediaCard;
