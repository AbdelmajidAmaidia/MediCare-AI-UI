import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';

interface CTAStripProps {
  onGetStarted?: () => void;
}

export default function CTAStrip({ onGetStarted }: CTAStripProps) {
  return (
    <Box
      sx={{
        bgcolor: '#0D47A1',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: '1.75rem', md: '2rem' },
              }}
            >
              Ready to Take Control of Your Health?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.125rem',
              }}
            >
              Join 10,000+ patients who trust MediCare AI for their healthcare needs
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowIcon />}
            onClick={onGetStarted}
            sx={{
              bgcolor: 'white',
              color: '#0D47A1',
              py: 1.8,
              px: 4,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                bgcolor: '#F1F5F9',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Get Started Free
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
