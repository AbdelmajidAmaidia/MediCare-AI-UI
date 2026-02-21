import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroSectionProps {
  onBookAppointment?: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                color: 'text.primary',
              }}
            >
              Healthcare of Tomorrow,{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Powered by AI
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Connect with doctors and get AI-assisted diagnosis from the comfort of your home
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(0, 122, 255, 0.3)',
                }}
                onClick={onBookAppointment}
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Illustration */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 300, md: 450 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #007AFF20 0%, #00C85320 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Placeholder for illustration */}
                <Box
                  sx={{
                    width: '80%',
                    height: '80%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Doctor icon */}
                    <circle cx="100" cy="60" r="30" fill="#007AFF" opacity="0.2" />
                    <circle cx="100" cy="60" r="20" fill="#007AFF" />
                    <path
                      d="M70 110c0-16.569 13.431-30 30-30s30 13.431 30 30v50H70v-50z"
                      fill="#007AFF"
                      opacity="0.8"
                    />
                    {/* Tablet/Device */}
                    <rect x="140" y="100" width="40" height="60" rx="4" fill="#00C853" opacity="0.3" />
                    <rect x="145" y="105" width="30" height="40" rx="2" fill="white" />
                    {/* Health icons floating */}
                    <circle cx="50" cy="140" r="8" fill="#007AFF" opacity="0.5" />
                    <path d="M48 140h4M50 138v4" stroke="white" strokeWidth="2" />
                    <circle cx="160" cy="70" r="6" fill="#00C853" opacity="0.5" />
                    <path d="M157 70h6M160 67v6" stroke="white" strokeWidth="1.5" />
                  </svg>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    AI-Powered Healthcare Platform
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
