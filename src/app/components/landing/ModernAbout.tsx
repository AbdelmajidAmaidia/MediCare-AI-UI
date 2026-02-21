import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar } from '@mui/material';
import { 
  Psychology as BrainIcon, 
  Security as ShieldIcon, 
  MonitorHeart as PulseIcon 
} from '@mui/icons-material';

const COLORS = {
  primary: '#1B365D',
  secondary: '#2E9CCA',
  background: '#FFFFFF',
  text: '#1B365D',
  textSecondary: '#334155',
  border: '#E2E8F0'
};

const teamMembers = [
  { name: 'Dr. Sarah Connor', role: 'Chief Medical Officer', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&h=256&q=80' },
  { name: 'James Dyson', role: 'Head of AI', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&h=256&q=80' },
  { name: 'Elena Fisher', role: 'Security Architect', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80' },
];

export default function ModernAbout() {
  return (
    <Box sx={{ bgcolor: COLORS.background, color: COLORS.text, fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. Mission Statement (Split Screen) */}
      <Box sx={{ minHeight: '70vh', display: 'flex' }}>
        <Grid container>
          {/* Left Text */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 8, bgcolor: COLORS.background }}>
            <Box>
              <Typography variant="overline" sx={{ color: COLORS.primary, fontWeight: 700, letterSpacing: 2 }}>Our Mission</Typography>
              <Typography variant="h2" sx={{ fontWeight: 700, mt: 2, lineHeight: 1.1 }}>
                Bridging <span style={{ color: COLORS.primary }}>AI</span> and <br/> Human Empathy.
              </Typography>
              <Typography variant="body1" sx={{ mt: 4, color: COLORS.textSecondary, fontSize: '1.1rem', maxWidth: 500, lineHeight: 1.7 }}>
                MediCare AI was founded on the belief that technology should empower doctors, not replace them. We build tools that make healthcare more human.
              </Typography>
            </Box>
          </Grid>
          
          {/* Right Image */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
             <Box 
               component="img"
               src="https://images.unsplash.com/photo-1770505003951-c968c56421b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwdGVhbSUyMG1lZXRpbmclMjBicmlnaHQlMjBvZmZpY2UlMjB3aGl0ZSUyMGNvYXRzfGVufDF8fHx8MTc3MDU2ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
               sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
          </Grid>
        </Grid>
      </Box>

      {/* 2. Our Tech (The Brains) */}
      <Box sx={{ py: 12, bgcolor: '#F9FAFB' }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" fontWeight={700} sx={{ color: COLORS.text }}>
              Core Technology
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: COLORS.textSecondary }}>
              Built on a foundation of security and speed.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              { title: 'Neural Networks', icon: <BrainIcon fontSize="large" />, desc: 'Deep learning models trained on 50M+ medical records.' },
              { title: 'Bank-Grade Security', icon: <ShieldIcon fontSize="large" />, desc: 'HIPAA compliant infrastructure ensuring 100% data integrity.' },
              { title: 'Real-time Vitals', icon: <PulseIcon fontSize="large" />, desc: 'Instant streaming of patient telemetry directly to the dashboard.' },
            ].map((card, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper sx={{ 
                  p: 4, 
                  height: '100%',
                  bgcolor: 'white',
                  borderRadius: 3,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }
                }}>
                  <Box sx={{ color: COLORS.primary, mb: 2 }}>{card.icon}</Box>
                  <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: COLORS.text }}>{card.title}</Typography>
                  <Typography variant="body1" sx={{ color: COLORS.textSecondary }}>{card.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. The Team */}
      <Box sx={{ py: 12, bgcolor: COLORS.background }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={700} align="center" sx={{ mb: 8, color: COLORS.text }}>
            Meet the Visionaries
          </Typography>
          
          <Grid container spacing={8} justifyContent="center">
            {teamMembers.map((member, i) => (
              <Grid item key={i}>
                <Box sx={{ position: 'relative', textAlign: 'center' }}>
                  <Avatar 
                    src={member.img}
                    sx={{ 
                      width: 150, 
                      height: 150, 
                      mb: 3,
                      mx: 'auto',
                      border: `1px solid ${COLORS.border}`,
                    }}
                  />
                  <Typography variant="h6" fontWeight={700} color={COLORS.text}>{member.name}</Typography>
                  <Typography variant="subtitle2" color={COLORS.textSecondary}>{member.role}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}