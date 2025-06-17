import React from 'react'
import { Alert, Button, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
const Register = () => {
  return (
    <div>
          <br/><br/> 
                <Box component="form" sx={{ p: 6,m:3,display: 'flex',justifyContent: 'center', alignItems: 'center' }}>  

      <Paper elevation={8} sx={{borderRadius: 5,width: '50%',}}>   
      
      <Typography variant="h5" gutterBottom>New Registration</Typography>
      <TextField label="Name" name="Name" variant="outlined" required /><br/><br/>
      <TextField label="Age" name="Age" variant="outlined" /><br/><br/>
      <TextField label="Place" name="Place" variant="outlined" /><br/><br/>
      <TextField label="Qualification" name="Qualification" variant="outlined" required/><br/><br/>
      <TextField label="email" name="email" variant="outlined" required/><br/><br/>
      <Button type="submit" variant="contained" >Submit</Button>
      
      </Paper>
      </Box>
    </div>
  )
}

export default Register