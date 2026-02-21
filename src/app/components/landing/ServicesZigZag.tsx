import React from 'react';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'motion/react';

const COLORS = {
  primary: '#1B365D',
  secondary: '#2E9CCA',
  text: '#1B365D',
  textSecondary: '#334155',
  background: '#FFFFFF',
  border: '#E2E8F0'
};

const features = [
  {
    title: 'For Patients',
    subtitle: 'Healthcare at your fingertips.',
    desc: 'Track vitals, book appointments instantly, and access your medical history securely from anywhere. Our patient portal is designed for simplicity.',
    img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdXNpbmglMjBwaG9uZSUyMGFwcCUyMG1lZGljYWwlMjBjbGVhbiUyMHdoaXRlfGVufDF8fHx8MTc3MDU2OTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    align: 'left'
  },
  {
    title: 'For Doctors',
    subtitle: 'Streamlined Clinical Workflow.',
    desc: 'Let intelligent tools handle the administrative burden while you focus on care. Our dashboard brings patient data, lab results, and imaging into one view.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB1c2luZyUyMGNvbXB1dGVyJTIwY2xlYW4lMjBvZmZpY2V8ZW58MXx8fHwxNzcwNTY5NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    align: 'right'
  },
  {
    title: 'Secure Labs',
    subtitle: 'Fast, Accurate Results.',
    desc: 'Integrated lab interfaces allow for real-time result uploads and instant notification for both doctors and patients.',
    img: 'https://images.unsplash.com/photo-1581093458791-9f3039cd3860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWIlMjB0ZWNobmljaWFuJTIwd29ya2luZyUyMGNsZWFufGVufDF8fHx8MTc3MDU2OTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    align: 'left'
  }
];

export default function ServicesZigZag() {
  return (
    <Box sx={{ bgcolor: COLORS.background, overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: '#F9FAFB', borderBottom: `1px solid ${COLORS.border}` }}>
        <Container>
          <Typography variant="overline" sx={{ color: COLORS.primary, fontWeight: 700, letterSpacing: 1 }}>Ecosystem</Typography>
          <Typography variant="h2" fontWeight={700} sx={{ color: COLORS.text, mt: 1 }}>Connected Care</Typography>
          <Typography variant="h5" sx={{ mt: 2, color: COLORS.textSecondary, fontWeight: 400 }}>A unified platform for everyone involved.</Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        {features.map((feature, index) => (
          <Container maxWidth="xl" key={index} sx={{ mb: 12 }}>
            <Grid 
              container 
              spacing={8} 
              alignItems="center" 
              direction={feature.align === 'right' ? 'row-reverse' : 'row'}
            >
              
              {/* Image Side */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Box 
                    component="img"
                    src={feature.img}
                    sx={{ 
                      width: '100%', 
                      borderRadius: 4, 
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: 'transform 0.5s',
                      '&:hover': {
                         transform: 'scale(1.02)'
                      }
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Text Side */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Typography variant="overline" sx={{ color: COLORS.primary, fontWeight: 700, fontSize: '1rem', letterSpacing: 1.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="h3" fontWeight={700} sx={{ mt: 1, mb: 3, color: COLORS.text }}>
                    {feature.subtitle}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', color: COLORS.textSecondary, mb: 4, lineHeight: 1.7 }}>
                    {feature.desc}
                  </Typography>
                  <Button 
                    variant="text"
                    endIcon={<ArrowForward />} 
                    sx={{ color: COLORS.primary, fontWeight: 600, fontSize: '1.1rem', p: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Grid>

            </Grid>
          </Container>
        ))}
      </Box>
    </Box>
  );
}
