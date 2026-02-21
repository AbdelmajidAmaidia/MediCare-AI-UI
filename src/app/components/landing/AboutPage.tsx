import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent } from '@mui/material';
import {
  Verified as AccuracyIcon,
  Security as SecurityIcon,
  Lightbulb as InnovationIcon,
} from '@mui/icons-material';

export default function AboutPage() {
  const values = [
    {
      icon: <AccuracyIcon sx={{ fontSize: 60 }} />,
      title: 'Accuracy',
      description: 'Precision in every diagnosis',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 60 }} />,
      title: 'Security',
      description: 'Your data is protected',
    },
    {
      icon: <InnovationIcon sx={{ fontSize: 60 }} />,
      title: 'Innovation',
      description: 'Leading edge technology',
    },
  ];

  const stats = [
    { value: '10k+', label: 'Patients' },
    { value: '500+', label: 'Doctors' },
    { value: '99%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <Box>
      {/* Header Banner */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Our Mission
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
            Transforming healthcare through innovation and compassion
          </Typography>
        </Container>
      </Box>

      {/* Story Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Simplifying Healthcare with Technology
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
              At MediCare AI, we believe that everyone deserves access to quality healthcare. Our
              mission is to bridge the gap between patients and medical professionals using
              cutting-edge artificial intelligence and telemedicine technology.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
              Founded in 2024, we've revolutionized the way people access healthcare services. From
              AI-powered symptom checkers to seamless teleconsultations, we're making healthcare
              more accessible, affordable, and efficient.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
              Our team of healthcare professionals, data scientists, and engineers work tirelessly
              to ensure that every interaction on our platform is secure, accurate, and
              patient-centered.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: 400,
                borderRadius: 4,
                overflow: 'hidden',
                bgcolor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              }}
            >
              {/* Placeholder for team photo */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #007AFF 0%, #00C853 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                    p: 4,
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    🏥
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Our Diverse Team
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
                    Healthcare professionals, engineers, and innovators
                    <br />
                    working together for better health outcomes
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Values Row */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      mb: 3,
                      color: 'primary.main',
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
