import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button, IconButton, Divider } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  MedicalServices as LogoIcon,
} from '@mui/icons-material';

import { Logo } from '../Logo';

export default function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About Us', 'Services', 'Doctors', 'Contact'];
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'HIPAA Compliance'];
  
  // Colors from Design System
  const COLORS = {
    primary: '#1B365D', // Deep Navy Blue
    secondary: '#2E9CCA',
    text: '#FFFFFF'
  };

  return (
    <Box sx={{ bgcolor: COLORS.primary, color: 'white', pt: 8, pb: 4, fontFamily: 'Montserrat, sans-serif' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <Logo size={40} color="#FFFFFF" textColor="#FFFFFF" />
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              Healthcare of tomorrow, powered by artificial intelligence. Your health, our priority.
            </Typography>
            <Typography 
                variant="caption" 
                sx={{ 
                  opacity: 0.7, 
                  textDecoration: 'underline', 
                  cursor: 'pointer', 
                  '&:hover': { opacity: 1 } 
                }}
                onClick={() => onNavigate?.('brand-guidelines')}
            >
               View Brand Guidelines
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    cursor: 'pointer',
                    '&:hover': { opacity: 1, textDecoration: 'underline' },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {legalLinks.map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    cursor: 'pointer',
                    '&:hover': { opacity: 1, textDecoration: 'underline' },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                support@medicareai.com
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                123 Health Street
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                New York, NY 10001
              </Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Subscribe to get updates and health tips
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Your email"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'white',
                    borderRadius: 2, // 8px
                  },
                }}
              />
              <Button variant="contained" sx={{ bgcolor: COLORS.secondary, borderRadius: 2, fontWeight: 600, '&:hover': { bgcolor: '#2488B0' } }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} MediCare AI. All rights reserved. | Empowering health through technology
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
