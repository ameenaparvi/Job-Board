import { Box, Button, CardContent, Grid, MenuItem, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const SearchJobs = () => {
  
    const[jobs,setJobs]=useState([]);
    const[filtered,setFiltered]=useState([]);
    const[search,setSearch]=useState('');
    const[filters,setFilters]=useState({
        company:'',
        location:'',
        role:'',
    });

    useEffect(()=>{
        axios.get('/api/jobs')/*here path needs to be changed when backend is done*/
        .then(res=>{
            setJobs(res.data);
            setFiltered(res.data);
        })
        .catch(err=>console.log(err));
    },[]);

    const handleSearch=()=>{
        const result=jobs.filter(job=>{
            const matchTitle=job.title.toLowerCase().includes(search.toLowerCase());
            const matchCompany=filters.company?job.company==filters.company : true;
            const matchLocation=filters.location?job.location==filters.location : true;
            const matchRole=filters.role?job.role==filters.role : true;

            return matchTitle && matchCompany && matchLocation && matchRole;
        });
        setFiltered(result);
    };

    const unique=(key)=>[...new Set(jobs.map(job=>job[key]))];
    
  return (
    <div>
       
       <Box>
         <Typography variant="h4">Search & Filter Jobs</Typography>
         <Grid container spacing={2} alignItems="center">
             
             <Grid item xs={12} sm={4}>
                 <TextField label="Search by title" fullWidth value={search} onChange={(e)=>setSearch(e.target.value)}/>
             </Grid>

             <Grid item xs={12} sm={4}>
                <TextField select label="Company" fullWidth value={filters.company} onChange={(e)=>setFilters({...filters,company: e.target.value})}>
                <MenuItem value="">All</MenuItem>
                {unique('company').map((company,i)=>(
                    <MenuItem key={i} value={company}>{company}</MenuItem>
                ))}
                </TextField>
             </Grid>

             <Grid item xs={12} sm={4}>
                <TextField select label="Location" fullWidth value={filters.location} onChange={(e)=>setFilters({...filters,location: e.target.value})}>
                <MenuItem value="">All</MenuItem>
                {unique('location').map((location,i)=>(
                    <MenuItem key={i} value={location}>{location}</MenuItem>
                ))}
                </TextField>
             </Grid>

             <Grid item xs={12} sm={4}>
                <TextField select label="Role" fullWidth value={filters.role} onChange={(e)=>setFilters({...filters,role: e.target.value})}>
                <MenuItem value="">All</MenuItem>
                {unique('role').map((role,i)=>(
                    <MenuItem key={i} value={role}>{role}</MenuItem>
                ))}
                </TextField>
             </Grid>
    
             <Grid item xs={12} sm={2}>
                <Button variant="contained" fullWidth onClick={handleSearch}>Filter</Button>
             </Grid>
           </Grid>

         <Grid container spacing={3} mt={3}>
            {filtered.map((job)=>(
                <Grid item xs={12} sm={6} md={4} key={job._id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{job.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{job.company}</Typography>
                            <Typography variant="body2" color="text.secondary">{job.location}</Typography>
                            <Typography variant="body2" color="text.secondary">{job}</Typography>
                        </CardContent>
                    </Card>
            </Grid>
            ))}
          </Grid>
       </Box>  


    </div>
  )
}

export default SearchJobs