import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent } from '@mui/material';
import {
  Face as FaceIcon,
  MedicalServices as MedicalIcon,
  Videocam as VideoIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <FaceIcon sx={{ fontSize: 48 }} />,
    title: 'Patient Portal',
    description: 'Chat with AI assistant and view records',
    color: '#007AFF',
  },
  {
    icon: <MedicalIcon sx={{ fontSize: 48 }} />,
    title: 'AI Diagnostic',
    description: 'Smart analysis for better decisions',
    color: '#00C853',
  },
  {
    icon: <VideoIcon sx={{ fontSize: 48 }} />,
    title: 'Teleconsultation',
    description: 'Secure video calls from home',
    color: '#FF9500',
  },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Our Smart Services
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            Revolutionizing healthcare with cutting-edge technology
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      mb: 3,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
