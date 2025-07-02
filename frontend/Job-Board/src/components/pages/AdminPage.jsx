import { Button, Paper, TextField, Typography, Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const AdminPage = () => {
  const [job, setJob] = useState({ title: "", company: "", location: "", role: "",description: "",companyEmail: "",postedDate: ""});
  const [loading, setLoading] = useState(false);//for loading visuals
  const navigate = useNavigate();
  const location = useLocation();

  const inputHandler = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const addHandler = async() => {
    const { title, company, location: jobLocation, role } = job;
  if (!title || !company || !jobLocation || !role) {
    alert("Please fill in all fields before submitting.");
    return;
  }
  setLoading(true);
  try {
    if (location.state && location.state.job) {
      const res = await axios.put(`http://localhost:3004/update/${location.state.job._id}`, job);
      alert(res.data.message);
    } else {
      const res = await axios.post("http://localhost:3004/add", job);
      alert(res.data.message);
    }
    navigate("/aj");
  }
    catch (err) {
      console.error("Error:", err);
      alert("Failed to submit the job.");
    } finally {
      setLoading(false);
    }
    
  };

  

  useEffect(() => {
    if (location.state !== null) {
      setJob({
        title: location.state.job.title,
        company: location.state.job.company,
        location: location.state.job.location,
        role: location.state.job.role,
        description: location.state.job.description || "",
        companyEmail: location.state.job.companyEmail || "",
        postedDate: location.state.job.postedDate?.split("T")[0] || "", // YYYY-MM-DD
      });
    }
  }, []);

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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          zIndex: 0,
        }}
      />
      <Paper elevation={8}
        sx={{
          position: 'relative',
          zIndex: 1,
          borderRadius: 4,
          p: 5,
          width: { xs: '100%', sm: '80%', md: '50%' },
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}>

        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 600, color: '#3f51b5', mb: 3 }}>
          {location.state ? 'Edit Job Posting' : 'Post a New Job'}
        </Typography>

        <Stack spacing={3}>
          <TextField label="Job Title" name="title" variant="outlined" value={job.title} onChange={inputHandler} fullWidth required/>
          <TextField label="Company" name="company" variant="outlined" value={job.company} onChange={inputHandler} fullWidth required/>
          <TextField label="Location" name="location" variant="outlined" value={job.location} onChange={inputHandler} fullWidth required/>
          <TextField label="Role" name="role" variant="outlined" value={job.role} onChange={inputHandler} fullWidth required/>
          <TextField label="Description" name="description" variant="outlined" value={job.description} onChange={inputHandler} fullWidth required/>
          <TextField label="Posted Date" name="postedDate" variant="outlined" value={job.postedDate} onChange={inputHandler} fullWidth required/>
          <TextField label="Company Email" name="companyEmail" variant="outlined" value={job.companyEmail} onChange={inputHandler} fullWidth required/>

          <Box sx={{ display: 'flex', justifyContent:'center', mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" onClick={addHandler} sx={{ borderRadius: 2, backgroundColor: '#3f51b5', '&:hover': { backgroundColor: '#303f9f' }, }} disabled={loading}>
               {loading ? 'Submitting...' : location.state ? 'Update Job' : 'Post Job'}
          </Button>
          </Box>
          
        </Stack>
      </Paper>
    </Box>
  );
};
