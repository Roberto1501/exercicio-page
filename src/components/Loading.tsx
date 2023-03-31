/* eslint-disable linebreak-style */
/* eslint-disable indent */

import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} style={{ width: '150px', height: '100px' }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontSize: '2rem', marginLeft: '20%' }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
