import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';

const Welcome = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',        
        padding: 0,             
        margin: 0,
        position: 'relative',
        backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //backgroundColor: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <Paper
        elevation={6}
        sx={{
          position: 'relative',
          zIndex: 1,
          px: 5,
          py: 6,
          width: { xs: '100%', sm: 450 },
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 4,
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        }}
      >
        <Typography variant="h3" gutterBottom fontWeight="bold" sx={{ color: '#3f51b5' }}>
          Welcome to Job Portal
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
          Find your dream job or the perfect candidate with ease.
        </Typography>
     
      </Paper>
    </Box>
  );
};

export default Welcome;
