import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { 
  CalendarToday, 
  Description, 
  SmartToy, 
  ArrowForward 
} from '@mui/icons-material';
import { motion } from 'motion/react';

const COLORS = {
  primary: '#1B365D', // Deep Navy Blue (Brand)
  secondary: '#2E9CCA', // Vivid Pulse Blue (Accent)
  background: '#FFFFFF', // Pure White
  backgroundAlt: '#F0F4F8', // Light Blue-Grey Banding
  text: '#334155', // Dark Slate
  textSecondary: '#64748b', // Muted Slate
  border: '#E2E8F0'
};

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function FuturisticHome({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <Box sx={{ bgcolor: COLORS.background, color: COLORS.text, minHeight: '100vh', overflowX: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. Hero Section */}
      <Box sx={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        background: `linear-gradient(180deg, ${COLORS.background} 0%, ${COLORS.backgroundAlt} 100%)`
      }}>
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div initial="initial" animate="animate" variants={fadeIn}>
                <Box sx={{ mb: 2, display: 'inline-block', px: 2, py: 0.5, bgcolor: '#E0F2FE', borderRadius: 2, color: COLORS.secondary, fontWeight: 700, fontSize: '0.9rem', border: `1px solid ${COLORS.secondary}33` }}>
                  New: AI Diagnostic Tools Available
                </Box>
                <Typography variant="h1" sx={{ 
                  fontWeight: 800, 
                  fontSize: { xs: '2.5rem', md: '4rem' }, 
                  lineHeight: 1.1,
                  mb: 3,
                  color: COLORS.primary
                }}>
                  Modern Healthcare, <br />
                  <span style={{ color: COLORS.secondary }}>Simplified.</span>
                </Typography>
                <Typography variant="h5" sx={{ color: COLORS.textSecondary, mb: 5, maxWidth: 550, fontWeight: 400, lineHeight: 1.6 }}>
                  Streamline your practice with our intelligent dashboard. Connect with patients, manage records, and diagnose with confidence.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={onGetStarted}
                    sx={{ 
                      bgcolor: COLORS.secondary, 
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3, // 12px radius roughly
                      fontSize: '1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      boxShadow: `0 4px 6px -1px ${COLORS.secondary}44`,
                      '&:hover': { bgcolor: '#2488B0', boxShadow: `0 6px 8px -1px ${COLORS.secondary}66` }
                    }}
                    endIcon={<ArrowForward />}
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      color: COLORS.primary,
                      borderColor: COLORS.border,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: '1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      '&:hover': { borderColor: COLORS.secondary, bgcolor: COLORS.backgroundAlt, color: COLORS.secondary }
                    }}
                  >
                    View Demo
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                style={{ position: 'relative' }}
              >
                <Box 
                  component="img"
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZG9jdG9yJTIwc2hvd2luZyUyMHRhYmxldCUyMHRvJTIwcGF0aWVudCUyMGJyaWdodCUyMG1vZGVybiUyMGNsaW5pYyUyMHdoaXRlJTIwYmx1ZSUyMGhpZ2glMjBrZXklMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA1Njk1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  sx={{ 
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }} 
                />
                
                {/* Floating Stats Card */}
                <Paper sx={{
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  display: { xs: 'none', md: 'block' },
                  border: `1px solid ${COLORS.border}`
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ bgcolor: '#E0F2FE', p: 1.5, borderRadius: '50%', color: COLORS.secondary }}>
                      <CalendarToday />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Daily Appointments</Typography>
                      <Typography variant="h6" fontWeight={700} color={COLORS.primary}>24 Patients</Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. Features / How it Works */}
      <Box sx={{ py: 12, bgcolor: COLORS.background }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
             <Typography variant="overline" sx={{ color: COLORS.secondary, fontWeight: 700, letterSpacing: 1 }}>Services</Typography>
             <Typography variant="h2" sx={{ fontWeight: 800, color: COLORS.primary, mt: 1 }}>
               Everything you need to run your practice
             </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              { title: 'Smart Scheduling', icon: <CalendarToday sx={{ fontSize: 40 }} />, desc: 'Effortless appointment booking with automated reminders.' },
              { title: 'Digital Records', icon: <Description sx={{ fontSize: 40 }} />, desc: 'Secure, cloud-based patient history accessible anywhere.' },
              { title: 'AI Assistant', icon: <SmartToy sx={{ fontSize: 40 }} />, desc: 'Diagnostic support and automated documentation.' },
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Paper sx={{ 
                    p: 4, 
                    borderRadius: 3, // 12px
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${COLORS.border}`,
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': { boxShadow: `0 10px 15px -3px ${COLORS.secondary}22`, borderColor: COLORS.secondary }
                  }}>
                    <Box sx={{ 
                      mx: 'auto', 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      bgcolor: '#E0F2FE', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: COLORS.secondary,
                      mb: 3,
                      border: `1px solid ${COLORS.secondary}22`
                    }}>
                      {step.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 2, color: COLORS.primary }}>{step.title}</Typography>
                    <Typography variant="body1" sx={{ color: COLORS.textSecondary, lineHeight: 1.6 }}>{step.desc}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Trusted By */}
      <Box sx={{ py: 8, bgcolor: COLORS.backgroundAlt, borderTop: `1px solid ${COLORS.border}` }}>
        <Container maxWidth="xl">
          <Typography variant="body2" align="center" sx={{ color: COLORS.textSecondary, mb: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
            Trusted by leading healthcare providers
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 10 }, flexWrap: 'wrap', opacity: 0.6, filter: 'grayscale(100%)' }}>
            {['General Hospital', 'City Clinic', 'MedTech Solutions', 'HealthFirst', 'CarePlus'].map((logo, i) => (
              <Typography key={i} variant="h6" fontWeight={700} sx={{ color: COLORS.primary }}>
                {logo}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
