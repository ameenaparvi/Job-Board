import React, { useState } from 'react';
import { Alert, Button, MenuItem, Paper, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [emp, setemp] = useState({
    Name: '',
    Age: '',
    Place: '',
    Qualification: '',
    email: '',
    password: ''
  });
  const [successMsg, setSuccessMsg] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setemp({ ...emp, [e.target.name]: e.target.value });
    setSuccessMsg('');
  };

  const addHandler = () => {
    const { Name, Qualification, email, password } = emp;
    if (!Name || !Qualification || !email || !password) {
      alert("Please fill out the required fields");
      return;
    }
    axios.post("http://localhost:3004/register", emp)
      .then((res) => {
        setSuccessMsg(res.data.message || "Registration successful!");
        alert("Registration successfull")
        // optionally redirect:
        navigate('/l')
      })
      .catch((err) => {
        alert("Registration failed");
        console.error(err);
      });
  };
  

  const qualifications = ["SSLC", "Plus Two", "Diploma", "Degree", "PG", "Other"];

  return (
    <div>
      <Box
        component="form"
        sx={{ minHeight: 'vh',
          width: '100vw',
          backgroundImage: `url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f5f7fa',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          m: 0,
          p: 0, }}
      >
        <Paper elevation={4} sx={{ borderRadius: 4, width: { xs: '70%', sm: '50%', md: '30%' }, p: 4 ,backgroundColor: 'rgba(255,255,255,0.9)',zIndex: 1}}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#3f51b5'  }}>
            <br></br>New Registration
          </Typography>

          <TextField fullWidth label="Name" name="Name" variant="outlined" required onChange={inputHandler} /><br /><br />
          <TextField fullWidth label="Age" name="Age" variant="outlined" onChange={inputHandler} /><br /><br />
          <TextField fullWidth label="Place" name="Place" variant="outlined" onChange={inputHandler} /><br /><br />

          {/* Dropdown Field */}
          <TextField
            fullWidth
            select
            label="Qualification"
            name="Qualification"
            value={emp.Qualification}
            onChange={inputHandler}
            required
          >
            {qualifications.map((q, index) => (
              <MenuItem key={index} value={q}>{q}</MenuItem>
            ))}
          </TextField><br /><br />

          <TextField fullWidth label="Email" name="email" variant="outlined" required onChange={inputHandler} /><br /><br />
          <TextField fullWidth label="Password" name="password" type="password" variant="outlined" required onChange={inputHandler} /><br /><br />

          <Button type="button" variant="contained" fullWidth onClick={addHandler} sx={{
            mt: 3,
            backgroundColor: '#3f51b5',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#303f9f'
            }
          }}>Submit</Button><br /><br />

          {successMsg && (
            <Alert severity="success">{successMsg}</Alert>
          )}
        </Paper>
      </Box>
    </div>
  );
};

export default Register;
