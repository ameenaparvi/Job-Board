import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';

const JobDetailPage = () => {
  const location = useLocation();
  const job = location.state?.job;

  if (!job) return <Typography>No job selected.</Typography>;

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw',           // ensures background covers full width
    backgroundColor: '#f5f7fa',
    display: 'flex',
    justifyContent: 'center', // center horizontally
    alignItems: 'flex-start', // stick to the top
    pt: 10,                   // top spacing (64px + some breathing room)
    px: 2,                    // horizontal padding
    boxSizing: 'border-box',  // make sure padding doesn’t overflow
    overflowX: 'hidden' }}>
      <Paper elevation={6} sx={{ width: 900, mx: 'auto', p: 4, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#3f51b5' }}>
          {job.title}
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          {job.company}
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Location:</strong> {job.location}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Role:</strong> {job.role}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Description:</strong><br /> {job.description}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Posted Date:</strong> {new Date(job.postedDate).toDateString()}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          <strong>Company Email:</strong> {job.companyEmail}
        </Typography>
      </Paper>
    </Box>
  );
};
export default JobDetailPage
