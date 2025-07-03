import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const About = () => {
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
        {/* Intro Section */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                borderRadius: 4,
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#3f51b5' }}>
                About JobConnect
              </Typography>
              <Typography variant="h6" sx={{ color: '#555' }} gutterBottom>
                Connecting talents with opportunities — smarter and faster.
              </Typography>
              <Typography variant="body1" fontSize="1.1rem" sx={{ mt: 2 }}>
                JobConnect is a modern job portal designed to simplify the job-hunting process
                for candidates and streamline hiring for employers. Whether you're looking for
                your first job or your next great hire, our platform makes it easier than ever
                to connect the right people with the right positions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Mission / Vision / Values */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Grid container spacing={4} maxWidth="lg" justifyContent="center">
            {[
              {
                title: 'Our Mission',
                content: 'To empower job seekers and employers through a smart and seamless platform.',
              },
              {
                title: 'Our Vision',
                content: 'To become the most trusted and efficient job-matching platform in the region.',
              },
              {
                title: 'Our Values',
                content: 'Transparency, integrity, innovation, and a passion for connecting people.',
              },
            ].map((section, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 3,
                    borderRadius: 4,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#3f51b5' }} gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="body1">{section.content}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Meet Our Team Section */}
        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              borderRadius: 4,
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
              {[
                {
                  name: 'Alen M A',
                  role: 'Frontend',
                },
                {
                  name: 'Maria Joby',
                  role: 'Frontend',
                },
                {
                  name: 'Aleena Varghese',
                  role: 'Backend- API &Server',
                },
                {
                  name: 'Ameena',
                  role: 'Database & Integration',
                },
              ].map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={4}
                    sx={{
                      padding: 3,
                      borderRadius: 4,
                      textAlign: 'center',
                      backgroundColor: '#e3f2fd',
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 1 }}>
                      {member.role}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>

        {/* Contact Us Section */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#3f51b5' }}>
                  Contact Us
                </Typography>
                <Typography variant="body1" sx={{ color: '#333' }}>Email: support@jobportal.com</Typography>
                <Typography variant="body1" sx={{ color: '#333' }}>Phone: +91 9876543210</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
