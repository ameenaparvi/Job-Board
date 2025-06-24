import { Autocomplete, Box,Button,Card,CardActions,CardContent,Chip,Grid,TextField,Typography} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const HomePage = () => {

  const [jobs, setJob] = useState([]);
  const[searchTerm,setSearchTerm]=useState('');


  useEffect(() => {
    axios.get('http://localhost:3004/jobs')
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.error('Error fetching jobs:', err);
      });
  }, []);

  const filteredJobs=jobs.filter((job)=>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
<div>
<Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh', px: 2, py: 4 }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4  }}>
        <Autocomplete freeSolo options={jobs.map((job)=>job.title)} 
               onInputChange={(event,value)=>setSearchTerm(value)} renderInput={(params)=>(
              <TextField {...params} label="Search by Job Title" variant="outlined" fullWidth sx={{ backgroundColor: '#fff', borderRadius: 1 }} />)}/>
      </Box>

    
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4, color: '#3f51b5'  }}>
        🚀 Available Job Listings
      </Typography>

      <Grid container spacing={4}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job._id}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600,color: '#3f51b5' }}>
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
                <Button variant="outlined" size="small" sx={{
                    color: '#3f51b5',
                    borderColor: '#3f51b5',
                    '&:hover': {
                      backgroundColor: '#e8eaf6',
                      borderColor: '#303f9f',
                      color: '#303f9f',
                    },
                  }}>
                  Share
                </Button>
                <Button variant="contained" size="small" sx={{
                    backgroundColor: '#3f51b5',
                    '&:hover': {
                      backgroundColor: '#303f9f',
                    },
                  }}>
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
