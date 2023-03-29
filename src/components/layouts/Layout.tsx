/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BsFillCameraFill } from 'react-icons/bs';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BsFillCameraFill style={{ marginRight: '3%' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Album Layout
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
