import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Welcome = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?ga=GA1.1.1674172579.1750179706&semt=ais_hybrid&w=740')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: 400,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Job Portal
        </Typography>
        <Typography variant="subtitle1">
          Find your dream job or the perfect candidate with ease.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Welcome;
