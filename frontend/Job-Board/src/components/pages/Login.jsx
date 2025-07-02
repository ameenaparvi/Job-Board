import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { grey } from '@mui/material/colors';

const Login = ({setIsAuthenticated, setUserName}) => {

  const [typedName, setTypedName] = useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleLogin=async ()=>{
    try{
       const res = await axios.post("http://localhost:3004/login", {
        Name: typedName,
        password,
    });
    console.log("Response from backend:", res.data);

    if(res.data.message === "Login successful") {
      setIsAuthenticated(true);
      setUserName(typedName);
      navigate("/h");}
    else{
      alert('Invalid credentials')
    }}
    catch (err) {
      console.error("❌ Login request failed:", err); 
      alert("Login failed.");
    }
  };
 
  return (
    <Box
     sx={{
        minHeight: '100vh',
        width: '100vw',
        m: 0,
        p: 0,
        position: 'relative',
        backgroundImage: `url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      
      <Paper elevation={4} sx={{ position: 'relative',zIndex: 1,padding: 4, width: 350,borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(4px)' ,}}>
        <Typography variant="h4" align="center" gutterBottom sx={{color: '#3f51b5',fontWeight: 600}}>
          Login
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

export default Login;
