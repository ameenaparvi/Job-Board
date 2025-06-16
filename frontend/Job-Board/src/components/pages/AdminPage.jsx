import { Alert, Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'
import axios from 'axios'

export const AdminPage = () => {
  return (
    <div>
      <Box component="form" sx={{ p: 5, border: '2px solid blue' }}>

      <Typography variant="h5" gutterBottom>Admin - Post a New Job</Typography>
      <TextField label="Job Title" name="title" variant="outlined"/><br/><br/>
      <TextField label="Company" name="company" variant="outlined"/><br/><br/>
      <TextField label="Location" name="location" variant="outlined"/><br/><br/>
      <TextField label="Role" name="role" variant="outlined"/><br/><br/>
      <Button type="submit" variant="contained">Post Job</Button>
      
      </Box>
    </div>
  )
}
