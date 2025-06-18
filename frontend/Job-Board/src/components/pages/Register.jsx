import React, { useState } from 'react'
import { Alert, Button, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom'
const Register = () => {
  var[emp,setemp]=useState({Name:"",Age:"",Place:"",Qualification:"",email:"",password:""})
  var location=useLocation()
  var navigate=useNavigate()
  const inputHandler=(e)=>{
      setemp({ ...emp,[e.target.name]:e.target.value});
      console.log(emp);
     }
  const addHandler=()=>{
    if(emp.Name==null||emp.Qualification==null||emp.email==null||emp.password==null) {
      alert("please fill out the required field")
      return
    }
    axios.put("http://localhost:3000/add", {
      Name:emp.Name,
      Age:emp.Age,
      Place:emp.Place,
      Qualification:emp.Qualification,
      email:emp.email,
      password:emp.password
      })
      .then((res)=>{
         alert(res.data.message)
         
      })
     }
  
  return (
    <div>
          <br/><br/> 
                <Box component="form" sx={{ p: 6,m:3,display: 'flex',justifyContent: 'center', alignItems: 'center' }}>  

      <Paper elevation={8} sx={{borderRadius: 5,width: '50%',}}>   
      
      <Typography variant="h5" gutterBottom>New Registration</Typography>
      <TextField label="Name" name="Name" variant="outlined" required  onChange={inputHandler}/><br/><br/>
      <TextField label="Age" name="Age" variant="outlined" onChange={inputHandler} /><br/><br/>
      <TextField label="Place" name="Place" variant="outlined" onChange={inputHandler} /><br/><br/>
      <TextField label="Qualification" name="Qualification" variant="outlined" required onChange={inputHandler} /><br/><br/>
      <TextField label="email" name="email" variant="outlined" required onChange={inputHandler} /><br/><br/>
       <TextField label="password" name="password" variant="outlined" type='password' required onChange={inputHandler} /><br/><br/>

      <Button type="submit" variant="contained" onClick={addHandler} >Submit</Button>
      
      </Paper>
      </Box>
    </div>
  )
}

export default Register