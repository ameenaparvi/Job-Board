import React from 'react';
import { Box, Button, Container, Grid, Typography, Paper } from '@mui/material';

const Home = () => {
  return (

    <Box
        sx={{
        minHeight: '100vh',
        display: 'flex',
    flexDirection: 'column',
     width: '100vw',
        m: 0,
        p: 0,
        position: 'relative',
        backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: 6, }}
    >

    
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(4px)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Discover Your Dream Job
          </Typography>
          <Typography variant="h6" gutterBottom>
            Join thousands of job seekers and employers connecting every day.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                mr: 2,
                '&:hover': {
                  backgroundColor: '#303f9f',
                },
              }}
              href="/l"
            >
              Login to Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#3f51b5',
                color: '#3f51b5',
                '&:hover': {
                  backgroundColor: '#e8eaf6',
                  borderColor: '#303f9f',
                  color: '#303f9f',
                },
              }}
              href="/r"
            >
              Register Now
            </Button>
          </Box>
        </Paper>

        {/* Why Choose JobConnect */}
        <Paper
          elevation={2}
          sx={{ mt: 10, p: 4, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.85)',backdropFilter: 'blur(4px)' }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ color: '#3f51b5' }}
          >
            Why Choose JobConnect?
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Verified Companies', desc: 'Only real and trusted employers.' },
              { title: 'Easy Job Matching', desc: 'Personalized job recommendations for you.' },
              { title: 'Resume Upload', desc: 'Apply with one click using your resume.' },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#3f51b5' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* How It Works */}
        <Paper
          elevation={2}
          sx={{ mt: 10, p: 4, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.85)',backdropFilter: 'blur(4px)' }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ color: '#3f51b5' }}
          >
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {[
              { step: '1. Create Account', desc: 'Register in seconds with your email.' },
              { step: '2. Log In', desc: 'Access thousands of verified job listings.' },
              { step: '3. Apply', desc: 'Find the right job and apply easily.' },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#3f51b5' }}>
                    {item.step}
                  </Typography>
                  <Typography variant="body1">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  
  );
};

export default Home;
