import React from 'react';
import { Container, Grid, Box, Typography, Avatar } from '@mui/material';
import {
  Favorite as EmpathyIcon,
  Verified as PrecisionIcon,
  Security as SecurityIcon,
  Lightbulb as InnovationIcon,
} from '@mui/icons-material';

const values = [
  {
    icon: <EmpathyIcon sx={{ fontSize: 48 }} />,
    title: 'Empathy',
    description: 'Caring for patients with compassion',
    color: '#FF3B30',
  },
  {
    icon: <PrecisionIcon sx={{ fontSize: 48 }} />,
    title: 'Precision',
    description: 'Accurate diagnoses every time',
    color: '#007AFF',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: 'Security',
    description: 'Your data is protected and private',
    color: '#00C853',
  },
  {
    icon: <InnovationIcon sx={{ fontSize: 48 }} />,
    title: 'Innovation',
    description: 'Leading edge AI technology',
    color: '#FF9500',
  },
];

const teamMembers = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer',
    avatar: 'S',
    color: '#007AFF',
  },
  {
    name: 'Dr. James Chen',
    role: 'Head of AI Research',
    avatar: 'J',
    color: '#00C853',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO & Founder',
    avatar: 'E',
    color: '#FF9500',
  },
  {
    name: 'Dr. Michael Kumar',
    role: 'Chief Technology Officer',
    avatar: 'M',
    color: '#5856D6',
  },
];

export default function AboutPageV2() {
  return (
    <Box sx={{ bgcolor: 'white' }}>
      {/* Mission Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)',
          py: { xs: 10, md: 16 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
              mb: 3,
              display: 'block',
            }}
          >
            OUR MISSION
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.2,
              color: '#1E293B',
            }}
          >
            We Bridge the Gap Between{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              AI and Human Care
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#64748B',
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Our vision is to make quality healthcare accessible to everyone, everywhere. By combining
            cutting-edge artificial intelligence with the expertise of certified medical professionals,
            we're revolutionizing the way people access and experience healthcare.
          </Typography>
        </Container>
      </Box>

      {/* Values Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 6,
            color: '#1E293B',
          }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    bgcolor: `${value.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    mb: 2,
                    color: value.color,
                    border: `3px solid ${value.color}30`,
                  }}
                >
                  {value.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: '#1E293B',
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    lineHeight: 1.6,
                  }}
                >
                  {value.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Story Section */}
      <Box sx={{ bgcolor: '#F8FAFC', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
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
                OUR STORY
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#1E293B',
                }}
              >
                Building the Future of Healthcare
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  lineHeight: 1.8,
                  color: '#475569',
                }}
              >
                MediCare AI was founded in 2024 by a team of healthcare professionals, AI researchers,
                and technology entrepreneurs who shared a common vision: to democratize access to
                quality healthcare through technology.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  lineHeight: 1.8,
                  color: '#475569',
                }}
              >
                We saw firsthand how traditional healthcare systems were failing to meet the needs of
                modern patients. Long wait times, limited access to specialists, and rising costs were
                creating barriers to care.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: '#475569',
                }}
              >
                Today, we're proud to serve over 10,000 patients and work with 500+ certified doctors
                across multiple specialties, providing accessible, affordable, and high-quality
                healthcare to communities worldwide.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: 4,
                  p: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}
                      >
                        10k+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Patients Served
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, color: '#00C853', mb: 1 }}
                      >
                        500+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Certified Doctors
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, color: '#FF9500', mb: 1 }}
                      >
                        98%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        AI Accuracy
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, color: '#5856D6', mb: 1 }}
                      >
                        24/7
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Available Support
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
            MEET THE TEAM
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#1E293B',
            }}
          >
            Led by Healthcare & Technology Experts
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Our leadership team combines decades of experience in medicine, artificial intelligence,
            and healthcare technology
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    margin: '0 auto',
                    mb: 2,
                    bgcolor: member.color,
                    fontSize: '3rem',
                    fontWeight: 600,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    border: `4px solid ${member.color}30`,
                  }}
                >
                  {member.avatar}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    color: '#1E293B',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    fontWeight: 500,
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
