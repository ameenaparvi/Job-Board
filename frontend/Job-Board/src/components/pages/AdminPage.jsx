import { Button, Paper, TextField, Typography, Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const AdminPage = () => {
  const [job, setJob] = useState({ title: "", company: "", location: "", role: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const inputHandler = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    if (location.state !== null) {
      axios.put(`http://localhost:3004/update/${location.state.job._id}`, job)
        .then((res) => {
          alert(res.data.message);
          navigate("/h");
        });
    } else {
      axios.post("http://localhost:3004/add", job)
        .then((res) => {
          alert(res.data.message);
          navigate("/h");
        });
    }
  };

  const deleteHandler = () => {
    if (location.state !== null) {
      const confirmDelete = window.confirm("Are you sure you want to delete this job?");
      if (confirmDelete) {
        axios.delete(`http://localhost:3004/delete/${location.state.job._id}`)
          .then((res) => {
            alert(res.data.message);
            navigate("/h");
          })
          .catch((err) => {
            console.error(err);
            alert("Failed to delete the job");
          });
      }
    } else {
      alert("No job selected to delete.");
    }
  };

  useEffect(() => {
    if (location.state !== null) {
      setJob({
        title: location.state.job.title,
        company: location.state.job.company,
        location: location.state.job.location,
        role: location.state.job.role,
      });
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('/Images/bg.png')`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2
      }}>
      <Paper elevation={8}
        sx={{
          borderRadius: 4,
          p: 5,
          width: { xs: '100%', sm: '80%', md: '50%' },
          backgroundColor: '#fff',
        }}>

        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 600, color: '#1976d2', mb: 3 }}>
          {location.state ? 'Edit Job Posting' : 'Post a New Job'}
        </Typography>

        <Stack spacing={3}>
          <TextField label="Job Title" name="title" variant="outlined" value={job.title} onChange={inputHandler} fullWidth required/>
          <TextField label="Company" name="company" variant="outlined" value={job.company} onChange={inputHandler} fullWidth required/>
          <TextField label="Location" name="location" variant="outlined" value={job.location} onChange={inputHandler} fullWidth required/>
          <TextField label="Role" name="role" variant="outlined" value={job.role} onChange={inputHandler} fullWidth required/>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" onClick={addHandler} sx={{ borderRadius: 2 }}>
              {location.state ? 'Update Job' : 'Post Job'}
            </Button>

            <Button variant="outlined" color="error" onClick={deleteHandler} sx={{ borderRadius: 2 }} disabled={!location.state}>
              Delete Job
            </Button>
          </Box>
          
        </Stack>
      </Paper>
    </Box>
  );
};
