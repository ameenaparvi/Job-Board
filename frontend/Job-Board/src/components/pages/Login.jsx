import React from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?ga=GA1.1.1674172579.1750179706&semt=ais_hybrid&w=740')`, // from public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={4} sx={{ padding: 4, width: 350, backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(4px)' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
