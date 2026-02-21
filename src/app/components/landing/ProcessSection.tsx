import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import {
  PersonAdd as ProfileIcon,
  Psychology as AIIcon,
  VideoCall as ConsultIcon,
} from '@mui/icons-material';

const steps = [
  {
    number: '01',
    icon: <ProfileIcon sx={{ fontSize: 40 }} />,
    title: 'Create Profile',
    description: 'Sign up in under 60 seconds. Add your medical history securely.',
    color: '#007AFF',
  },
  {
    number: '02',
    icon: <AIIcon sx={{ fontSize: 40 }} />,
    title: 'AI Pre-diagnosis',
    description: 'Our AI analyzes your symptoms and provides instant preliminary insights.',
    color: '#00C853',
  },
  {
    number: '03',
    icon: <ConsultIcon sx={{ fontSize: 40 }} />,
    title: 'Doctor Consultation',
    description: 'Connect with certified specialists via secure video or chat.',
    color: '#FF9500',
  },
];

export default function ProcessSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 2,
              display: 'block',
            }}
          >
            SIMPLE & SEAMLESS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#1E293B',
            }}
          >
            How It Works
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 600, mx: 'auto' }}>
            Get professional healthcare in three simple steps
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ position: 'relative' }}>
          {/* Connection Line */}
          <Box
            sx={{
              position: 'absolute',
              top: 100,
              left: '15%',
              right: '15%',
              height: 2,
              bgcolor: '#E2E8F0',
              zIndex: 0,
              display: { xs: 'none', md: 'block' },
            }}
          />

          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 1,
                }}
              >
                {/* Icon Container */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    bgcolor: 'white',
                    border: `4px solid ${step.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    mb: 3,
                    color: step.color,
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: '50%',
                      bgcolor: `${step.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Step Number Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: step.color,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {step.number}
                  </Box>
                </Box>

                {/* Text Content */}
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#1E293B' }}>
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#64748B',
                    lineHeight: 1.7,
                    maxWidth: 280,
                    mx: 'auto',
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
