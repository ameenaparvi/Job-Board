import React from 'react';
import {
  Alert,
  Button,
  Paper,
  TextField,
  Typography,
  Box
} from '@mui/material';

const Register = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: { xs: '100%', sm: '70%', md: '50%' },
          borderRadius: 5,
          backgroundColor: '#ffffff',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1976d2' }}
        >
          New Registration
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            label="Name"
            name="Name"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Age"
            name="Age"
            type="number"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Place"
            name="Place"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Qualification"
            name="Qualification"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ borderRadius: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
