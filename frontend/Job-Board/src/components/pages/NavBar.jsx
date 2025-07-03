import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ userName, setIsAuthenticated, setUserName }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
    // Optional: redirect to home
    window.location.href = '/';
  };


  return (
    <Box sx={{ width:'100vw',p:'0',m:'0'}}>
      <AppBar position="static" color="primary" sx={{ backgroundColor: '#3f51b5', borderRadius: 0, }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo / Title */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
            JobBoard
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            
            <Link to="/ho" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#3f51b5', '&:hover': { backgroundColor: '#e8eaf6' } }}>
                Home
              </Button>
            </Link>
            <Link to="/l" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#3f51b5', '&:hover': { backgroundColor: '#e8eaf6' } }}>
                Login
              </Button>
            </Link>
            <Link to="/r" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#3f51b5', '&:hover': { backgroundColor: '#e8eaf6' } }}>
                Register
              </Button>
            </Link>
            <Link to="/lo" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#3f51b5', '&:hover': { backgroundColor: '#e8eaf6' } }}>
                Admin
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{backgroundColor: '#ffffff',color: '#3f51b5','&:hover': { backgroundColor: '#e8eaf6' },}}>
                  About Us
              </Button>
            </Link>
            {userName && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                <Avatar sx={{ bgcolor: '#fff', color: '#3f51b5', fontWeight: 'bold' }}>{userName.charAt(0).toUpperCase()}</Avatar>
                <Typography sx={{ color: '#fff', fontWeight: 500  }}>{userName}</Typography>
                  <Button variant="outlined" color="inherit" size="small" onClick={handleLogout} sx={{ borderColor: '#fff', color: '#fff', '&:hover': { backgroundColor: '#ffffff22', borderColor: '#fff',},}}>
                     Logout
                  </Button>
                </Box>
            )}

         </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
