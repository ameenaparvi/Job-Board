import React from 'react';
import { Box, Button, Container, Grid, Typography, Paper } from '@mui/material';


const Home = () => {
  return (
    <>
    

      <Container maxWidth="lg" sx={{ mt: 6 }}>
      
        <Paper elevation={3} sx={{ padding: 4, borderRadius: '16px', backgroundColor: '#e3f2fd' }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Discover Your Dream Job
          </Typography>
          <Typography variant="h6" gutterBottom>
            Join thousands of job seekers and employers connecting every day.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }} href="/l">
              Login to Get Started
            </Button>
            <Button variant="outlined" color="primary" size="large" href="/r">
              Register Now
            </Button>
          </Box>
        </Paper>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why Choose JobBoard?
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Verified Companies', desc: 'Only real and trusted employers.' },
              { title: 'Easy Job Matching', desc: 'Personalized job recommendations for you.' },
              { title: 'Resume Upload', desc: 'Apply with one click using your resume.' },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ padding: 3, borderRadius: 4, textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {[
              { step: '1. Create Account', desc: 'Register in seconds with your email.' },
              { step: '2. Log In', desc: 'Access thousands of verified job listings.' },
              { step: '3. Apply', desc: 'Find the right job and apply easily.' },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ padding: 3, borderRadius: 4, textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight="bold">
                    {item.step}
                  </Typography>
                  <Typography variant="body1">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <br></br>
  <Container maxWidth="lg" sx={{ backgroundColor: '#757575', padding: 4, borderRadius: '16px', color: 'white' }}>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
    
  
    <Box sx={{ flex:1 ,minWidth: 200 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">Email: support@jobportal.com</Typography>
      <Typography variant="body1">Phone: +91 9876543210</Typography>
    </Box>

    <Box sx={{ flex:1 ,minWidth: 200 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        About JobConnect
      </Typography>
      <Typography variant="body1">
        JobConnect helps job seekers connect with top companies through smart filtering and real-time updates.
      </Typography>
    </Box>

    <Box sx={{flex:1 , minWidth: 200 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Job Seeker Support
      </Typography>
      <Typography variant="body1">Resume Tips</Typography>
      <Typography variant="body1">Interview Preparation</Typography>
      <Typography variant="body1">Application Tracking</Typography>
    </Box>

  </Box>
</Container>



      </Container>
    </>
  );
};

export default Home;
