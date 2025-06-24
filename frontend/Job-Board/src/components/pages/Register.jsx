import React, { useState } from 'react'
import { Alert, Button, MenuItem, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  var[emp,setemp]=useState({Name:"",Age:"",Place:"",Qualification:"",email:"",password:""})

  const [successMsg, setSuccessMsg] = useState('');
  var location=useLocation()
  var navigate=useNavigate()

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
        // optionally redirect:
        // navigate('/login')
      })
      .catch((err) => {
        alert("Registration failed");
        console.error(err);
      });
  };

  const qualifications = ["SSLC", "Plus Two", "Diploma", "Degree", "PG", "Other"];
  
  return (
    <div>

     <Box component="form" sx={{ p: 6,m:3,display: 'flex',justifyContent: 'center', alignItems: 'center',backgroundColor: '#f1f4f8' }}>  

      <Paper elevation={8} sx={{borderRadius: 5,width: '50%',p: 4 }}>   
      <br/>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#1976d2', mb: 3 }}>New Registration</Typography>
      <TextField fullWidth label="Name" name="Name" variant="outlined" required  onChange={inputHandler}/><br/><br/>
      <TextField fullWidth label="Age" name="Age" variant="outlined" onChange={inputHandler} /><br/><br/>
      <TextField fullWidth label="Place" name="Place" variant="outlined" onChange={inputHandler} /><br/><br/>

      <TextField fullWidth select label="Qualification" name="Qualification" value={emp.Qualification} onChange={inputHandler} required>
            {qualifications.map((q, index) => (
              <MenuItem key={index} value={q}>{q}</MenuItem>
            ))}
      </TextField><br /><br />

      <TextField fullWidth label="email" name="email" variant="outlined" required onChange={inputHandler} /><br/><br/>
       <TextField fullWidth label="password" name="password" variant="outlined" type='password' required onChange={inputHandler} /><br/><br/>

      <Button type="submit" variant="contained" onClick={addHandler} >Submit</Button><br /><br />

          {successMsg && (
            <Alert severity="success">{successMsg}</Alert>
          )}
      </Paper>
      </Box>
    </div>
  )
}

export default Register