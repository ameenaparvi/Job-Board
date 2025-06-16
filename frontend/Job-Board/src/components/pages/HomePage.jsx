import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

export const HomePage = () => {  
    const[jobs,setJob]=useState([]);


  return (
    <div>
        <Box>
            <br/> <br/>
            <Typography variant="h5" gutterBottom>Available Job Listings</Typography>
            <Grid container spacing={3}>
                {jobs.map((job)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4}>
                          <Card key={job.id}>
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div">{job.title}</Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>${job.company}</Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.location}</Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.role}</Typography>
                          </CardContent>
                          <CardActions>
                               <Button size="small">Share</Button>
                               <Button size="small">Learn More</Button>
                           </CardActions>
                          </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    </div>
  )
}
