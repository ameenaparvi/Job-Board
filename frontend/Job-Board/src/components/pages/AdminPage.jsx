import { Alert, Button, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

export const AdminPage = () => {
    var[job,setJob]=useState({title:"",company:"",location:"",role:""})
    var navigate=useNavigate()
    var location=useLocation()
    console.log("loc: ",location.state)

    const inputHandler=(e)=>{
      setJob({...job,[e.target.name]:e.target.value})
      console.log(job);
    }

    const addHandler=()=>{
      if(location.state!==null){
      axios.put("http://localhost:3004/update/"+location.state.job._id,job)/*need to change the path later*/
      .then((res)=>{
        alert(res.data.message)
        navigate("/h")/*need to change later*/
      })
     }
    else{
      axios.post("http://localhost:3004/add",job)
      .then((res)=>{
        alert(res.data.message)
        navigate("/h")
      })
     }
    }
    useEffect(()=>{
      if(location.state!==null){
        setJob({
          ...job,
          Title: location.state.job.title,
          Company: location.state.job.company,
          Location: location.state.job.location,
          Role: location.state.job.role,
        });
      }
    },[]);
   
  return (
    <div>
      <br/><br/> 
      <Box component="form" sx={{ p: 3,m:3,display: 'flex',justifyContent: 'center', alignItems: 'center', border: '2px solid blue' }}>  
      <Paper elevation={8} sx={{borderRadius: 5,width: '50%',}}>   
      
      <Typography variant="h5" gutterBottom>Admin - Post a New Job</Typography>
      <TextField label="Job Title" name="title" variant="outlined" value={job.title} onChange={inputHandler}/><br/><br/>
      <TextField label="Company" name="company" variant="outlined" value={job.company} onChange={inputHandler}/><br/><br/>
      <TextField label="Location" name="location" variant="outlined" value={job.location} onChange={inputHandler}/><br/><br/>
      <TextField label="Role" name="role" variant="outlined" value={job.role} onChange={inputHandler}/><br/><br/>
      <Button type="submit" variant="contained" onClick={addHandler}>Post Job</Button>
      
      </Paper>
      </Box>
    </div>
  )
}
