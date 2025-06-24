import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuthenticated, setUserName}) => {

  const [typedName, setTypedName] = useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleLogin=async ()=>{
       const res = await axios.post("http://localhost:3004/login", {
        Name: typedName,
        password,
    });
    if(res.data.message === "Login successful") {
      setIsAuthenticated(true);
      setUserName(typedName);
      navigate("/h");}
    else{
      alert('Invalid credentials')
    }
  };
 
  return (
    <Box
     sx={{
        minHeight: '100vh',
        backgroundImage: `url('/bg.png')`,  // Correct usage for public folder
        backgroundSize: 'fit',
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
        <TextField label="Username" variant="outlined" fullWidth margin="normal" value={typedName} onChange={(e) => setTypedName(e.target.value)}/>
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;
