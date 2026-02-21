import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import {
  PlayCircleOutline as PlayIcon,
  CheckCircle as CheckIcon,
  Psychology as AIIcon,
} from '@mui/icons-material';

interface HeroSectionV2Props {
  onGetStarted?: () => void;
}

export default function HeroSectionV2({ onGetStarted }: HeroSectionV2Props) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Value Proposition */}
          <Grid item xs={12} md={6}>
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
              HEALTHCARE REIMAGINED
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.15,
                color: '#1E293B',
              }}
            >
              AI-Powered Healthcare
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                When You Need It
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: '#64748B',
                fontWeight: 400,
                lineHeight: 1.7,
                maxWidth: 500,
              }}
            >
              Get instant AI-assisted symptom analysis and connect with certified doctors 24/7.
              Professional healthcare at your fingertips.
            </Typography>

            {/* Key Benefits */}
            <Box sx={{ mb: 4 }}>
              {[
                'AI pre-diagnosis in under 2 minutes',
                'Connect with 500+ verified doctors',
                'End-to-end encrypted consultations',
              ].map((benefit, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <CheckIcon sx={{ color: '#00C853', fontSize: 24 }} />
                  <Typography variant="body1" sx={{ color: '#475569', fontWeight: 500 }}>
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={onGetStarted}
                sx={{
                  py: 1.8,
                  px: 4,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 8px 24px rgba(0, 122, 255, 0.25)',
                  '&:hover': {
                    boxShadow: '0 12px 32px rgba(0, 122, 255, 0.35)',
                  },
                }}
              >
                Get Started Free
              </Button>
              <Button
                variant="text"
                size="large"
                startIcon={<PlayIcon />}
                sx={{
                  py: 1.8,
                  px: 3,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  color: '#475569',
                  '&:hover': {
                    bgcolor: '#F1F5F9',
                  },
                }}
              >
                Watch Demo
              </Button>
            </Box>
          </Grid>

          {/* Right Side - 3D Glass-effect Card */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Floating Card with Glassmorphism */}
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1)',
                  p: 4,
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)',
                  },
                }}
              >
                {/* AI Chat Interface Mockup */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      <AIIcon sx={{ fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#1E293B' }}>
                        MediCare AI Assistant
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: '#00C853',
                          }}
                        />
                        <Typography variant="caption" sx={{ color: '#64748B' }}>
                          Online • Ready to help
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Chat Messages */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* User Message */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Box
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          py: 1.5,
                          px: 2.5,
                          borderRadius: 3,
                          maxWidth: '75%',
                        }}
                      >
                        <Typography variant="body2">
                          I've been experiencing headaches and fatigue
                        </Typography>
                      </Box>
                    </Box>

                    {/* AI Response */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <Box
                        sx={{
                          bgcolor: '#F1F5F9',
                          color: '#1E293B',
                          py: 1.5,
                          px: 2.5,
                          borderRadius: 3,
                          maxWidth: '85%',
                        }}
                      >
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          I understand. Let me help you analyze your symptoms.
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                          ✓ Analysis complete
                        </Typography>
                      </Box>
                    </Box>

                    {/* Diagnosis Card */}
                    <Box
                      sx={{
                        bgcolor: '#00C85315',
                        border: '1px solid #00C85350',
                        borderRadius: 2,
                        p: 2,
                        mt: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckIcon sx={{ color: '#00C853', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#00C853' }}>
                          Pre-diagnosis Complete
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: '#475569', display: 'block', mb: 1 }}>
                        Possible causes identified. I recommend consulting with a specialist.
                      </Typography>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          textTransform: 'none',
                          fontSize: '0.75rem',
                          py: 0.5,
                          px: 2,
                          mt: 1,
                        }}
                      >
                        Book Doctor Consultation
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Floating Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: { xs: 20, md: 40 },
                  bgcolor: 'white',
                  borderRadius: 2,
                  p: 2,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#00C85315',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckIcon sx={{ color: '#00C853', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                    98% Accuracy
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>
                    AI Diagnosis
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
