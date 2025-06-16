import { Alert, Button, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'
import axios from 'axios'

export const AdminPage = () => {
  return (
    <div>
      <br/><br/> 
      <Box component="form" sx={{ p: 3,m:3,display: 'flex',justifyContent: 'center', alignItems: 'center', border: '2px solid blue' }}>  
      <Paper elevation={8} sx={{borderRadius: 5,width: '50%',}}>   
      
      <Typography variant="h5" gutterBottom>Admin - Post a New Job</Typography>
      <TextField label="Job Title" name="title" variant="outlined"/><br/><br/>
      <TextField label="Company" name="company" variant="outlined"/><br/><br/>
      <TextField label="Location" name="location" variant="outlined"/><br/><br/>
      <TextField label="Role" name="role" variant="outlined"/><br/><br/>
      <Button type="submit" variant="contained">Post Job</Button>
      
      </Paper>
      </Box>
    </div>
  )
}
