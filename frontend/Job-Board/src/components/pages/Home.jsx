import React from 'react';
import { Box, Button, Container, Grid, Typography, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/Images/bg2.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        py: 6,
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: '16px',
            backgroundColor: '#e3f2fd',
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
              color="primary"
              size="large"
              sx={{ mr: 2 }}
              href="/l"
            >
              Login to Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="/r"
            >
              Register Now
            </Button>
          </Box>
        </Paper>

        {/* Why Choose JobConnect */}
        <Paper
          elevation={2}
          sx={{ mt: 10, p: 4, borderRadius: 4, backgroundColor: '#ffffffcc' }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
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
                    borderRadius: 4,
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
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
          sx={{ mt: 10, p: 4, borderRadius: 4, backgroundColor: '#ffffffcc' }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
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
                    borderRadius: 4,
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
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
