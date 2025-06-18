import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box
      sx={{
        margin: '1rem',
        borderRadius: '16px', // ⬅️ Curve the whole AppBar
        overflow: 'hidden',   // Ensures children respect the rounded corners
      }}
    >
      <AppBar position="static" color="primary" sx={{ borderRadius: '16px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo / Title */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
            JobBoard
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to="/h" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#1976d2', '&:hover': { backgroundColor: '#e3f2fd' } }}>
                Home
              </Button>
            </Link>
            
            <Link to="/l" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#1976d2', '&:hover': { backgroundColor: '#e3f2fd' } }}>
                Login
              </Button>
            </Link>
            <Link to="/r" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#1976d2', '&:hover': { backgroundColor: '#e3f2fd' } }}>
                Register
              </Button>
            </Link>
            <Link to="/a" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#1976d2', '&:hover': { backgroundColor: '#e3f2fd' } }}>
                Admin Page
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
