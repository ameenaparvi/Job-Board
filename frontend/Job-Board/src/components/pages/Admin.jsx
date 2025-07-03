import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const Admin = ({setIsAuthenticated, setUserName}) => {

  const [typedName, setTypedName] = useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleLogin = () => {
  const predefinedUsername = "admin";
  const predefinedPassword = "1234";

  if (typedName === predefinedUsername && password === predefinedPassword) {
    setIsAuthenticated(true);
    setUserName(typedName);
    navigate("/aj");
  } else {
    alert("Invalid credentials");
  }
};

 
  return (
    <Box
     sx={{
        minHeight: '100vh',
        display: 'flex',
    flexDirection: 'column',
     width: '100vw',
        m: 0,
        p: 0,
        backgroundImage:  `url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        alignItems: 'center',
        justifyContent: 'center',
        
  overflowX: 'hidden',
      }}
    >
      <Paper elevation={4} sx={{ padding: 4, width: 350, backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(4px)' ,borderRadius: 4}}>
        <Typography variant="h4" align="center" gutterBottom sx={{color: '#3f51b5',fontWeight: 600}}>
         Admin Login
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" value={typedName} onChange={(e) => setTypedName(e.target.value)}/>
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2, backgroundColor: '#3f51b5', '&:hover': { backgroundColor: '#303f9f' }}} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Admin;
