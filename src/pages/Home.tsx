/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import CircularStatic from '../components/Loading';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ComponetName: React.FC = () => {
  const [time, setTime] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => setTime(true), 3000);

  useEffect(() => {
    if (time) {
      navigate('/login');
    }
  }, [time]);

  return (
    <React.Fragment>
      <Grid
        container
        style={{
          height: '100vh',
          width: '100vw',
          border: '1px solid black',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid item style={{ justifyContent: 'center' }}>
          <CircularStatic />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ComponetName;
