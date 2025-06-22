import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setIsAuthenticated}) => {

  const[Name,setName]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleLogin=async ()=>{
       const res = await axios.post("http://localhost:3004/login", {
      Name,
      password
    });
   if (res.data.message === "Login successful") {
      setIsAuthenticated(true);
      navigate("/h");
    }
    else{
      alert('Invalid credentials')
    }
  };

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
      <Paper elevation={4} sx={{ padding: 4, width: 350, backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(4px)' ,borderRadius: 4}}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" value={Name} onChange={(e)=>setName(e.target.value)}/>
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
