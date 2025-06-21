import { Autocomplete, Box,Button,Card,CardActions,CardContent,Chip,Grid,TextField,Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';

export const HomePage = () => {

  const [jobs, setJob] = useState([]);
  const[searchTerm,setSearchTerm]=useState('');


  useEffect(() => {
    setJob([
      {
        _id: '1',
        title: 'Frontend Developer',
        company: 'TechCorp',
        location: 'Remote',
        role: 'React + MUI',
      },
      {
        _id: '2',
        title: 'Backend Developer',
        company: 'CodeBase',
        location: 'Bangalore',
        role: 'Node.js + MongoDB',
      },
    ]);
  }, []);

  const filteredJobs=jobs.filter((job)=>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
<div>
      
      <Box sx={{ margin: 2 }}>
        <Autocomplete freeSolo options={jobs.map((job)=>job.title)} 
               onInputChange={(event,value)=>setSearchTerm(value)} renderInput={(params)=>(
              <TextField {...params} label="Search by Job Title" variant="outlined" fullWidth />)}/>
      </Box>

    <Box sx={{ padding: 4, backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        🚀 Available Job Listings
      </Typography>

      <Grid container spacing={4}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job._id}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.company}
                </Typography>
                <Chip
                  label={job.location}
                  color="primary"
                  variant="outlined"
                  size="small"
                  sx={{ mt: 1, mb: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Role:</strong> {job.role}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
                <Button variant="outlined" size="small" color="primary">
                  Share
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};
