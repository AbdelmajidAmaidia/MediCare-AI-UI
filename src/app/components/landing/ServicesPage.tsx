import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import {
  VideoCall as TelemedicineIcon,
  Psychology as AIAnalysisIcon,
  MedicalServices as EmergencyIcon,
  LocalPharmacy as PharmacyIcon,
  Biotech as LabIcon,
  HealthAndSafety as WellnessIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';

const services = [
  {
    icon: <TelemedicineIcon sx={{ fontSize: 48 }} />,
    title: 'Telemedicine',
    description:
      'Connect with certified doctors via secure video consultations. Get professional medical advice from the comfort of your home, anytime, anywhere.',
    color: '#007AFF',
  },
  {
    icon: <AIAnalysisIcon sx={{ fontSize: 48 }} />,
    title: 'AI Analysis',
    description:
      'Advanced artificial intelligence to analyze your symptoms and provide preliminary diagnosis. Our AI learns from millions of medical cases.',
    color: '#00C853',
  },
  {
    icon: <EmergencyIcon sx={{ fontSize: 48 }} />,
    title: 'Emergency Care',
    description:
      '24/7 emergency support with instant access to on-call doctors. Quick response times for urgent medical situations and critical care.',
    color: '#FF3B30',
  },
  {
    icon: <PharmacyIcon sx={{ fontSize: 48 }} />,
    title: 'Digital Pharmacy',
    description:
      'Order prescription medications and get them delivered to your doorstep. Track your prescriptions and set up automatic refills.',
    color: '#FF9500',
  },
  {
    icon: <LabIcon sx={{ fontSize: 48 }} />,
    title: 'Lab Tests',
    description:
      'Schedule lab tests from the comfort of your home. Get accurate results quickly and securely shared with your healthcare provider.',
    color: '#5856D6',
  },
  {
    icon: <WellnessIcon sx={{ fontSize: 48 }} />,
    title: 'Wellness Programs',
    description:
      'Personalized wellness plans, fitness tracking, and nutrition guidance. Preventive care programs to keep you healthy long-term.',
    color: '#34C759',
  },
];

export default function ServicesPage() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC', minHeight: 'calc(100vh - 200px)' }}>
      <Container maxWidth="lg">
        {/* Header */}
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
            OUR SERVICES
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
            Comprehensive Care for Everyone
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400, maxWidth: 700, mx: 'auto' }}
          >
            From AI-powered diagnostics to telemedicine and wellness programs,
            we provide complete healthcare solutions
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    '& .learn-more': {
                      transform: 'translateX(4px)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Icon Container */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      bgcolor: `${service.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.color,
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#1E293B',
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748B',
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Learn More Link */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: service.color,
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, fontSize: '0.9375rem' }}
                    >
                      Learn more
                    </Typography>
                    <ArrowIcon
                      className="learn-more"
                      sx={{
                        fontSize: 18,
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            p: 6,
            bgcolor: 'white',
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#1E293B',
            }}
          >
            Need a Custom Healthcare Solution?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              mb: 3,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Our team can work with you to create a tailored healthcare plan that meets your specific needs
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'primary.main',
              fontWeight: 600,
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Contact our team
            <ArrowIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
