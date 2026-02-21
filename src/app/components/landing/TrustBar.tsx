import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

const partners = [
  'City General Hospital',
  'HealthFirst Insurance',
  'MediCare Plus',
  'United Health Group',
  'CarePlus Network',
  'WellnessCare',
];

export default function TrustBar() {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: 4, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: '#64748B',
            fontWeight: 600,
            letterSpacing: 1.5,
            mb: 3,
          }}
        >
          TRUSTED BY LEADING ORGANIZATIONS
        </Typography>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {partners.map((partner, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  filter: 'grayscale(100%)',
                  opacity: 0.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1,
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: '#1E293B',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    textAlign: 'center',
                    letterSpacing: 0.5,
                  }}
                >
                  {partner}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
