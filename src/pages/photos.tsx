/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import ButtonAppBar from '../components/layouts/Layout';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import ImgMediaCard from '../components/Card';
import ImgMediaCardProps from '../types/ImgMediaCardProps';

const dataTest: ImgMediaCardProps[] = [
  { title: 'Titulo1', description: 'description1', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo2', description: 'description2', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo3', description: 'description3', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo4', description: 'description4', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo5', description: 'description5', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo6', description: 'description6', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo7', description: 'description7', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo8', description: 'description8', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo9', description: 'description9', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo10', description: 'description10', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo11', description: 'description11', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo12', description: 'description12', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo13', description: 'description13', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo14', description: 'description14', imagem: 'url(https://source.unsplash.com/random)' },
  { title: 'Titulo15', description: 'description15', imagem: 'url(https://source.unsplash.com/random)' }
];

const Photos: React.FC = () => {
  return (
    <React.Fragment>
      <Grid container style={{ width: '100vw' }}>
        <Grid item style={{ width: '100vw' }}>
          <ButtonAppBar />
        </Grid>

        <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
          <Typography variant="h3">Album Layout</Typography>
        </Grid>

        <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
          <Typography variant="h6" style={{ width: '50%', textAlign: 'center' }}>
            An album layout is a graphical representation of the songs, artwork and other important information
            contained in a music album. It is designed to showcase the artists work in a visually appealing and
            organized manner, guiding the listener through the journey of the music. The album layout can include
            elements such as track listing, song lyrics, liner notes, credits and a cover design that reflects the mood
            and style of the music.
          </Typography>
        </Grid>
      </Grid>

      <Grid container style={{ border: '1px solid black' }}>
        <Grid
          item
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3%'
          }}
        >
          <ImgMediaCard dados={dataTest} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Photos;
