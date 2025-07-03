import { Autocomplete, Box,Button,Card,CardActions,CardContent,Chip,Grid,TextField,Typography} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export const AdminJob = () => {

  const [jobs, setJob] = useState([]);
  const[searchTerm,setSearchTerm]=useState('');
  const navigate = useNavigate();
  
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
const deleteHandler = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this job?'
    );
    if (!confirmDelete) return;

    try {
      const { data } = await axios.delete(
        `http://localhost:3004/delete/${id}`
      );
      alert(data.message); // e.g. "Job deleted successfully"

      // Remove the job from UI
      setJob((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.error('❌ Delete failed:', err);
      alert('Failed to delete the job');
    }
  };
 
  
  return (
<div>
<Box sx={{ 
  backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1470&q=80')`,
  backgroundSize: 'cover',
 // display: 'flex',
 flexDirection: 'column',
     width: '100vw',
        m: 0,
        p: 0,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  px: 2,
  py: 4
  
 }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4  }}>
        <Autocomplete freeSolo options={jobs.map((job)=>job.title)} 
               onInputChange={(event,value)=>setSearchTerm(value)} renderInput={(params)=>(
              <TextField {...params} label="Search by Job Title" variant="outlined" fullWidth sx={{ backgroundColor: '#fff', borderRadius: 1 }} />)}/>
      </Box>

    
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4, color: '#5C6BC0'  }}>
        🚀 Added Job Listings
      </Typography>

      <Grid container spacing={6}>
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
               <Button
                  variant="contained"
                  size="small"
                  onClick={() => deleteHandler(job._id)}
                  sx={{
                    backgroundColor: '#3f51b5',
                    '&:hover': { backgroundColor: '#303f9f' },
                  }}
                >
                  DELETE
                </Button>

                <Button variant="contained" size="small" onClick={() => navigate("/a", { state: { job } })} sx={{ 
                  backgroundColor: '#3f51b5', 
                  '&:hover': { 
                    backgroundColor: '#303f9f', }, }}>
                 Edit Job
                </Button>

              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Fab
  variant="extended"
  color="primary"
  onClick={() => navigate('/a')} // change path to your add job route
  sx={{
    position: 'fixed',
    bottom: 40,
    right: 40,
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
    boxShadow: 4,
  }}
>
  <AddIcon sx={{ mr: 1 }} />
  Add Job
</Fab>
    </Box>
    </div>
  );
};
